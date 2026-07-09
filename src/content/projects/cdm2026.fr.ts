export const cdm2026Fr = {
  eyebrow: 'Étude de format · Simulation Monte Carlo',
  title: 'Coupe du Monde 2026 : une seule victoire peut suffire',
  subtitle:
    "Le premier Mondial à 48 équipes change les règles pour les troisièmes de groupe. J'ai simulé 50 000 phases de groupes pour chiffrer un seuil que le règlement ne donne pas explicitement : combien de points faut-il pour être repêché ?",
  heroStats: [
    { value: '50 000', label: 'phases de groupes simulées' },
    { value: '48', label: 'équipes, 12 groupes' },
    { value: '8 / 12', label: 'troisièmes repêchés' },
  ],
  context: {
    title: 'Le contexte',
    heading: 'Un nouveau format, une question sans réponse',
    paragraphs: [
      "À partir de 2026, la Coupe du Monde passe de 32 à 48 équipes réparties en 12 groupes de 4. Les deux premiers de chaque groupe se qualifient directement, et les 8 meilleurs troisièmes sur 12 sont repêchés pour compléter le tableau des 32.",
      "Le règlement FIFA fixe les critères de départage (points, différence de buts, buts marqués), mais ne dit rien du niveau de points qu'il faut viser pour avoir de bonnes chances d'être repêché. C'est cette question, très concrète pour n'importe quel sélectionneur ou supporter, que ce projet cherche à chiffrer.",
    ],
  },
  result: {
    title: 'Le résultat',
    heading: 'Des seuils nets',
    intro:
      "Sur 50 000 phases de groupes simulées, la probabilité d'être repêché comme meilleur troisième dépend presque entièrement du nombre de points obtenus :",
    bars: [
      { points: '4 points', detail: '1 victoire + 1 nul', probability: 99, status: 'good' as const },
      { points: '3 points', detail: '1 victoire, 2 défaites', probability: 57, status: 'warning' as const },
      { points: '2 points', detail: '2 nuls, 1 défaite', probability: 2, status: 'critical' as const },
    ],
    conclusion:
      "Le résultat surprenant : sur trois matchs de groupe, une seule victoire — même accompagnée de deux défaites — suffit statistiquement, une fois sur deux, à décrocher une place en huitièmes de finale. À l'inverse, deux matchs nuls et une défaite (2 points) ne suffisent presque jamais.",
  },
  method: {
    title: 'La méthode',
    heading: 'Une simulation volontairement neutre',
    intro:
      "L'objectif n'était pas de prédire quelles équipes se qualifieront, mais de mesurer, pour un niveau de points donné, la probabilité de qualification — indépendamment de la force de l'équipe.",
    steps: [
      {
        title: 'Modèle de match neutre',
        text: "Chaque match est simulé avec des probabilités symétriques (~38 % de victoire pour chaque équipe, ~24 % de nul), calibrées sur les fréquences historiques en Coupe du Monde plutôt que sur un classement FIFA.",
      },
      {
        title: '12 groupes, 50 000 tirages',
        text: '50 000 phases de groupes complètes sont simulées, chacune générant 12 classements de groupe indépendants.',
      },
      {
        title: 'Classement des troisièmes',
        text: 'Les 12 troisièmes de chaque tirage sont classés selon les critères FIFA (points, différence de buts, buts marqués) pour déterminer les 8 repêchés.',
      },
      {
        title: 'Agrégation par niveau de points',
        text: "Pour chaque total de points possible (0 à 7), je calcule la fréquence à laquelle une équipe à ce niveau termine parmi les 8 repêchés.",
      },
    ],
  },
  reflection: {
    title: 'La réflexion',
    heading: "Et l'équité dans tout ça ?",
    text: "Ce format à 48 équipes est débattu : il ouvre la compétition à davantage de nations, mais dilue aussi la valeur d'un match de groupe raté. Ce projet ne prend pas position sur ce débat — il donne simplement un chiffre concret à ceux qui le mènent : avec ce format, une phase de groupes clémente peut suffire à se qualifier sans dominer son groupe.",
  },
  stackTitle: 'Stack technique',
  stack: ['Python', 'NumPy', 'pandas', 'Monte Carlo', 'Matplotlib', 'Jupyter', 'pytest'],
  source: 'Règlement officiel FIFA — Coupe du Monde 2026',
  githubUrl: 'https://github.com/kayouba/cdm2026-troisiemes',
  ctaLabel: 'Voir le code sur GitHub',
};
