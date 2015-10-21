'use strict'

var BroccoliCoffee = require('./')
var fixture = require('broccoli-fixture')
var chai = require('chai'), expect = chai.expect
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

describe('broccoli-coffee', function() {
  it('compiles .coffee files', function() {
    var inputNode = new fixture.Node({
      'foo.coffee': 'console.log "Hello world"'
    })
    return expect(fixture.build(new BroccoliCoffee(inputNode))).to.eventually.deep.equal({
      'foo.js': '(function() {\n  console.log(\"Hello world\");\n\n}).call(this);\n'
    })
  })
})
