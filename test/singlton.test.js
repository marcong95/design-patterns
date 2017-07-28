const expect = require('chai').expect
const singleton = require('../src/singleton')

const SingletonTester = function(name) {
  this.name = name
}
const Singleton = singleton.singletonize(SingletonTester)

describe('Singleton', () => {
  it('is a function', function() {
    expect(Singleton).to.be.a('function')
  })
  it('return only one instance', function() {
    let a = new Singleton('Xiaoming')
    let b = new Singleton('Xiaohong')
    expect(a).to.deep.equal(b)
  })
})
