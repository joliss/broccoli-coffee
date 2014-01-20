module.exports = function (broccoli) {
  CoffeeScriptFilter.prototype = Object.create(broccoli.Filter.prototype)
  CoffeeScriptFilter.prototype.constructor = CoffeeScriptFilter
  function CoffeeScriptFilter (options) {
    this.options = options || {}
  }

  CoffeeScriptFilter.prototype.extensions = ['coffee']
  CoffeeScriptFilter.prototype.targetExtension = 'js'

  CoffeeScriptFilter.prototype.processString = function (string, info) {
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

  return CoffeeScriptFilter
}
