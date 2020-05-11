# 11ty-uwu-emergency-blog (´｡• ω •｡`)

This was a starter-kit for creating minimal blog, with minimal CSS from https://jrl.ninja/etc/1/ but with some tweaks!! Oh also these also a fork from :

- https://glitch.com/~11ty
- https://github.com/11ty/eleventy-base-blog

These template was created to save your data while user browsing only 29Kb (10Kb if you remove the google fonts) usefull to store some emergency information. That's it! enjoy the template (*￣▽￣)b

# Features

- Small (10Kb) if you remove the google fonts
- Minimal
- Not Pretty (add some pretty by include japanese emoji)
- Not always score 100 on google pages
- but Fast

# Docs

How to something on this code

## Run the code

```bash
$ npm install
$ npm start # hot reload
$ npm build # build the site

# you can serve the _site with this
$ serve _site # the build folder are _site
```

## Edit CSS

All CSS are on `_sass`, compiled and default CSS on `css`

## Adding new page and navigation

Some ways to add new page :

- create a folder without `_` prefix and have index.md with title boilerplate
- create `.njk` file on the root folder with title boilerplate

Here some example title boilerplate

```txt
---
layout: layouts/home.njk
tags:
  - nav
navtitle: Archive
permalink: /posts/
---
```

What does it included?

  - layout : select base layout that these file extend
  - tags : if your tag is `- nav` it will created new navigation menu
  - permalink : the route of the file, ex: archive.njk will be accessed on /posts/
  - navtitle : your navigation title

## Add new blog post

Just add new file with name in `posts` folder

## Change metadata

These site meta are on `metadata.json` file.

## Deploy to netlify

Deploy on one click!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)][deploy-to-netlify]
