export type ServiceIconName =
  | "Clapperboard"
  | "MonitorSmartphone"
  | "MousePointerClick"
  | "Palette"
  | "PenTool"
  | "Sparkles";

export const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "A propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Sites web premium",
    description:
      "Sites vitrines rapides, élégants et pensés pour transformer vos visiteurs en prospects qualifiés.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Landing pages",
    description:
      "Pages de conversion pour campagnes, lancements, offres locales, infoproduits ou génération de leads.",
    icon: "MousePointerClick",
  },
  {
    title: "Création de contenu",
    description:
      "Direction éditoriale, posts social media, visuels de marque et contenus qui installent votre expertise.",
    icon: "PenTool",
  },
  {
    title: "Vidéos courtes",
    description:
      "Formats Reels, TikTok, Shorts et scripts courts pour capter l'attention rapidement.",
    icon: "Clapperboard",
  },
  {
    title: "Design social media",
    description:
      "Templates, carrousels, miniatures et systèmes graphiques pour une présence cohérente.",
    icon: "Palette",
  },
  {
    title: "Identité digitale",
    description:
      "Positionnement, direction artistique, ton de marque et univers visuel clair pour vos canaux.",
    icon: "Sparkles",
  },
] satisfies Array<{
  title: string;
  description: string;
  icon: ServiceIconName;
}>;

export const portfolioItems = [
  {
    title: "Maison Elara",
    category: "Site vitrine premium",
    result: "+48% de demandes qualifiées",
    description:
      "Refonte complète d'un site de marque avec storytelling, pages services et parcours contact.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Façade lumineuse d'une maison contemporaine, utilisée pour représenter le projet Maison Elara.",
  },
  {
    title: "Nova Fit Studio",
    category: "Landing page",
    result: "3,2x plus d'inscriptions",
    description:
      "Page de campagne pour abonnement mensuel, structure persuasive et assets social media.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Salle de sport moderne avec équipements, utilisée pour représenter le projet Nova Fit Studio.",
  },
  {
    title: "Atlas Conseil",
    category: "Identité digitale",
    result: "Image repositionnée",
    description:
      "Direction artistique, système de contenus LinkedIn et site clair pour offre B2B.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Espace de travail professionnel et lumineux, utilisé pour représenter le projet Atlas Conseil.",
  },
  {
    title: "Luma Beauty",
    category: "Vidéos courtes",
    result: "1,1M vues cumulées",
    description:
      "Scripts, montage vertical, couvertures et calendrier éditorial pour une marque beauté.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Boutique beauté élégante avec produits cosmétiques, utilisée pour représenter le projet Luma Beauty.",
  },
];

export const processSteps = [
  {
    title: "Diagnostic",
    description:
      "On clarifie votre offre, votre cible, vos objectifs et les blocages actuels.",
  },
  {
    title: "Stratégie",
    description:
      "On construit l'angle, le parcours, les messages et la direction créative.",
  },
  {
    title: "Création",
    description:
      "Design, développement, contenus et assets sont produits dans un système cohérent.",
  },
  {
    title: "Lancement",
    description:
      "On livre, on teste, on optimise et on vous donne les clés pour continuer.",
  },
];

export const testimonials = [
  {
    quote:
      "Nader a transformé une idée floue en site clair, premium et prêt à vendre. Le process était fluide du début à la fin.",
    author: "Sarah M.",
    role: "Fondatrice, Maison Elara",
  },
  {
    quote:
      "La landing page a immédiatement amélioré nos campagnes. Le design est beau, mais surtout très efficace.",
    author: "Karim B.",
    role: "CEO, Nova Fit Studio",
  },
  {
    quote:
      "Notre image digitale est enfin cohérente. Le site, les contenus et les visuels parlent le même langage.",
    author: "Ines D.",
    role: "Consultante B2B",
  },
];
