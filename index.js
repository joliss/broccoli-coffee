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
}

CoffeeScriptFilter.prototype.extensions = ['coffee']
CoffeeScriptFilter.prototype.targetExtension = 'js'

CoffeeScriptFilter.prototype.processString = function (string) {
  var coffeeScriptOptions = { bare: this.bare }
  try {
    return coffeeScript.compile(string, coffeeScriptOptions)
  } catch (err) {
    err.line = err.location && err.location.first_line
    err.column = err.location && err.location.first_column
    throw err
  }
}
