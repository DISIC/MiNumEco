---
title: "Semaine NumEco 2025"
description: Les événements organisés par les ministères à l'occasion de la semaine numérique responsable 2025
date: 2025-03-01
image:
    path: ../../img/Site_Event_10032025_SemaineNumEco.webp
    alt: ""
tags:
  - 'MiNumEco'
  - 'Ministères'
  - 'Événement'
---

<!-- chapô-->
Inscrivez-vous aux événements organisés par les ministères à l'occasion de la Semaine Numérique Ecoresponsable.
<!-- texte-->

## Semaine NumEco

{% set postslist = [] %} {% for item in collections['Semaine NumEco'] %} {% if item.data.tags and 'Événement' in item.data.tags and item.data.date | isFutureDate %} {% set postslist = postslist.concat(item) %} {% endif %} {% endfor %} {% include "postslist-2cols.njk" %}
