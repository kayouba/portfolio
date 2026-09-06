import { getTranslations } from 'next-intl/server';

export async function SkillsSection() {
  const t = await getTranslations('skills');
  const categories = t.raw('categories') as { title: string; tags: string[] }[];

  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="reveal">
          <span className="mb-3 block font-mono text-[0.75rem] uppercase tracking-[0.1em] text-accent">
            {t('eyebrow')}
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.95]">{t('title')}</h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className="reveal bg-surface px-6 py-6">
              <h3 className="font-mono text-[0.78rem] font-semibold uppercase tracking-wide text-accent">{category.title}</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {category.tags.map((tag) => (
                  <li key={tag} className="text-[0.92rem] text-ink/85">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
