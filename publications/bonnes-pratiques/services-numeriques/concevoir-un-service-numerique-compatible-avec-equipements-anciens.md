---
layout: layouts/bonne-pratique/bonne-pratique.njk
title: Concevoir un service numérique compatible avec des équipements les plus anciens possibles
type: bpnr
date: 2022-02-17
idbp: g.4
priority: Prioritaire
difficulty: Moyenne
who:
  - Responsable produit
  - Responsable projet
indicators:
  - "Définition des types, années de construction ou versions cibles des équipements utilisateurs supportés (type de smartphone, taille écran...)"
  - "Définition de la configuration minimale (mémoire, connexion, etc.) des équipements pour supporter les services"
eleventyNavigation:
  parent: bonnes-pratiques-services-numeriques
  order: 40
---

Afin de ne pas contribuer à l’obsolescence des équipements induite par le logiciel, il est impératif de concevoir un service numérique compatible avec un large panel d’équipements, les plus anciens possibles. Il sera également pertinent de développer les services les plus sobres possibles en termes de ressources.

Pour réserver un billet de train ou faire une démarche sur un service public en ligne, il serait impensable qu’il faille posséder un ordinateur ou un téléphone de dernière génération. Un usager qui n’a plus accès à certains services numériques aura tendance à changer d’équipement pour un matériel plus récent.

Les capacités et les fonctionnalités de l’équipement sont parfois liées au système d’exploitation dudit équipement. Il faut donc veiller aussi à la compatibilité du service numérique avec les systèmes d’exploitation pour chaque fonctionnalité développée. Il est constaté régulièrement par exemple une non-compatibilité des services numériques avec les systèmes Linux ou avec les navigateurs Firefox.

Pour veiller à respecter cette bonne pratique, en phase de conception, l’idéal est d’appliquer les bonnes pratiques d’écoconception, en respectant les standards, faire simple et léger et de tester le service numérique sur des équipements anciens ou de simuler un mode dégradé.
