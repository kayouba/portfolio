import { defineConfig, defineCollection, s } from 'velite';

const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/*.md',
  schema: s
    .object({
      slug: s.string(),
      locale: s.enum(['fr', 'en']),
      order: s.number(),
      title: s.string(),
      chapo: s.string(),
      heroStats: s.array(
        s.object({
          value: s.string(),
          label: s.string(),
        })
      ),
      image: s.image(),
      imageAlt: s.string(),
      stack: s.array(s.string()),
      links: s.object({
        github: s.string().optional(),
        demo: s.string().optional(),
      }),
      body: s.markdown(),
      methodTitle: s.string().optional(),
      methodSteps: s
        .array(
          s.object({
            title: s.string(),
            text: s.string(),
          })
        )
        .optional(),
      extraStatsTitle: s.string().optional(),
      extraStats: s
        .array(
          s.object({
            value: s.string(),
            label: s.string(),
          })
        )
        .optional(),
      figuresTitle: s.string().optional(),
      figures: s
        .array(
          s.object({
            image: s.image(),
            imageAlt: s.string(),
            caption: s.string().optional(),
          })
        )
        .optional(),
    })
    .transform((data) => ({
      ...data,
      slugLocale: `${data.slug}.${data.locale}`,
    })),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { projects },
});
