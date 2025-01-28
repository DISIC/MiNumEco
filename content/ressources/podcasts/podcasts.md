---
title: Podcasts
layout: layouts/landing.njk
eleventyNavigation:
  parent: ressources
  title: Podcasts
  order: 3
---

<!-- <article class="fr-mb-6w">
	{% set seriesName = "Saison 1" %}
	<h2>Série {{seriesName}}</h2>
	{% set postslist = collections.Podcast | series("Saison 1") | limit(3) %}
	{% include "postslist.njk" %}
	<a href="/ressources/podcasts/serie/{{ seriesName | slugify }}">Voir toutes les podcasts de la série {{seriesName}}</a>
</article> -->

## Saison 1
{% set postslist = collections.Podcast | series("Saison 1") %}
{% include "postslist.njk" %}

## Tous les podcasts
{% set postslist = collections.Podcast | reverse %}
{% include "postslist.njk" %}
