let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function setOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    if (currentNumber === '' || previousNumber === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    operator = '';
    previousNumber = '';
    display.value = result;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    display.value = '';
}
