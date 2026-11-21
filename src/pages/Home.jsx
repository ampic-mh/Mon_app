import { useEffect, useState } from 'react'
import { Link } from '../router'
import { contact, faq, heroSlides, process, realisations, services, stats, values } from '../data/site'
import Img from '../components/Img'
import Icon from '../components/Icon'
import ContactSection from '../components/ContactSection'
import { useLightbox } from '../components/Lightbox'

const SLIDE_MS = 6500

function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = heroSlides.length

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setI((x) => (x + 1) % n), SLIDE_MS)
    return () => clearTimeout(t)
  }, [i, paused, n])

  return (
    <section
      className="hero"
      aria-roledescription="carrousel"
      aria-label="Nos spécialités"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero__media">
        {heroSlides.map((s, k) => (
          <div key={s.image} className={`hero__img ${k === i ? 'is-active' : ''}`} aria-hidden={k !== i}>
            <Img name={s.image} alt="" sizes="100vw" priority={k === 0} />
          </div>
        ))}
      </div>
      <div className="hero__shade" />
      <div className="container hero__content">
        <h1 className="sr-only">AMPIC — Faux plafond, cloisons sèches et habillage mural à Casablanca et au Maroc</h1>
        {heroSlides.map((s, k) => (
          <div key={s.title} className={`hero__slide ${k === i ? 'is-active' : ''}`} aria-hidden={k !== i} role="group" aria-roledescription="diapositive" aria-label={`${k + 1} sur ${n}`}>
            <p className="eyebrow eyebrow--light">{s.eyebrow}</p>
            <p className="hero__title">{s.title}</p>
            <p className="hero__text">{s.text}</p>
            <div className="hero__ctas">
              <Link to={`/${s.cta.href}`} className="btn btn--accent" tabIndex={k === i ? 0 : -1}>
                {s.cta.label} <Icon name="arrow" size={18} />
              </Link>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--glass" tabIndex={k === i ? 0 : -1}>
                <Icon name="whatsapp" size={20} /> WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="container hero__tabs" role="tablist" aria-label="Choisir une diapositive">
        {heroSlides.map((s, k) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={k === i}
            className={`hero__tab ${k === i ? 'is-active' : ''} ${paused ? 'is-paused' : ''}`}
            onClick={() => setI(k)}
            style={{ '--dur': `${SLIDE_MS}ms` }}
          >
            <span className="hero__tab-bar" />
            <span className="hero__tab-num">0{k + 1}</span>
            <span className="hero__tab-label">{s.title}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats" aria-label="AMPIC en chiffres">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div key={s.label} className="stats__item">
            <p className="stats__value">
              {s.value}
              <span>{s.unit}</span>
            </p>
            <p className="stats__label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="apropos" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <div className="about__img about__img--main">
            <Img name="hero-clinique" alt="Couloir de clinique aménagé avec faux plafond lumineux" sizes="(min-width: 960px) 40vw, 90vw" />
          </div>
          <div className="about__img about__img--small">
            <Img name="real-2" alt="Faux plafond avec spots encastrés et bandeau LED" sizes="(min-width: 960px) 20vw, 45vw" />
          </div>
          <div className="about__badge">
            <strong>2019</strong>
            <span>Fondée à Casablanca</span>
          </div>
        </div>
        <div data-reveal>
          <p className="eyebrow">À propos de nous</p>
          <h2 id="about-title" className="h2">
            L’aménagement et la finition, <span className="accent">au millimètre.</span>
          </h2>
          <p className="lead">
            Bienvenue chez <strong>AMPIC</strong>, société spécialisée dans les travaux d’aménagement et de finition : faux plafonds, cloisons,
            habillages et solutions modernes en plaque de plâtre.
          </p>
          <p>
            Notre objectif : offrir à nos clients un travail de qualité, réalisé avec sérieux, précision et dans le respect des délais. Chaque projet
            est étudié avec attention afin de proposer des solutions adaptées aux besoins et aux exigences de nos partenaires.
          </p>
          <p>Grâce à une équipe qualifiée et à des matériaux fiables, AMPIC s’engage à garantir des résultats durables et soignés.</p>
          <ul className="about__points">
            <li><Icon name="check" size={18} /> Hôpitaux, cliniques & établissements de santé</li>
            <li><Icon name="check" size={18} /> Bureaux, commerces & restaurants</li>
            <li><Icon name="check" size={18} /> Villas, appartements & résidences privées</li>
          </ul>
          <Link to="/#contact" className="btn btn--dark">
            Démarrer votre projet <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section id="valeurs" className="section section--paper values" aria-labelledby="values-title">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Nos valeurs</p>
          <h2 id="values-title" className="h2">Trois piliers, sur chaque chantier.</h2>
          <p className="lead">Depuis 2019, nous bâtissons notre réputation sur trois piliers fondamentaux qui garantissent la réussite de chaque projet.</p>
        </div>
        <div className="values__grid">
          {values.map((v, k) => (
            <article key={v.title} className="value" data-reveal style={{ '--d': `${k * 90}ms` }}>
              <span className="value__num">0{k + 1}</span>
              <span className="value__icon">
                <Icon name={v.icon} size={26} />
              </span>
              <h3 className="h3">{v.title}</h3>
              <p>{v.text}</p>
              <span className="pill">
                <span className="pill__dot" /> {v.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container">
        <div className="section__head section__head--split" data-reveal>
          <div>
            <p className="eyebrow">Nos services</p>
            <h2 id="services-title" className="h2">De la conception à la réalisation.</h2>
          </div>
          <p className="lead">Nos services transforment vos espaces avec précision et élégance — en neuf comme en rénovation.</p>
        </div>
        <div className="services__grid">
          {services.map((s, k) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="svc-card" data-reveal style={{ '--d': `${k * 80}ms` }}>
              <div className="svc-card__img">
                <Img name={s.cardImage} alt="" sizes="(min-width: 1100px) 25vw, (min-width: 640px) 50vw, 100vw" />
                <span className="svc-card__num">0{k + 1}</span>
              </div>
              <div className="svc-card__body">
                <p className="svc-card__tag">{s.tag}</p>
                <h3 className="h3">{s.cardTitle}</h3>
                <p>{s.cardText}</p>
                <span className="svc-card__more">
                  En savoir plus <Icon name="arrow" size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section section--ink process" aria-labelledby="process-title">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow eyebrow--light">Notre méthode</p>
          <h2 id="process-title" className="h2 h2--light">Un projet clair, de la visite à la livraison.</h2>
        </div>
        <ol className="process__list">
          {process.map((p, k) => (
            <li key={p.title} className="process__step" data-reveal style={{ '--d': `${k * 90}ms` }}>
              <span className="process__num">0{k + 1}</span>
              <h3 className="h3">{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const filters = ['Tous', 'Résidentiel', 'Bureaux']

function Realisations() {
  const [filter, setFilter] = useState('Tous')
  const [openLightbox, lightbox] = useLightbox()
  const items = realisations.filter((r) => filter === 'Tous' || r.cat === filter)
  const lbItems = items.map((r) => ({ image: r.image, alt: r.title, caption: `${r.title} — ${r.text}` }))

  return (
    <section id="realisations" className="section realisations" aria-labelledby="real-title">
      <div className="container">
        <div className="section__head section__head--split" data-reveal>
          <div>
            <p className="eyebrow">Notre savoir-faire</p>
            <h2 id="real-title" className="h2">Des réalisations qui parlent d’elles-mêmes.</h2>
          </div>
          <div className="filters" role="group" aria-label="Filtrer les réalisations">
            {filters.map((f) => (
              <button key={f} type="button" className={`filter ${filter === f ? 'is-active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="masonry">
          {items.map((r, k) => (
            <button key={r.image} type="button" className="work" onClick={() => openLightbox(lbItems, k)}>
              <Img name={r.image} alt={r.title} sizes="(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 100vw" />
              <span className="work__overlay">
                <span className="sr-only">Agrandir la photo : </span>
                <span className="work__cat">{r.cat}</span>
                <span className="work__title">{r.title}</span>
                <span className="work__text">{r.text}</span>
              </span>
              <span className="work__zoom">
                <Icon name="expand" size={18} />
              </span>
            </button>
          ))}
        </div>
        <div className="realisations__cta" data-reveal>
          <p>Chaque projet est unique. Discutons de vos besoins spécifiques.</p>
          <Link to="/#contact" className="btn btn--dark">
            Demander un devis gratuit <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
      {lightbox}
    </section>
  )
}

function Promise() {
  return (
    <section className="promise" aria-label="La promesse AMPIC">
      <div className="promise__bg">
        <Img name="real-bureau-2" alt="" sizes="100vw" />
      </div>
      <div className="container promise__inner" data-reveal>
        <blockquote>
          <p>
            « Chaque espace mérite une finition d’exception. Chez AMPIC, nous ne faisons pas que rénover : <em>nous matérialisons votre vision.</em> »
          </p>
          <footer>La promesse AMPIC</footer>
        </blockquote>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="section section--paper faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <div className="faq__aside" data-reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="faq-title" className="h2">Vous avez des questions ? Nous avons les réponses.</h2>
          <p className="lead">Une autre question ? Notre équipe vous répond rapidement.</p>
          <div className="faq__aside-ctas">
            <Link to="/#contact" className="btn btn--dark">
              Contactez-nous <Icon name="arrow" size={18} />
            </Link>
            <a href={contact.phoneHref} className="btn btn--outline">
              <Icon name="phone" size={18} /> Appeler
            </a>
          </div>
        </div>
        <div className="faq__list">
          {faq.map((f, k) => (
            <details key={f.q} className="faq__item" name="faq" open={k === 0}>
              <summary>
                <span>{f.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  <Icon name="plus" size={20} />
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Values />
      <Services />
      <Process />
      <Realisations />
      <Promise />
      <Faq />
      <ContactSection />
    </>
  )
}
