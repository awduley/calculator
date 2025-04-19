const display = document.querySelector('.display');
const keys = document.querySelectorAll('.key');

function add(a, b) {
  display.textContent = a + b;
}

function subtract(a, b) {
  display.textContent = a - b;
}

function multiply(a, b) {
  display.textContent = a * b;
}

function divide(a, b) {
  display.textContent =  a / b;
}

let num1 = '';
let operator = '';
let num2 = '';

let hasOperator = false;

function clearAll() {
  display. textContent = '';
  num1 = '';
  operator = '';
  num2 = '';
  hasOperator = false;
}

// let keyArray = Array(keys);

keys.forEach(key => {
  key.addEventListener('click', () => {

    if(hasOperator) {
      num2 += key.innerText;
      display.textContent = num2
    }

    if(key.innerText === '/' ||
      key.innerText === '*' ||
      key.innerText === '-' ||
      key.innerText === '+'
    ) {
      operator = key.innerText;
      hasOperator = true;
    }

    if(!hasOperator) {
      num1 += key.innerText;
      display.textContent = num1;
    }

    if(key.innerText === '=') {
     
      if(operator === '/') {
        divide(parseInt(num1), parseInt(num2));
      }
      if(operator === '*') {
        multiply(parseInt(num1), parseInt(num2));
      }
      if(operator === '-') {
        subtract(parseInt(num1), parseInt(num2));
      }
      if(operator === '+') {
        add(parseInt(num1), parseInt(num2));
      }
    }

    if(key.innerText === 'C') {
      clearAll();
    }
  })
})


function operate(num1, operator, num2) {
  if(operator === '/') {
    divide(num1, num2);
  } 
  if(operator === '*') {
    multiply(num1, num2);
  } 
  if(operator === '-') {
    subtract(num1, num2);
  } 
  if(operator === '+') {
    add(num1, num2);
  } 
}