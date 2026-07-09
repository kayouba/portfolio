export const underperformanceEn = {
  eyebrow: 'Case study · Football analytics · Statistics',
  title: '"If you don\'t score, you get scored on": the myth doesn\'t survive the data',
  subtitle:
    "Football's most-repeated cliché, tested across 70,000 shots and 10 competitions with seven independent statistical methods. Verdict: no evidence of a 'punishment' effect.",
  heroStats: [
    { value: '70,399', label: 'shots analyzed' },
    { value: '2,796', label: 'matches, 10 competitions' },
    { value: '1958–2024', label: 'period covered' },
  ],
  verdict: {
    label: 'Verdict',
    value: 'Myth',
    detail: 'p > 0.05 · Bernoulli null model · no significant effect detected',
  },
  problem: {
    title: 'The problem',
    heading: 'A belief that was never tested',
    paragraphs: [
      '"If you don\'t score, you get scored on." Commentators repeat it after every missed chance, as if it were a law of physics. Yet nobody seems to have seriously tested it against data.',
      "This project takes that belief — shared by generations of fans and coaches — and gives it the treatment it never got: a series of independent statistical tests, each designed to be hard to pass by chance.",
    ],
  },
  xg: {
    title: 'The key metric',
    heading: 'Understanding xG (Expected Goals)',
    cards: [
      {
        title: 'What it actually is',
        text: 'The probability that a given shot ends up in the net, calculated from thousands of comparable shots (distance, angle, type of play).',
      },
      {
        title: 'How it is calculated',
        text: 'A statistical model trained on StatsBomb data assigns a value between 0 and 1 to every historical shot, based on its characteristics.',
      },
      {
        title: 'Why it matters here',
        text: "It lets me define a 'big chance' objectively (xG ≥ 0.4) instead of relying on a commentator's gut feeling.",
      },
      {
        title: 'Its limits',
        text: "xG ignores fine-grained tactical context (defensive pressure, fatigue) — one more reason to cross-check with several methods rather than trust it alone.",
      },
    ],
  },
  method: {
    title: 'The method',
    heading: 'Seven layers of verification',
    intro:
      'A single test can mislead. Seven independent tests, all pointing the same way, are much harder to dismiss.',
    steps: [
      { title: 'Event study', text: 'Comparing the concede rate in the 5, 10 and 15 minutes following a missed vs. converted chance.' },
      { title: 'Score-state stratification', text: 'Controlling for match state (leading, tied, trailing) to isolate the real effect.' },
      { title: 'Permutation test', text: '10,000 random permutations to build a reference distribution under the null hypothesis.' },
      { title: 'Multiple-testing correction', text: 'Benjamini-Hochberg correction to avoid false positives from the large number of comparisons.' },
      { title: 'Logistic regression', text: 'Standard errors clustered by match, so correlated observations aren\'t double-counted.' },
      { title: 'Cross-validation', text: 'GroupKFold by match, evaluated on AUC and Brier score, to check out-of-sample robustness.' },
      { title: 'Bernoulli null model', text: '500 simulations of a world with no "punishment" effect, compared against the observed result.' },
    ],
  },
  findings: {
    title: 'Results',
    heading: 'Five counter-intuitive findings',
    bigChanceBars: {
      caption: 'Concede rate in the 10 minutes following a big chance (xG ≥ 0.4) or a penalty',
      groups: [
        {
          label: 'Big chance',
          bars: [
            { series: 'missed', value: 9.9 },
            { series: 'scored', value: 9.3 },
          ],
        },
        {
          label: 'Penalty (n = 658)',
          bars: [
            { series: 'missed', value: 5.2 },
            { series: 'scored', value: 8.7 },
          ],
        },
      ],
    },
    items: [
      {
        title: 'No "curse" of the missed chance',
        text: 'The concede rate after a big chance is statistically identical whether the shot was scored or missed — see the chart below.',
      },
      {
        title: 'Missing a penalty actually protects you',
        text: 'Across 658 penalties, the following concede rate is lower after a missed penalty (5.2%) than after a scored one (8.7%) — the opposite of the myth.',
      },
      {
        title: "Barrages of shots don't break defenses",
        text: 'The concede risk stays flat around 14%, whether a team has missed 0 or more than 10 consecutive chances in the match.',
        stat: { value: '~14%', label: 'regardless of consecutive missed shots (0 to 10+)' },
      },
      {
        title: 'Holds across 10 competitions and 66 years',
        text: 'Isolating each competition (including La Liga, the Premier League, Serie A, the Bundesliga, Ligue 1, and the World Cup), 7 out of 10 show a mildly protective effect, 3 show no effect — none show a significant positive effect.',
        tally: [
          { value: '7 / 10', label: 'protective effect' },
          { value: '3 / 10', label: 'no effect' },
          { value: '0 / 10', label: 'positive effect (the myth)' },
        ],
      },
      {
        title: "Simpson's paradox in action",
        text: "At the season level, the most 'wasteful' teams concede slightly more (correlation of 0.31) — but that correlation completely disappears when you look minute-by-minute, inside individual matches. That's the real statistical trap behind the myth: mistaking an aggregate correlation for a causal mechanism.",
        compare: [
          { label: 'Aggregate correlation (season/team level)', value: '0.31' },
          { label: 'Within-match correlation (minute by minute)', value: '≈ 0' },
        ],
      },
    ],
  },
  stackTitle: 'Tech stack',
  stack: ['Python 3.9+', 'pandas', 'NumPy', 'SciPy', 'statsmodels', 'scikit-learn', 'lifelines', 'matplotlib', 'seaborn', 'statsbombpy', 'Jupyter'],
  source: 'Open data from StatsBomb — 7 Jupyter notebooks, 15 figures',
  githubUrl: 'https://github.com/kayouba/football-underperformance',
  ctaLabel: 'View the code on GitHub',
};
