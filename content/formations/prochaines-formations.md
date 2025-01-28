---
title: Prochaines formations
layout: layouts/page-with-summary.njk
eleventyNavigation:
  parent: formations
  title: Prochaines formations
  order: 1
---

## Prochaines dates
{% set postslist = [] %}
{% for item in collections['Formation'] %}
    {% if item.data.tags and 'Événement' in item.data.tags and item.data.date | isFutureDate %}
      {% set postslist = postslist.concat(item) %}
    {% endif %}
{% endfor %}
{% include "postslist-2cols.njk" %}

## Public concerné
Agent public d'État travaillant dans le numérique

Quelque soit votre métier : chef de projet ou de produit, MOA, AMOA, UX researcher, designer, développeuse ou développeur, devops, responsable de recette, rédacteur ou rédactrice web, etc.

## Thématiques des prochaines formations

* écoconception de services numériques
* élaborer sa feuille de route numérique responsable
* identifier et déjouer les effets rebonds

## Organisateur
* Formations organisées par la Brigade d'Intervention du Numérique (BIN) de la Direction Interministérielle du Numérique (DINUM).
* Formatrice : <a href="https://fr.linkedin.com/in/melanieraphael" target="_blank" title="Nouvelle fenêtre : Page Linkedin de Mélanie Raphaël">Mélanie Raphaël, Experte numérique écoresponsable, DINUM</a>
Lieu de la formation 20 avenue de Ségur 75007 Paris

### Lieu
En présentiel au 20 avenue de Ségur 75007

## Accompagnement spécifique

<div class="fr-highlight">

Dans le cadre de la Brigade d'Intervention du Numérique (BIN), la MiNumEco propose des accompagnements à l'écoconception de services numériques et des formations aux enjeux du numérique responsable pour les administrations et agents publics.
Contactez-nous pour identifier les besoins de votre service et organiser un accompagnement.

[Nous contacter](/contact).

</div>

