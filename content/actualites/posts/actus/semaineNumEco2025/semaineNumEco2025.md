---
title: "Semaine NumEco 2025"
description: Les événements organisés par les ministères à l'occasion de la semaine numérique responsable 2025
date: 2025-03-15
image:
    path:
    alt: ""
tags:
  - 'MiNumEco'
  - 'Ministères'
  - 'Événement'
  - 'Semaine NumEco'
---

<p class="fr-badge fr-badge--success fr-badge--no-icon">Nouveau</p>

<!-- chapô-->
Inscrivez-vous aux événements organisés par les ministères à l'occasion de la Semaine Numérique Ecoresponsable.
<!-- texte-->

## Semaine NumEco

{% set postslist = [] %} {% for item in collections['Semaine NumEco'] %} {% if item.data.tags and 'Événement' in item.data.tags and item.data.date | isFutureDate %} {% set postslist = postslist.concat(item) %} {% endif %} {% endfor %} {% include "postslist-2cols.njk" %}
