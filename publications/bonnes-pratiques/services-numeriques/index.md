---
layout: layouts/bonne-pratique/thematique.njk
title: Services numériques
tags: guideBpNrThematique
image: /img/publications/bonnes-pratiques/guide-bonnes-pratiques-vignette.webp
date: 2022-02-17
idThematique: g.
eleventyNavigation:
  key: bonnes-pratiques-services-numeriques
  parent: guideBpNr
  title: Services numériques
  order: 70
---

La [loi de Wirth](https://fr.wikipedia.org/wiki/Loi_de_Wirth) est une loi empirique formulée par Niklaus Wirth en 1995, selon laquelle « les programmes ralentissent plus vite que le matériel n'accélère » ou dit autrement, la performance croissante des matériels est contrecarrée par le fait que les logiciels deviennent de plus en plus « gros et lents ». En effet, l'une des causes de l'obsolescence des équipements est due aux logiciels, qui en consommant de plus en plus de ressources informatiques (processeur, mémoire, stockage, etc.), accélèrent l'obsolescence des équipements.

De plus, sur certains équipements ou sur certains systèmes d'exploitation, des logiciels préinstallés ne peuvent pas être supprimés ([bloatware](https://fr.wikipedia.org/wiki/Bloatware\))), occupant à la fois les ressources disques et parfois les ressources CPU lorsqu'ils fonctionnent en tâche de fond.

Quelques questions à se poser 

## À l’achat de logiciels ou d'équipements contenant un logiciel :

- Quelles sont les versions des systèmes d’exploitation, navigateurs et types d’équipements supportés par le logiciel acheté ? Peut-on estimer la durée pendant laquelle ils le seront ?
- Peut-on contractualiser sur des durées longues de maintenance du logiciel acheté ?
- Les acheteurs sont-ils formés sur les sujets de l’écoconception de service numérique, de l’obsolescence des logiciels eux-mêmes mais aussi l’obsolescence induite par le logiciel sur les équipements ?

## À la conception d'un service numérique :

-	A-t-on besoin de numériser le service ?
-	A-t-on identifié les attentes réelles des utilisateurs-cibles ?
- Une stratégie de compatibilité avec les terminaux et versions logicielles obsolètes est-elle définie ? Dans la définition des personae, les versions cibles d’équipements, systèmes d’exploitation (OS) et navigateurs ont-elles été prises en compte ?
- S'assurer d'une compatibilité descendante et ascendante sur les équipements
- Privilégier l’utilisation des technologies web ou standard plutôt que des technologies propriétaires, dépendantes d'une plateforme ou spécifiques à un système d'exploitation (web app vs applications natives par exemple)
- Limiter les dépendances externes (librairies / packages tiers)
- Privilégier les versions LTS (Long-term support) des outils ou briques logicielles notamment open source
- Privilégier des solutions open source mais vérifier les durées d’engagement de maintenance ou s’engager dans la maintenance de l’outil.
- Amélioration progressive selon les possibilités du terminal (_Progressive Web App_)
- Séparer les mises à jour évolutives des mises à jours correctives (vrai surtout pour les applications propriétaires et les systèmes d'exploitation)
- Découpler le code métier des frameworks pour faciliter les mises à jour et les évolutions
- Conception sobre : limiter les fonctionnalités, limiter la consommation de ressources informatiques (nombre de requêtes, poids, process, RAM…) et utiliser des composants natifs du système.
