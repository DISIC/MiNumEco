---
layout: layouts/bonne-pratique/bonne-pratique.njk
title: Évaluer régulièrement l’empreinte environnementale du système d’information
type: bpnr
date: 2023-06-01
idbp: c.2
priority: Recommandée
difficulty: Difficile 
who:
  - Délégué au numérique responsable
indicators:
  - "Évaluation de l’empreinte environnementale du SI réalisée ? OUI/NON"
  - "Quantification de l’empreinte du SI par collaborateur : à minima en GES (en kg eqCO2 par collaborateur)"
eleventyNavigation:
  parent: bonnes-pratiques-mesure-evaluation
  order: 20
---

Afin d'identifier les principaux gisements de réduction des impacts environnementaux, chaque organisation est encouragée à évaluer régulièrement les impacts environnementaux de son système d'information (SI) et de ses services numériques. Cette stratégie de mesure est principalement basée sur l’**analyse du cycle de vie (ACV)**, une méthode d’évaluation des impacts itérative, multi-étapes et multicritère. 

Il est donc important de mesurer les impacts à toutes les phases du cycle de vie, et pas uniquement la phase d'usage. Le suivi seul de la consommation d'électricité en phase d'usage n’est par exemple **pas suffisant pour évaluer les impacts** puisque pour de nombreux équipements numériques, la phase de fabrication est la plus impactante.

Il est important également d'évaluer plusieurs critères afin d'**éviter les transferts de pollution**. Parmi les flux entrants, il faut évaluer par exemple, les flux de matière et d’énergie. C’est-à-dire les ressources en métaux, les consommations d'eau, source d'énergie primaire (pétrole, gaz, uranium). Quant aux flux sortants, il faut évaluer les déchets, émissions gazeuses, liquides rejetés, etc.

Pour les émissions de gaz à effet de serre, cette évaluation doit porter sur : 
* **Scope 1** : les émissions directes des gaz à effet de serre (GES) provenant des installations fixes ou mobiles situées à l'intérieur du périmètre organisationnel.
* **Scope 2** : les émissions à énergie indirectes associées à la production d’électricité, de chaleur ou de vapeur importée pour les activités de l’organisation.
* **Scope 3** : les autres émissions indirectement produites par les activités de l’organisation qui ne sont pas comptabilisées au Scope 2 mais qui sont liées à la chaîne de valeur complète comme : l’achat de matières premières,  la fabrication des équipements informatiques, de services ou autres produits, les déplacements des salariés, le transport amont et aval des marchandises, la gestion des déchets générés par les activités de l’organisme, l’utilisation et la fin de vie des produits et services vendus, l’immobilisation des biens et équipements de productions…

Il peut être difficile d'obtenir des informations fiables et détaillées concernant l'impact environnemental de l'ensemble des fournisseurs de services et de matériels. Toutefois, cette difficulté ne doit pas conduire à une inaction de la part des organisations.
En conséquence, en première intention, la quantité d'émission de CO2 peut être considérée comme un premier indicateur de pilotage partagé par l'ensemble des périmètres. 
Un premier élément de mesure peut être obtenu à partir du volet numérique du bilan d’émissions de gaz à effet de serre le cas échéant. 

## En savoir plus

EcoInfo propose l’outil [EcoDiag](https://ecoinfo.cnrs.fr/ecodiag-calcul/) pour évaluer les impacts liés à la fabrication et au transport d’un parc d’équipements informatiques. Cet outil s’appuie sur les fiches PCF (Product Carbon Footprint) fournies par les constructeurs.

L'INR propose un [outil d'évaluation de l'empreinte d'un SI : le WeNR](https://institutnr.org/wenr-2021). Des outils permettent une évaluation brique par brique, comme la [Base Impacts® de l'ADEME](http://www.base-impacts.ademe.fr/) (en monocritère GES). Des outils open source comme [OpenLCA](https://www.openlca.org/) sont également disponibles pour réaliser des ACV si vous avez les compétences. La connexion de ces outils à des bases de données comme la Base Empreinte® de l'ADEME permettent de réaliser une évaluation brique par brique.
