---
layout: layouts/bonne-pratique/bonne-pratique.njk
title: Concevoir un service numérique compatible avec des faibles débits
type: bpnr
date: 2022-02-17
idbp: g.6
priority: Prioritaire
difficulty: Moyenne
who:
  - Responsable produit
  - Chef de projet
indicators:
  - "Test du service numérique en connexion bas débit intégré à la phase de recette des fonctionnalités : oui / non"
  - "Service numérique utilisable en bas débit (3G en contexte mobile, connexion 512 Kb en contexte fixe) : oui / non"
eleventyNavigation:
  parent: bonnes-pratiques-services-numeriques
  order: 60
---

Si votre service numérique s'adresse à un large public, vous ne maîtrisez donc pas le niveau de connectivité. Il est nécessaire de  veiller à ne pas exclure certains publics qui n'ont pas accès à des hauts débits.

Tout en permettant de réduire la fracture numérique, il s'agit aussi d'une bonne pratique pour l'environnement. En effet, les utilisateurs n'ont pas toujours conscience de ce qui ralentit un service numérique : la connexion réseau, le service numérique ou le terminal utilisé ?

Un service numérique plus léger a, par conséquent, beaucoup moins besoin de ressources réseaux pour fonctionner.

Pour veiller à la bonne mise en œuvre de cette bonne pratique, en phase de conception et en phase de recette d'un service numérique, il faut tester ce service dans des conditions dégradées en simulant une connexion 2G/3G.
