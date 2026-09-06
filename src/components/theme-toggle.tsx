'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle({ lightLabel, darkLabel }: { lightLabel: string; darkLabel: string }) {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'light' || current === 'dark') {
      setTheme(current);
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? lightLabel : darkLabel}
      className="font-mono text-[0.7rem] uppercase tracking-wider border border-border rounded-sm px-3 py-2.5 text-sub transition-colors hover:border-ink hover:text-ink active:scale-95"
    >
      {theme === 'dark' ? lightLabel : darkLabel}
    </button>
  );
}
