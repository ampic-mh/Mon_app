// Renders every route to static HTML after `vite build` (SSG): fast first paint + full SEO.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')
const { render, routes, jsonLd, SITE_URL } = await import(pathToFileURL(ssrEntry).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const fontFile = fs.readdirSync(path.join(dist, 'assets')).find((f) => /^manrope-latin-wght/.test(f))
const preload = fontFile ? `<link rel="preload" href="/assets/${fontFile}" as="font" type="font/woff2" crossorigin />` : ''

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function page(route) {
  const { html, title, description } = render(route)
  const url = SITE_URL + (route === '/' ? '/' : route)
  let out = template
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace('<!--app-->', html)
  const head = preload + (route === '/' ? `<script type="application/ld+json">${JSON.stringify(jsonLd())}</script>` : '')
  return out.replace('<!--head-->', head)
}

for (const route of routes) {
  const dir = path.join(dist, route)
  fs.mkdirSync(dir, { recursive: true })
  const html = page(route)
  fs.writeFileSync(path.join(dir, 'index.html'), html)
  // Also /services/x.html: hosts with "clean URLs" serve it for /services/x (no trailing slash)
  if (route !== '/') fs.writeFileSync(path.join(dist, `${route}.html`), html)
  console.log('prerendered', route)
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404').replace(/<link rel="canonical"[^>]*>/, '<meta name="robots" content="noindex" />'))

const today = new Date().toISOString().slice(0, 10)
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => `  <url><loc>${SITE_URL}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod><priority>${r === '/' ? '1.0' : '0.8'}</priority></url>`)
    .join('\n')}\n</urlset>\n`,
)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
