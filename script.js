

const add = function(a,b) {
    return a + b;
  };
  
  const subtract = function(a,b) {
      return a - b;
  };
  
  const sum = function(array) {
      return array.reduce((total, current) => total + current, 0);
  };
  
  const multiply = function(array) {
    return array.map(Number).reduce(function(product, value) { return product * value; })
  
  };
  
  const power = function(a, b) {
    return Math.pow(a, b);
  };
  
  const factorial = function(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      for (let i = num - 1; i >= 1; i--) {
        num *= i;
      }
      return num;
    }
  };
  
