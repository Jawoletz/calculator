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

equalsBtn.addEventListener('click', function() {
// Combine number characters [1,5,+,1,1] => [15,+,11]
    finalEquation = [];
    let str = "";
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
            finalEquation.push(Number(str), displayEquation[i]);
            str = "";
        } 
    }
    finalEquation.push(Number(str));

    solve(finalEquation);
})

// solve recursively
function solve(equation) {
    if (equation.length == 1) {
        console.log(equation);
        return;
    }
    // Search entire equation for each operator one at a time to do PEMDAS
    let index = 0;
    let temp = 0;
    if (equation.indexOf("x") != -1) {
        index = equation.indexOf("x");
        temp = multiply(equation[index-1], equation[index+1]);
        equation.splice(index-1,3,temp);
    }
    if (equation.indexOf("/") != -1) {
        index = equation.indexOf("/");
        temp = divide(equation[index-1], equation[index+1]);
        equation.splice(index-1,3,temp);
    }
    if (equation.indexOf("+") != -1) {
        index = equation.indexOf("+");
        temp = add(equation[index-1], equation[index+1]);
        equation.splice(index-1,3,temp);
    }
    if (equation.indexOf("-") != -1) {
        index = equation.indexOf("-");
        temp = subtract(equation[index-1], equation[index+1]);
        equation.splice(index-1,3,temp);
    }
    solve (equation);
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