export const cdm2026En = {
  eyebrow: 'Format study · Monte Carlo simulation',
  title: '2026 World Cup: a single win can be enough',
  subtitle:
    "The first 48-team World Cup rewrites the rules for third-place teams. I ran 50,000 simulated group stages to quantify a threshold the rulebook never states outright: how many points does it actually take to get through?",
  heroStats: [
    { value: '50,000', label: 'simulated group stages' },
    { value: '48', label: 'teams, 12 groups' },
    { value: '8 / 12', label: 'third-place teams advance' },
  ],
  context: {
    title: 'The context',
    heading: 'A new format, an unanswered question',
    paragraphs: [
      "Starting in 2026, the World Cup expands from 32 to 48 teams across 12 groups of 4. The top two in each group qualify directly, and the 8 best third-place teams out of 12 fill out the round of 32.",
      "FIFA's rulebook sets the tiebreak criteria (points, goal difference, goals scored), but says nothing about what points total actually gives a team good odds of advancing. That's the concrete question — one any coach or fan would ask — this project sets out to quantify.",
    ],
  },
  result: {
    title: 'The result',
    heading: 'Sharp thresholds',
    intro:
      "Across 50,000 simulated group stages, the probability of advancing as a best third-place team depends almost entirely on points earned:",
    bars: [
      { points: '4 points', detail: '1 win + 1 draw', probability: 99, status: 'good' as const },
      { points: '3 points', detail: '1 win, 2 losses', probability: 57, status: 'warning' as const },
      { points: '2 points', detail: '2 draws, 1 loss', probability: 2, status: 'critical' as const },
    ],
    conclusion:
      "The surprising part: across three group matches, a single win — even paired with two losses — is, statistically, a coin flip's better half toward reaching the round of 16. Two draws and a loss (2 points), on the other hand, almost never gets you there.",
  },
  method: {
    title: 'The method',
    heading: 'A deliberately neutral simulation',
    intro:
      "The goal wasn't to predict which teams will qualify, but to measure, for a given points total, the probability of advancing — independent of team strength.",
    steps: [
      {
        title: 'Neutral match model',
        text: "Every match is simulated with symmetric probabilities (~38% win chance for each side, ~24% draw), calibrated on historical World Cup frequencies rather than a FIFA ranking.",
      },
      {
        title: '12 groups, 50,000 draws',
        text: '50,000 full group stages are simulated, each producing 12 independent group tables.',
      },
      {
        title: 'Ranking the third-place teams',
        text: 'The 12 third-place finishers from each draw are ranked using the FIFA tiebreak criteria (points, goal difference, goals scored) to determine the 8 that advance.',
      },
      {
        title: 'Aggregating by points total',
        text: "For every possible points total (0 to 7), I compute how often a team at that level ends up among the 8 advancing third-place teams.",
      },
    ],
  },
  reflection: {
    title: 'The bigger picture',
    heading: 'What about fairness?',
    text: "The 48-team format is debated: it opens the tournament to more nations, but also dilutes the cost of a bad group-stage match. This project doesn't take a side in that debate — it just hands a concrete number to whoever is having it: under this format, a forgiving group stage can be enough to advance without dominating your group.",
  },
  stackTitle: 'Tech stack',
  stack: ['Python', 'NumPy', 'pandas', 'Monte Carlo', 'Matplotlib', 'Jupyter', 'pytest'],
  source: 'Official FIFA regulations — 2026 World Cup',
  githubUrl: 'https://github.com/kayouba/cdm2026-troisiemes',
  ctaLabel: 'View the code on GitHub',
};
