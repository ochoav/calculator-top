let display = "";

let firstOperand = "";
let operator = undefined;
let secondOperand = "";

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const operate = function (op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Invalid operation";
    };
};

function initButtons () {
    setUpNumberButtons();
    setUpOperatorButtons();
}

function setUpNumberButtons() {
    const displayScreen = document.querySelector('.display');
    document.querySelectorAll('.digit').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (operator === undefined) {
                firstOperand += btn.textContent;
                displayScreen.textContent = firstOperand;
            } else {
                secondOperand += btn.textContent;
                displayScreen.textContent = secondOperand;
            }
        });
    });
}

function setUpOperatorButtons() {
    const displayScreen = document.querySelector('.display');
    document.querySelectorAll('.operation').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(btn.textContent === '=') {
                const result = operate(firstOperand, secondOperand, operator);
                firstOperand = result;
                operator = undefined;
                secondOperand = "";
                displayScreen.textContent = result;
            } 
        })
    })
}

initButtons();




