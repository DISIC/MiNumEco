# MiNumEco - Mission interministérielle numérique écoresponsable

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

## Particularités

### Référentiel général d'écoconception de service numérique (RGESN)

Les pages du RGESN sont générées à partir de [referentiel-ecoconception.json](/DISIC/MiNumEco/blob/main/_data/referentiel-ecoconception.json).

## Licence

Les codes sources de ce dépôt sont placés sous licence MIT.

Les contenus humainement lisibles sont placés sous [licence Ouverte 2.0](https://www.etalab.gouv.fr/licence-ouverte-open-licence).
