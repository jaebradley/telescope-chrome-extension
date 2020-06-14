<p align="center">
 <a href="#" target="_blank" rel="noopener noreferrer">
  <img width="550" src="https://user-images.githubusercontent.com/8136030/65654000-1fb83880-dfcc-11e9-82de-0f48303e3d79.png" alt="telescope">
 </a>
</p>
<h3 class="title" align="center">Chrome Extension to get Glassdoor Reviews</h3>
<p align="center">
 <a href="https://github.com/jaebradley/telescope-chrome-extension/workflows/Telescope%20Chrome%20Extension/badge.svg">
  <img src="https://github.com/jaebradley/telescope-chrome-extension/workflows/Telescope%20Chrome%20Extension/badge.svg" alt="build-status"></img>
 </a>
 <a href="https://chrome.google.com/webstore/detail/lgphjiclbioogghoddaaekfedbolnofn">
  <img src="https://img.shields.io/chrome-web-store/v/lgphjiclbioogghoddaaekfedbolnofn.svg" alt="chrome-extension-version"></img>
 <a href="https://chrome.google.com/webstore/detail/lgphjiclbioogghoddaaekfedbolnofn">
  <img src="https://img.shields.io/chrome-web-store/rating/lgphjiclbioogghoddaaekfedbolnofn.svg" alt="chrome-extension-version"></img>
 </a>
 <a href="https://chrome.google.com/webstore/detail/lgphjiclbioogghoddaaekfedbolnofn">
  <img src="https://img.shields.io/chrome-web-store/users/lgphjiclbioogghoddaaekfedbolnofn.svg" alt="chrome-extension-version"></img>
 </a>
</p>

* [Introduction](#introduction)
* [Development](#development)

## Introduction

For better or worse, [**Glassdoor**](https://glassdoor.com/index.htm) can be a source of useful information about the work environment at a particular company.

Often times, it's helpful to have Glassdoor information at your fingertips when searching for jobs.

This Chrome extension currently integrates with **LinkedIn** such that one can lookup a company's high-level Glassdoor information simply by highlighting the company's name, right-clicking the selected text, and selecting the `See Glassdoor Data` option in the subsequent menu.

## Development

This project uses [`nvm`](https://github.com/nvm-sh/nvm) to maintain a consistent `node` version.

The typical development flow will look something like

* `nvm install` - ensure the correct `node` version is being used
* `npm install` - ensure all dependencies are up-to-date
* `npm run start:dev` - start the local Webpack development server that will be watching file changes and updating the output directory (`build`)
  * This project uses [`webpack-chrome-extension-reloader`](https://github.com/rubenspgcavalcante/webpack-chrome-extension-reloader) which should automatically reload Chrome with the latest extension changes
* Go to `chrome://extensions` and load the unpacked extension from the output directory (`build`)
* Go to **LinkedIn** and test behavior / any changes that have been made
