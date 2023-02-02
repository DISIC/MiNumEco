---
layout: layouts/post.njk
title: NumEcoGestes
description: "Dans un contexte de sobriété énergétique, NumEcoGestes permet de sensibiliser, en jouant, sur les bonnes pratiques à adopter pour réduire les consommations d'électricité : télétravail, mobilité, chauffage et usages des appareils électriques et numériques."
date: 2022-12-01
image: /img/plans-action/couverture-dinum.png
type: publication
focus: true
eleventyExcludeFromCollections: true
eleventyNavigation:
  parent: publications
  title: NumÉcoGestes
  date: 2022-12-01
  image: /img/plans-action/couverture-dinum.png
  order: 100
---

Dans un contexte de sobriété énergétique, NumEcoGestes permet de sensibiliser, en jouant, sur les bonnes pratiques à adopter pour réduire les consommations d'électricité : télétravail, mobilité, chauffage et usages des appareils électriques et numériques.

## À propos

L’objectif est de contribuer à changer les comportements de toutes et tous pendant les pics de consommation d’énergie. Cet outil se base notamment sur les alertes EcoWatt de RTE. Ainsi tous les agents recevront une alerte directement sur leurs ordinateurs lors des pics ou quotidiennement et sauront quoi faire puisque de bonnes pratiques leur seront poussées.

Webextension légère, éco-conçue, sécurisée et accessible, « NumEcoGestes » permet d’avoir un usage ludique. L'utilisateur peut cliquer sur un bouton « Je le fais » pour déclarer qu'il réalise l'action proposée afin d'augmenter son score et gagner des badges.

## Installation

* [Firefox](https://addons.mozilla.org/fr/firefox/addon/numecogestes/)
* [Chrome, Chromium et Edge](https://chrome.google.com/webstore/detail/num%C3%A9cogestes/ofabncmmfelcfeaijamifgabkjnincei?hl=fr)

## Sécurité et protection des données

L’outil est développé en HTML et javascript (_framework Vue.js_). Dès lors que l’outil est installé, il fonctionne sans nécessité d’aucun téléchargement. Cependant, une récupération automatique toutes les heures est réalisée par l'extension pour mettre à jour les données des alertes EcoWatt. Ces mises à jours sont dans un [fichier stocké sur ce site](https://ecoresponsable.numerique.gouv.fr/api/ecowatt/ecowatt.json), une copie des données disponibles via l'API Ecowatt de RTE.

L'outil affiche une notification à l’écran lorsqu'il y a une alerte de tension électrique (tous les jours le matin et début de soirée, ainsi que les créneaux des alertes EcoWatt) invitant l'utilisateur à des écogestes (éteindre, décaler des usages...).

Pour ludifier l'usage de l'outil, l'utilisateur peut cliquer sur un bouton « Je le fais » pour déclarer qu'il réalise l'action proposée. Est stocké alors dans le navigateur, un agrégat qui permet de donner un score mensuel de l'utilisateur. Aucune autre donnée n'est collectée ni transmise en dehors du navigateur.

L'outil nécessite des droits de notification et de stockage local de données (_localStorage_ du navigateur) ce qui est précisé à l’installation de l’extension sans que l’utilisateur ait à faire quoi que ce soit.

Les _merge_ de code sur le dépôt de code et la publication sur les catalogues des navigateurs sont gérés directement par la MiNumEco.

Le « miroir » de l'API Ecowatt est réalisé par la MiNumEco. Il s'agit d'un workflow github action, en l'occurrence un _cron job_ qui récupère le json de l'API Ecowatt et le [stocke ici](https://ecoresponsable.numerique.gouv.fr/api/ecowatt/ecowatt.json). Les extensions installées sur les navigateurs utilisateurs ne communiquent pas directement avec l'API RTE mais récupère donc les données depuis ce _json_ statique stocké sur le site de la MiNumEco. Le détail de ce _workflow_ est [disponible sur github](https://github.com/DISIC/MiNumEco/blob/main/.github/workflows/ecowatt-api-mirroring.yml).

## Réalisation

NumEcoGestes est proposé gratuitement par la MiNumEco et est réalisé par la MiNumEco, Ctrl S et Noesya.

## Code et licence

Le [code de NumEcoGestes est publié sur Github](https://github.com/DISIC/NumEcoGestes) et sous [licence European Union Public Licence v. 1.2](https://github.com/DISIC/NumEcoGestes/blob/main/LICENSE).
