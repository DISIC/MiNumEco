---
title: Podcasts
layout: layouts/landing.njk
eleventyNavigation:
  parent: ressources
  title: Podcasts
  order: 3
---

{% set postslist = collections.Podcast | reverse %}
{% include "postslist.njk" %}
