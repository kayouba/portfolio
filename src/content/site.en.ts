import type { SiteContent } from './types';

export const siteEn: SiteContent = {
  meta: {
    title: 'Kayou Ba — Data Analyst & Developer | Portfolio',
    description:
      'Portfolio of Kayou Ba, Data Analyst and developer specialized in Python, SQL, statistical analysis and web development. Passionate about data applied to sport.',
    keywords: 'Kayou Ba, Data Analyst, Data Scientist, Developer, Python, SQL, Sports Analytics, Portfolio, Bordeaux, MIAGE',
  },
  nav: {
    brand: 'Kayou Ba',
    links: [
      { label: 'Projects', href: '#projects' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Resume', href: '#cv' },
      { label: 'Contact', href: '#contact' },
    ],
    langSwitchLabel: 'FR',
  },
  hero: {
    eyebrow: 'Data Analyst & Developer · Bordeaux, France',
    title: 'Kayou Ba',
    roles: ['Data Analyst', 'Full-Stack Developer', 'Sports Analytics'],
    description:
      'I analyze data and build the tools that put it to work. From statistical simulation to production applications, with a real appetite for data applied to sport.',
    ctaPrimary: 'See my work',
    ctaSecondary: 'Get in touch',
    signals: [
      { label: 'MSc MIAGE', value: 'University of Bordeaux' },
      { label: 'TOEIC 985/990', value: 'C1 English' },
      { label: 'Available', value: 'immediately' },
    ],
  },
  projects: {
    title: 'Projects',
    intro:
      'Three angles on the same craft: statistical simulation, sports-performance analysis, and decision-support tooling.',
    cards: [
      {
        key: 'cdm2026',
        featured: true,
        status: 'live',
        emoji: '🏆',
        title: '2026 World Cup: how many points does it take to qualify?',
        description:
          "The first 48-team World Cup rewrites the rules for third-place teams. I ran 50,000 simulated group stages to quantify a threshold nobody had calculated: sometimes, a single win is enough to reach the knockout rounds.",
        tech: ['Python', 'NumPy', 'Monte Carlo', 'Simulation'],
        linkLabel: 'Read the write-up',
        githubUrl: 'https://github.com/kayouba/cdm2026-troisiemes',
      },
      {
        key: 'underperformance',
        featured: true,
        status: 'live',
        emoji: '⚽',
        title: '"If you don\'t score, you get scored on": myth or reality?',
        description:
          "A statistical stress-test of football's most-repeated cliché, across 70,000 shots and 10 competitions. Seven cross-checked methods, from event studies to a Bernoulli null model. Verdict: the myth doesn't survive contact with the data.",
        tech: ['Python', 'Pandas', 'StatsBomb', 'Statistics'],
        linkLabel: 'Read the write-up',
        githubUrl: 'https://github.com/kayouba/football-underperformance',
      },
      {
        key: 'f1',
        featured: true,
        status: 'live',
        emoji: '🏎️',
        title: 'Formula 1: measuring the decline of the spectacle',
        description:
          "A composite index tracking F1's predictability season over season since 2008 — built to separate a fan's gut feeling from an actual, measurable trend.",
        tech: ['Python', 'Streamlit', 'Plotly', 'Trend analysis'],
        linkLabel: 'Read the write-up',
        githubUrl: 'https://github.com/kayouba/f1-analysis',
      },
      {
        key: 'powerbi',
        featured: false,
        status: 'soon',
        emoji: '📊',
        title: 'Power BI Dashboard',
        description:
          'Interactive visualization of a public dataset built for decision-making: dynamic KPIs, filters, and predictive views.',
        tech: ['Power BI', 'DAX', 'ETL'],
        linkLabel: 'In progress',
      },
    ],
  },
  about: {
    title: 'About me',
    intro: 'A MIAGE graduate who pairs technical rigor with business judgment to turn data into decisions.',
    badge: 'Available immediately',
    bio: 'I graduated from the MIAGE Master\'s program at the University of Bordeaux (2025), specializing in data analysis, automation, and software development. My apprenticeship at Sopra Steria and international stint at CMA CGM taught me to ship things that hold up in production — not just in a notebook.',
    stats: [
      { number: '1.5', label: 'years in apprenticeship' },
      { number: '3', label: 'published data projects' },
      { number: '985', label: 'TOEIC / 990' },
    ],
    experienceTitle: 'Professional experience',
    experience: [
      {
        org: 'Sopra Steria',
        role: 'Apprentice Software Engineer / Developer',
        place: 'Bordeaux, France',
        dates: 'May 2023 – September 2025',
        bullets: [
          'Built and maintained business-critical web applications, front and back end',
          'Maintained 80+ VBA automation applications',
          'Set up automated testing with UiPath',
          'Worked within an Agile / Scrum team',
        ],
        tags: ['Angular', 'Python', 'VBA', 'UiPath'],
      },
      {
        org: 'CMA CGM',
        role: 'Assistant Project Manager',
        place: 'Nouakchott, Mauritania',
        dates: 'April 2023 – July 2023',
        bullets: [
          'Rolled out an electronic payment solution',
          'Digitized client-facing processes',
          'Analyzed data to support market-share growth',
        ],
        tags: ['Data Analysis', 'Project Management', 'FinTech'],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        org: 'MSc MIAGE',
        role: 'Graduate',
        place: 'University of Bordeaux',
        dates: '2023 – 2025',
        bullets: [
          'Specialization: IT methods applied to business management',
          'Key coursework: stochastic processes, simulation, databases, statistics, OOP, operations research, project management, machine learning, big data, business intelligence',
        ],
        tags: [],
      },
    ],
  },
  skills: {
    title: 'Skills',
    intro: 'The tools I use day to day, from raw data to production.',
    categories: [
      {
        title: 'Data & Analysis',
        tags: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'SQL', 'Statistics', 'Power BI', 'Machine Learning'],
      },
      {
        title: 'Development',
        tags: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'VBA', 'HTML / CSS', 'JavaScript'],
      },
      {
        title: 'Tools & Methods',
        tags: ['Git & GitHub', 'Jupyter', 'UiPath (RPA)', 'Agile / Scrum', 'Jira', 'StatsBomb', 'Streamlit', 'Advanced Excel'],
      },
    ],
  },
  certifications: {
    title: 'Certifications',
    intro: 'Training backed by concrete results, not just completed courses.',
    obtainedTitle: 'Certifications earned',
    obtained: [
      { title: 'MSc MIAGE', detail: 'University of Bordeaux — 2025' },
      { title: 'TOEIC 985/990', detail: 'C1 level — professional English' },
      { title: 'Duolingo English Test', detail: 'Score: 135/160' },
    ],
  },
  cv: {
    title: 'Resume',
    intro: 'Download my resume for a detailed view of my background and skills.',
    cardTitle: 'Available in two languages',
    cardText: 'Resume tailored to your needs, in French or English.',
    frLabel: 'CV (French)',
    enLabel: 'Resume (English)',
  },
  contact: {
    title: "Let's talk",
    intro: "Interested in my profile? I'm available immediately for new opportunities.",
    connectTitle: "Let's connect",
    connectText: 'Always happy to talk about data projects, automation, and collaboration opportunities.',
    methods: [
      { label: 'Email', value: 'kayouba818@gmail.com', href: 'mailto:kayouba818@gmail.com' },
      { label: 'LinkedIn', value: 'linkedin.com/in/kayouba', href: 'https://www.linkedin.com/in/kayouba' },
      { label: 'GitHub', value: 'github.com/kayouba', href: 'https://github.com/kayouba' },
    ],
    ctaTitle: "Let's work together",
    ctaText: "Got an ambitious data project? Need a versatile developer? Let's talk about what you need.",
    ctaButton: 'Send a message',
  },
  footer: {
    text: '© 2026 Kayou Ba — Data Analyst & Developer',
  },
};
