export interface NavContent {
  brand: string;
  links: { label: string; href: string }[];
  langSwitchLabel: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  roles: string[];
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  signals: { label: string; value: string }[];
}

export interface ProjectCardContent {
  key: string;
  featured: boolean;
  status: 'live' | 'soon';
  emoji: string;
  title: string;
  description: string;
  tech: string[];
  linkLabel: string;
  githubUrl?: string;
}

export interface ProjectsSectionContent {
  title: string;
  intro: string;
  cards: ProjectCardContent[];
}

export interface TimelineEntry {
  org: string;
  role: string;
  place: string;
  dates: string;
  bullets: string[];
  tags: string[];
}

export interface AboutContent {
  title: string;
  intro: string;
  badge: string;
  bio: string;
  stats: { number: string; label: string }[];
  experienceTitle: string;
  experience: TimelineEntry[];
  educationTitle: string;
  education: TimelineEntry[];
}

export interface SkillsContent {
  title: string;
  intro: string;
  categories: { title: string; tags: string[] }[];
}

export interface CertItem {
  title: string;
  detail: string;
}

export interface CertificationsContent {
  title: string;
  intro: string;
  obtainedTitle: string;
  obtained: CertItem[];
}

export interface CvContent {
  title: string;
  intro: string;
  cardTitle: string;
  cardText: string;
  frLabel: string;
  enLabel: string;
}

export interface ContactContent {
  title: string;
  intro: string;
  connectTitle: string;
  connectText: string;
  methods: { label: string; value: string; href: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export interface FooterContent {
  text: string;
}

export interface SiteContent {
  meta: { title: string; description: string; keywords: string };
  nav: NavContent;
  hero: HeroContent;
  projects: ProjectsSectionContent;
  about: AboutContent;
  skills: SkillsContent;
  certifications: CertificationsContent;
  cv: CvContent;
  contact: ContactContent;
  footer: FooterContent;
}
