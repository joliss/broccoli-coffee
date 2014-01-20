# broccoli-coffee

A CoffeeScript filter for Broccoli.

## Usage

```js
var CoffeeScriptFilter = require('broccoli-coffee')(broccoli);
tree.addTransformer(new CoffeeScriptFilter);
```

### Options

#### bare

If `bare` is true, the CoffeeScript compiler will not emit a top-level
function wrapper:

```js
new CoffeeScriptFilter({
  bare: true
})
```
