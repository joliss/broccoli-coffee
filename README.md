# broccoli-coffee

[![Build Status](https://travis-ci.org/joliss/broccoli-coffee.svg?branch=master)](https://travis-ci.org/joliss/broccoli-coffee)

A CoffeeScript filter for Broccoli.

## Installation

```bash
npm install --save-dev broccoli-coffee
```

## Usage

```js
var BroccoliCoffee = require('broccoli-coffee');
var outputNode = new BroccoliCoffee(inputNode, options);
```

All `.coffee` files (as well as `.litcoffee` and `.coffee.md`) in `inputNode`
will be replaced with compiled `.js` files in `outputNode`.

### Options

#### bare

If `bare` is true, the CoffeeScript compiler will not emit a top-level
function wrapper:

```js
new BroccoliCoffee(node, {
  bare: true
})
```

## Source Maps

Source maps are not yet supported.
