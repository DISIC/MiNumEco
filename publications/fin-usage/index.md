---
layout: layouts/post.njk
title: Fin d'usage
date: 2021-12-09
image: /img/ressources-ademe/face-cachee-numerique.png
type: publication
eleventyNavigation:
  key: fin-usage
  parent: publications
  title: Fin d'usage
  date: 2021-04-29
  image: /img/ressources-ademe/face-cachee-numerique.png
  order: 10
---

<!-- fr-fieldset--error -->

<form>
<div class="fr-form-group">
    <fieldset class="fr-fieldset " aria-labelledby="radio-rich-legend radio-rich-desc-error" role="group">
        <legend class="fr-fieldset__legend" id='radio-rich-legend'>
            2. Que peut-on faire pour allonger la durée de vie des équipements ?
        </legend>
        <div class="fr-fieldset__content">
            <div class="fr-radio-group fr-radio-rich">
                <input type="radio" id="radio-rich-1" name="radio-rich">
                <label class="fr-label" for="radio-rich-1">Remettre en état</label>
            </div>
            <div class="fr-radio-group fr-radio-rich">
                <input type="radio" id="radio-rich-2" name="radio-rich">
                <label class="fr-label" for="radio-rich-2">Donner</label>
            </div>
            <div class="fr-radio-group fr-radio-rich">
                <input type="radio" id="radio-rich-3" name="radio-rich">
                <label class="fr-label" for="radio-rich-3">Vendre</label>
            </div>
            <div class="fr-radio-group fr-radio-rich">
                <input type="radio" id="radio-rich-4" name="radio-rich">
                <label class="fr-label" for="radio-rich-4">Les trois : remettre en état, donner, vendre</label>
            </div>
        </div>
        <p id="radio-rich-desc-error" class="fr-error-text">
            Texte d’erreur obligatoire
        </p>
    </fieldset>
</div>
<div class="fr-form-group">
    <button type="submit" class="fr-btn">Valider ma réponse</button>
</div>
</form>