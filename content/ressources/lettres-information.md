---
title: Lettres d'information
layout: layouts/landing.njk
eleventyNavigation:
  parent: ressources
  title: Lettres d'information
  order: 4
---

 Les lettre d'information sont publiées sur LinkedIn, retrouvez le sommaire et les liens vers les différentes lettres ci-dessous.

<a href="https://www.linkedin.com/newsletters/7242864226900279296/?displayConfirmation=true" target="_blank" class="fr-btn" title="S‘abonner à notre lettre d’information">S'abonner</a>

## Tous les lettres précédentes
{%- if collections["Lettre d'information"] -%}
    {%- set allPosts = collections["Lettre d'information"] | reverse -%}
    {%- set years = allPosts | getYears -%}

    {% for year in years %}
        <h2>{{ year }}</h2>
        {%- set postslist = allPosts | getPostsForYear(year) -%}
        {% include "postslist.njk" %}
    {% endfor %}
{%- endif -%}
