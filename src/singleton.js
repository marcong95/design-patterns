module.exports = {
  singletonize: function(constructor) {
    var instance
    return function() {
      return instance || (instance = constructor.apply(this, arguments))
    }
  }
}
