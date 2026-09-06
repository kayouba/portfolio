import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { projects } from '#site/content';

export function generateStaticParams() {
  return projects.map((project) => ({ locale: project.locale, slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.locale === locale && p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Kayou Ba`,
    description: project.chapo,
    openGraph: {
      title: project.title,
      description: project.chapo,
      images: [{ url: `https://kayouba.pro${project.image.src}`, width: project.image.width, height: project.image.height }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = projects.find((p) => p.locale === locale && p.slug === slug);
  if (!project) notFound();

  const t = await getTranslations('projects');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.title,
    description: project.chapo,
    image: `https://kayouba.pro${project.image.src}`,
    inLanguage: locale,
    author: { '@type': 'Person', name: 'Kayou Ba', url: 'https://kayouba.pro' },
    url: `https://kayouba.pro${locale === 'en' ? '/en' : ''}/projects/${project.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="reading-progress" aria-hidden="true" />
      <Header />
      <main>
        <article className="mx-auto max-w-3xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
          <Link href="/#projects" className="arrow-link-left link-underline font-mono text-[0.8rem] text-sub hover:text-ink">
            <span className="arrow-glyph" aria-hidden="true">
              ←
            </span>{' '}
            {t('eyebrow')}
          </Link>

          <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,4rem)] leading-[0.95] text-balance">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[60ch] text-[1.1rem] leading-relaxed text-ink/80">{project.chapo}</p>

          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
            {project.heroStats.map((stat) => (
              <div key={stat.label} className="bg-surface px-5 py-4">
                <div className="tabular-nums font-mono text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-none text-accent">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-[0.7rem] uppercase tracking-wide text-sub">{stat.label}</div>
              </div>
            ))}
          </div>

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-sm bg-accent px-6 py-3 font-mono text-[0.82rem] font-bold uppercase tracking-wide text-accent-ink transition-transform duration-150 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
            >
              {t('visitDemo')}
            </a>
          )}

          <div className="reveal mt-10 overflow-hidden rounded-sm border border-border">
            <Image
              src={project.image}
              alt={project.imageAlt}
              placeholder="blur"
              className="h-auto w-full"
              priority
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>

          <div
            className="reveal prose-content mt-10 max-w-[65ch] text-[1.02rem] leading-[1.75] text-ink/85 [&>p]:mb-5"
            dangerouslySetInnerHTML={{ __html: project.body }}
          />

          {project.methodSteps && project.methodSteps.length > 0 && (
            <div className="reveal mt-14 border-t border-border pt-10">
              {project.methodTitle && (
                <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight">{project.methodTitle}</h2>
              )}
              <ol className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {project.methodSteps.map((step, i) => (
                  <li key={step.title} className="rounded-sm border border-border bg-surface px-5 py-5">
                    <span className="tabular-nums mb-3 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-bg font-mono text-[0.78rem] font-bold text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[0.98rem] font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink/75">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {project.extraStats && project.extraStats.length > 0 && (
            <div className="reveal mt-14 border-t border-border pt-10">
              {project.extraStatsTitle && (
                <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight">{project.extraStatsTitle}</h2>
              )}
              <div className="mt-7 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
                {project.extraStats.map((stat) => (
                  <div key={stat.label} className="bg-surface px-5 py-4">
                    <div className="tabular-nums font-mono text-[clamp(1.5rem,3vw,2rem)] font-bold leading-none text-accent">
                      {stat.value}
                    </div>
                    <div className="mt-2 font-mono text-[0.68rem] uppercase tracking-wide text-sub">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.figures && project.figures.length > 0 && (
            <div className="mt-14 border-t border-border pt-10">
              {project.figuresTitle && (
                <h2 className="reveal font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight">{project.figuresTitle}</h2>
              )}
              <div className="mt-7 flex flex-col gap-10">
                {project.figures.map((figure, i) => (
                  <figure key={i} className="reveal">
                    <div className="overflow-hidden rounded-sm border border-border">
                      <Image
                        src={figure.image}
                        alt={figure.imageAlt}
                        placeholder="blur"
                        className="h-auto w-full"
                        sizes="(min-width: 768px) 768px, 100vw"
                      />
                    </div>
                    {figure.caption && (
                      <figcaption className="mt-3 max-w-[65ch] text-[0.88rem] leading-relaxed text-sub">{figure.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-[0.72rem] text-sub">
                  {tag}
                </span>
              ))}
            </div>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link link-underline font-mono text-[0.85rem] font-semibold text-accent"
              >
                <span className="arrow-glyph" aria-hidden="true">
                  →
                </span>{' '}
                GitHub
              </a>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
