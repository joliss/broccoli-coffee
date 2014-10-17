var Filter = require('broccoli-filter')
var coffeeScript = require('coffee-script')

module.exports = CoffeeScriptFilter
CoffeeScriptFilter.prototype = Object.create(Filter.prototype)
CoffeeScriptFilter.prototype.constructor = CoffeeScriptFilter
function CoffeeScriptFilter (inputTree, options) {
  if (!(this instanceof CoffeeScriptFilter)) return new CoffeeScriptFilter(inputTree, options)
  Filter.call(this, inputTree, options)
  options = options || {}
  this.bare = options.bare
  this.sourceMap = options.sourceMap
}

CoffeeScriptFilter.prototype.extensions = ['coffee', 'litcoffee', 'coffee.md']
CoffeeScriptFilter.prototype.targetExtension = 'js'

CoffeeScriptFilter.prototype.processString = function (string, srcFile) {
  var coffeeScriptOptions = {
    bare: this.bare,
    literate: coffeeScript.helpers.isLiterate(srcFile),
    sourceMap: !!this.sourceMap,

    sourceFiles: [ srcFile ],
    inline: true
  }

  try {
    var compiled = coffeeScript.compile(string, coffeeScriptOptions)
    var source = this.sourceMap ? compiled.js : compiled
    var sourceMap = compiled.v3SourceMap

    if (sourceMap) {
      source += '\n//# sourceMappingURL=data:application/json;base64,'
      source += new Buffer(sourceMap).toString('base64')
    }

    return source
  } catch (err) {
    err.line = err.location && err.location.first_line
    err.column = err.location && err.location.first_column
    throw err
  }
}
