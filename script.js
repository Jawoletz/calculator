function operate(operator, x, y) {
    switch (operator) {
        case "+":
            add(x, y);
            break;
        case "-":
            subtract(x, y);
            break;
        case "/":
            divide(x, y);
            break;
        case "x":
            multiply(x, y);
            break;
        default:
            return "Error";
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function multiply(x, y) {
    return x * y;
}

const equation = [];

// Get elements
const display = document.getElementById('display');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

// Show input on display
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        equation.push(button.textContent);
        display.textContent = equation.join('');
    });
});

// Clear the display
clear.addEventListener('click', function() {
    equation.length = 0;
    display.textContent = '';
});

// Solve the equation
equals.addEventListener('click', function() {
    console.log(equation);
    let x = equation.find(char => char == re);
    // let operator = equation.find(char => 
    console.log(x);
});

// Make solve
// Accepts numbers larger than 9
// 