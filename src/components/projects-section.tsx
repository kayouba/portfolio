import Image from 'next/image';
import { getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { projects } from '#site/content';

export async function ProjectsSection() {
  const t = await getTranslations('projects');
  const locale = await getLocale();
  const teasers = t.raw('teasers') as { title: string; description: string; tech: string[]; githubUrl: string }[];
  const soon = t.raw('soonCard') as { title: string; description: string; tech: string[]; status: string };

  const published = projects
    .filter((p) => p.locale === locale)
    .sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="reveal">
          <span className="mb-3 block font-mono text-[0.75rem] uppercase tracking-[0.1em] text-accent">
            {t('eyebrow')}
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.95]">{t('title')}</h2>
          <p className="mt-4 max-w-[60ch] text-[1.02rem] leading-relaxed text-ink/80">{t('intro')}</p>
        </div>

        <div className="mt-12 flex flex-col gap-14">
          {published.map((project, i) => (
            <article key={project.slugLocale} className="reveal border-t border-border pt-10 first:border-t-0 first:pt-0">
              <span className="mb-3 block font-mono text-[0.72rem] uppercase tracking-[0.1em] text-sub">
                {t('numberPrefix')} {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="max-w-[22ch] font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.02] text-balance">
                {project.title}
              </h3>
              <p className="mt-4 max-w-[56ch] text-[1rem] leading-relaxed text-ink/80">{project.chapo}</p>

              <div className="mt-7 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
                {project.heroStats.map((stat) => (
                  <div key={stat.label} className="bg-surface px-5 py-4">
                    <div className="tabular-nums font-mono text-[clamp(1.7rem,3.6vw,2.4rem)] font-bold leading-none text-accent">
                      {stat.value}
                    </div>
                    <div className="mt-2 font-mono text-[0.68rem] uppercase tracking-wide text-sub">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="figure-frame mt-8">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  placeholder="blur"
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 1024px, 100vw"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-[0.72rem] text-sub">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-5 font-mono text-[0.85rem]">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arrow-link link-underline font-semibold text-accent"
                    >
                      <span className="arrow-glyph" aria-hidden="true">
                        →
                      </span>{' '}
                      {t('visitDemo')}
                    </a>
                  )}
                  <Link href={`/projects/${project.slug}`} className="arrow-link link-underline font-semibold text-accent">
                    <span className="arrow-glyph" aria-hidden="true">
                      →
                    </span>{' '}
                    {t('readMore')}
                  </Link>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arrow-link link-underline font-semibold text-accent"
                    >
                      <span className="arrow-glyph" aria-hidden="true">
                        →
                      </span>{' '}
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          {teasers.map((teaser) => (
            <article key={teaser.title} className="reveal border-t border-border pt-10 opacity-80">
              <span className="mb-3 inline-block rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wide text-sub">
                {t('draftBadge')}
              </span>
              <h3 className="max-w-[26ch] font-display text-[clamp(1.5rem,2.8vw,2rem)] leading-[1.05] text-balance">
                {teaser.title}
              </h3>
              <p className="mt-3 max-w-[56ch] text-[0.95rem] leading-relaxed text-ink/70">{teaser.description}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {teaser.tech.map((tag) => (
                    <span key={tag} className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-[0.72rem] text-sub">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={teaser.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link link-underline font-mono text-[0.85rem] font-semibold text-accent"
                >
                  <span className="arrow-glyph" aria-hidden="true">
                    →
                  </span>{' '}
                  GitHub
                </a>
              </div>
            </article>
          ))}

          <article className="reveal border-t border-border pt-10 opacity-60">
            <span className="mb-3 inline-block rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wide text-sub">
              {soon.status}
            </span>
            <h3 className="max-w-[26ch] font-display text-[clamp(1.5rem,2.8vw,2rem)] leading-[1.05] text-balance">{soon.title}</h3>
            <p className="mt-3 max-w-[56ch] text-[0.95rem] leading-relaxed text-ink/70">{soon.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {soon.tech.map((tag) => (
                <span key={tag} className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-[0.72rem] text-sub">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
