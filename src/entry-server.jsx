import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App, { jsonLd, resolve, routes } from './App.jsx'
import { RouterProvider } from './router'
import { SITE_URL } from './data/site'

export { routes, jsonLd, SITE_URL }

export function render(path) {
  const { title, description, status } = resolve(path)
  const html = renderToString(
    <StrictMode>
      <RouterProvider initialPath={path}>
        <App />
      </RouterProvider>
    </StrictMode>,
  )
  return { html, title, description, status }
}
