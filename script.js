

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
const display = document.getElementById('output')
const values = document.querySelectorAll('#num');
const clear = document.getElementById('clr');
const operadores = document.querySelectorAll('#opr');




values.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.value;
    });
});

clear.addEventListener('click', () => {
    display.textContent = ''
})

operadores.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.value;
    })
});



calculate.addEventListener('click', (oper, numA, numB) => {
    display.textContent.split(oper)
    numA = parseInt(values).value;
    numB = parseInt(values).value
    oper = operadores 
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