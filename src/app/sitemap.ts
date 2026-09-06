import type { MetadataRoute } from 'next';
import { projects } from '#site/content';

const site = 'https://kayouba.pro';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    { fr: '/', en: '/en' },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map(({ fr, en }) => ({
    url: `${site}${fr}`,
    alternates: { languages: { fr: `${site}${fr}`, en: `${site}${en}` } },
  }));

  const slugs = [...new Set(projects.map((p) => p.slug))];
  for (const slug of slugs) {
    entries.push({
      url: `${site}/projects/${slug}`,
      alternates: {
        languages: {
          fr: `${site}/projects/${slug}`,
          en: `${site}/en/projects/${slug}`,
        },
      },
    });
  }

  return entries;
}
