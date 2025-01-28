module.exports = {
    title: "Mission interministérielle",
    url: "https://ecoresponsable.numerique.gouv.fr/",
    repository_url: "https://github.com/codegouvfr/eleventy-dsfr",
    language: "fr",
    description: "MiNumEco, la mission interministérielle numérique écoresponsable pilotée par la DINUM et le Ministère de la Transition écologique pour réduire les impacts environnementaux du numérique",
		subtitle: "Numérique écoresponsable",
    author: {
        name: "Nom du service",
        email: "contact@nom.du.service.gouv.fr",
        url: "https://url_du_service.gouv.fr/"
    },
    service: "Nom de l’entité (ministère, secrétariat d‘état, gouvernement)",
		newsletter: {
				url: "https://www.linkedin.com/newsletters/7242864226900279296/?displayConfirmation=true",
		},
		// Réseaux sociaux
		linkedin_url:"https://www.linkedin.com/company/mission-interministerielle-numerique-ecoresponsable",
		// twitter_url:"https://twitter.com/Mi_NumEco_Gouv",
		// facebook_url:"",
		// mastodon_url:"",
		// instagram_url:"https://www.instagram.com/minumecogouv/",
		// youtube_url:"",
		// peertube_url:"",
		guideAchats: {
			version: "beta",
			versionTitle: "bêta",
			updatedAt: "2021-04-29",
			dataGouvUrl: "https://www.data.gouv.fr/fr/datasets/guide-pratique-pour-des-achats-numeriques-responsables/"
		},
		guideBonnesPratiques: {
			version: "v1",
			versionTitle: "1",
			title: "Guide de bonnes pratiques numérique responsable pour les organisations",
			description: "Guide proposé par la DINUM, le Ministère de la Transition Écologique et l’Institut du Numérique Responsable",
			updatedAt: "2023-06-01",
			documentUrl: "/docs/2023/guide-de-bonnes-pratiques-numerique-responsable-version-1.pdf",
			documentWeightInMo: "3,6",
			consultationUrl: "https://purpoz.com/project/consultation-pour-etablir-un-guide-des-bonnes-pratiques-numerique-responsable/consultation/votez-pour-valider-les-criteres-et-ajoutez-vos-propositions",
			dataGouvUrl: "https://www.data.gouv.fr/fr/datasets/guide-de-bonnes-pratiques-numerique-responsable-pour-les-organisations/"
		},
		referentielEcoconception: {
			version: "v2",
			versionTitle: "2",
			title: "Référentiel général d'écoconception de services numériques",
			description: "Référentiel piloté par l'Arcep et l'Arcom, en lien avec l'ADEME, la CNIL, la DINUM, le Ministère de la Transition Écologique, la MiNumEco",
			updatedAt: "2024-05-28",
			thematique: {
				strategie: {
					description: "La stratégie permet de déterminer et de suivre la pertinence, les enjeux et le pilotage de la conception du service numérique."
				},
				specifications: {
					description: "Cette partie regroupe les éléments de cadrage projet, les objectifs et contraintes du projet sur toute la durée de vie du service numérique."
				},
				architecture: {
					description: "Cette partie porte sur la stratégie de conception et l'articulation des composants applicatifs entre le frontend et le backend."
				},
				uxui: {
					description: "Cette partie présente les étapes et méthodes de conception des services numériques pour définir les meilleures solutions d'interactions destinées aux utilisateurs."
				},
				contenus: {
					description: "La partie \"contenus\" concerne les documents et médias informatifs ajoutés au service numérique par des personnes contributrices et disponibles pour l'utilisateur final."
				},
				frontend: {
					description: "Le frontend est l'ensemble des composants en opération sur un terminal utilisateur pour permettre l'utilisation d'un service numérique."
				},
				backend: {
					description: "La partie s'intéresse à l'ensemble des composants en opération côté serveur pour permettre le fonctionnement d'un service numérique."
				},
				hebergement: {
					description: "Il s'agit des moyens mis en œuvre côté hébergement pour permettre la conception/développement, l'utilisation, et si applicable, l'entrainement d'un service numérique. Toute la chaîne d'hébergement mobilisée pour les fonctionnalités critiques du service (centres de données, Content Delivery Network, etc.) doit être prise en compte pour valider les critères de cette partie."
				},
				algorithmie: {
					description: "Cette partie concerne les services numériques reposant sur une intelligence artificielle (IA). Elle vise la mise en place de princies d'écoconception et de frugalité quant à l'entraînement et l'inférence des modèles algorithmiques utilisés pour l'IA. La phase d'apprentissage désigne le processsus par lequel un système réalise, à partir de données et via des modèles algorithmiques, des calculs afin de proposer des fonctionnalités. Elle est suivie par une phase d'inférence, de mise en oeuvre des modèles entraînés."
				}
			}
		}
}
