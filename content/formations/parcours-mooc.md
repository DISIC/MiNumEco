---
title: Parcours MOOC Numérique Écoresponsable
layout: layouts/page-with-summary.njk
eleventyNavigation:
  parent: formations
  title: Parcours MOOC des agents publics
  order: 3
---
## Le parcours de formation

Basé sur le [référentiel de compétences NumEco publié par la DINUM](/formations/referentiel-competences/), le parcours NumEco de la DINUM propose 3 modules de base et un serious game.
<br> 
2 modules sont destinés à tous les agents publics et 2 modules sont destinés aux agents publics travaillant dans le numérique.

## Lancement du parcours 

<!-- intégraton vidéo dailymotion de la chaine de la DINUM -->
{%- dailymotion "x9fznfq" -%}
<br>

<!-- légende de la vidéo-->
**Stéphanie Schaer, Directrice de la DINUM lance le parcours de formation au numérique responsable**

<!-- description-->
Lancement du parcours de formation en ligne à l'occasion de la semaine NumEco en mars 2025.

<!-- transcription-->

{% transcription "Mélanie RAPHAËL" %}
<p>
Stéphanie Schaer <br>
Directrice <br>
Direction Interministérielle du Numérique - DINUM<br>
</p>
<p>
 À l'occasion de la semaine NUMECO dédiée au numérique éco-responsable, qui se déroulera du 10 au 15 mars prochain, je suis heureuse de vous annoncer le lancement d'un parcours de formation dédié. 
 <br>
 Le numérique est au cœur de nos vies et de nos administrations. Cependant, en France, il est responsable de 4,4% des émissions de gaz à effet de serre, une proportion comparable à celle du transport aérien. Cette empreinte pourrait être multipliée par 10 d'ici à 30 ans, selon les projections de l'ADEME. 
 <br>
 Il est donc impératif d'adopter des pratiques numériques plus responsables pour limiter et réduire notre impact environnemental. En tant qu'acteur public, nous avons le devoir de montrer l'exemple. L'État s'est engagé dans un plan de transition écologique ambitieux afin de réduire de 22% l'empreinte environnementale de l'ensemble des services publics d'ici 2027. 
 <br>
 À la DINUM, notre rôle est d'accompagner les ministères dans la réduction de leur empreinte environnementale. 
 Pour ce faire, la DINUM forme et outille les agents publics sur ces sujets. 
 <br>
 Développé par la DINUM, ce parcours comprend 4 modules disponibles sur la plateforme mentor.gouv.fr. Deux modules pour sensibiliser tous les agents, deux modules destinés tout particulièrement aux agents de la filière numérique de l'État. Je vous invite à suivre ces parcours de formation numérique éco-responsable. 
 <br>
 Bonne formation à tous !
</p>
{% endtranscription %}

<!-- fin de la transcription-->

<br>
<br>

## Les 4 modules MOOC
<!-- Chapô-->
Ces modules sont accessibles sur mentor.gouv.fr à tous les agents de la fonction publique d'État et à toutes celles et ceux qui ont accès à mentor.
<br>
<br>

<!-- grille avec les cartes présentant les différents modules-->

<div class="fr-grid-row fr-grid-row--gutters fr-mb-1w">
<div class="fr-col-12 fr-col-md-6">
<!-- carte 1 -->
	{% from "components/component.njk" import component with context %}
	{{ component("card", {
		externalUrl: "https://ecoresponsable.numerique.gouv.fr/actualites/module-serious-game/",
		url: "",
		title: "Serious Game - The Impact Agency",
		image: {
			src: "/img/formations/parcours-formation-mooc-seriousgame.webp",
			alt: ""
		}
	}) }}
	</div>

<!-- carte 2 -->
<div class="fr-col-12 fr-col-md-6">
	{% from "components/component.njk" import component with context %}
	{{ component("card", {
		externalUrl: "https://ecoresponsable.numerique.gouv.fr/actualites/module-1/",
		url: "",
		title: "Module 1 - L’impact environnemental du numérique : comment agir ?",
		image: {
			src: "/img/formations/parcours-formation-mooc-module1.webp",
			alt: ""
		}
	}) }}
</div>
<!-- /carte 2 -->

<!-- carte 3 -->
<div class="fr-col-12 fr-col-md-6">
	{% from "components/component.njk" import component with context %}
	{{ component("card", {
		externalUrl: "https://ecoresponsable.numerique.gouv.fr/actualites/module-2/",
		url: "",
		title: "Module 2 - Gestion responsable d'un projet numérique",
		image: {
			src: "/img/formations/parcours-formation-mooc-module2.webp",
			alt: ""
		}
	}) }}
</div>
<!-- /carte 3 -->

<!-- carte 4 -->
<div class="fr-col-12 fr-col-md-6">
	{% from "components/component.njk" import component with context %}
	{{ component("card", {
		externalUrl: "",
		url: "",
		title: "Module 3 - évaluer l'empreinte environnementale de son SI et de ses services numériques",
		image: {
			src: "/img/formations/parcours-formation-mooc-module3.webp",
			alt: ""
		},
		badges: ["Sortie novembre 2025"]
	}) }}
</div>
<!-- /carte 4 -->

</div>
