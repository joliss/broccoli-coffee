# broccoli-coffee

A CoffeeScript preprocessor for Broccoli.

## Usage

```js
var CoffeeScriptPreprocessor = require('broccoli-coffee')(broccoli);
preprocessorPipeline.addPreprocessor(new CoffeeScriptPreprocessor);
```

### Options

#### bare

If `bare` is true, the CoffeeScript compiler will not emit a top-level
function wrapper:

```js
new CoffeeScriptPreprocessor({
  bare: true
})
```
