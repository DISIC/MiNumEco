---
layout: layouts/bonne-pratique/bonne-pratique.njk
title: Concevoir un service numérique compatible avec des faibles débits
type: bpnr
date: 2023-06-01
idbp: g.6
priority: Prioritaire
difficulty: Moyenne
who:
  - Responsable produit
  - Responsable projet
indicators:
  - "Test du service numérique en connexion bas débit intégré à la phase de recette des fonctionnalités : oui / non"
  - "Test du service numérique utilisable en bas débit (3G en contexte mobile, connexion 512 Kb en contexte fixe) : oui / non"
eleventyNavigation:
  parent: bonnes-pratiques-services-numeriques
  order: 60
---

Lorsqu’un service numérique s'adresse à un large public, il est impossible de maîtriser le niveau de connectivité. Il est essentiel de veiller à ne pas exclure certains publics qui n'ont pas accès à des hauts débits. Il est nécessaire de se fixer pour objectif d'avoir une application nécessitant peu de débit, dans tous les cas ce sera moins néfaste pour l'environnement et bénéfique pour les utilisateurs.

Tout en étant bénéfique pour l'environnement, c'est une bonne pratique qui permet aussi de réduire la fracture numérique. Par ailleurs, les utilisateurs n'ont pas toujours conscience de ce qui ralentit un service numérique : la connexion réseau, le service numérique ou le terminal utilisé ?

Un service numérique plus léger a, par conséquent, beaucoup moins besoin de ressources réseau pour fonctionner.

Pour veiller à la bonne mise en œuvre de cette bonne pratique, en phase de conception et en phase de recette d'un service numérique, il faut tester ce service dans des conditions dégradées en simulant une connexion 2G/3G et avec une machine peu puissante.
