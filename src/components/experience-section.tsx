import { getTranslations } from 'next-intl/server';

type Entry = {
  org: string;
  role: string;
  place: string;
  dates: string;
  bullets: string[];
  tags: string[];
};

export async function ExperienceSection() {
  const t = await getTranslations('experience');
  const items = t.raw('items') as Entry[];

  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="reveal">
          <span className="mb-3 block font-mono text-[0.75rem] uppercase tracking-[0.1em] text-accent">
            {t('eyebrow')}
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.95]">{t('title')}</h2>
        </div>

        <ol className="mt-12 flex flex-col gap-10">
          {items.map((entry) => (
            <li key={`${entry.org}-${entry.dates}`} className="reveal grid gap-2 border-t border-border pt-8 first:border-t-0 first:pt-0 sm:grid-cols-[200px_1fr]">
              <div className="font-mono text-[0.8rem] text-sub">{entry.dates}</div>
              <div>
                <h3 className="font-display text-[1.4rem] leading-tight">{entry.org}</h3>
                <p className="mt-1 text-[0.95rem] text-sub">
                  {entry.role} — {entry.place}
                </p>
                {entry.bullets.length > 0 && (
                  <ul className="mt-4 flex flex-col gap-2">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-[0.95rem] leading-relaxed text-ink/80">
                        <span aria-hidden="true" className="text-accent">
                          —
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {entry.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-[0.72rem] text-sub">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
