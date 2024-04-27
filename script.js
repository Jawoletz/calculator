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
let displayEquation = [];
const displayBtn = document.querySelectorAll('.displayBtn');
displayBtn.forEach(button => {
    button.addEventListener('click', function() {
        displayEquation.push(button.textContent);
        display.textContent = displayEquation.join('');
        checkFontSize();
    });
});

// Delete and clear displayEquation
    deleteBtn.addEventListener('click', backspace)
    allClearBtn.addEventListener('click', allClear)

function backspace() {
    displayEquation.pop();
    display.textContent = displayEquation.join('');
}

function allClear() {
    displayEquation.length = 0;
    display.textContent = '';
}

// Add keyboard input
document.addEventListener('keydown', logKey);
function logKey(e) {
    console.log(e.code);
    if (!isNaN(e.key) ||
    e.key == "x" ||
    e.key == "*" ||
    e.key == "/" ||
    e.key == "-" ||
    e.key == "+" ||
    e.key == ".") {
        displayEquation.push(e.key);
        display.textContent = displayEquation.join('');
        checkFontSize();
    }
    if (e.code == "Backspace") backspace();
    if (e.code == "Delete") allClear();
    if (e.code == "Enter" || e.code == "NumpadEnter") prepareEquation();
}

// Adjust display font size
function checkFontSize() {
    if (display.textContent.length <= 10) display.style.fontSize = "6vh";
    if (display.textContent.length > 10) display.style.fontSize = "4vh";
    if (display.textContent.length > 16) display.style.fontSize = "2vh";
}
// Parse equation to solve

equalsBtn.addEventListener('click', prepareEquation)

function prepareEquation() {
    let finalEquation = [];
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
}

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
    if (equation.indexOf("*") != -1) {
        index = equation.indexOf("*");
        temp = multiply(equation[index-1], equation[index+1]);
        equation.splice(index-1,3,temp);
    }
    if (equation.indexOf("/") != -1) {
        index = equation.indexOf("/");
        temp = divide(equation[index-1], equation[index+1]);
        equation.splice(index-1,3,temp);
    }
    if (equation.indexOf("-") != -1) {
        index = equation.indexOf("-");
        temp = subtract(equation[index-1], equation[index+1]);
        equation.splice(index-1,3,temp);
    }
    if (equation.indexOf("+") != -1) {
        index = equation.indexOf("+");
        temp = add(equation[index-1], equation[index+1]);
        equation.splice(index-1,3,temp);
    }
    solve (equation);
    // Update display
    display.textContent = equation;
    displayEquation.length = 0;
    console.log(equation[0].toString());
    for (let i = 0; i < (equation[0].toString()).length; i++) {
        displayEquation.push((equation[0].toString())[i]);
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

