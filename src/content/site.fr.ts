import type { SiteContent } from './types';

export const siteFr: SiteContent = {
  meta: {
    title: 'Kayou Ba — Data Analyst & Développeur | Portfolio',
    description:
      "Portfolio de Kayou Ba, Data Analyst et développeur spécialisé en Python, SQL, analyse statistique et développement web. Passionné de data appliquée au sport.",
    keywords:
      'Kayou Ba, Data Analyst, Data Scientist, Développeur, Python, SQL, Sports Analytics, Portfolio, Bordeaux, MIAGE',
  },
  nav: {
    brand: 'Kayou Ba',
    links: [
      { label: 'Projets', href: '#projects' },
      { label: 'À propos', href: '#about' },
      { label: 'Compétences', href: '#skills' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'CV', href: '#cv' },
      { label: 'Contact', href: '#contact' },
    ],
    langSwitchLabel: 'EN',
  },
  hero: {
    eyebrow: 'Data Analyst & Développeur · Bordeaux',
    title: 'Kayou Ba',
    roles: ['Data Analyst', 'Développeur Full-Stack', 'Sports Analytics'],
    description:
      "J'analyse des données et je construis les outils qui les exploitent. De la simulation statistique au développement d'applications métier, avec un vrai goût pour la donnée appliquée au sport.",
    ctaPrimary: 'Voir mes projets',
    ctaSecondary: 'Me contacter',
    signals: [
      { label: 'Master MIAGE', value: 'Université de Bordeaux' },
      { label: 'TOEIC 985/990', value: 'Anglais C1' },
      { label: 'Disponible', value: 'immédiatement' },
    ],
  },
  projects: {
    title: 'Projets',
    intro:
      "Trois angles sur la même discipline : simulation statistique, analyse de performance sportive, et outils d'aide à la décision.",
    cards: [
      {
        key: 'cdm2026',
        featured: true,
        status: 'live',
        emoji: '🏆',
        title: 'Coupe du Monde 2026 : combien de points pour se qualifier ?',
        description:
          "Le premier Mondial à 48 équipes rebat les cartes pour les troisièmes de groupe. J'ai simulé 50 000 phases de groupes pour chiffrer un seuil que personne n'avait calculé : parfois, une seule victoire suffit à qualifier.",
        tech: ['Python', 'NumPy', 'Monte Carlo', 'Simulation'],
        linkLabel: 'Découvrir le projet',
        githubUrl: 'https://github.com/kayouba/cdm2026-troisiemes',
      },
      {
        key: 'underperformance',
        featured: true,
        status: 'live',
        emoji: '⚽',
        title: '« Si tu ne marques pas, tu encaisses » : mythe ou réalité ?',
        description:
          "Test statistique du dicton le plus répété du football, sur 70 000 tirs et 10 compétitions. Sept méthodes croisées, de l'event study au modèle nul bayésien. Verdict : le mythe ne résiste pas aux données.",
        tech: ['Python', 'Pandas', 'StatsBomb', 'Statistiques'],
        linkLabel: 'Découvrir le projet',
        githubUrl: 'https://github.com/kayouba/football-underperformance',
      },
      {
        key: 'f1',
        featured: true,
        status: 'live',
        emoji: '🏎️',
        title: 'F1 : mesurer le déclin du spectacle',
        description:
          "Un indice composite pour suivre, saison après saison, la prévisibilité de la F1 depuis 2008 — pensé pour distinguer l'impression du fan d'une tendance mesurable dans les données.",
        tech: ['Python', 'Streamlit', 'Plotly', 'Analyse de tendance'],
        linkLabel: 'Découvrir le projet',
        githubUrl: 'https://github.com/kayouba/f1-analysis',
      },
      {
        key: 'powerbi',
        featured: false,
        status: 'soon',
        emoji: '📊',
        title: 'Dashboard Power BI',
        description:
          "Visualisation interactive d'un jeu de données publiques pour faciliter la prise de décision : KPIs dynamiques, filtres et analyses prédictives.",
        tech: ['Power BI', 'DAX', 'ETL'],
        linkLabel: 'En développement',
      },
    ],
  },
  about: {
    title: 'À propos de moi',
    intro:
      'Diplômé du Master MIAGE, je combine rigueur technique et vision business pour transformer des données en décisions.',
    badge: 'Disponible immédiatement',
    bio: "Diplômé du Master MIAGE de l'Université de Bordeaux (2025), je me spécialise en analyse de données, automatisation et développement logiciel. Mon alternance chez Sopra Steria et mon expérience internationale chez CMA CGM m'ont appris à livrer des solutions qui tiennent en production — pas seulement dans un notebook.",
    stats: [
      { number: '1,5', label: 'an en alternance' },
      { number: '3', label: 'projets data publiés' },
      { number: '985', label: 'TOEIC / 990' },
    ],
    experienceTitle: 'Parcours professionnel',
    experience: [
      {
        org: 'Sopra Steria',
        role: 'Alternant Ingénieur Logiciel / Développeur',
        place: 'Bordeaux',
        dates: 'Mai 2023 – Septembre 2025',
        bullets: [
          "Développement d'applications web métier, front et back",
          "Maintenance de plus de 80 applications VBA d'automatisation",
          'Mise en place de tests automatisés avec UiPath',
          'Travail en méthodologie Agile / Scrum',
        ],
        tags: ['Angular', 'Python', 'VBA', 'UiPath'],
      },
      {
        org: 'CMA CGM',
        role: 'Assistant Chef de Projet',
        place: 'Nouakchott, Mauritanie',
        dates: 'Avril 2023 – Juillet 2023',
        bullets: [
          "Déploiement d'une solution de paiement électronique",
          'Digitalisation des processus clients',
          'Analyse de données pour soutenir la croissance de part de marché',
        ],
        tags: ['Data Analysis', 'Gestion de projet', 'FinTech'],
      },
    ],
    educationTitle: 'Formation',
    education: [
      {
        org: 'Master MIAGE',
        role: 'Diplômé',
        place: 'Université de Bordeaux',
        dates: '2023 – 2025',
        bullets: [
          'Spécialisation : Méthodes Informatiques Appliquées à la Gestion des Entreprises',
          'Cours clés : processus stochastiques, simulation, SGBD, statistiques, POO, recherche opérationnelle, gestion de projet, machine learning, big data, business intelligence',
        ],
        tags: [],
      },
    ],
  },
  skills: {
    title: 'Compétences',
    intro: "Les outils que j'utilise au quotidien, du traitement de la donnée à la mise en production.",
    categories: [
      {
        title: 'Data & Analyse',
        tags: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'SQL', 'Statistiques', 'Power BI', 'Machine Learning'],
      },
      {
        title: 'Développement',
        tags: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'VBA', 'HTML / CSS', 'JavaScript'],
      },
      {
        title: 'Outils & Méthodes',
        tags: ['Git & GitHub', 'Jupyter', 'UiPath (RPA)', 'Agile / Scrum', 'Jira', 'StatsBomb', 'Streamlit', 'Excel avancé'],
      },
    ],
  },
  certifications: {
    title: 'Certifications',
    intro: 'Une formation validée par des résultats concrets, pas seulement par des cours suivis.',
    obtainedTitle: 'Certifications obtenues',
    obtained: [
      { title: 'Master MIAGE', detail: 'Université de Bordeaux — 2025' },
      { title: 'TOEIC 985/990', detail: 'Niveau C1 — Anglais professionnel' },
      { title: 'Duolingo English Test', detail: 'Score : 135/160' },
    ],
  },
  cv: {
    title: 'Documentation',
    intro: 'Téléchargez mon CV pour une vue détaillée de mon parcours et de mes compétences.',
    cardTitle: 'Disponible en deux langues',
    cardText: 'CV adapté selon vos besoins, en français ou en anglais.',
    frLabel: 'CV Français',
    enLabel: 'Resume (EN)',
  },
  contact: {
    title: 'Prenons contact',
    intro: 'Intéressé par mon profil ? Je suis disponible immédiatement pour de nouvelles opportunités.',
    connectTitle: 'Connectons-nous',
    connectText:
      "Je suis toujours ouvert aux discussions sur les projets data, l'automatisation et les opportunités de collaboration.",
    methods: [
      { label: 'Email', value: 'kayouba818@gmail.com', href: 'mailto:kayouba818@gmail.com' },
      { label: 'LinkedIn', value: 'linkedin.com/in/kayouba', href: 'https://www.linkedin.com/in/kayouba' },
      { label: 'GitHub', value: 'github.com/kayouba', href: 'https://github.com/kayouba' },
    ],
    ctaTitle: 'Travaillons ensemble',
    ctaText: 'Un projet data ambitieux ? Besoin d\'un développeur polyvalent ? Discutons de vos besoins.',
    ctaButton: 'Envoyer un message',
  },
  footer: {
    text: '© 2026 Kayou Ba — Data Analyst & Développeur',
  },
};
