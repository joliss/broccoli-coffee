var Filter = require('broccoli-filter')

module.exports = CoffeeScriptFilter
CoffeeScriptFilter.prototype = Object.create(Filter.prototype)
CoffeeScriptFilter.prototype.constructor = CoffeeScriptFilter
function CoffeeScriptFilter (inputTree, options) {
  if (!(this instanceof CoffeeScriptFilter)) return new CoffeeScriptFilter(inputTree, options)
  this.inputTree = inputTree
  this.options = options || {}
}

CoffeeScriptFilter.prototype.extensions = ['coffee']
CoffeeScriptFilter.prototype.targetExtension = 'js'

CoffeeScriptFilter.prototype.processString = function (string) {
  // We must be careful to create a fresh options hash every time.
  // https://github.com/jashkenas/coffee-script/issues/1924#issuecomment-28157026
  var options = {
    bare: this.options.bare
  }
  try {
    return require('coffee-script').compile(string, options)
  } catch (err) {
    err.line = err.location && err.location.first_line
    err.column = err.location && err.location.first_column
    throw err
  }
}
