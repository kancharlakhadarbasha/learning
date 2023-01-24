let fact = require("../factorial/index");
let ratio = require("../ratio/index");

function ratioAndFactorial(n1, n2, n3) {
  const ratios = ratio(n1, n2);
  const factorial = fact(n3);
  return { ratios, factorial };
}

module.exports = ratioAndFactorial;
# learning
