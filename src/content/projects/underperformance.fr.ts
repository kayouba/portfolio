export const underperformanceFr = {
  eyebrow: 'Étude de cas · Football analytics · Statistiques',
  title: '« Si tu ne marques pas, tu encaisses » : le mythe ne résiste pas aux données',
  subtitle:
    "L'adage le plus répété du football, testé sur 70 000 tirs et 10 compétitions avec sept méthodes statistiques indépendantes. Verdict : aucune preuve d'un effet de « punition ».",
  heroStats: [
    { value: '70 399', label: 'tirs analysés' },
    { value: '2 796', label: 'matchs, 10 compétitions' },
    { value: '1958–2024', label: 'période couverte' },
  ],
  verdict: {
    label: 'Verdict',
    value: 'Mythe',
    detail: 'p > 0,05 · modèle nul de Bernoulli · aucun effet significatif détecté',
  },
  problem: {
    title: 'Le problème',
    heading: "Une conviction jamais vérifiée",
    paragraphs: [
      "« Si tu ne marques pas, tu encaisses. » Le commentateur le répète après chaque occasion manquée, comme une loi physique du football. Pourtant, personne ne semble l'avoir testé sérieusement sur des données.",
      "Ce projet part de cette conviction partagée par des générations de supporters et d'entraîneurs, et lui applique le traitement qu'elle n'a jamais reçu : une série de tests statistiques indépendants, conçus pour être difficiles à satisfaire par hasard.",
    ],
  },
  xg: {
    title: 'La métrique clé',
    heading: "Comprendre l'xG (Expected Goals)",
    cards: [
      {
        title: "C'est quoi, concrètement",
        text: "La probabilité qu'un tir donné finisse au fond des filets, calculée à partir de milliers de tirs comparables (distance, angle, type d'action).",
      },
      {
        title: 'Comment on le calcule',
        text: "Un modèle statistique entraîné sur les données StatsBomb attribue une valeur entre 0 et 1 à chaque tir historique, selon ses caractéristiques.",
      },
      {
        title: 'Pourquoi il est utile ici',
        text: "Il permet de définir objectivement une « grosse occasion » (xG ≥ 0,4) plutôt que de se fier à l'impression du commentateur.",
      },
      {
        title: 'Ses limites',
        text: "L'xG ignore le contexte tactique fin (pression défensive, fatigue) — une raison de plus de croiser plusieurs méthodes plutôt que de s'y fier seule.",
      },
    ],
  },
  method: {
    title: 'La méthode',
    heading: 'Sept couches de vérification',
    intro:
      "Un seul test peut mentir. Sept tests indépendants, qui pointent tous dans la même direction, sont beaucoup plus difficiles à ignorer.",
    steps: [
      { title: 'Event study', text: 'Comparaison du taux de but concédé dans les 5, 10 et 15 minutes suivant une occasion manquée vs convertie.' },
      { title: 'Stratification par score', text: "Contrôle de l'état du match (équipe menant, à égalité, menée) pour isoler l'effet réel." },
      { title: 'Test de permutation', text: "10 000 permutations aléatoires pour construire une distribution de référence sous hypothèse nulle." },
      { title: 'Correction multi-tests', text: 'Correction de Benjamini-Hochberg pour éviter les faux positifs liés au grand nombre de comparaisons.' },
      { title: 'Régression logistique', text: 'Erreurs standards clusterisées par match pour ne pas sur-compter les observations corrélées.' },
      { title: 'Validation croisée', text: 'GroupKFold par match, évalué en AUC et Brier score, pour vérifier la robustesse hors échantillon.' },
      { title: 'Modèle nul de Bernoulli', text: '500 simulations d’un monde sans effet de "punition" pour comparer au résultat observé.' },
    ],
  },
  findings: {
    title: 'Résultats',
    heading: 'Cinq découvertes contre-intuitives',
    bigChanceBars: {
      caption: "Taux d'encaissement dans les 10 minutes suivant une occasion nette (xG ≥ 0,4) ou un pénalty",
      groups: [
        {
          label: 'Occasion nette',
          bars: [
            { series: 'missed', value: 9.9 },
            { series: 'scored', value: 9.3 },
          ],
        },
        {
          label: 'Pénalty (n = 658)',
          bars: [
            { series: 'missed', value: 5.2 },
            { series: 'scored', value: 8.7 },
          ],
        },
      ],
    },
    items: [
      {
        title: "Pas de « malédiction » de l'occasion manquée",
        text: 'Le taux de but concédé après une grosse occasion est statistiquement identique, que le tir ait été converti ou raté — voir le graphique ci-dessous.',
      },
      {
        title: 'Rater un pénalty protège, en réalité',
        text: 'Sur 658 pénaltys, le taux d’encaissement suivant est plus faible après un pénalty raté (5,2 %) qu’après un pénalty marqué (8,7 %) — l’inverse du mythe.',
      },
      {
        title: 'Le « siège » ne fait pas céder les défenses',
        text: 'Le risque d’encaisser reste stable autour de 14 %, qu’une équipe ait manqué 0 ou plus de 10 occasions consécutives dans le match.',
        stat: { value: '~14%', label: 'quel que soit le nombre de tirs manqués (0 à 10+)' },
      },
      {
        title: 'Valable sur 10 compétitions et 66 ans',
        text: "En isolant chaque compétition (dont La Liga, Premier League, Serie A, Bundesliga, Ligue 1 et la Coupe du Monde), 7 sur 10 montrent un effet légèrement protecteur, 3 un effet neutre — aucune ne montre d'effet positif significatif.",
        tally: [
          { value: '7 / 10', label: 'effet protecteur' },
          { value: '3 / 10', label: 'effet neutre' },
          { value: '0 / 10', label: 'effet positif (le mythe)' },
        ],
      },
      {
        title: 'Le paradoxe de Simpson en action',
        text: "Au niveau d'une saison, les équipes les plus « gaspilleuses » concèdent un peu plus (corrélation de 0,31) — mais cette corrélation s'évapore complètement quand on regarde minute par minute, à l'intérieur des matchs. C'est le vrai piège statistique du mythe : confondre une corrélation d'ensemble avec un mécanisme de cause à effet.",
        compare: [
          { label: 'Corrélation agrégée (par saison/équipe)', value: '0,31' },
          { label: 'Corrélation intra-match (minute par minute)', value: '≈ 0' },
        ],
      },
    ],
  },
  stackTitle: 'Stack technique',
  stack: ['Python 3.9+', 'pandas', 'NumPy', 'SciPy', 'statsmodels', 'scikit-learn', 'lifelines', 'matplotlib', 'seaborn', 'statsbombpy', 'Jupyter'],
  source: 'Données ouvertes StatsBomb — 7 notebooks Jupyter, 15 figures',
  githubUrl: 'https://github.com/kayouba/football-underperformance',
  ctaLabel: 'Voir le code sur GitHub',
};
