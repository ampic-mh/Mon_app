import { useState } from 'react'
import { contact } from '../data/site'
import Icon from './Icon'

const subjects = ['Demande de devis gratuit', 'Faux plafond', 'Cloisons sèches', 'Habillage mural', "Demande d'information", 'Autre']

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  const buildMessage = (form) => {
    const d = Object.fromEntries(new FormData(form))
    return [
      `Bonjour AMPIC,`,
      ``,
      `Objet : ${d.subject}`,
      `Nom : ${d.name}`,
      `Téléphone : ${d.phone}`,
      d.email ? `Email : ${d.email}` : null,
      d.city ? `Ville : ${d.city}` : null,
      ``,
      d.message,
    ]
      .filter((l) => l !== null)
      .join('\n')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const via = e.nativeEvent.submitter?.value ?? 'whatsapp'
    const text = buildMessage(e.currentTarget)
    const subject = new FormData(e.currentTarget).get('subject')
    if (via === 'email') {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('[Site web] ' + subject)}&body=${encodeURIComponent(text)}`
    } else {
      window.open(`${contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    }
    setSent(true)
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__info" data-reveal>
          <p className="eyebrow eyebrow--light">Contact</p>
          <h2 id="contact-title" className="h2 h2--light">
            Parlons de votre <span className="accent">projet</span>.
          </h2>
          <p className="lead lead--light">
            Visite sur site et devis détaillé gratuit, sans engagement. Nous vous répondons sous 24 heures.
          </p>
          <ul className="contact__list">
            <li>
              <span className="contact__icon"><Icon name="phone" /></span>
              <span>
                <small>Mobile</small>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </span>
            </li>
            <li>
              <span className="contact__icon"><Icon name="phone" /></span>
              <span>
                <small>Fixe</small>
                <a href={contact.landlineHref}>{contact.landline}</a>
              </span>
            </li>
            <li>
              <span className="contact__icon"><Icon name="mail" /></span>
              <span>
                <small>Email</small>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </span>
            </li>
            <li>
              <span className="contact__icon"><Icon name="pin" /></span>
              <span>
                <small>Adresse</small>
                <a href={contact.maps} target="_blank" rel="noopener noreferrer">
                  {contact.address}, {contact.city}
                </a>
              </span>
            </li>
          </ul>
          <a className="btn btn--whatsapp" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={22} /> WhatsApp direct
          </a>
        </div>

        <form className="form" onSubmit={onSubmit} data-reveal>
          <h3 className="form__title">Demande de devis</h3>
          <div className="form__row">
            <label className="field">
              <span>Nom complet *</span>
              <input name="name" required autoComplete="name" placeholder="Votre nom" />
            </label>
            <label className="field">
              <span>Téléphone *</span>
              <input name="phone" type="tel" required autoComplete="tel" placeholder="06 00 00 00 00" />
            </label>
          </div>
          <div className="form__row">
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" placeholder="vous@exemple.ma" />
            </label>
            <label className="field">
              <span>Ville</span>
              <input name="city" autoComplete="address-level2" placeholder="Casablanca" />
            </label>
          </div>
          <label className="field">
            <span>Objet de la demande *</span>
            <select name="subject" required defaultValue="">
              <option value="" disabled>
                Sélectionnez un objet…
              </option>
              {subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Votre message *</span>
            <textarea name="message" required rows="5" placeholder="Surface approximative, type de travaux, délais souhaités…" />
          </label>
          <div className="form__actions">
            <button type="submit" value="whatsapp" className="btn btn--accent">
              <Icon name="whatsapp" size={20} /> Envoyer via WhatsApp
            </button>
            <button type="submit" value="email" className="btn btn--outline">
              <Icon name="mail" size={20} /> Envoyer par email
            </button>
          </div>
          <p className="form__note" role="status">
            {sent
              ? 'Merci ! Votre message est prêt : il ne reste qu’à l’envoyer dans l’application ouverte.'
              : '* Champs obligatoires — vos données restent confidentielles.'}
          </p>
        </form>
      </div>
    </section>
  )
}
