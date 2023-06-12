// const square = {
//   area: (a) => (a * a),
//   parimeter: (a) => (4 * a)
// }

const square = require('./square.js')

const calsquare = (a) => {
  console.log(`the value of a is ${a} and the area is ` + square.area(a));

  console.log(`the value of a is ${a} and the parimeter is ` + square.parimeter(a));
}

calsquare(5);