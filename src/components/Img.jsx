import meta from '../data/images.json'

// '/' on the real site, './' in the relocatable demo build
export const IMG_BASE = `${import.meta.env.BASE_URL}images/`

export const imgSrc = (name, width) => {
  const m = meta[name]
  const w = width ? m.widths.find((x) => x >= width) ?? m.widths.at(-1) : m.widths.at(-1)
  return `${IMG_BASE}${name}-${w}.webp`
}

/**
 * Responsive WebP image with intrinsic dimensions (no layout shift).
 * `priority` = above-the-fold image: eager + high fetch priority.
 */
export default function Img({ name, alt, sizes = '100vw', priority = false, className, ...rest }) {
  const m = meta[name]
  if (!m) throw new Error(`Unknown image: ${name}`)
  const srcSet = m.widths.map((w) => `${IMG_BASE}${name}-${w}.webp ${w}w`).join(', ')
  return (
    <img
      src={`${IMG_BASE}${name}-${m.widths[Math.min(1, m.widths.length - 1)]}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={m.w}
      height={m.h}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
      className={className}
      {...rest}
    />
  )
}
