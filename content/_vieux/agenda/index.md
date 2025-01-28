---
title: Agenda
layout: layouts/landing.njk
description: Agenda
permalink: /agenda/
---

{% set postslist = collections["Événement"] | reverse %}
{% include "postslist.njk" %}
