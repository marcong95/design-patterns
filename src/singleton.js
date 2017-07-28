module.exports = {
  singletonize: function(fn) {
    var instance
    return function() {
      // return instance || (instance = constructor.apply(this, arguments))
      return instance || (instance = new fn(arguments))
    }
  }
}
