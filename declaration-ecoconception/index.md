---
layout: layouts/post.njk
title: Déclaration d'écoconception
date: 2023-02-28
---

## Raison d’être de ce service

Ce site web vise à centraliser toutes les informations et documentations permettant à toutes les  organisations, privés comme publiques, à s’engager dans une démarche de réduction de l’empreinte de leurs activités numériques. La mission et cette base documentaire s’inscrivent dans une démarche de « Services Publics Écoresponsables » visant à réduire les impacts environnementaux de l’administration publique.

Les cibles utilisatrices du service sont d’abord les agents publics qui souhaitent mettre en place une démarche numérique écoresponsable, mais aussi les entreprises qui peuvent s’inspirer des travaux de l’administration publique et le grand public pour voir les actions de l’État, tenu à un devoir d’exemplarité. La définition des besoins métiers et des attentes des cibles utilisatrices est d’accéder aux documentations de manière la plus accessible possible.

## Stratégie mise en œuvre et objectifs en matière de réduction ou de limitation des impacts environnementaux

Le principal enjeu est de faire en sorte que ce site web fonctionne sur des terminaux les plus anciens possibles et dans des conditions variées de connectivité :

- Travail sur l’UX (expérience utilisateur) en proposant d’accéder aux contenus de manière différente : via « Nos publications » ou via « Vos besoins » (par thématique).
- Utilisation des composants d’interfaces du système de design de l’État : ils sont accessibles et leur empreinte est minimale.
- Navigation la plus intuitive possible pour réduire le temps passé à trouver une information
- Nombre de requêtes serveurs maximum astreinte par écran : 30
- Poids des ressources maximum astreint par écran : 600 Ko
- Tous les contenus sont consultables a minima sur mobile. Le site s’adapte à toutes les tailles d’écran.
- Compression maximale des images et vidéos.
- Proposition d’une alternative textuelle aux vidéos
- Suppression manuelle des contenus obsolètes : actualités, entrées d’agenda par exemple.

## Diagnostic RGESN

Le diagnostic mené en février 2023 par nos soins a porté sur l’échantillon suivant :

- [Consulter la page d'accueil](/)
- [Consulter la page à propos](/a-propos/)
- [Consulter une fiche pratique pour des achats numériques responsables](/publications/guide-pratique-achats-numeriques-responsables/demarche-numerique-responsable/analyse-cycle-de-vie/)
- [Consulter une bonne pratique du guide de bonnes pratiques](/publications/bonnes-pratiques/achat-durable/sassurer-tracabilite-produits/)
- [Lire une vidéo « Vers un numérique écoresponsable : les impacts environnementaux du numérique »](/publications/videos-vers-un-numerique-ecoresponsable/episode-1-les-impacts-environnementaux-du-numerique/)

Les outils utilisés pour évaluer certains indicateurs techniques sont l’inspecteur « réseau » des outils de développement du navigateur, l’extension [Green IT Analysis](/publications/boite-outils/fiches/greenitanalysis/) et l’outil [Yellow lab tools](/publications/boite-outils/fiches/yellowlabtools/).


<div class="fr-callout fr-py-3w">
<h2 class="fr-callout__title">Conformité</h2>
<p class="fr-callout__text">À l’aide de <a href="/publications/referentiel-general-ecoconception/numecodiag/">NumEcoDiag</a>, l’auto-diagnostic donne un taux de conformité au <a href="/publications/referentiel-general-ecoconception/">RGESN</a> (référentiel général d’écoconception) de <b>65%</b>.</p>

<p class="fr-callout__text"><a href="/docs/2023/NumEcoDiag-site-ecoresponsable-numerique-gouv-fr-2023-02-28.ods" class="fr-btn">Voir le détail du diagnostic (.ods, 27 Ko)</a></p>
</div>


## Configuration minimale requise pour accéder au site

- Type, année de construction ou versions cibles des équipements utilisateurs supportés : tout équipement mobile datant de 2014 minimum.
- Connexion minimum pour un accès et une utilisation confortable du service : 3G en mobile et 512 Kbs en connexion fixe.
- Adaptation à différentes tailles d’écran : Oui, taille minimum d’écran de 320 pixels de large.

## Améliorations identifiées

- Concevoir le service avec une revue de conception et une revue de code en ayant pour un des objectifs de réduire les impacts environnementaux de chaque fonctionnalité (critère 2.1)
- Prendre en compte l'évolution technique des protocoles : configuration manquante pour la compatibilité IPv6 (critère 3.3).
- Mettre en place un chargement des composants utilisés au sein des bibliothèques lorsque cela est possible : ne charger que les composants nécessaires du Système de Design (critère 6.7)
- Maîtrise de l’hébergement (tous les critères de la thématique [hébergement](/publications/referentiel-general-ecoconception/#hebergement)).

