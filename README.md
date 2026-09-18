# Harborline (TinySurveys WebSDK test site)

A small fictional San Francisco city-life magazine, built as a **structural**
stand-in for a real editorial site (the kind of layout `modernluxury.com/san-francisco`
uses) so the new TinySurveys implementation can be tested against something
with the same shape: a masthead with category nav, a homepage hero + grid of
stories, and individual article pages.

None of the copy, images, or design here were copied from any real
publication — it's original placeholder content, structured the way a
city magazine is structured, for testing purposes.

## Why this shape

- **Category nav** across the masthead (`Eat & Drink`, `Style`, `Culture`,
  `Travel`, `City Life`, `Scene`) — mirrors a multi-section magazine, useful
  for testing nav-driven survey triggers across distinct content verticals.
- **Homepage hero + grid** — a lead story, two secondary side-stories, and a
  grid of further stories, same as most editorial homepages.
- **Article pages** (`_layouts/article.html`) emit both a JSON-LD `Article`
  block and `og:type=article`, since Content Navigation on the WebSDK keys
  off exactly those two signals (per what got Giraffe World working).

## Structure

```
_config.yml           site config + category list + tinysurveys_key
_layouts/
  default.html         base HTML shell, meta tags, font + stylesheet includes
  article.html         per-article JSON-LD + og:type=article
  category.html        category archive listing
_includes/
  nav.html              masthead + category nav
  footer.html
_posts/                6 sample articles, one or two per category
category/<slug>/       archive page per category
assets/css/style.css   all styling
assets/js/site.js      placeholder — SDK snippet hook lives in default.html
index.html             homepage
about.html
```

## Running it locally

```
bundle install
bundle exec jekyll serve
```

Or push it straight to a GitHub Pages repo — `github-pages` gem in the
`Gemfile` matches what Pages builds with.

## Dropping in the WebSDK

`_layouts/default.html` has a comment marking where to add the real
TinySurveys WebSDK script tag. `site.tinysurveys_key` in `_config.yml`
already carries over the key used on Giraffe World
(`h3LiR5qVfG9ctbemVlMLA6qJ6ZivlLEy6OgklRfo`) — swap it if the new
implementation issues a different one for this test.
