---
title: "Portfolio"
permalink: /portfolio/
layout: single
classes: wide
---

{% assign profile = site.data.site_profile %}

<section class="lp-hero lp-hero--yellow">
  <p class="lp-kicker">Past and College Experience</p>
  <h1>Portfolio Tracks</h1>
  <p>{{ profile.portfolio_intro }}</p>
</section>

<div class="track-grid">
  <a class="track-card track-card--red" href="{{ '/editorial/' | relative_url }}">
    <h3>Editorial Leadership (Red)</h3>
    <p>Leadership and involvement materials, event narratives, and editorial-style documentation.</p>
  </a>

  <a class="track-card track-card--yellow" href="{{ '/broadcast/' | relative_url }}">
    <h3>Broadcast + Creative (Yellow)</h3>
    <p>Student radio, live DJ highlights, and creative campaign graphics.</p>
  </a>

  <a class="track-card track-card--blue" href="{{ '/current-focus/' | relative_url }}">
    <h3>Return to Current Focus (Blue)</h3>
    <p>Back to your CPSJ-centered narrative and private-by-default placeholders.</p>
  </a>
</div>

{% include story-carousel.html carousel=site.data.carousels.editorial id="portfolio-editorial" theme="red" kicker="Editorial Preview" %}
{% include story-carousel.html carousel=site.data.carousels.broadcast id="portfolio-broadcast" theme="yellow" kicker="Broadcast Preview" %}
