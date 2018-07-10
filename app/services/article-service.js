import { fetchJSON } from 'utils/request';

export function fetchArticle(articleId) {
  //return fetchJSON(`/article/${articleId}`);
  return new Promise((resolve) => {
    resolve("# Airbnb JavaScript Style Guide() {\n" +
      "\n" +
      "*A mostly reasonable approach to JavaScript*\n" +
      "\n" +
      "> **Note**: this guide assumes you are using [Babel](https://babeljs.io), and requires that you use [babel-preset-airbnb](https://npmjs.com/babel-preset-airbnb) or the equivalent. It also assumes you are installing shims/polyfills in your app, with [airbnb-browser-shims](https://npmjs.com/airbnb-browser-shims) or the equivalent.\n" +
      "\n" +
      "[![Downloads](https://img.shields.io/npm/dm/eslint-config-airbnb.svg)](https://www.npmjs.com/package/eslint-config-airbnb)\n" +
      "[![Downloads](https://img.shields.io/npm/dm/eslint-config-airbnb-base.svg)](https://www.npmjs.com/package/eslint-config-airbnb-base)\n" +
      "[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/airbnb/javascript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)\n" +
      "\n" +
      "This guide is available in other languages too. See [Translation](#translation)\n" +
      "\n" +
      "Other Style Guides\n" +
      "\n" +
      "  - [ES5 (Deprecated)](https://github.com/airbnb/javascript/tree/es5-deprecated/es5)\n" +
      "  - [React](react/)\n" +
      "  - [CSS-in-JavaScript](css-in-javascript/)\n" +
      "  - [CSS & Sass](https://github.com/airbnb/css)\n" +
      "  - [Ruby](https://github.com/airbnb/ruby)\n" +
      "\n" +
      "## Table of Contents\n" +
      "\n" +
      "  1. [Types](#types)\n" +
      "  1. [References](#references)\n" +
      "  1. [Objects](#objects)\n" +
      "  1. [Arrays](#arrays)\n" +
      "  1. [Destructuring](#destructuring)\n" +
      "  1. [Strings](#strings)\n" +
      "  1. [Functions](#functions)\n" +
      "  1. [Arrow Functions](#arrow-functions)\n" +
      "  1. [Classes & Constructors](#classes--constructors)\n" +
      "  1. [Modules](#modules)\n" +
      "  1. [Iterators and Generators](#iterators-and-generators)\n" +
      "  1. [Properties](#properties)\n" +
      "  1. [Variables](#variables)\n" +
      "  1. [Hoisting](#hoisting)\n" +
      "  1. [Comparison Operators & Equality](#comparison-operators--equality)\n" +
      "  1. [Blocks](#blocks)\n" +
      "  1. [Control Statements](#control-statements)\n" +
      "  1. [Comments](#comments)\n" +
      "  1. [Whitespace](#whitespace)\n" +
      "  1. [Commas](#commas)\n" +
      "  1. [Semicolons](#semicolons)\n" +
      "  1. [Type Casting & Coercion](#type-casting--coercion)\n" +
      "  1. [Naming Conventions](#naming-conventions)\n" +
      "  1. [Accessors](#accessors)\n" +
      "  1. [Events](#events)\n" +
      "  1. [jQuery](#jquery)\n" +
      "  1. [ECMAScript 5 Compatibility](#ecmascript-5-compatibility)\n" +
      "  1. [ECMAScript 6+ (ES 2015+) Styles](#ecmascript-6-es-2015-styles)\n" +
      "  1. [Standard Library](#standard-library)\n" +
      "  1. [Testing](#testing)\n" +
      "  1. [Performance](#performance)\n" +
      "  1. [Resources](#resources)\n" +
      "  1. [In the Wild](#in-the-wild)\n" +
      "  1. [Translation](#translation)\n" +
      "  1. [The JavaScript Style Guide Guide](#the-javascript-style-guide-guide)\n" +
      "  1. [Chat With Us About JavaScript](#chat-with-us-about-javascript)\n" +
      "  1. [Contributors](#contributors)\n" +
      "  1. [License](#license)\n" +
      "  1. [Amendments](#amendments)\n");
  });
}

export function fetchArticles() {
  // return fetchJSON('/articles');
  return new Promise((resolve) => {
    resolve([{
      name: 'first_article',
      title: 'INFINITE STYLING – CHRISTMAS WINDOWS FOR GHD',
      created: '2018-10-10',
      tags: ['javascript', 'library'],
      preview: 'Millington Associates Produce – Infinite Styling Christmas windows for GHD A contrast between light and dark, visualising infinite possibilities and blurred',
      comments: 12
    }]);
  });
}
