# AMPIC — site vitrine (www.ampic.ma)

Refonte du site AMPIC : faux plafond, cloisons sèches et habillage BA13 à Casablanca.
React 19 + Vite, avec **pré-rendu statique** de chaque page (HTML complet dès le premier octet → rapide et bien référencé).

## Commandes

```bash
npm install
npm run dev      # développement sur http://localhost:5173
npm run build    # génère le site statique dans dist/
npm run preview  # prévisualise dist/
npm run lint
```

## Mise en ligne

Après `npm run build`, publier **le contenu de `dist/`** sur n'importe quel hébergement statique
(Netlify, Vercel, Cloudflare Pages, o2switch/Apache, Hostinger…). Pages générées :

- `/` — accueil
- `/services/faux-plafond`, `/services/faux-plafond-demontable`, `/services/cloisons-seches`, `/services/habillage-ba13`
- `404.html`, `sitemap.xml`, `robots.txt`, `manifest.webmanifest`

Les URLs des pages de service sont identiques à l'ancien site (pas de lien cassé, pas de perte SEO).

## Modifier le contenu

Tout le texte (services, FAQ, réalisations, coordonnées) est dans **`src/data/site.js`**.

## Images

Les photos sont dans `public/images/`, en WebP à plusieurs largeurs (`nom-480.webp`, `nom-960.webp`, `nom-1200/1600.webp`).
Leurs dimensions sont listées dans `src/data/images.json` (utilisé par le composant `Img` pour le `srcset`).
Pour ajouter une photo : exporter les variantes WebP avec ce nommage, ajouter l'entrée dans `images.json`, puis la référencer par son nom dans `site.js`.

## Formulaire de contact

Le formulaire ne nécessite aucun serveur : il prépare le message et l'ouvre dans **WhatsApp** (ou dans le client **email**), prêt à être envoyé à AMPIC.
