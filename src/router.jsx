import { createContext, useContext, useEffect, useState } from 'react'

const RouterCtx = createContext('/')

// Demo build (VITE_DEMO=1): pages are switched in memory, the URL never changes.
// Used for previews hosted at an arbitrary path where /services/... cannot exist.
const MEMORY = import.meta.env.VITE_DEMO === '1'
let memoryPath = '/'
const currentPath = () => (MEMORY ? memoryPath : normalize(window.location.pathname))

export function normalize(path) {
  const p = path.split(/[?#]/)[0].replace(/\/+$/, '')
  return p === '' ? '/' : p
}

export function RouterProvider({ initialPath, children }) {
  const [path, setPath] = useState(() => (memoryPath = normalize(initialPath)))

  useEffect(() => {
    const onPop = () => !MEMORY && setPath(normalize(window.location.pathname))
    const onNav = (e) => setPath(normalize(e.detail))
    window.addEventListener('popstate', onPop)
    window.addEventListener('ampic:navigate', onNav)
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('ampic:navigate', onNav)
    }
  }, [])

  return <RouterCtx.Provider value={path}>{children}</RouterCtx.Provider>
}

export const usePath = () => useContext(RouterCtx)

export function navigate(to) {
  const [pathname, hash] = to.split('#')
  const target = pathname ? normalize(pathname) : currentPath()
  const samePage = target === currentPath()
  if (!samePage) {
    if (MEMORY) memoryPath = target
    else window.history.pushState({}, '', to)
    window.dispatchEvent(new CustomEvent('ampic:navigate', { detail: target }))
  } else if (hash && !MEMORY) {
    window.history.pushState({}, '', '#' + hash)
  }
  requestAnimationFrame(() => {
    const el = hash && document.getElementById(hash)
    if (el) el.scrollIntoView({ behavior: samePage ? 'smooth' : 'auto' })
    else if (!samePage) window.scrollTo(0, 0)
  })
}

/** Internal link: client-side navigation, plain <a> for everything else. */
export function Link({ to, onClick, children, ...rest }) {
  const handle = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  )
}
