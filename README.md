# vue-tree

[![npm](https://img.shields.io/npm/v/@pragmasphere/vue-tree.svg)](https://www.npmjs.com/package/@pragmasphere/vue-tree)
[![Travis](https://img.shields.io/travis/pragmasphere/vue-tree.svg)](https://travis-ci.org/pragmasphere/vue-tree)
[![Coveralls](https://img.shields.io/coveralls/github/pragmasphere/vue-tree.svg)](https://coveralls.io/github/pragmasphere/vue-tree)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Simple Tree Component for VueJS. 

## Features

* Load any data structure without any changes or mapping.
* Load items Synchronous or Asynchronously.
* Apply Theme matching your CSS Framework.
* Move items with Drag & Drop (To be done).
* Select items with Drag & Drop (To be done).

## Install

```bash
npm install @pragmasphere/vue-tree
```

```javascript
import vue from 'Vue'

import VueTree from '@pragmasphere/vue-tree'
import '@pragmasphere/vue-tree/lib/vue-tree.css'

vue.components('vue-tree', VueTree)
```

```html
<vue-tree></vue-tree>
```

Full docs are available at [http://vue-tree.pragmasphere.com](http://vue-tree.pragmasphere.com)

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run test
```
