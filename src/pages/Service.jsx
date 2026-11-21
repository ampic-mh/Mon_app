import { Link } from '../router'
import { contact, services } from '../data/site'
import Img from '../components/Img'
import Icon from '../components/Icon'
import ContactSection from '../components/ContactSection'
import { useLightbox } from '../components/Lightbox'

function TypeBlock({ type, index, openLightbox }) {
  const [main, ...rest] = type.images
  const items = type.images.map((image, k) => ({ image, alt: `${type.name} — réalisation AMPIC ${k + 1}` }))
  const thumbs = rest.slice(0, 4)
  const more = rest.length - thumbs.length

  return (
    <article className={`type ${index % 2 ? 'type--flip' : ''}`} data-reveal>
      <div className="type__gallery">
        <button type="button" className="type__main" onClick={() => openLightbox(items, 0)} aria-label={`Agrandir : ${type.name}`}>
          <Img name={main} alt={items[0].alt} sizes="(min-width: 960px) 50vw, 100vw" />
          <span className="work__zoom">
            <Icon name="expand" size={18} />
          </span>
        </button>
        {thumbs.length > 0 && (
          <div className="type__thumbs">
            {thumbs.map((img, k) => (
              <button key={img} type="button" className="type__thumb" onClick={() => openLightbox(items, k + 1)} aria-label={`Voir la photo ${k + 2}`}>
                <Img name={img} alt="" sizes="(min-width: 960px) 12vw, 25vw" />
                {k === thumbs.length - 1 && more > 0 && <span className="type__more">+{more}</span>}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="type__body">
        <p className="svc-card__tag">{type.tag}</p>
        <h3 className="h2 h2--sm">{type.name}</h3>
        <p className="lead">{type.text}</p>
        <h4 className="type__adv-title">Avantages</h4>
        <ul className="checklist">
          {type.advantages.map((a) => (
            <li key={a}>
              <Icon name="check" size={18} /> {a}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Service({ service }) {
  const [openLightbox, lightbox] = useLightbox()
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="page-hero__bg">
          <Img name={service.heroImage} alt="" sizes="100vw" priority />
        </div>
        <div className="hero__shade" />
        <div className="container page-hero__content">
          <nav className="breadcrumb" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link to="/#services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.cardTitle}</span>
          </nav>
          <p className="eyebrow eyebrow--light">{service.tag}</p>
          <h1 id="page-title" className="page-hero__title">
            {service.title}
          </h1>
          <p className="hero__text">{service.intro}</p>
          <div className="hero__ctas">
            <Link to="#contact" className="btn btn--accent">
              Devis gratuit <Icon name="arrow" size={18} />
            </Link>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--glass">
              <Icon name="whatsapp" size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="specs" aria-label="Caractéristiques techniques">
        <div className="container specs__grid">
          {service.specs.map((s) => (
            <div key={s.label} className="specs__item">
              <p className="specs__label">{s.label}</p>
              <p className="specs__value">{s.value}</p>
              <p className="specs__note">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="types-title">
        <div className="container">
          <div className="section__head" data-reveal>
            <p className="eyebrow">Nos solutions</p>
            <h2 id="types-title" className="h2">
              {service.typesTitle}
            </h2>
            <p className="lead">{service.typesIntro}</p>
          </div>
          <div className="types">
            {service.types.map((t, k) => (
              <TypeBlock key={t.name} type={t} index={k} openLightbox={openLightbox} />
            ))}
          </div>
        </div>
        {lightbox}
      </section>

      <section className="section section--ink process" aria-labelledby="steps-title">
        <div className="container">
          <div className="section__head" data-reveal>
            <p className="eyebrow eyebrow--light">Conseils de pose</p>
            <h2 id="steps-title" className="h2 h2--light">
              Une mise en œuvre dans les règles de l’art.
            </h2>
            <p className="lead lead--light">{service.stepsIntro}</p>
          </div>
          <ol className="process__list process__list--3">
            {service.steps.map((p, k) => (
              <li key={p.title} className="process__step" data-reveal style={{ '--d': `${k * 90}ms` }}>
                <span className="process__num">0{k + 1}</span>
                <h3 className="h3">{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="others-title">
        <div className="container">
          <div className="section__head section__head--split" data-reveal>
            <div>
              <p className="eyebrow">Découvrir aussi</p>
              <h2 id="others-title" className="h2">
                Nos autres services
              </h2>
            </div>
            <Link to="/#services" className="btn btn--outline">
              <Icon name="arrowLeft" size={18} /> Tous les services
            </Link>
          </div>
          <div className="services__grid services__grid--3">
            {others.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="svc-card" data-reveal>
                <div className="svc-card__img">
                  <Img name={s.cardImage} alt="" sizes="(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 100vw" />
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

      <ContactSection />
    </>
  )
}
