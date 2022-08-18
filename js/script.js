// business logic

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1*number2;
}

function divide(number1, number2) {
  return number1/number2;
}


// user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

const number1string = number1.toString();
const number2string = number2.toString();

window.alert(number1 + ' + ' + number2 + " = " + (add(number1, number2)) + ', ' +  number1 + " - " + number2 +  " = " + (subtract(number1, number2)) + ', ' + number1 + " * " + number2 + " = " + (multiply(number1, number2))  + ', ' + number1 + ' / ' + number2 + ' = ' + (divide(number1, number2)))
