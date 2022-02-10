---
layout: layouts/bonne-pratique.njk
title: Regrouper et rationaliser les serveurs
type: bpnr
date: 2022-02-17
idbp: h.4
priority: Recommandée
difficulty: Moyenne
who:
  - Direction du numérique
indicators:
  - "% des serveurs virtualisés"
eleventyNavigation:
  parent: bonnes-pratiques-salle-serveur-et-centre-de-donnees
  order: 40
---

Une des bonnes pratiques pour réduire l'impact environnemental des serveurs est leur mutualisation.

La virtualisation permet de répondre à la problématique de surdimensionnement de serveurs dédiés à des applications uniques. L'hébergement de plusieurs machines virtuelles (VM) sur un même serveur hôte réduit le nombre d'équipements et donc leur occupation au sol, ainsi que leur consommation énergétique à toutes les étapes du cycle de vie.

Si les VM sont simples à déployer, elles doivent cependant aussi être configurées et dimensionnées avec précaution afin de ne pas entraver les performances du système.

Il faut noter que la création d’une architecture spécifique doit résulter d’une étude approfondie du besoin. Ces architectures sont souvent utilisées pour toutes les tâches qui nécessitent une très forte puissance de calcul (outils de travail collaboratifs, prévisions météorologiques, modélisation moléculaire, simulations physiques ou financières, etc.).
