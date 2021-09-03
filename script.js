

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

  
const calculate = document.getElementById('equals');
const values = document.querySelectorAll('#num');
const clear = document.getElementById('clr');
const operadores = document.querySelectorAll('#opr');
const decimal = document.getElementById('dec'); 
container = document.getElementById('container');

const operatorDisplay = document.getElementById('operator');
const numOneDisplay = document.getElementById('numOne')

var num1= 0;
var num2= 0;
var oper= '';

values.forEach(button => {
    button.addEventListener('click', () => {
        numOneDisplay.textContent += button.value;
    });
});


operadores.forEach(button => {
    button.addEventListener('click', () => {
        num1 = parseInt(numOneDisplay.textContent); 
        operatorDisplay.textContent = button.value;
        oper = button.value; 
    })
});

clear.addEventListener('click', () => {
    display.textContent = ''
})



calculate.addEventListener('click', () => {

    display.textContent.split(operadores)
    numA = parseInt(values).value;
    numB = parseInt(values).value
    oper = operadores.value; 
    answer = operate(oper, numA, numB);
    console.log(answer);
    return display.textContent = answer;
})










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

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case '+':
            return operators.add(a, b);
        case '-':
            return operators.minus(a, b);
        case 'x':
            return operators.multiply(a, b);
        case '/':
            if (b === 0) return null 
            else return operators.divide(a, b);
        default: 
            return null;
    }
}