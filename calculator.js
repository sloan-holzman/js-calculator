//need to build out the bonus

var total = 0

var calculator = {
    add: function (a,b) {
    let sum = a + b
    console.log(sum)
    return sum
  },
  subtract: function (a,b) {
    let sub = a - b
    console.log(sub)
    return sub
  },
  divide: function (a,b) {
    let division = a / b
    console.log(division)
    return division
  },
  exponentiate: function (a,b) {
    let exponent = Math.pow(a,b)
    console.log(exponent)
    return exponent
  }
}
