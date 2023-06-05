---
layout: layouts/bonne-pratique/bonne-pratique.njk
title: Regrouper et rationaliser les serveurs
type: bpnr
date: 2023-06-01
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

Bonne pratique présente dans le Code de conduite européen pour les centres de données, la virtualisation permet de répondre à la problématique de surdimensionnement de serveurs dédiés à des applications uniques. L'hébergement de plusieurs machines virtuelles (VM) sur un même serveur hôte réduit le nombre d'équipements et donc leur occupation au sol, ainsi que leur consommation énergétique à toutes les étapes du cycle de vie.

Si les VM sont simples à déployer, elles doivent cependant aussi être configurées et dimensionnées avec précaution afin de ne pas entraver les performances du système.

Il faut noter que la création d’une architecture spécifique doit résulter d’une étude approfondie du besoin, car tous les cas d’usages ne sont pas propices à la virtualisation. Ces architectures sont souvent utilisées pour toutes les tâches qui nécessitent une très forte puissance de calcul (outils de travail collaboratifs, prévisions météorologiques, modélisation moléculaire, simulations physiques ou financières, etc.).

Attention à l’effet rebond de la virtualisation. Il est tellement facile de créer une machine virtuelle, que l’on peut rapidement démultiplier le nombre de VM inutiles si une gestion rigoureuse du cycle de vie n’est pas apportée (exemples : environnement de développement, de recette, clones, etc.).
