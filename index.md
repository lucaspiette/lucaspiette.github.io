---
title: "Current Focus + Portfolio"
permalink: /
layout: single
classes: wide
---

{% assign profile = site.data.site_profile %}

<section class="lp-hero lp-hero--blue" id="current-focus">
  <p class="lp-kicker">{{ profile.current_focus.kicker }}</p>
  <h1>{{ profile.current_focus.title }}</h1>
  <p>{{ profile.current_focus.summary }}</p>
  <p><strong>{{ profile.current_focus.note }}</strong></p>
  <div class="lp-actions">
    <a class="lp-button" href="{{ '/current-focus/' | relative_url }}">Open Current Focus</a>
    <a class="lp-button lp-button--ghost" href="{{ '/portfolio/' | relative_url }}">Explore Portfolio</a>
  </div>
</section>

{% include story-carousel.html carousel=site.data.carousels.current_focus id="home-current-focus" theme="blue" kicker="CPSJ Story Cards" %}

<section>
  <h2>Portfolio Tracks</h2>
  <p>{{ profile.portfolio_intro }}</p>

  <div class="track-grid">
    {% for track in site.data.tracks %}
      {% if track.id != "current-focus" and track.visibility == "public" %}
        <a class="track-card track-card--{{ track.theme }}" href="{{ track.page | relative_url }}">
          <h3>{{ track.label }}</h3>
          <p>{{ track.description }}</p>
        </a>
      {% endif %}
    {% endfor %}
  </div>
</section>

<section>
  <h2>Quick Links</h2>
  <div class="link-row">
    {% for link in profile.links %}
      <a class="link-pill" href="{{ link.url }}" {% if link.url contains 'http' %}target="_blank" rel="noreferrer noopener"{% endif %}>{{ link.label }}</a>
    {% endfor %}
  </div>
</section>
