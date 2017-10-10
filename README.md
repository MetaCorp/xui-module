# xui-module
[![npm (scoped with tag)](https://img.shields.io/npm/v/xui-module/latest.svg?style=flat-square)](https://npmjs.com/package/xui-module)
[![npm](https://img.shields.io/npm/dt/xui-module.svg?style=flat-square)](https://npmjs.com/package/xui-module)
[![CircleCI](https://img.shields.io/circleci/project/github/.svg?style=flat-square)](https://circleci.com/gh/)
[![Codecov](https://img.shields.io/codecov/c/github/.svg?style=flat-square)](https://codecov.io/gh/)
[![Dependencies](https://david-dm.org//status.svg?style=flat-square)](https://david-dm.org/)


[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

> Light module to help design websites with Nuxt

[📖 **Release Notes**](./CHANGELOG.md)

## Features

This module install several libraries to make designing a website with Vue and Nuxt easy, including:

+ [Bulma](https://github.com/jgthms/bulma) ([website](http://bulma.io/))
+ [Animate.css](https://github.com/daneden/animate.css/) ([website](https://daneden.github.io/animate.css/))
+ [Material Design Icons](https://github.com/google/material-design-icons) ([website](https://material.io/icons/))
+ [Headroom.js](https://github.com/WickyNilliams/headroom.js/) ([website](http://wicky.nillia.ms/headroom.js/)) ([playground](http://wicky.nillia.ms/headroom.js/playroom/))
+ [Vue-scrollactive](https://github.com/eddiemf/vue-scrollactive) ([demo](https://eddiemf.github.io/vue-scrollactive/examples/example-1.html))
+ [Vue-in-viewport-directive](https://github.com/BKWLD/vue-in-viewport-directive)

## Setup
- Add `xui-module` dependency using yarn or npm to your project

```sh
yarn add xui-module
```
or
```sh
npm install xui-module --save
```

- Add `xui-module` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'xui-module',

    // With options
    ['xui-module', { /* module options */ }],
 ]
}
```

## Usage

Module Description

## License

[MIT License](./LICENSE)

Copyright (c) Meta <l.szabatura@gmail.com>