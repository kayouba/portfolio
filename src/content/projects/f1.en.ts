export const f1En = {
  eyebrow: 'Trend analysis · Motorsport analytics',
  title: 'Formula 1: measuring the decline of the spectacle',
  subtitle:
    "For 15 years, F1 fans have had the sense that races have become more predictable. I built a composite index to check whether that impression matches a measurable trend in qualifying and race results.",
  heroStats: [
    { value: '2008–2025', label: 'seasons covered' },
    { value: '75+', label: 'races analyzed' },
    { value: '4', label: 'index components' },
  ],
  disclaimer:
    "Methodology note: the 'predictability index' below is a metric I defined myself for this project — it is not an official F1 or FIA statistic. Its formula and weights are laid out transparently below so you can judge its merits rather than take it at face value.",
  context: {
    title: 'The context',
    heading: 'A sense of déjà vu at the start of every race',
    paragraphs: [
      "Since ground-effect regulations returned in 2022, a recurring complaint from commentators and fans has been that grid positions lock in during qualifying, and overtakes for the win have become rare.",
      "Rather than settle that debate by ear, this project builds a quantified indicator to track the trend season over season, and compares it objectively to the 2008-2012 era, often cited as a 'golden age' of overtaking.",
    ],
  },
  index: {
    title: 'The index',
    heading: 'A composite index, with declared weights',
    intro:
      'The index combines four signals available for every race, normalized and weighted. A higher score means a statistically more predictable race:',
    formula: 'Index = 0.35 × qualifying→race correlation + 0.30 × pole-to-win rate + 0.20 × (1 − overtaking rate) + 0.15 × top-3 retention rate',
    components: [
      { label: 'Qualifying → final result correlation', weight: '35%', value: '0.82 (2023-2025)' },
      { label: 'Win rate from pole position', weight: '30%', value: '78% (2023-2025)' },
      { label: 'Overtaking deficit (1 − overtaking rate)', weight: '20%', value: '76% (few overtakes)' },
      { label: 'Top-3 retention rate between laps', weight: '15%', value: '91% (2023-2025)' },
    ],
  },
  eras: {
    title: 'Comparison',
    heading: 'Two eras, four raw indicators',
    intro:
      "Rather than compressing everything into a single number, here are the raw indicators behind the index, compared between the 'golden age' (2008-2012) and the recent period (2023-2025):",
    tableHeaders: { metric: 'Metric', golden: 'Golden Age (2008-2012)', crisis: 'Current Era (2023-2025)' },
    metrics: [
      { label: 'Composite index (/100)', golden: '52', crisis: '85' },
      { label: 'Qualifying → race correlation', golden: '0.52', crisis: '0.82' },
      { label: 'Wins from pole position', golden: '45%', crisis: '78%' },
      { label: 'Overtakes per race', golden: '11.8', crisis: '4.2' },
      { label: 'Different winners / season', golden: '7–8', crisis: '3–4' },
    ],
    overtakingChart: {
      caption: 'Average overtakes per race',
      bars: [
        { label: 'Golden Age (2008-2012)', value: 11.8, max: 12 },
        { label: 'Current Era (2023-2025)', value: 4.2, max: 12 },
      ],
    },
    poleChart: {
      caption: 'Win rate from pole position',
      bars: [
        { label: 'Golden Age (2008-2012)', value: 45, max: 100 },
        { label: 'Current Era (2023-2025)', value: 78, max: 100 },
      ],
    },
  },
  reg2026: {
    title: '2026',
    heading: 'What the 2026 regulations change',
    intro:
      'The FIA has announced several regulatory changes for 2026, presented as a direct response to this trend. Here are the announced changes and their intended effect — treat these as FIA targets, not results already measured:',
    changes: [
      { title: 'Weight', text: 'Targeting −30 kg (768 kg), for more agile cars.' },
      { title: 'Width', text: '1.90 m versus 2.00 m today, to reduce aerodynamic turbulence.' },
      { title: 'Aerodynamic wake', text: "Targeted reduction of the turbulence generated for a following car, to make overtaking easier." },
      { title: 'Power unit', text: 'A larger electrical component (up to 470 hp), under new engine regulations.' },
    ],
    caveat:
      "These changes couldn't be measured on track at the time of writing — the index will only be able to confirm or refute their effect once the 2026 season has been raced.",
  },
  stackTitle: 'Tech stack',
  stack: ['Python', 'pandas', 'Streamlit', 'Plotly', 'Time-series analysis'],
  dashboardUrl: 'https://f1-analysis-kayouba.streamlit.app',
  dashboardLabel: 'Visit the Streamlit dashboard',
  githubUrl: 'https://github.com/kayouba/f1-analysis',
  ctaLabel: 'View the code on GitHub',
};
