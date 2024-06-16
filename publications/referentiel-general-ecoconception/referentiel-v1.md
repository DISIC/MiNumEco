---
layout: layouts/referentiel-ecoconception.njk
title: Référentiel général d'écoconception de services numériques (RGESN)
image: /img/referentiel-ecoconception.png
description: Référentiel mené dans le cadre de la mission interministérielle numérique écoresponsable et co-pilotée par la Direction interministérielle du numérique (DINUM), le Ministère de la Transition Écologique, l’ADEME et l’Institut du Numérique Responsable.
type: publication
focus: true
date: 2022-11-28
pagination:
  data: referentiel-ecoconception-v1
  size: 1000
  alias: critere
eleventyNavigation:
  parent: referentiel-ecoconception
  title: RGESN v1
  order: 05
---

<img src="/img/referentiel-ecoconception.png" alt="" />

<p class="fr-py-2w">
    <span class="fr-tag">Version : {{ metadata.referentielEcoconception.versionTitle }}</span>
    <a class="fr-link fr-fi-download-line fr-link--icon-left" href="/docs/2023/rgesn-referentiel-general-ecoconception-v1.0.1.pdf">Format PDF (3 Mo)</a>
    <a class="fr-link fr-fi-download-line fr-link--icon-left" href="/publications/referentiel-general-ecoconception/export/referentiel-general-ecoconception-version-{{ metadata.referentielEcoconception.version }}.json" target="_blank">Format JSON</a>
    <a class="fr-link fr-fi-download-line fr-link--icon-left" href="/docs/2023/NumEcoDiag-feuille-v1.0.1.ods" target="_blank">Format OpenDocument</a>
    <a class="fr-link fr-fi-download-line fr-link--icon-left" href="/docs/2023/NumEcoDiag-feuille-v1.0.1.xls" target="_blank">Format Excel</a>
    <a class="fr-link fr-fi-external-link-line fr-link--icon-left" href="/publications/referentiel-general-ecoconception/numecodiag/" target="_blank">NumEcoDiag</a>
</p>

<p>Ce référentiel est mené dans le cadre de la mission interministérielle numérique responsable et co-pilotée par la Direction interministérielle du numérique (DINUM),
le Ministère de la Transition Écologique, l’ADEME et l’Institut du Numérique Responsable. Les objectifs sont de réduire la consommation de ressources informatiques et énergétiques et la contribution
à l’obsolescence des équipements, qu’il s’agisse des équipements utilisateurs ou des équipements réseau ou serveur. <a href="/publications/referentiel-general-ecoconception/a-propos/">En savoir plus</a>.</p>

<nav class="fr-summary" role="navigation" aria-labelledby="fr-summary-title">
    <div class="fr-summary__title" id="fr-summary-title">Sommaire</div>
    <ol class="fr-summary__list">
    {% assign thematique = null %}
    {%- for item in pagination.items %}
      {% if item.thematique != thematique %}
        {% assign thematique = item.thematique %}
        <li>
          <a class="fr-summary__link" href="#{{ thematique | slug }}">{{ thematique }}</a>
        </li>
      {% endif %}
    {% endfor %}
    </ol>
</nav>

{% assign thematique = null %}

{%- for item in pagination.items %}
  {% if item.thematique != thematique %}
    {% if null != thematique %}</ul>{% endif %}
    {% assign thematique = item.thematique %}
    <h2 id="{{ thematique | slug }}">{{ thematique }}</h2>
    <p class="fr-text--sm">{{ metadata.referentielEcoconception.thematique[thematique | slug].description }}</p>
    <ul class="fr-accordions-group">
  {% endif %}

  <li>
    <section class="fr-accordion">
      <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-{{ item.numero }}">{{ item.numero }} – {{ item.critere }}</button>
      </h3>
      <div class="fr-collapse" id="accordion-{{ item.numero }}">
        <p><b>Objectif</b></p>

        <div class="fr-highlight">{{ item.objectif | markdown | safe }}</div>

        <p><b>Mise en œuvre</b></p>

        <div class="fr-highlight">{{ item.miseEnOeuvre | markdown | safe }}</div>

        <p><b>Moyen de test ou de contrôle</b></p>

        <div class="fr-highlight">{{ item.controle | markdown | safe }}</div>

        <p><a href="/publications/referentiel-general-ecoconception/critere/{{ item.numero | slug }}/" class="fr-link fr-fi-arrow-right-line fr-link--icon-left">Permalien</a></p>
      </div>
    </section>
  </li>
{% endfor -%}
</ul>
