//DOM selectors.
let calculator = {
    currentNum: 0,
    totalNum: 0 
}

const equal = document.querySelector('.equal')
const operators = document.querySelectorAll('.operators')
const buttons = document.querySelector(".calculator");
const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector(".clear");
// const addBtn = document.querySelector(".addition");
// const multiplyBtn = document.querySelector(".multiply");
// const divideBtn = document.querySelector(".divide");
// const subtractBtn = document.querySelector(".subtract");
const floatsBtn = document.querySelector(".floats");
const display = document.getElementById('display');
const smallDis = document.getElementById('small')

// Operator Function

function operate(operator,a,b) {
    if (operator === '+') {
        return a + b;
    }
    else if (operator === '-') {
        return a - b;
    }
    else if (operator === '*') {
        return a * b;
    }
    else if (operator === '/') {
        return a / b;
    }
}

 //Generic event listeners.

buttons.addEventListener('click', (e) => {
    
    if (e.target === display) {
        display.textContent;
    }
    else if (display.textContent == ""){
        display.textContent = e.target.textContent;
    }
    else display.textContent += e.target.textContent;
    calculator.currentNum = parseFloat(display.textContent,'10');
})

//deleteBtn event listener.

deleteBtn.addEventListener('click', (e) => {
    if (display.textContent != '') {
        display.textContent = display.textContent.slice(0, -1);
        calculator.currentNum = parseFloat(display.textContent, '10');
    }
    if (display.textContent.length === 0) {
        display.textContent = '';
    }
    e.stopPropagation();
})


//ClearBtn event listener.

clearBtn.addEventListener('click', (e) => {
    display.textContent = '';
    smallDis.textContent = '';
    calculator.currentNum = 0;
    calculator.totalNum = 0;
    delete calculator.operator;
    e.stopPropagation();
})


//FloatsBtn event listener.

floatsBtn.addEventListener('click', (e) =>{
    if (display.textContent === '0') {
        display.textContent += e.target.textContent;
    }
    else if (display.textContent === '') {
        display.textContent = 0 + '.';

    };
    if (display.textContent.includes('.')) {
        display.textContent = display.textContent;
        e.stopPropagation(); 
    } 
    
});

// Operators

operators.forEach((item) => item.addEventListener('click', (e) => {
    e.stopPropagation();
    if (calculator.operator) {
        calculator.totalNum = operate(calculator.operator,calculator.totalNum,calculator.currentNum);
    }
    else {
        calculator.operator = item.textContent;
        calculator.totalNum = calculator.currentNum;
    }
    display.textContent = '';
    smallDis.textContent = calculator.totalNum;
    calculator.operator = item.textContent;
    
}))













