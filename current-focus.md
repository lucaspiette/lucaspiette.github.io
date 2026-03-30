---
title: "Current Focus"
permalink: /current-focus/
layout: single
classes: wide
---

{% assign profile = site.data.site_profile %}

<section class="lp-hero lp-hero--blue">
  <p class="lp-kicker">Primary Narrative</p>
  <h1>{{ profile.current_focus.title }}</h1>
  <p>{{ profile.current_focus.summary }}</p>
  <p>{{ profile.current_focus.note }}</p>
</section>

{% include story-carousel.html carousel=site.data.carousels.current_focus id="current-focus-carousel" theme="blue" kicker="Current Focus Cards" %}

<section>
  <h2>How to Update This Section Later</h2>
  <p>Edit <code>_data/carousels/current_focus.yml</code> to replace placeholders with real image paths, captions, links, and tags.</p>
  <p>When you are ready to publish role details, update <code>_data/site_profile.yml</code> under <code>current_focus</code>.</p>
</section>
