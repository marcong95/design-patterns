const singleton = require('../src/singleton')

const SingletonTester = function(name) {
  this.name = name
}
const Singleton = singleton.singletonize(SingletonTester)

let obj = {}
SingletonTester.apply(obj, ['Xiaoming'])
console.log(obj)

let a = new Singleton('Xiaoming')
let b = new Singleton('Xiaohong')

console.log(a === b)
