function addCalculator(...nums) {
  let res = nums.reduce((num1, num2) => num1 + num2)
    return res;
  }
  
  function subCalculator(a, b) {
    return a - b;
  }

  function multipleCalculator(a, b) {
    return a * b;
  }
  
  function divideCalculator(a, b) {
    if (b === 0) {
      throw "Cannot divide by 0!";
    }
    if (a instanceof String || b instanceof String) {
      throw "Cannot divide strings!";
    }
    return a / b;
  }
  module.exports = {addCalculator, subCalculator, multipleCalculator, divideCalculator};