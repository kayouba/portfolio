import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export async function AboutSection() {
  const t = await getTranslations('about');
  const stats = t.raw('stats') as { value: string; unit: string; label: string }[];

  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.42fr_1fr]">
        <div className="reveal lg:sticky lg:top-24 lg:self-start">
          <div className="w-40 overflow-hidden rounded-sm border border-border sm:w-48">
            <Image
              src="/portrait.jpg"
              alt="Portrait de Kayou Ba"
              width={591}
              height={591}
              className="h-auto w-full grayscale-[15%]"
              sizes="192px"
            />
          </div>
          <span className="mt-4 inline-block rounded-full border border-border bg-surface px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wide text-sub">
            {t('badge')}
          </span>
        </div>

        <div className="reveal">
          <span className="mb-3 block font-mono text-[0.75rem] uppercase tracking-[0.1em] text-accent">
            {t('eyebrow')}
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.95] text-balance">{t('title')}</h2>
          <p className="mt-6 max-w-[62ch] text-[1.05rem] leading-relaxed text-ink/80">{t('bio')}</p>

          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse bg-surface px-4 py-4 sm:px-5 sm:py-5">
                <dt className="mt-2 font-mono text-[0.68rem] uppercase tracking-wide text-sub">{stat.label}</dt>
                <dd className="tabular-nums font-mono text-[clamp(1.4rem,3vw,2.2rem)] font-bold leading-none text-accent">
                  {stat.value}
                  <span className="text-[0.85rem] font-medium text-sub">{stat.unit}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
