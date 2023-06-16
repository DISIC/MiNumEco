---
layout: layouts/bonne-pratique/bonne-pratique.njk
title: Dissocier les mises à jour évolutives et les mises à jour correctives
type: bpnr
date: 2023-06-01
idbp: g.10
priority: Aller plus loin
difficulty: Difficile
who:
  - Responsable produit
  - Responsable projet
indicators:
  - "Durée de maintenance d'une version LTS (Long-Term Support) de l'application > x années (à déterminer selon le contexte)"
  - "% d'applications dont les mises à jour de sécurité et de confort sont dissociées"
eleventyNavigation:
  parent: bonnes-pratiques-services-numeriques
  order: 100
---

En application de l’article 27 de la loi n° 2020-105 du 10 février 2020 relative à la lutte contre le gaspillage et à l'économie circulaire (loi AGEC), un rapport relatif à l’obsolescence logicielle a été réalisé afin d’étudier les pistes envisageables pour imposer aux éditeurs de logiciels une dissociation entre :
* les mises à jour évolutives apportant de nouvelles fonctionnalités sans être indispensables (mises à jour de confort)
* les mises à jour correctives visant à corriger des dysfonctionnements (bugs) et vulnérabilités (sécurité).

Cette disposition permettrait de réduire la contribution à l’obsolescence du terminal de l’utilisateur, car les mises à jour évolutives opeuvent conduire : 
* à une diminution des performances de l’équipement utilisateur dans le cas où les mises à jour demandent progressivement de plus en plus de ressources matérielles pour s'exécuter (puissance du processeur, capacité de mémoire vive, capacité de stockage).
*	à une obsolescence technique des matériels dans le cas où les mises à jour applicatives requièrent des mises à jour système que ne peuvent pas supporter les équipements utilisateurs.

Il est tout à fait possible d'appliquer cette bonne pratique dans le processus de développement et dans la gestion des versions : un effort supplémentaire non négligeable est à prévoir afin de gérer cette séparation des mises à jour. Il s’agit par exemple de proposer un support plus long pour une version de l’application qui sera figée au niveau fonctionnel (pas de nouvelles fonctionnalités) : une version LTS (_Long-Term Support_, soit en français Support à long terme).

De plus, il faut veiller à indiquer dans la description des mises à jour d’une application (*changelog* ou journal des modifications) lorsqu’il s’agit de mise à jour de sécurité ou de maintenance ou s’il s’agit d’une mise à jour évolutive.
