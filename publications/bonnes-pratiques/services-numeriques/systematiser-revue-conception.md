---
layout: layouts/bonne-pratique/bonne-pratique.njk
title: Systématiser une revue de conception en amont et une revue de code orientées sobriété numérique
type: bpnr
date: 2023-06-01
idbp: g.2
priority: Recommandée
difficulty: Moyenne
who:
  - Responsable produit
  - Responsable projet
indicators:
  - "Revue de conception en amont et revue de code en aval systématisées dans le process de conception : oui / non"
  - "Intégration de critères environnementaux à la « définition de fini » d’une fonctionnalité (par exemple conformité au Référentiel général d’écoconception de service numérique) : oui / non"
eleventyNavigation:
  parent: bonnes-pratiques-services-numeriques
  order: 20
---

En impliquant tous les métiers concernés (et pas seulement les développeuses et développeurs), une revue de conception est systématisée en amont du développement. Cette revue de conception sous forme d’un atelier par exemple permettra de définir la solution technique la plus pertinente pour répondre aux besoins des utilisateurs et en regard de l‘impact environnemental des différentes solutions possibles. Il faut veiller d’abord à bien définir l'unité fonctionnelle (exemple : « Obtenir mon quotient familial », « Partager une photo à mes amis »). Cette revue de conception permet d’éviter des incompréhensions sur la fonctionnalité à développer. De plus, en ajoutant à cet atelier la dimension environnementale, il s’agit d’évaluer les impacts environnementaux afin de les réduire le plus possible. Pour cela, il convient de privilégier les solutions les plus sobres, les moins consommatrices de ressources informatiques mais répondant à un besoin utilisateur.

En sortie de développement, la revue de code est déjà une bonne pratique liée à la qualité de l’ingénierie logicielle. Durant cette revue de code, il s’agit de s’assurer que le choix de conception orienté « sobriété numérique » a été implémenté. Y ajouter des indicateurs, par exemple le nombre et poids des médias, bibliothèques ou dépendances ajoutées, les ressources matérielles nécessaires.

S’il existe une liste de critères en fin de développement, une « Définition de fini » (*definition of done*), y intégrer des critères environnementaux, par exemple le nombre et poids des médias à respecter, le temps de réponse, bibliothèques ou dépendances ajoutées.

Une attention à l'obsolescence des équipements est à étudier : la solution choisie et son implémentation doivent pouvoir fonctionner sur des équipements anciens ou dans des conditions dégradées (connectivité limitée par exemple).

## En savoir plus

Vérifier la conformité du service numérique au [Référentiel général d’écoconception de service numérique (RGESN)](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)
