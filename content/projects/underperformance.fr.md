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
methodTitle: "Les sept méthodes, en détail"
methodSteps:
  - title: "Event study"
    text: "Comparaison du taux de but concédé dans les 5, 10 et 15 minutes suivant une occasion manquée vs convertie."
  - title: "Stratification par état du score"
    text: "Contrôle de la situation du match (équipe menant, à égalité, menée) pour isoler l'effet réel."
  - title: "Test de permutation"
    text: "10 000 permutations aléatoires pour construire une distribution de référence sous hypothèse nulle."
  - title: "Correction multi-tests"
    text: "Correction de Benjamini-Hochberg pour éviter les faux positifs liés au grand nombre de comparaisons."
  - title: "Régression logistique"
    text: "Erreurs standards clusterisées par match, pour ne pas sur-compter des observations corrélées entre elles."
  - title: "Validation croisée"
    text: "GroupKFold par match, évalué en AUC et Brier score, pour vérifier la robustesse hors échantillon."
  - title: "Modèle nul de Bernoulli"
    text: "500 simulations d'un monde sans effet de « punition », pour comparer la réalité observée au hasard seul."
extraStatsTitle: "L'effet tient (ou plutôt ne tient pas) sur 10 compétitions"
extraStats:
  - value: "7 / 10"
    label: "compétitions à effet protecteur"
  - value: "3 / 10"
    label: "compétitions à effet neutre"
  - value: "0 / 10"
    label: "compétition confirmant le mythe"
figuresTitle: "Ce que montrent les figures"
figures:
  - image: ./images/football-null-model.png
    imageAlt: "Histogramme du modèle nul de Bernoulli : 500 saisons simulées sans effet de punition, la réalité observée tombe dans la zone attendue par hasard"
    caption: "Le modèle nul de Bernoulli : 500 saisons simulées dans un monde où l'adage n'existe pas. La réalité observée (ligne rouge, -7,5 points de %) tombe en plein dans la zone que le hasard seul produit — aucune raison d'invoquer un effet réel."
  - image: ./images/football-simpson-paradox.png
    imageAlt: "Graphique illustrant le paradoxe de Simpson : corrélation agrégée de 0,31 entre gaspillage et buts encaissés, qui disparaît minute par minute"
    caption: "Le paradoxe de Simpson en image. Vu de loin, les équipes qui « gaspillent » le plus semblent concéder plus (r = 0,31) — mais ce sont surtout des équipes plus faibles dans l'absolu (Barcelone marque et défend bien, Racing Santander rate et défend mal). Minute par minute, à l'intérieur d'un même match, la corrélation s'évapore."
  - image: ./images/football-penalty.png
    imageAlt: "Graphique en barres montrant un taux d'encaissement de 5,2% après un penalty raté contre 8,7% après un penalty marqué"
    caption: "Sur 658 penaltys, le taux d'encaissement dans les 10 minutes qui suivent est plus bas après un penalty raté (5,2 %) qu'après un penalty marqué (8,7 %) — l'exact inverse du mythe."
---

« Si tu ne marques pas, tu encaisses. » On l'a tellement entendu — sur le terrain, devant la télé, dans les vestiaires — qu'on a fini par l'intégrer comme une évidence, moi y compris, sans jamais vraiment se poser la question. Un jour, je me la suis posée pour de bon : et si ce n'était qu'une légende collective, jamais vérifiée ?

Le commentateur le répète après chaque occasion manquée, comme une loi physique du football. Personne, pourtant, ne semblait l'avoir sérieusement testée — alors je m'y suis mis : 70 399 tirs, 2 796 matchs, 10 compétitions, de 1958 à 2024, données ouvertes StatsBomb.

Un seul test statistique peut mentir. J'en ai fait passer sept à cet adage, conçus pour être difficiles à satisfaire par hasard : event study sur le taux de but concédé après une occasion manquée, stratification par état du score, test de permutation à 10 000 tirages, régression logistique avec erreurs clusterisées par match, validation croisée hors échantillon, et un modèle nul de Bernoulli à 500 simulations.

Les sept méthodes pointent dans la même direction : aucun effet de « punition » détecté. Le taux de but concédé après une grosse occasion est statistiquement identique, qu'elle ait été convertie ou ratée. Sur 658 penaltys, en rater un protège même légèrement plus que le marquer — l'inverse du mythe. Et l'effet tient sur 10 compétitions et 66 ans de données, sans exception notable.

Le vrai piège, c'est un paradoxe de Simpson : au niveau d'une saison, les équipes les plus « gaspilleuses » concèdent un peu plus (corrélation de 0,31) — mais cette corrélation s'évapore complètement minute par minute, à l'intérieur des matchs. C'est le genre de confusion entre corrélation d'ensemble et mécanisme causal qui fait vivre un mythe pendant des décennies.
