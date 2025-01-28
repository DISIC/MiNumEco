---
title: Vidéos
layout: layouts/landing.njk
eleventyNavigation:
  parent: ressources
  title: Vidéos
  order: 2
---
<article class="fr-mb-6w">
	{% set seriesName = "Paroles d'experts" %}
	<h2>Série {{seriesName}}</h2>
	{% set postslist = collections['Vidéo'] | series(seriesName) | limit(3) %}
	{% include "postslist.njk" %}
	<a href="/ressources/videos/serie/{{ seriesName | slugify }}">Voir toutes les vidéos de la série {{seriesName}}</a>
</article>

<article class="fr-mb-6w">
	{% set seriesName = "Référents" %}
	<h2>Série {{seriesName}}</h2>
	{% set postslist = collections['Vidéo'] | series(seriesName) | limit(3) %}
	{% include "postslist.njk" %}
	<a href="/ressources/videos/serie/{{ seriesName | slugify }}">Voir toutes les vidéos de la série {{seriesName}}</a>
</article>

<article class="fr-mb-6w">
	{% set seriesName = "Micro Trottoir" %}
	<h2>Série {{seriesName}}</h2>
	{% set postslist = collections['Vidéo'] | series(seriesName) | limit(3) %}
	{% include "postslist.njk" %}
	<a href="/ressources/videos/serie/{{ seriesName | slugify }}">Voir toutes les vidéos de la série {{seriesName}}</a>
</article>

<article class="fr-mb-6w">
	{% set seriesName = "Autres vidéos" %}
	<h2>Série {{seriesName}}</h2>
	{% set postslist = collections['Vidéo'] | noSeries | limit(3) %}
	{% include "postslist.njk" %}
	<a href="/ressources/videos/serie/{{ seriesName | slugify }}">Voir toutes les vidéos de la série {{seriesName}}</a>
</article>

<article class="fr-mb-6w">
	<h2>Toutes les vidéos</h2>
	{% set postslist = collections['Vidéo'] | limit(3) %}
	{% include "postslist.njk" %}
	<a href="/actualites/tags/video/">Voir toutes les vidéos</a>
</article>
