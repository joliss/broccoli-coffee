'use strict'

var BroccoliCoffee = require('./')
var fixture = require('broccoli-fixture')
var chai = require('chai'), expect = chai.expect
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

function inputNodeFactory() {
  return new fixture.Node({
    'foo.coffee': 'console.log "Hello world"'
  })
}

describe('broccoli-coffee', function() {
  it('compiles .coffee files with persistence', function() {
    var inputNode = inputNodeFactory()

    return expect(fixture.build(new BroccoliCoffee(inputNode))).to.eventually.deep.equal({
      'foo.js': '(function() {\n  console.log(\"Hello world\");\n\n}).call(this);\n'
    })
  })

  it('compiles .coffee files with without persistence', function() {
    var inputNode = inputNodeFactory()

    return expect(fixture.build(new BroccoliCoffee(inputNode, { persist: false }))).to.eventually.deep.equal({
      'foo.js': '(function() {\n  console.log(\"Hello world\");\n\n}).call(this);\n'
    })
  })

  it('BroccoliCoffee constructor defaults with persist true if no options are passed', function() {
    var inputNode = inputNodeFactory()

    var broccoliCoffee = new BroccoliCoffee(inputNode);
    return expect(broccoliCoffee.options).to.deep.equal({
      persist: true
    })
  })

  it('BroccoliCoffee constructor defaults with persist if no persist property is passed', function() {
    var inputNode = inputNodeFactory()

    var broccoliCoffee = new BroccoliCoffee(inputNode, { aRandomProp: false });
    return expect(broccoliCoffee.options).to.deep.equal({
      aRandomProp: false,
      persist: true
    })
  })
})
