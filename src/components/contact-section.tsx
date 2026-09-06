import { getTranslations } from 'next-intl/server';

export async function ContactSection() {
  const t = await getTranslations('contact');
  const certT = await getTranslations('certifications');
  const items = certT.raw('items') as { title: string; detail: string }[];

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <span className="mb-3 block font-mono text-[0.75rem] uppercase tracking-[0.1em] text-accent">
            {t('eyebrow')}
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.95]">{t('title')}</h2>
          <p className="mt-5 max-w-[56ch] text-[1.02rem] leading-relaxed text-ink/80">{t('intro')}</p>

          <a
            href={`mailto:${t('email')}`}
            className="mt-8 inline-flex rounded-sm bg-accent px-6 py-3 font-mono text-[0.82rem] font-bold uppercase tracking-wide text-accent-ink transition-transform duration-150 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
          >
            {t('ctaButton')}
          </a>

          <dl className="mt-10 flex flex-col gap-4 border-t border-border pt-8 font-mono text-[0.92rem]">
            <div className="flex items-baseline gap-3">
              <dt className="w-20 shrink-0 text-sub">Email</dt>
              <dd>
                <a href={`mailto:${t('email')}`} className="link-underline text-accent">
                  {t('email')}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline gap-3">
              <dt className="w-20 shrink-0 text-sub">LinkedIn</dt>
              <dd>
                <a href={t('linkedinUrl')} target="_blank" rel="noopener noreferrer" className="link-underline text-accent">
                  {t('linkedin')}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline gap-3">
              <dt className="w-20 shrink-0 text-sub">GitHub</dt>
              <dd>
                <a href={t('githubUrl')} target="_blank" rel="noopener noreferrer" className="link-underline text-accent">
                  {t('github')}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="reveal">
          <span className="mb-3 block font-mono text-[0.75rem] uppercase tracking-[0.1em] text-accent">
            {certT('eyebrow')}
          </span>
          <h3 className="font-display text-[1.6rem]">{certT('title')}</h3>
          <ul className="mt-5 flex flex-col gap-4">
            {items.map((item) => (
              <li key={item.title} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                <div className="text-[0.98rem] font-semibold">{item.title}</div>
                <div className="text-[0.88rem] text-sub">{item.detail}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
