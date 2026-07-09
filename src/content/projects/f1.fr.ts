export const f1Fr = {
  eyebrow: 'Analyse de tendance · Motorsport analytics',
  title: 'F1 : mesurer le déclin du spectacle',
  subtitle:
    "Depuis 15 ans, les fans de F1 ont l'impression que les courses sont devenues plus prévisibles. J'ai construit un indice composite pour vérifier si cette impression correspond à une tendance mesurable dans les résultats de qualification et de course.",
  heroStats: [
    { value: '2008–2025', label: 'saisons couvertes' },
    { value: '75+', label: 'courses analysées' },
    { value: '4', label: 'composantes de l’indice' },
  ],
  disclaimer:
    "Note de méthode : l'« indice de prévisibilité » ci-dessous est une métrique que j'ai définie moi-même pour ce projet — ce n'est pas un indicateur officiel de la F1 ou de la FIA. Sa formule et ses poids sont volontairement transparents ci-dessous, pour que le lecteur puisse juger de sa pertinence plutôt que la prendre pour argent comptant.",
  context: {
    title: 'Le contexte',
    heading: "Une impression de déjà-vu au départ de chaque course",
    paragraphs: [
      "Depuis le retour de la réglementation à effet de sol en 2022, un constat revient souvent chez les commentateurs et les fans : les positions se figent dès les qualifications, et les dépassements pour la victoire se font rares.",
      "Plutôt que de trancher ce débat à l'oreille, ce projet construit un indicateur chiffré pour suivre cette tendance saison après saison, et la comparer objectivement à l'ère 2008-2012, souvent citée comme un « âge d'or » du dépassement.",
    ],
  },
  index: {
    title: "L'indice",
    heading: 'Un indice composite, à poids déclarés',
    intro:
      "L'indice combine quatre signaux disponibles pour chaque course, normalisés puis pondérés. Un score plus élevé signifie une course statistiquement plus prévisible :",
    formula: 'Indice = 0,35 × corrélation qualif→course + 0,30 × taux de victoire depuis la pole + 0,20 × (1 − taux de dépassement) + 0,15 × taux de rétention du top 3',
    components: [
      { label: 'Corrélation qualification → résultat final', weight: '35%', value: '0,82 (2023-2025)' },
      { label: 'Taux de victoire depuis la pole position', weight: '30%', value: '78% (2023-2025)' },
      { label: 'Déficit de dépassements (1 − taux de dépassement)', weight: '20%', value: '76% (peu de dépassements)' },
      { label: 'Taux de rétention du top 3 entre les tours', weight: '15%', value: '91% (2023-2025)' },
    ],
  },
  eras: {
    title: 'Comparaison',
    heading: "Deux ères, quatre indicateurs bruts",
    intro:
      "Plutôt que de tout compresser dans un seul chiffre, voici les indicateurs bruts qui composent l'indice, comparés entre l'« âge d'or » (2008-2012) et la période récente (2023-2025) :",
    tableHeaders: { metric: 'Indicateur', golden: "Âge d'or (2008-2012)", crisis: 'Ère actuelle (2023-2025)' },
    metrics: [
      { label: 'Indice composite (/100)', golden: '52', crisis: '85' },
      { label: 'Corrélation qualif → course', golden: '0,52', crisis: '0,82' },
      { label: 'Victoires depuis la pole', golden: '45%', crisis: '78%' },
      { label: 'Dépassements par course', golden: '11,8', crisis: '4,2' },
      { label: 'Vainqueurs différents / saison', golden: '7–8', crisis: '3–4' },
    ],
    overtakingChart: {
      caption: 'Dépassements moyens par course',
      bars: [
        { label: 'Âge d’or (2008-2012)', value: 11.8, max: 12 },
        { label: 'Ère actuelle (2023-2025)', value: 4.2, max: 12 },
      ],
    },
    poleChart: {
      caption: 'Taux de victoire depuis la pole position',
      bars: [
        { label: 'Âge d’or (2008-2012)', value: 45, max: 100 },
        { label: 'Ère actuelle (2023-2025)', value: 78, max: 100 },
      ],
    },
  },
  reg2026: {
    title: '2026',
    heading: 'Ce que change la réglementation 2026',
    intro:
      "La FIA a annoncé plusieurs changements réglementaires pour 2026, présentés comme une réponse directe à cette tendance. Voici les changements annoncés et l'effet qu'ils visent — à prendre comme des objectifs de la FIA, pas comme des résultats déjà mesurés :",
    changes: [
      { title: 'Poids', text: '−30 kg visés (768 kg), pour des voitures plus agiles.' },
      { title: 'Largeur', text: '1,90 m contre 2,00 m aujourd’hui, pour réduire les turbulences aérodynamiques.' },
      { title: 'Sillage aérodynamique', text: 'Réduction visée de la perturbation générée pour le poursuivant, afin de faciliter les dépassements.' },
      { title: 'Groupe motopropulseur', text: 'Part électrique renforcée (jusqu’à 470 ch), avec un nouveau règlement moteur.' },
    ],
    caveat:
      "Ces changements n'ont pas encore pu être mesurés en course au moment de la rédaction — l'indice ne pourra confirmer ou infirmer leur effet qu'une fois la saison 2026 disputée.",
  },
  stackTitle: 'Stack technique',
  stack: ['Python', 'pandas', 'Streamlit', 'Plotly', 'Analyse de séries temporelles'],
  dashboardUrl: 'https://f1-analysis-kayouba.streamlit.app',
  dashboardLabel: 'Visiter le dashboard Streamlit',
  githubUrl: 'https://github.com/kayouba/f1-analysis',
  ctaLabel: 'Voir le code sur GitHub',
};
