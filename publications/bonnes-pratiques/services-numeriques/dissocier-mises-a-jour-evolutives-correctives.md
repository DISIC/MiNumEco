---
layout: layouts/bonne-pratique/bonne-pratique.njk
title: Dissocier les mises à jour évolutives et les mises à jour correctives
type: bpnr
date: 2022-02-17
idbp: g.10
priority: Aller plus loin
difficulty: Difficile
who:
  - Responsable produit
  - Chef de projet
indicators:
  - "Durée de maintenance d'une version LTS (Long-Term Support) de l'application > x années (à déterminer selon le contexte)"
  - "% d'applications dont les mises à jour de sécurité et de confort sont dissociées"
eleventyNavigation:
  parent: bonnes-pratiques-services-numeriques
  order: 100
---

Dans l’article 27 de la loi relative à la lutte contre le gaspillage et à l'économie circulaire, une étude est en cours pour imposer une dissociation entre les mises à jour de confort et les mises à jour de sécurité.

Cette disposition permettrait de réduire la contribution à l’obsolescence du terminal de l’utilisateur, car les mises à jour évolutives ont tendance à ralentir l’équipement utilisateur.

Il est tout à fait possible d'appliquer cette bonne pratique dans le processus de développement et dans la gestion des versions : un effort supplémentaire non négligeable est à prévoir afin de gérer cette séparation des mises à jour. Il s’agit par exemple de proposer un support plus long pour une version de l’application qui sera figée au niveau fonctionnel (pas de nouvelles fonctionnalités) : une version Long-term support ou LTS (en français Support à long terme).

De plus, il faut veiller à indiquer dans la description des mises à jour d’une application (*changelog* ou journal des modifications) lorsqu’il s’agit de mise à jour de sécurité ou de maintenance ou s’il s’agit d’une mise à jour évolutive.
