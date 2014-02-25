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
