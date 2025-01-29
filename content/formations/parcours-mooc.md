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
2 modules sont destinés à tous les agents publics et 2 modules sont destinés aux agents publics travaillant dans le numérique.

## Modules MOOC sur mentor.gouv.fr
<!-- grille avec les cartes présentant les différents modules-->

<div class="fr-grid-row fr-grid-row--gutters fr-mb-1w">
<div class="fr-col-12 fr-col-md-6">
<!-- carte 1 -->
	{% from "components/component.njk" import component with context %}
	{{ component("card", {
		externalUrl: "https://mentor.gouv.fr/catalog/2825",
		url: "",
		title: "Serious Game - The Impact Agency",
		image: {
			src: "/img/formations/parcours-formation-vierge.webp",
			alt: ""
		},
		badges: ["Serious game"]
	}) }}
	</div>

<!-- carte 2 -->
<div class="fr-col-12 fr-col-md-6">
	{% from "components/component.njk" import component with context %}
	{{ component("card", {
		externalUrl: "https://mentor.gouv.fr/catalog/3087",
		url: "",
		title: "Module 1 - L’impact environnemental du numérique : comment agir ?",
		image: {
			src: "/img/formations/parcours-formation-vierge.webp",
			alt: ""
		},
		badges: ["Module 1"]
	}) }}
</div>
<!-- /carte 2 -->

<!-- carte 3 -->
<div class="fr-col-12 fr-col-md-6">
	{% from "components/component.njk" import component with context %}
	{{ component("card", {
		externalUrl: "",
		url: "",
		title: "Module 2 - Gestion responsable d'un projet numérique",
		image: {
			src: "/img/formations/parcours-formation-vierge.webp",
			alt: ""
		},
		badges: ["Sortie le 10 mars 2025"]
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
			src: "/img/formations/parcours-formation-vierge.webp",
			alt: ""
		},
		badges: ["Sortie avril 2025"]
	}) }}
</div>
<!-- /carte 4 -->


</div>
