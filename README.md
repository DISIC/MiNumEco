# MiNumEco - Mission interministérielle numérique écoresponsable

Code du site web https://ecoresponsable.numerique.gouv.fr/

![MiNumEco - Mission interministérielle numérique écoresponsable](https://raw.githubusercontent.com/DISIC/MiNumEco/main/img/logo.png)

## Installation

```
npm install
```

## Run

```
npx eleventy
```

Or build and host locally for local development
```
npx eleventy --serve
```

Or build automatically when a template changes:
```
npx eleventy --watch
```

Or in debug mode:
```
DEBUG=* npx eleventy
```

## Déploiement

Déploiement des fichiers statiques de la branche `prod` automatiquement avec les "actions Github" dès commit sur la branche `main`. [Voir le workflow de déploiement](https://github.com/DISIC/greentech/blob/main/.github/workflows/deploy.yml)

## Gestion des contenus

Il n'y a pas d'outil dédié pour la gestion du contenu. La mise à jour se fait via Github ou plus confortablement, en local en clonant le dépôt et en installant le site sur son poste. 

Par exemple pour ajouter une actualité, créer un fichier `mon-actu.md` dans le répertoire [posts](posts) avec le contenu suivant, ce sont les entêtes qui seront utilisées par Eleventy pour générer la page HTML :

    ---
    title: Top 5 de bonnes pratiques numérique responsable
    description: "Par quoi commencer, pour réduire ou limiter les impacts environnementaux du numérique à l'échelle d'une organisation ?"
    image: /img/posts/top-5-bonnes-pratiques-numerique-responsable.png
    type: news
    date: 2022-03-21
    ---
    Contenu de mon actu en markdown

## Particularités

### Référentiel général d'écoconception de service numérique (RGESN)

Les pages du RGESN sont générées à partir de [referentiel-ecoconception.json](/DISIC/MiNumEco/blob/main/_data/referentiel-ecoconception.json).

## Licence

Les codes sources de ce dépôt sont placés sous licence MIT.

Les contenus humainement lisibles sont placés sous [licence Ouverte 2.0](https://www.etalab.gouv.fr/licence-ouverte-open-licence).
