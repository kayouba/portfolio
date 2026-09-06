---
slug: underperformance
locale: fr
order: 1
title: "« Si tu ne marques pas, tu encaisses » : et si l'adage était faux ?"
chapo: "C'est la phrase la plus répétée du football, et personne ne semble l'avoir vraiment testée. Je l'ai confrontée à 70 399 tirs sur 10 compétitions, avec sept méthodes statistiques indépendantes."
heroStats:
  - value: "70 399"
    label: "tirs analysés"
  - value: "2 796"
    label: "matchs · 10 compétitions"
  - value: "Mythe"
    label: "verdict · p > 0,05"
image: ./images/underperformance.png
imageAlt: "Six graphiques de synthèse montrant l'absence d'effet 'punition' après une occasion manquée au football, verdict final : Mythe"
stack: ["Python", "pandas", "NumPy", "SciPy", "statsmodels", "scikit-learn", "StatsBomb", "Jupyter"]
links:
  github: "https://github.com/kayouba/football-underperformance"
---

« Si tu ne marques pas, tu encaisses. » Le commentateur le répète après chaque occasion manquée, comme une loi physique du football. Personne, pourtant, ne semblait l'avoir sérieusement vérifié — alors je m'y suis mis : 70 399 tirs, 2 796 matchs, 10 compétitions, de 1958 à 2024, données ouvertes StatsBomb.

Un seul test statistique peut mentir. J'en ai fait passer sept à cet adage, conçus pour être difficiles à satisfaire par hasard : event study sur le taux de but concédé après une occasion manquée, stratification par état du score, test de permutation à 10 000 tirages, régression logistique avec erreurs clusterisées par match, validation croisée hors échantillon, et un modèle nul de Bernoulli à 500 simulations.

Les sept méthodes pointent dans la même direction : aucun effet de « punition » détecté. Le taux de but concédé après une grosse occasion est statistiquement identique, qu'elle ait été convertie ou ratée. Sur 658 penaltys, en rater un protège même légèrement plus que le marquer — l'inverse du mythe. Et l'effet tient sur 10 compétitions et 66 ans de données, sans exception notable.

Le vrai piège, c'est un paradoxe de Simpson : au niveau d'une saison, les équipes les plus « gaspilleuses » concèdent un peu plus (corrélation de 0,31) — mais cette corrélation s'évapore complètement minute par minute, à l'intérieur des matchs. C'est le genre de confusion entre corrélation d'ensemble et mécanisme causal qui fait vivre un mythe pendant des décennies.
