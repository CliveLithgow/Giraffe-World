# Giraffe World

A small static website (plain HTML/CSS/JS) about giraffes, with a four-tab
structure: Home, Giraffes, Fun Facts, and About.

## Structure

```
index.html       Home page
giraffes.html     Giraffe photos + facts
fun-facts.html    Quick trivia list
about.html        About the site
styles.css        Shared styles
script.js         Shared JS (mobile nav toggle + navigation handling)
```

## Running locally

No build step needed — just open `index.html` in a browser, or serve the
folder locally, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying

Static site — deploys directly on GitHub Pages with no build step.

## Setup

Each page's `<head>` includes the widget script tag with a placeholder key
(`data-key="YOUR_TINYSURVEYS_KEY"`). Replace the placeholder with your real
key on all four pages before publishing.
