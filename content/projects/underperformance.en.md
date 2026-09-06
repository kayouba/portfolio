---
slug: underperformance
locale: en
order: 1
title: "\"If you don't score, you get scored on\": is the cliché actually true?"
chapo: "It's football's most-repeated line, and nobody seems to have seriously tested it. I ran it against 70,399 shots across 10 competitions, using seven independent statistical methods."
heroStats:
  - value: "70,399"
    label: "shots analyzed"
  - value: "2,796"
    label: "matches · 10 competitions"
  - value: "Myth"
    label: "verdict · p > 0.05"
image: ./images/underperformance.png
imageAlt: "Six summary charts showing no 'punishment' effect after a missed chance in football, final verdict: Myth"
stack: ["Python", "pandas", "NumPy", "SciPy", "statsmodels", "scikit-learn", "StatsBomb", "Jupyter"]
links:
  github: "https://github.com/kayouba/football-underperformance"
---

"If you don't score, you get scored on." Commentators repeat it after every missed chance, as if it were a law of physics. Yet nobody seemed to have seriously tested it — so I did: 70,399 shots, 2,796 matches, 10 competitions, from 1958 to 2024, using StatsBomb's open data.

A single statistical test can mislead. I put this cliché through seven, each designed to be hard to pass by chance: an event study on the concede rate after a missed chance, stratification by match state, a 10,000-permutation test, logistic regression with match-clustered standard errors, out-of-sample cross-validation, and a 500-simulation Bernoulli null model.

All seven point the same way: no "punishment" effect detected. The concede rate after a big chance is statistically identical whether it was scored or missed. Across 658 penalties, missing one is even slightly more protective than scoring it — the opposite of the myth. And the effect holds across 10 competitions and 66 years of data, with no notable exception.

The real trap is a Simpson's paradox: at the season level, the most "wasteful" teams do concede slightly more (a 0.31 correlation) — but that correlation vanishes completely when you look minute by minute, inside individual matches. That's exactly the kind of confusion between an aggregate correlation and a causal mechanism that keeps a myth alive for decades.
