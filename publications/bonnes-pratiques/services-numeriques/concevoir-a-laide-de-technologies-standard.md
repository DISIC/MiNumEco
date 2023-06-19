---
layout: layouts/bonne-pratique/bonne-pratique.njk
title: Concevoir à l’aide de technologies standard plutôt que de technologies propriétaires ou spécifiques à une plateforme
type: bpnr
date: 2023-06-01
idbp: g.7
priority: Recommandée
difficulty: Moyenne
who:
  - Direction du numérique
  - Responsable produit
  - Responsable projet
indicators:
  - "Le service numérique a-t-il été conçu avec des technologies standard interopérables plutôt que des technologies spécifiques et fermées ? oui / non"
eleventyNavigation:
  parent: bonnes-pratiques-services-numeriques
  order: 70
---

Certains utilisateurs et utilisatrices de smartphones anciens ne peuvent plus utiliser certaines applications mobiles pour accéder à la réservation de leur billet de train ou à leur compte en banque, car le système d'exploitation n'est plus mis à jour et les applications ne supportent pas les anciennes versions des systèmes d’exploitation. S'il n'existe pas de version web de ces services numériques, l'usager n'a pas d'autre choix que de changer de smartphone à cause de l'obsolescence matérielle induite par le logiciel.

Ainsi, réaliser une application web fonctionnant dans le navigateur plutôt qu'une application lourde à installer sur le terminal utilisateur permettra de réduire la contribution à l'obsolescence des terminaux.

En effet, les applications propriétaires ou les applications natives qui pèsent généralement plus lourd que leurs équivalents en version web, ont besoin d'une configuration et de versions de systèmes d'exploitation spécifiques pour fonctionner, alors qu'une application web est disponible partout, sur tout type de terminal via un navigateur web.

On peut également se poser la question de dupliquer un service web existant en le doublant d'une application mobile alors que la version web serait suffisante.

De plus, si l'application web est conçue pour tout type d'écran (approche « _responsive design_ »), elle sera disponible pour tout type de terminal, pour des ordinateurs de bureau comme pour des smartphones.

Par ailleurs, les applications web peuvent gérer du hors-ligne depuis déjà plusieurs années. Les concepteurs peuvent sauvegarder l'interface et les données en cache dans le navigateur, sur ordinateur comme sur smartphone. Le point fort des applications installées permettant de travailler sans connexion internet est donc aussi possible dans des outils web.
