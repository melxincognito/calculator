// constants and variables set 
  
const calculate = document.getElementById('equals');
const values = document.querySelectorAll('#num');
const clear = document.getElementById('clr');
const operadores = document.querySelectorAll('#opr'); 
const operatorDisplay = document.getElementById('operator');
const numOneDisplay = document.getElementById('numOne');
const numTwoDisplay = document.getElementById('num2');
const results = document.getElementById('output');

let num1= 0;
let num2= 0;
let oper= '';




// event listeners for buttons 

values.forEach(button => {
    button.addEventListener('click', () => {
        if(num1 >= 1){ 
            numTwoDisplay.textContent += button.value;
            num2 = parseFloat(numTwoDisplay.textContent);
        } else {
            numOneDisplay.textContent += button.value;
        }
    });
});


operadores.forEach(button => {
    button.addEventListener('click', () => {
        num1 = parseFloat(numOneDisplay.textContent); 
        operatorDisplay.textContent = button.value;
        oper = button.value; 
    })
});

clear.addEventListener('click', () => {
    numOneDisplay.textContent = '';
    operatorDisplay.textContent = '';
    numTwoDisplay.textContent = '';
    results.textContent = '';

    num1 = 0;
    num2 = 0;
    
})



calculate.addEventListener('click', () => { 
    answer = operate(oper, num1, num2);
    results.textContent = '= ' + answer.toFixed(3);
    
})



//operator functions

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
        case '^':
            return operators.power(a, b);
        case '/':
            if (b === 0) return null 
            else return operators.divide(a, b);
        default: 
            return null;
    }
}