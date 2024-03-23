// Get elements by ID
// Number keys
const oneBtn = document.getElementById('oneBtn');
const twoBtn = document.getElementById('twoBtn');
const threeBtn = document.getElementById('threeBtn');
const fourBtn = document.getElementById('fourBtn');
const fiveBtn = document.getElementById('fiveBtn');
const sixBtn = document.getElementById('sixBtn');
const sevenBtn = document.getElementById('sevenBtn');
const eightBtn = document.getElementById('eightBtn');
const nineBtn = document.getElementById('nineBtn');
const zeroBtn = document.getElementById('zeroBtn');
const decimalBtn = document.getElementById('decimalBtn');
const negativeBtn = document.getElementById('negativeBtn');

// Operator keys
const deleteBtn = document.getElementById('deleteBtn');
const allClearBtn = document.getElementById('allClearBtn');
const multiplicationBtn = document.getElementById('multiplicationBtn');
const divisionBtn = document.getElementById('divisionBtn');
const additionBtn = document.getElementById('additionBtn');
const subtractionBtn = document.getElementById('subtractionBtn');
const prevAnsBtn = document.getElementById('prevAnsBtn');
const equalsBtn = document.getElementById('equalsBtn');

// Display buttons when pressed
const display = document.getElementById('display');
const displayEquation = [];
const displayBtn = document.querySelectorAll('.displayBtn');
displayBtn.forEach(button => {
    button.addEventListener('click', function() {
        displayEquation.push(button.textContent);
        display.textContent = displayEquation.join('');
    });
});

// Delete and clear displayEquation
    deleteBtn.addEventListener('click', function() {
        displayEquation.pop();
        display.textContent = displayEquation.join('');
    });

    allClearBtn.addEventListener('click', function() {
        displayEquation.length = 0;
        display.textContent = '';
    })

// Parse equation to solve
const finalEquation = [];
let str = "";
equalsBtn.addEventListener('click', function() {
// Combine number characters [1,5,+,1,1] => [15,+,11]
    for (let i = 0; i < displayEquation.length; i++) {
        if (displayEquation[i] == "0" ||
        displayEquation[i] == "1" ||
        displayEquation[i] == "2" ||
        displayEquation[i] == "3" ||
        displayEquation[i] == "4" ||
        displayEquation[i] == "5" ||
        displayEquation[i] == "6" ||
        displayEquation[i] == "7" ||
        displayEquation[i] == "8" ||
        displayEquation[i] == "9" ||
        displayEquation[i] == "." ) {
            str = str.concat(displayEquation[i])
        } else {
            finalEquation.push(str, displayEquation[i]);
            str = "";
        } 
    }
    finalEquation.push(str);

    console.log(solve(finalEquation));
})

// solve recursively
function solve(equation, x, y) {
    for (let i = 0; i < equation.length; i++) {
        
        if (equation[i] == "x") {
            solve()
            multiply(equation[i-1], equation.slice(i+1));
        }
        if (equation[i] == "/") {
            divide(equation[i-1], equation.slice(i+1));
        }
        if (equation[i] == "+") {
            add(equation[i-1], equation.slice(i+1));
        }
        if (equation[i] == "-") {
            subtract(equation[i-1], equation.slice(i+1));
        }
    }
}

// Mathematical Operation Functions
function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}