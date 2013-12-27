module.exports = function (broccoli) {
  CoffeeScriptPreprocessor.prototype = Object.create(broccoli.Preprocessor.prototype)
  CoffeeScriptPreprocessor.prototype.constructor = CoffeeScriptPreprocessor
  function CoffeeScriptPreprocessor (options) {
    this.options = options || {}
  }

  CoffeeScriptPreprocessor.prototype.extensions = ['coffee']
  CoffeeScriptPreprocessor.prototype.targetExtension = 'js'

  CoffeeScriptPreprocessor.prototype.processString = function (string, info, callback) {
    // We must be careful to create a fresh options hash every time.
    // https://github.com/jashkenas/coffee-script/issues/1924#issuecomment-28157026
    var options = {
      bare: this.options.bare
    }
    var output
    try {
      output = require('coffee-script').compile(string, options)
    } catch (err) {
      err.line = err.location && err.location.first_line
      err.column = err.location && err.location.first_column
      callback(err)
      return
    }
    callback(null, output)
  }

  return CoffeeScriptPreprocessor
}
