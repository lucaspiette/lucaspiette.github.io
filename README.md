# Lucas Piette Website Foundation

This is a GitHub Pages + Jekyll site using the Minimal Mistakes theme, customized to support:

- Blue first narrative for **Center for Public Safety & Justice** (Current Focus)
- Red and yellow portfolio tracks for past/college work
- Reusable click-through photo card carousels with arrows, keyboard support, and mobile swipe

## Site Map

- `/` Home with blue CPSJ hero and track overview
- `/current-focus/` Blue current focus page
- `/portfolio/` Portfolio index page
- `/editorial/` Red portfolio track
- `/broadcast/` Yellow portfolio track
- `/about/` Editing orientation

## Fast Editing Guide

### 1) Update text and links
Edit: `_data/site_profile.yml`

- Update hero copy, intro text, and quick links.
- Keep CPSJ role details private or neutral until ready.

### 2) Change fonts, colors, sizes, spacing
Edit: `_data/theme_tokens.yml`

- `fonts`: switch display/heading/body fonts
- `themes.blue|red|yellow`: update palette tokens
- `cards.size.sm|md|lg`: resize carousel cards globally
- `spacing`: tune section and carousel spacing

### 3) Add or edit carousel cards
Edit: `_data/carousels/*.yml`

Each card supports:

- `image`: image path (example `/assets/images/showcase/my-image.jpg`)
- `caption`: short title text under card
- `link`: click destination
- `rotation`: card tilt in degrees (example `-3`, `2`)
- `size`: `sm`, `md`, or `lg`
- `order`: display order
- `tags`: optional quick labels

## Add New Images

1. Put image files in `assets/images/showcase/`
2. Reference them in the carousel YAML data
3. Commit and push to `main`

## Deploy to GitHub Pages

This repo includes `.github/workflows/pages.yml` for automatic deploy on push to `main`.

### One-time repository settings

1. In GitHub repo settings, open **Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` and wait for the workflow to finish.
4. Site will publish at `https://lucaspiette.github.io`.

## Local Preview (optional)

Current machine note: modern `github-pages` dependencies usually need Ruby 3.x.

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.
