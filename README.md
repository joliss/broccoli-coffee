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
will be replaced with compiled `.js` files in `outputNode`. All other files will
be passed through unchanged.

### Options

#### bare

If `bare` is true, the CoffeeScript compiler will not emit a top-level
function wrapper:

```js
new BroccoliCoffee(node, {
  bare: true,
  coffeescript: require('coffee-script')
})
```

#### coffeescript

BroccoliCoffee uses coffeescript 2.x. If your project depends on coffeescript 1.x, pass it in `coffeescript`

```js
new BroccoliCoffee(node, {
  coffeescript: require('coffee-script')
})
```

## Source Maps

Source maps are not yet supported.
