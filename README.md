# kayouba.pro

Portfolio de Kayou Ba — Data Analyst & Développeur. Next.js (App Router) + TypeScript + Tailwind v4, bilingue FR/EN, contenu en Content Collections (Velite).

## Stack

- **Next.js 15** (App Router, React Server Components) — zéro JS client par défaut, sauf le sélecteur de langue (server-only, aucun JS requis) et le toggle de thème (client, minimal)
- **next-intl** pour le routing i18n — `/` en français (défaut), `/en` en anglais
- **Velite** pour les Content Collections des projets (Markdown + frontmatter typé, validé par schéma Zod)
- **Tailwind CSS v4**

## Lancer en local

```bash
npm install
npm run dev
```

Le site tourne sur [http://localhost:3000](http://localhost:3000).

Autres commandes utiles :

```bash
npm run build       # build de production
npm run start        # sert le build de production en local
npm run typecheck    # vérification TypeScript
npm run lint          # ESLint
```

## Modifier le contenu

### Texte du site (hero, à propos, compétences, expérience, contact…)

Tout est dans `messages/fr.json` et `messages/en.json`. Chaque section a sa clé (`hero`, `about`, `experience`, `skills`, `contact`…). Modifier le texte ici ne touche à aucun composant.

### Ajouter ou modifier un projet

Les projets vivent dans `content/projects/`, un fichier Markdown par langue :

```
content/projects/
  mon-projet.fr.md
  mon-projet.en.md
  images/
    mon-projet.png
```

Chaque fichier a un frontmatter typé (validé par `velite.config.ts`) :

```yaml
---
slug: mon-projet          # identique en FR et EN, sert à faire le lien entre les deux langues
locale: fr                 # ou en
order: 4                   # ordre d'affichage dans la liste
title: "Titre accrocheur : la question posée"
chapo: "2 phrases max — le point de départ et pourquoi."
heroStats:
  - value: "1 234"
    label: "unité de la première statistique"
  - value: "56 %"
    label: "deuxième statistique"
  - value: "0,89"
    label: "troisième statistique"
image: ./images/mon-projet.png
imageAlt: "Description factuelle de ce que montre l'image"
stack: ["Python", "pandas"]
links:
  github: "https://github.com/..."
  demo: "https://..."        # optionnel — devient le CTA principal du projet s'il est présent
---

Le corps du texte, en Markdown, 3 à 4 paragraphes : la démarche, puis le résultat et ce qu'il implique.
```

Le fichier `.fr.md` / `.en.md` avec le même `slug` forme les deux langues du même projet. La page (`/projects/[slug]`) et la carte sur la page d'accueil se génèrent automatiquement — rien à toucher dans le code.

Après une modification, Velite se relance automatiquement en dev (`npm run dev`). En dehors du dev server, régénérer la sortie avec :

```bash
npx velite build
```

### Ajouter un projet "en préparation" (sans page dédiée)

Les projets sans page complète (juste une carte teaser) sont dans `messages/fr.json` / `messages/en.json`, sous `projects.teasers`.

## Déployer sur Vercel

1. Connecter le dépôt GitHub à un projet Vercel (Framework Preset : Next.js, détecté automatiquement)
2. Aucune variable d'environnement n'est requise
3. Domaine personnalisé : pointer `kayouba.pro` vers Vercel dans les réglages du projet — **le domaine était configuré sur Netlify (`netlify.toml` supprimé de ce dépôt), il faut migrer le DNS avant de couper Netlify** pour éviter une coupure
4. Chaque push sur `main` redéploie automatiquement

## Structure

```
src/
  app/[locale]/          # pages (accueil, /projects/[slug])
  components/             # composants React (Header, Hero, sections…)
  i18n/                    # config next-intl
content/projects/         # contenu des projets (Markdown + images)
messages/                 # texte du site par langue (JSON)
public/                    # assets statiques (CV, portrait, favicon, image OG)
```
