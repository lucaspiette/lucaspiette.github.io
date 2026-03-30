---
title: "About"
permalink: /about/
layout: single
classes: wide
---

{% assign profile = site.data.site_profile %}

<section class="lp-hero lp-hero--blue">
  <p class="lp-kicker">About This Site</p>
  <h1>{{ profile.name }}</h1>
  <p>{{ profile.headline }}</p>
  <p>{{ profile.intro }}</p>
</section>

<section>
  <h2>Structure</h2>
  <p>The website is split into a blue current focus area and two portfolio tracks: red editorial leadership and yellow broadcast creative.</p>

  <h2>Edit in Three Places</h2>
  <p><code>_data/site_profile.yml</code>: headlines, intro text, and link pills.</p>
  <p><code>_data/theme_tokens.yml</code>: fonts, colors, card sizes, and spacing.</p>
  <p><code>_data/carousels/*.yml</code>: card image paths, captions, links, order, tags, and rotation.</p>
</section>
