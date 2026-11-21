export const SITE_URL = 'https://www.ampic.ma'

export const contact = {
  phone: '+212 666 771 912',
  phoneHref: 'tel:+212666771912',
  landline: '+212 521 235 759',
  landlineHref: 'tel:+212521235759',
  email: 'Ampic.mh@gmail.com',
  whatsapp: 'https://wa.me/212666771912',
  address: 'Lot Noamane, Imm. 9, Étage 9, Bureau 913',
  city: 'Bouskoura, Casablanca — Maroc',
  maps: 'https://maps.google.com/?q=Lot+Noamane+imm+9+Etage+N%C2%B09+bureau+N%C2%B0913+Bouskoura,+Casablanca,+Maroc',
  facebook: 'https://www.facebook.com/share/1BnEVtdk8Z/',
  instagram: 'https://www.instagram.com/ampic.sarl',
}

export const heroSlides = [
  {
    image: 'hero-salon',
    eyebrow: 'Esthétique & Modernité',
    title: 'Faux plafond',
    text: 'Installation professionnelle de plafonds BA13 & Armstrong. Transformez vos volumes avec des finitions premium.',
    cta: { label: 'Nous contacter', href: '#contact' },
  },
  {
    image: 'hero-clinique',
    eyebrow: 'Isolation & Agencement',
    title: 'Cloison BA13',
    text: 'Redéfinissez vos espaces avec nos cloisons sur mesure. Une solution rapide garantissant une isolation optimale.',
    cta: { label: 'Nos solutions', href: '#services' },
  },
  {
    image: 'hero-couloir',
    eyebrow: 'Finitions Haut de Gamme',
    title: 'Habillage mural',
    text: "Des revêtements muraux décoratifs qui allient durabilité et élégance pour sublimer l'atmosphère de votre intérieur.",
    cta: { label: 'Nos savoir-faire', href: '#realisations' },
  },
]

export const stats = [
  { value: '+7', unit: 'ans', label: "d'expérience" },
  { value: '+150', unit: '', label: 'projets réalisés' },
  { value: '48–72', unit: 'h', label: 'pour votre devis gratuit' },
  { value: '2019', unit: '', label: 'à vos côtés depuis' },
]

export const values = [
  {
    icon: 'ruler',
    title: 'Précision millimétrique',
    text: 'Nous ne laissons rien au hasard. Des mesures exactes et une installation millimétrée pour des finitions aux standards les plus élevés.',
    tag: '100% de satisfaction',
  },
  {
    icon: 'shield',
    title: 'Chantier impeccable',
    text: 'Nous respectons votre espace. Protection des sols, interventions soignées et nettoyage systématique en fin de journée.',
    tag: 'Nettoyage quotidien',
  },
  {
    icon: 'clock',
    title: 'Délais respectés',
    text: 'Votre temps est précieux. Nous nous engageons sur un planning précis et le respectons pour votre tranquillité d’esprit.',
    tag: 'Livraison garantie',
  },
]

export const process = [
  { title: 'Visite sur site', text: 'Notre équipe se déplace pour évaluer vos besoins et prendre les mesures précises.' },
  { title: 'Devis détaillé gratuit', text: 'Une proposition claire et sans engagement, remise sous 48 à 72 heures.' },
  { title: 'Réalisation planifiée', text: 'Un calendrier précis, un chantier propre et des échéances tenues.' },
  { title: 'Suivi & après-vente', text: 'Travaux garantis : nous restons disponibles après la livraison.' },
]

export const services = [
  {
    slug: 'faux-plafond',
    tag: 'Esthétique & technique',
    cardTitle: 'Plafonds BA13',
    cardText:
      "Solutions acoustiques et décoratives suspendues sur ossature métallique. Idéal pour intégrer des luminaires et améliorer l'isolation avec une finition lisse ou perforée.",
    cardImage: 'svc-faux-plafond',
    heroImage: 'fp-1',
    title: 'Faux plafond en plaque de plâtre',
    metaTitle: 'Faux plafond BA13 au Maroc',
    intro:
      "Sculptez vos volumes et maîtrisez l'acoustique. Nos solutions en plaque de plâtre (type BA13, 12,5 mm) allient performance technique et esthétique épurée.",
    specs: [
      { label: 'Type de plaque', value: 'BA13 (12,5 mm)', note: 'Standard professionnel' },
      { label: 'Solutions', value: '3 gammes', note: 'Standard, hydrofuge, coupe-feu' },
      { label: 'Finitions', value: 'Sur mesure', note: 'Perforées, lisses, décoratives' },
      { label: 'Applications', value: 'Multi-usage', note: 'Acoustique, isolation, technique' },
    ],
    typesTitle: 'Types de faux plafond',
    typesIntro:
      'Découvrez notre solution professionnelle pour vos projets de faux plafonds en plaques de plâtre, adaptée à chaque contexte.',
    types: [
      {
        tag: 'Solution classique premium',
        name: 'Faux plafond suspendu',
        text:
          'Les plaques de plâtre sont vissées sur une ossature métallique (fourrures) fixée au plafond existant via des suspentes. Cette méthode professionnelle garantit une stabilité maximale et une durabilité exceptionnelle.',
        advantages: [
          'Installation sur ossature métallique renforcée',
          'Fixation par suspentes réglables haute précision',
          'Idéal pour les constructions neuves et projets d’envergure',
          'Permet de grandes portées sans déformation',
          'Hauteur sous plafond ajustable selon vos besoins',
        ],
        images: ['fp-6', 'fp-1', 'fp-3', 'fp-4', 'fp-7', 'fp-5', 'fp-2'],
      },
    ],
    stepsIntro: 'Les étapes essentielles pour une installation réussie de votre faux plafond en plaque de plâtre.',
    steps: [
      { title: 'Ossature métallique', text: 'Fixation des fourrures et suspentes réglables au plafond existant pour créer une structure solide et parfaitement de niveau.' },
      { title: 'Vissage des plaques', text: "Les plaques BA13 sont vissées sur l'ossature avec un espacement précis pour garantir planéité et solidité." },
      { title: 'Finition', text: 'Traitement des joints avec bandes et enduit pour une surface parfaitement lisse, prête pour la peinture.' },
    ],
  },
  {
    slug: 'faux-plafond-demontable',
    tag: 'Bureaux & commerces',
    cardTitle: 'Plafonds démontables',
    cardText:
      'Système modulaire (60×60) offrant un accès facile au plénum. La solution privilégiée pour les espaces professionnels nécessitant maintenance rapide et correction acoustique.',
    cardImage: 'svc-demontable',
    heroImage: 'armstrong-3',
    title: 'Faux plafond démontable',
    metaTitle: 'Faux plafond démontable Armstrong & métallique',
    intro:
      "Un faux plafond démontable est constitué d'une ossature métallique visible ou cachée recevant des dalles, permettant un accès facile au plénum. Idéal pour bureaux et locaux commerciaux.",
    specs: [
      { label: 'Dimensions', value: '60×60 / 120×60 cm', note: 'Formats standards' },
      { label: 'Ossature', value: 'Visible ou cachée', note: 'Selon vos besoins' },
      { label: 'Accès', value: 'Plénum accessible', note: "Facilité d'entretien" },
      { label: 'Applications', value: 'Bureaux, commerces', note: 'Multi-usage' },
    ],
    typesTitle: 'Types de dalles',
    typesIntro: 'Découvrez notre gamme complète de dalles pour faux plafonds démontables, adaptées à tous les environnements.',
    types: [
      {
        tag: 'Performance acoustique & hygiène',
        name: 'Dalles en plaque de plâtre / Armstrong',
        text:
          "Dalles perforées pour l'acoustique ou revêtues d'un parement vinyle pour l'hygiène, idéales pour les cuisines professionnelles ou établissements de santé. Reconnues pour leur performance acoustique, ces dalles sont parfaites pour réduire l'écho dans les espaces ouverts.",
        advantages: [
          'Excellente performance acoustique',
          "Parement vinyle pour l'hygiène",
          'Idéal cuisines professionnelles & établissements de santé',
          'Finitions perforées ou lisses',
          'Réduction de l’écho, idéal pour open spaces',
          'Large choix de finitions, dalles légères',
        ],
        images: ['armstrong-3', 'armstrong-1', 'armstrong-2', 'armstrong-4'],
      },
      {
        tag: 'Durabilité & sécurité',
        name: 'Faux plafond en lames métalliques',
        text:
          'Plafond suspendu composé de lames en aluminium ou en acier laqué, fixées sur une ossature métallique. Un rendu architectural, robuste et facile à vivre.',
        advantages: ['Grande durabilité', 'Entretien facile', 'Rendu architectural contemporain', 'Aluminium ou acier laqué'],
        images: ['metal-5', 'metal-1', 'metal-2', 'metal-3', 'metal-4'],
      },
    ],
    stepsIntro: 'Les étapes essentielles pour une installation réussie de votre faux plafond démontable.',
    steps: [
      { title: 'Ossature semi-apparente', text: 'Rails périmétriques fixés aux murs et porteurs suspendus au plafond, formant une grille régulière et de niveau.' },
      { title: 'Pose des dalles', text: "Dalles glissées délicatement dans l'ossature et ajustées sans outils, offrant un accès facile au plénum." },
      { title: 'Accès sécurisé', text: 'Le système permet un accès rapide aux réseaux techniques (câbles, gaines) sans démontage complet.' },
    ],
  },
  {
    slug: 'cloisons-seches',
    tag: "Agencement d'espace",
    cardTitle: 'Cloisons sèches',
    cardText:
      'Séparation légère haute performance. Montage rapide sans séchage pour une redistribution flexible des volumes avec isolation phonique certifiée.',
    cardImage: 'svc-cloisons',
    heroImage: 'cloison-1',
    title: 'Cloisons sèches',
    metaTitle: 'Cloisons sèches BA13 : standard, hydrofuge, coupe-feu',
    intro:
      "Création de cloisons séparatives en BA13 avec isolation phonique et thermique adaptée à vos besoins. Solutions sur mesure pour tous types d'espaces.",
    specs: [
      { label: 'Épaisseur plaque', value: '12,5 mm (BA13)', note: 'Standard professionnel' },
      { label: 'Ossature', value: 'Métallique', note: 'Structure robuste' },
      { label: 'Isolation', value: 'Phonique & thermique', note: 'Confort optimal' },
      { label: 'Finition', value: 'Prête à peindre', note: 'Surface lisse' },
    ],
    typesTitle: 'Types de cloisons',
    typesIntro: 'Découvrez nos différentes solutions de cloisons sèches adaptées à chaque besoin et environnement.',
    types: [
      {
        tag: 'Solution classique',
        name: 'Cloison standard',
        text: "Solution classique pour la séparation d'espaces avec des plaques BA13 standard. Rapport qualité-prix optimal pour les aménagements intérieurs courants.",
        advantages: ['Solution économique', 'Plaques BA13 classiques', 'Installation rapide', 'Finition lisse', 'Polyvalente'],
        images: ['standard-1', 'standard-2', 'standard-3', 'cloison-2', 'cloison-3', 'cloison-4'],
      },
      {
        tag: 'Protection zones humides',
        name: 'Cloison hydrofuge',
        text: "Spécialement conçue pour les pièces humides comme les salles de bain et cuisines. Résistance à l'humidité et à la moisissure garantie.",
        advantages: ["Résistance à l'humidité", 'Anti-moisissure', 'Parfait salles de bain', 'Idéal cuisines', 'Durabilité accrue'],
        images: ['hydro-1', 'hydro-2', 'hydro-3', 'hydro-4'],
      },
      {
        tag: 'Sécurité incendie',
        name: 'Cloison coupe-feu',
        text: 'Pour la sécurité incendie, ces cloisons offrent une résistance au feu selon les normes en vigueur. Indispensable pour les ERP et locaux professionnels.',
        advantages: ['Résistance au feu', 'Conforme aux normes', 'Sécurité incendie', 'Idéal ERP', 'Protection optimale'],
        images: ['coupefeu-3', 'coupefeu-1', 'coupefeu-2', 'coupefeu-4'],
      },
      {
        tag: 'Haute performance',
        name: 'Cloison Habito',
        text: 'La solution haute performance : résistance exceptionnelle aux chocs, capacité de charge importante pour fixer des éléments lourds, et facilité de pose.',
        advantages: ['Résistance aux chocs', 'Capacité de charge élevée', 'Fixation d’objets lourds', 'Facilité de pose', 'Haute performance'],
        images: ['habito-2', 'habito-1', 'habito-3', 'habito-4'],
      },
    ],
    stepsIntro: 'Les étapes essentielles pour une installation réussie de vos cloisons sèches.',
    steps: [
      { title: 'Ossature métallique', text: 'Rails fixés au sol et au plafond, montants verticaux posés aux espacements réglementaires pour garantir la rigidité.' },
      { title: 'Isolation', text: 'Laine de roche ou laine de verre insérée entre les montants pour une isolation phonique et thermique optimale.' },
      { title: 'Plaques et finition', text: "Vissage des plaques BA13 des deux côtés de l'ossature, joints traités à l'enduit avant peinture." },
    ],
  },
  {
    slug: 'habillage-ba13',
    tag: 'Design & doublage',
    cardTitle: 'Habillage mural',
    cardText:
      'Solutions de doublage sur ossature ou collé pour une finition parfaite. Transformez vos murs bruts en surfaces lisses prêtes à peindre ou décorer.',
    cardImage: 'svc-habillage',
    heroImage: 'svc-habillage',
    title: 'Habillage en BA13',
    metaTitle: 'Habillage mural & doublage BA13',
    intro:
      'Solution polyvalente pour les cloisons, doublages et plafonds, sur ossature métallique ou en collage direct. Finition parfaite pour tous vos espaces.',
    specs: [
      { label: 'Épaisseur', value: '12,5 mm', note: 'Standard BA13' },
      { label: 'Fixation', value: 'Vissage ou collage', note: 'Selon le support' },
      { label: 'Ossature', value: 'Rails et montants', note: 'Structure métallique' },
      { label: 'Finition', value: 'Prête à peindre', note: 'Surface lisse' },
    ],
    typesTitle: "Types d'habillage BA13",
    typesIntro: "Découvrez nos différentes solutions d'habillage BA13 adaptées à chaque pièce et besoin spécifique.",
    types: [
      {
        tag: 'Usage général',
        name: 'BA13 standard',
        text: 'Utilisation générale pour les murs et plafonds dans les pièces sèches comme les chambres et le salon. Solution économique et polyvalente.',
        advantages: ['Usage général', 'Pièces sèches', 'Chambres et salon', 'Solution économique', 'Finition lisse'],
        images: ['habillage-1', 'svc-habillage', 'real-3'],
      },
      {
        tag: 'Protection humidité',
        name: 'BA13 hydrofuge',
        text: "Spécialement conçu pour résister à l'humidité, idéal pour les salles de bain, cuisines et buanderies. Résistance garantie à l'eau.",
        advantages: ["Résistance à l'humidité", 'Salles de bain', 'Cuisines', 'Buanderies', 'Anti-moisissure'],
        images: ['hydro-5', 'hydro-3', 'hydro-4'],
      },
    ],
    stepsIntro: 'Les étapes essentielles pour une installation réussie de votre habillage BA13.',
    steps: [
      { title: 'Fixation', text: 'Vissage sur ossature métallique (rails et montants) ou collage avec mortier adhésif selon le support.' },
      { title: 'Finition', text: 'Traitement des joints avec bandes et enduit pour une surface parfaitement lisse avant peinture.' },
      { title: 'Épaisseur', text: "La plaque standard a une épaisseur nominale de 12,5 mm, d'où le nom BA13." },
    ],
  },
]

export const realisations = [
  { image: 'real-1', cat: 'Résidentiel', title: 'Faux plafond décoratif LED', text: 'Design géométrique avec éclairage LED indirect noir et blanc' },
  { image: 'real-bureau-2', cat: 'Bureaux', title: 'Plafond acoustique architectural', text: 'Solutions techniques pour espaces de prestige' },
  { image: 'real-2', cat: 'Résidentiel', title: 'Faux plafond suspendu lumineux', text: 'Plafond épuré avec spots encastrés et bandeau LED blanc' },
  { image: 'real-3', cat: 'Résidentiel', title: 'Habillage mural & faux plafond', text: 'Boiseries décoratives BA13 et rail LED encastré' },
  { image: 'real-bureau-1', cat: 'Bureaux', title: 'Open space professionnel', text: 'Plafond LED modulaire pour espaces de travail collaboratifs' },
  { image: 'real-4', cat: 'Résidentiel', title: 'Aménagement intérieur complet', text: 'Faux plafond géométrique LED et habillage mural bois naturel' },
]

export const faq = [
  {
    q: 'Quels types de projets réalisez-vous ?',
    a: "Nous intervenons sur tous types de projets : établissements de santé (hôpitaux, cliniques), espaces commerciaux (boutiques, restaurants), bureaux professionnels et résidences privées. Notre expertise couvre l'aménagement de plafonds BA13, faux plafonds, isolation acoustique et thermique, ainsi que les finitions premium.",
  },
  {
    q: 'Quel est le délai moyen pour réaliser un projet ?',
    a: "Le délai dépend de la complexité et de l'envergure du projet. Pour un espace de bureaux standard, comptez 2 à 3 semaines. Pour des projets plus importants comme des établissements de santé, le délai peut s'étendre de 1 à 3 mois. Nous établissons toujours un calendrier précis lors du devis initial et nous engageons à respecter les échéances.",
  },
  {
    q: 'Proposez-vous un devis gratuit ?',
    a: 'Absolument ! Nous offrons un devis détaillé et gratuit, sans aucun engagement. Notre équipe se déplace sur site pour évaluer vos besoins, prendre les mesures précises et vous proposer les meilleures solutions adaptées à votre budget. Le devis vous est remis sous 48 à 72 heures.',
  },
  {
    q: 'Utilisez-vous des matériaux de qualité ?',
    a: 'La qualité est au cœur de notre engagement. Nous travaillons exclusivement avec des matériaux certifiés et des marques reconnues dans le secteur. Nos plaques BA13, rails, isolants et finitions répondent aux normes européennes les plus strictes. Nous garantissons la durabilité et la performance de tous nos aménagements.',
  },
  {
    q: 'Assurez-vous le suivi après la fin des travaux ?',
    a: "Oui, nous offrons un service après-vente complet. Tous nos travaux sont garantis et nous assurons un suivi régulier. En cas de besoin d'ajustements ou de retouches, notre équipe intervient rapidement. Nous restons à votre disposition même après la livraison du projet.",
  },
  {
    q: 'Travaillez-vous avec des architectes et designers ?',
    a: "Nous collaborons régulièrement avec des architectes, designers d'intérieur et maîtres d'œuvre. Notre expérience nous permet de traduire leurs visions créatives en réalisations concrètes et techniques, avec une coordination parfaite sur les projets complexes.",
  },
  {
    q: 'Intervenez-vous uniquement sur Casablanca ?',
    a: "Notre siège est basé à Casablanca, et nous intervenons dans toute la région de Casablanca-Settat et au-delà selon la nature du projet. Pour des projets d'envergure, nous pouvons nous déplacer partout au Maroc.",
  },
  {
    q: 'Quelles sont vos certifications et qualifications ?',
    a: "Notre équipe est composée de professionnels certifiés avec plus de 15 ans d'expérience dans le secteur. Nous sommes en conformité avec toutes les réglementations marocaines en matière de construction et de sécurité. Nos installations respectent les normes anti-incendie, acoustiques et thermiques requises pour chaque type d'établissement.",
  },
]
