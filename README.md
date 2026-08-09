# Field Notes

A small, dependency-free static website (plain HTML/CSS/JS) with a tab-style
nav across four pages — Home, Giraffes, Fun Facts, and About. Built as a
lightweight, low-friction place to test the TinySurveys WebSDK.

## Structure

```
index.html       Home page
giraffes.html     Giraffe photos + facts
fun-facts.html    Quick trivia list
about.html        About the site / where to drop the SDK snippet
styles.css        Shared styles
script.js         Shared JS (mobile nav toggle)
```

## Running locally

No build step needed — just open `index.html` in a browser, or serve the
folder locally, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying

This is a static site, so it deploys directly on GitHub Pages with no
build step. See the main setup instructions for step-by-step details.

## Adding the TinySurveys WebSDK

Drop your embed `<script>` tag near the bottom of any page's HTML, just
before `</body>` (or in `<head>`, depending on what your SDK docs specify).
