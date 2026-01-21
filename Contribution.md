# Contribuer

## Header
### Modifier le contenu de la navigation


## Footer

### Modifier le texte du footer

Il se trouve dans `_data/data.js`.

### Modifier les liens
Le contenu se trouve dans `_includes/templates/footer.njk`, c'est du HTML

### Formations

Pour qu'une formation n'apparraisse plus dans la page prochaine formation il faut que la date spécifiée entre `---` soit passée.

## Contenus

Ils se trouvent dans `content`

- `a-propos`, il s'agit de la page https://ecoresponsable.numerique.gouv.fr/a-propos/ ;
- `accessibility`, il s'agide de la page https://ecoresponsable.numerique.gouv.fr/accessibilite/ ;
- `actualites`, regroupe tous les articles. Pour la gestion voir [la section dédiée](#actualites) ;
- `barometre`, partie cachée actuellement, pour la remettre il faut mettre le code suivant en dessous du permalink

```
  eleventyNavigation:
    key: barometre
    title: Baromètre
    order: 5
```
- `calendar`, n'est plus utilisé pour le moment ;
- `contact`, il s'agit de la page https://ecoresponsable.numerique.gouv.fr/contact/ ;
- `declaration-ecoconception`, il s'agit de la page https://ecoresponsable.numerique.gouv.fr/declaration-ecoconception/ ;
- `feed`, permet de générer le flus RSS ;
- `financement`, il s'agit de la page https://ecoresponsable.numerique.gouv.fr/financement/ ;
- `formations`, contient toutes les sous-pages de la navigation "Formations" ;
- `legal`, il s'agit de la page https://ecoresponsable.numerique.gouv.fr/mentions-legales/ ;
- `personal-data`, il s'agit de la page https://ecoresponsable.numerique.gouv.fr/donnees-personnelles/ ;
- `publications`, il s'agit des anciens contenus, pour éviter les 404 ;
- `reglementation`, il s'agit de la page https://ecoresponsable.numerique.gouv.fr/reglementation/ ;
- `ressources`, contient toutes les sous-pages de la navigation "Ressources" ;
- `sitemap`, permet de générer le plan du site ;
- `thematiques`, anciens contenus, permet d'éviter les 404.

### Actualités

Les différents article se trouvent dans le dossier "posts".

Les fichiers "index.njk", "tags_index.njk et "tags.njk" servent à l'affichage des contenus.

#### Créer et ranger les actualités

Dans le dossier "posts", il y a plusieurs sous-dossiers :

- `actus`qui accueille les différentes actualités en vrac. Il est possible de faire des dossiers pour s'y retrouver, ça n'impactera pas les urls ;
- `img`, voir la [section](#ajouter-une-image-à-une-actualité) dédiée ;
- `lettres-information` regroupe les articles de newsletter
- `podcasts` regroupe les podcasts
- `videos` regroupe les vidéos
- `vieux` regroupe les articles présents avant la mise à jour, permet surtout d'éviter les 404

#### Ajouter une image à une actualité

Il faut les mettre dans le dossier `img`, de préférence au format `.webp`.

Une fois qu'elle est créée, il faut vérfier dans le fichier `.md` de l'actualité que l'image est bien appelée pour servir de miniature dans la liste des actus.

Le code se trouve dans les metas données (entre les `---`) et ressemble à

```
image:
  path: ../img/monImage.webp
  alt: ""
```
⚠️ le chemin `../img` est le chemin si l'actualité est dans `actus`, `lettres-information`, `podcasts` ou `videos`. Si l'article est dans un sous-dossier il faut remplacer par `../../img`.


