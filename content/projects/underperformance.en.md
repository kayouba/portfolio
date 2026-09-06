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
methodTitle: "All seven methods, in detail"
methodSteps:
  - title: "Event study"
    text: "Comparing the concede rate in the 5, 10 and 15 minutes following a missed vs. converted chance."
  - title: "Score-state stratification"
    text: "Controlling for match state (leading, tied, trailing) to isolate the real effect."
  - title: "Permutation test"
    text: "10,000 random permutations to build a reference distribution under the null hypothesis."
  - title: "Multiple-testing correction"
    text: "Benjamini-Hochberg correction to avoid false positives from the large number of comparisons."
  - title: "Logistic regression"
    text: "Standard errors clustered by match, so correlated observations aren't double-counted."
  - title: "Cross-validation"
    text: "GroupKFold by match, evaluated on AUC and Brier score, to check out-of-sample robustness."
  - title: "Bernoulli null model"
    text: "500 simulations of a world with no 'punishment' effect, compared against the observed result."
extraStatsTitle: "The effect holds (or rather, doesn't) across 10 competitions"
extraStats:
  - value: "7 / 10"
    label: "competitions with a protective effect"
  - value: "3 / 10"
    label: "competitions with no effect"
  - value: "0 / 10"
    label: "competition confirming the myth"
figuresTitle: "What the figures actually show"
figures:
  - image: ./images/football-null-model.png
    imageAlt: "Histogram of the Bernoulli null model: 500 simulated seasons with no punishment effect, observed reality falls within the range chance alone produces"
    caption: "The Bernoulli null model: 500 simulated seasons in a world where the myth doesn't exist. Observed reality (red line, -7.5 percentage points) falls squarely within the range chance alone produces — no reason to invoke a real effect."
  - image: ./images/football-simpson-paradox.png
    imageAlt: "Chart illustrating Simpson's paradox: an aggregate correlation of 0.31 between wastefulness and goals conceded, which disappears minute by minute"
    caption: "Simpson's paradox, illustrated. From a distance, the most 'wasteful' teams seem to concede more (r = 0.31) — but those are mostly just weaker teams overall (Barcelona scores and defends well, Racing Santander misses and defends poorly). Minute by minute, inside a single match, the correlation vanishes."
  - image: ./images/football-penalty.png
    imageAlt: "Bar chart showing a 5.2% concede rate after a missed penalty versus 8.7% after a scored one"
    caption: "Across 658 penalties, the concede rate in the following 10 minutes is lower after a missed penalty (5.2%) than after a scored one (8.7%) — the exact opposite of the myth."
---

"If you don't score, you get scored on." We've all heard it so many times — on the pitch, in front of the TV, in the locker room — that most of us just absorbed it as fact, myself included, without ever really questioning it. One day I actually did: what if it's just a collective legend nobody ever checked?

Commentators repeat it after every missed chance, as if it were a law of physics. Yet nobody seemed to have seriously tested it — so I did: 70,399 shots, 2,796 matches, 10 competitions, from 1958 to 2024, using StatsBomb's open data.

A single statistical test can mislead. I put this cliché through seven, each designed to be hard to pass by chance: an event study on the concede rate after a missed chance, stratification by match state, a 10,000-permutation test, logistic regression with match-clustered standard errors, out-of-sample cross-validation, and a 500-simulation Bernoulli null model.

All seven point the same way: no "punishment" effect detected. The concede rate after a big chance is statistically identical whether it was scored or missed. Across 658 penalties, missing one is even slightly more protective than scoring it — the opposite of the myth. And the effect holds across 10 competitions and 66 years of data, with no notable exception.

The real trap is a Simpson's paradox: at the season level, the most "wasteful" teams do concede slightly more (a 0.31 correlation) — but that correlation vanishes completely when you look minute by minute, inside individual matches. That's exactly the kind of confusion between an aggregate correlation and a causal mechanism that keeps a myth alive for decades.
