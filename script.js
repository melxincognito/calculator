

function multiplyArray(array) {
    return array.map(Number).reduce(function(product, value) { return product * value; });
};

function sum(array) {
    return array.reduce((total, current) => total + current, 0);
};

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
      } else {
        for (let i = num - 1; i >= 1; i--) {
          num *= i;
        }
        return num;
      }
};

  
function operate() {

}

const operators = {
    add: function(a,b){
        return a + b;
    } ,
    minus: function(a, b){
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    power: function(a, b) {
        return Math.pow(a, b);
    },
}