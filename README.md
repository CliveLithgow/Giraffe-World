# Giraffe World

A static website about giraffes, built with Jekyll (GitHub Pages' native
static site generator — no extra setup needed on GitHub's side).

## Why Jekyll now

Previously this was four fully independent HTML files, each with its own
copy-pasted header and footer. That's not how most real websites work, so
it was a poor stand-in for testing anything that assumes a shared/global
site header (like a WebSDK snippet meant to be "installed once").

This version has a single actual source of truth for the header and
footer, which Jekyll builds into every page automatically — matching how
a real CMS or templated site behaves.

## Structure

```
_config.yml            Site-wide settings
_layouts/default.html  The shared page shell: <head>, header include,
                        page content, footer include, scripts
_includes/header.html  The global header + nav — edit this once, it
                        applies to every page
_includes/footer.html  The global footer (per-page note passed in via
                        front matter)
index.html              Home page content + front matter
giraffes.html           Giraffes page content + front matter
fun-facts.html          Fun Facts page content + front matter
about.html               About page content + front matter
styles.css              Shared styles (unchanged)
script.js               Shared JS — mobile nav toggle (unchanged)
```

Each content page starts with a front-matter block like:

```
---
layout: default
title: Giraffes
description: Photos and facts about giraffes.
nav: giraffes
footer_note: Photos via Wikimedia Commons.
---
```

`nav` controls which tab is marked active; `footer_note` is the
second line in that page's footer. Everything else — the actual header
markup, nav links, `<head>` tags, footer structure — lives once in
`_layouts/default.html` / `_includes/`.

## Adding something site-wide (e.g. a WebSDK snippet)

Add it once inside `_layouts/default.html` (there's a comment marking
where the `<head>` ends), and it will appear on every page after your
next deploy — no need to touch individual page files.

## Running locally

Requires Jekyll (Ruby-based):

```
jekyll serve
```

then visit `http://localhost:4000`.

## Deploying

GitHub Pages builds Jekyll sites automatically — just push these files
to your repo as-is. No build step to configure.
