import { getTranslations } from 'next-intl/server';

export async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-[0.8rem] text-sub sm:px-8">
        <p>{t('text')}</p>
        <div className="flex gap-4">
          <a href="https://github.com/kayouba" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-ink">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kayouba" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-ink">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
