import { getTranslations } from 'next-intl/server';

export async function Hero() {
  const t = await getTranslations('hero');
  const roles = t.raw('roles') as string[];
  const signals = t.raw('signals') as { label: string; value: string }[];

  return (
    <section className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8 sm:pt-20">
      <span className="mb-4 block font-mono text-[0.78rem] uppercase tracking-[0.1em] text-accent">
        {t('eyebrow')}
      </span>
      <h1 className="font-display text-[clamp(3.2rem,9vw,6.5rem)] leading-[0.86] tracking-[0.005em] text-balance">
        {t('name')}
      </h1>
      <p className="mt-4 font-mono text-[0.95rem] text-sub">
        {roles.map((role, i) => (
          <span key={role}>
            {i === 0 ? <b className="font-semibold text-accent">{role}</b> : role}
            {i < roles.length - 1 ? ' · ' : ''}
          </span>
        ))}
      </p>
      <p className="mt-6 max-w-[46ch] text-[1.1rem] leading-relaxed text-ink/80">{t('pitch')}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-sm bg-accent px-6 py-3 font-mono text-[0.82rem] font-bold uppercase tracking-wide text-accent-ink transition-transform duration-150 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
        >
          {t('ctaPrimary')}
        </a>
        <a
          href="/Kayou_BA_CV.pdf"
          className="rounded-sm border border-ink px-6 py-3 font-mono text-[0.82rem] font-bold uppercase tracking-wide text-ink transition-all duration-150 hover:bg-surface active:scale-[0.98]"
        >
          {t('ctaSecondary')}
        </a>
      </div>

      <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
        {signals.map((signal) => (
          <div key={signal.label} className="bg-surface px-5 py-4">
            <dt className="font-mono text-[0.68rem] uppercase tracking-wide text-sub">{signal.label}</dt>
            <dd className="mt-1 font-mono text-[0.95rem] font-semibold text-ink">{signal.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
