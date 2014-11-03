# broccoli-coffee

A CoffeeScript filter for Broccoli.

## Installation

```bash
npm install --save-dev broccoli-coffee
```

## Usage

```js
var filterCoffeeScript = require('broccoli-coffee');
tree = filterCoffeeScript(tree, options);
```

All `.coffee` files (as well as `.litcoffee` and `.coffee.md`) will be
replaced with compiled `.js` files.

### Options

#### bare

If `bare` is true, the CoffeeScript compiler will not emit a top-level
function wrapper:

```js
filterCoffeeScript(tree, {
  bare: true
})
```

## Source Maps

Source maps are not yet supported.
