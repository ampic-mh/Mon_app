import { useEffect } from 'react'
import { Link, usePath } from './router'
import { SITE_URL, contact, services } from './data/site'
import { Footer, Header, WhatsAppFab } from './components/Layout'
import Home from './pages/Home'
import Service from './pages/Service'

const DEFAULT_DESC =
  'AMPIC – Experts en faux plafond BA13 & démontable, cloisons sèches et habillage mural à Casablanca et partout au Maroc. Devis gratuit sous 48–72h, chantiers soignés, délais respectés.'

/** Route table — also used by the prerender script. */
export function resolve(path) {
  if (path === '/') {
    return {
      status: 200,
      title: 'AMPIC | Faux plafond, cloisons & habillage BA13 à Casablanca',
      description: DEFAULT_DESC,
      element: <Home />,
    }
  }
  const m = path.match(/^\/services\/([\w-]+)$/)
  const svc = m && services.find((s) => s.slug === m[1])
  if (svc) {
    return {
      status: 200,
      title: `${svc.metaTitle} | AMPIC Casablanca`,
      description: `${svc.intro} Devis gratuit — AMPIC, Casablanca.`.slice(0, 300),
      element: <Service key={svc.slug} service={svc} />,
    }
  }
  return { status: 404, title: 'Page introuvable | AMPIC', description: DEFAULT_DESC, element: <NotFound />, solidHeader: true }
}

export const routes = ['/', ...services.map((s) => `/services/${s.slug}`)]

export function jsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'AMPIC',
    url: SITE_URL,
    logo: `${SITE_URL}/images/icon-512.png`,
    image: `${SITE_URL}/images/og.jpg`,
    description: 'Experts en faux plafond, cloisons sèches et habillage mural au Maroc.',
    telephone: contact.phone,
    email: contact.email,
    foundingDate: '2019',
    areaServed: 'MA',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lot Noamane, Imm. 9, Étage 9, Bureau 913',
      addressLocality: 'Bouskoura',
      addressRegion: 'Casablanca-Settat',
      addressCountry: 'MA',
    },
    sameAs: [contact.facebook, contact.instagram],
    makesOffer: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, url: `${SITE_URL}/services/${s.slug}` } })),
  }
}

function NotFound() {
  return (
    <section className="section notfound">
      <div className="container">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="h2">Cette page n’existe pas (ou plus).</h1>
        <p className="lead">Retrouvez nos services de faux plafond, cloisons et habillage depuis l’accueil.</p>
        <Link to="/" className="btn btn--dark">
          Retour à l’accueil
        </Link>
      </div>
    </section>
  )
}

function useReveal(path) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [path])
}

export default function App() {
  const path = usePath()
  const route = resolve(path)
  useReveal(path)

  useEffect(() => {
    document.title = route.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', route.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', SITE_URL + (path === '/' ? '/' : path))
  }, [route.title, route.description, path])

  return (
    <>
      <a href="#main" className="skip">
        Aller au contenu principal
      </a>
      <Header solid={route.solidHeader} />
      <main id="main">{route.element}</main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
