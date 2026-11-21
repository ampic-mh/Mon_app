import { useEffect, useState } from 'react'
import { Link, usePath } from '../router'
import { contact, services } from '../data/site'
import Icon from './Icon'

const nav = [
  { label: 'À propos', to: '/#apropos' },
  { label: 'Services', to: '/#services' },
  { label: 'Réalisations', to: '/#realisations' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/#contact' },
]

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="AMPIC — accueil">
      <img src="/images/logo-180.webp" srcSet="/images/logo-180.webp 1x, /images/logo-360.webp 2x" width="120" height="56" alt="AMPIC" />
    </Link>
  )
}

export function Header({ solid = false }) {
  const [scrolled, setScrolled] = useState(false)
  const path = usePath()
  // Menu state is tied to the current page: navigating closes it automatically.
  const [openOn, setOpenOn] = useState(null)
  const open = openOn === path
  const setOpen = (v) => setOpenOn((cur) => ((typeof v === 'function' ? v(cur === path) : v) ? path : null))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('nav-open', open)
    const onKey = (e) => e.key === 'Escape' && setOpenOn(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const cls = ['header', scrolled || solid || open ? 'is-solid' : ''].join(' ')
  return (
    <header className={cls}>
      <div className="container header__inner">
        <Logo />
        <nav className="header__nav" aria-label="Navigation principale">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="header__link">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="header__actions">
          <a href={contact.phoneHref} className="header__phone">
            <Icon name="phone" size={18} />
            <span>{contact.phone}</span>
          </a>
          <Link to="/#contact" className="btn btn--accent btn--sm header__cta">
            Devis gratuit
          </Link>
          <button
            type="button"
            className="header__burger"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
      <div id="mobile-nav" className="mobile-nav" hidden={!open}>
        <nav className="container" aria-label="Navigation mobile">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="mobile-nav__link" onClick={() => setOpen(false)}>
              {n.label}
              <Icon name="arrow" size={18} />
            </Link>
          ))}
          <div className="mobile-nav__cta">
            <Link to="/#contact" className="btn btn--accent" onClick={() => setOpen(false)}>
              Demander un devis gratuit
            </Link>
            <a href={contact.phoneHref} className="btn btn--ghost-dark">
              <Icon name="phone" size={18} /> {contact.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__quote">
          <p>
            « Le plafond n’est pas juste une finition…
            <br />
            c’est <em>l’identité</em> de votre espace. »
          </p>
          <Link to="/#contact" className="btn btn--accent">
            Démarrer votre projet <Icon name="arrow" size={18} />
          </Link>
        </div>
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/images/logo-180.webp" width="120" height="56" alt="AMPIC" loading="lazy" />
            <p>Expertise en aménagement de plafonds BA13, design d’intérieur et finitions premium depuis plus de 7 ans.</p>
            <div className="footer__social">
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="AMPIC sur Facebook">
                <Icon name="facebook" />
              </a>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="AMPIC sur Instagram">
                <Icon name="instagram" />
              </a>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="AMPIC sur WhatsApp">
                <Icon name="whatsapp" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="footer__title">Services</h2>
            <ul className="footer__list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="footer__title">Navigation</h2>
            <ul className="footer__list">
              <li><Link to="/">Accueil</Link></li>
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="footer__title">Contact</h2>
            <ul className="footer__list footer__contact">
              <li><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li><a href={contact.landlineHref}>Fixe : {contact.landline}</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li>
                <a href={contact.maps} target="_blank" rel="noopener noreferrer">
                  {contact.address}
                  <br />
                  {contact.city}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span suppressHydrationWarning>© {new Date().getFullYear()} AMPIC SARL. Tous droits réservés.</span>
          <span>Faux plafond · Cloisons sèches · Habillage BA13 — Casablanca, Maroc</span>
        </div>
      </div>
    </footer>
  )
}

export function WhatsAppFab() {
  return (
    <a
      className="wa-fab"
      href={`${contact.whatsapp}?text=${encodeURIComponent('Bonjour AMPIC, je souhaite un devis.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
    >
      <Icon name="whatsapp" size={28} />
    </a>
  )
}
