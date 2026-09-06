import { getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ThemeToggle } from './theme-toggle';

export async function Header() {
  const t = await getTranslations('nav');
  const theme = await getTranslations('theme');
  const locale = await getLocale();
  const otherLocale = locale === 'fr' ? 'en' : 'fr';

  const links = [
    { href: '/#about', label: t('about') },
    { href: '/#experience', label: t('experience') },
    { href: '/#projects', label: t('projects') },
    { href: '/#skills', label: t('skills') },
    { href: '/#contact', label: t('contact') },
  ];

  return (
    <header className="site-header sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-display text-2xl tracking-wide">
          KAYOU BA
        </Link>
        <nav aria-label="Navigation principale" className="hidden gap-6 font-mono text-[0.78rem] uppercase tracking-wider text-sub md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="link-underline transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            locale={otherLocale}
            className="font-mono text-[0.7rem] font-semibold uppercase tracking-wider border border-border rounded-sm px-3 py-2.5 text-sub transition-colors hover:border-ink hover:text-ink active:scale-95"
          >
            {t('langSwitch')}
          </Link>
          <ThemeToggle lightLabel={theme('light')} darkLabel={theme('dark')} />
          <details className="group relative md:hidden">
            <summary
              aria-label={t('menuLabel')}
              className="flex h-11 w-11 list-none items-center justify-center rounded-sm border border-border [&::-webkit-details-marker]:hidden"
            >
              <span className="flex flex-col gap-1">
                <span className="h-px w-4 bg-ink" />
                <span className="h-px w-4 bg-ink" />
                <span className="h-px w-4 bg-ink" />
              </span>
            </summary>
            <nav
              aria-label="Navigation mobile"
              className="absolute right-0 top-[calc(100%+0.5rem)] flex w-52 flex-col gap-1 rounded-sm border border-border bg-surface p-3 font-mono text-[0.85rem] uppercase tracking-wider text-sub shadow-sm"
            >
              {links.map((link) => (
                <a key={link.href} href={link.href} className="rounded-sm px-3 py-3 transition-colors hover:bg-bg hover:text-ink">
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
