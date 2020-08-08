//DOM selectors.
let calculator = {
    currentNum: 0,
    totalNum: 0 
}

const negative = document.querySelector('.negative')
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

// buttons.focus();
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

// Negative Numbers

negative.addEventListener('click', (e) => {
    e.stopPropagation();
    if (display.textContent.includes('-')){
        display.textContent = display.textContent.replace('-','')
    }
    else 
    display.textContent = '-' + display.textContent
    calculator.currentNum = parseFloat(display.textContent, '10')
})
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
        calculator.currentNum = 0;
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


// Operators.

operators.forEach((item) => item.addEventListener('click', (e) => {
    e.stopPropagation();
    if (calculator.operator) {
        calculator.totalNum = operate(calculator.operator,calculator.totalNum,calculator.currentNum);
    }
    else {
        calculator.totalNum = calculator.currentNum;
    }
    display.textContent = '';
    smallDis.textContent = calculator.totalNum;
    calculator.operator = item.textContent;
    if (calculator.operator === '=') {
        return calculator.operator = ''
    }
}))

//Keyboard Support.

document.addEventListener('keydown',(e) => {
    console.log(e)
    const nums = document.querySelector(`button[data-key='${e.keyCode}']`);
    if(!nums || e.shiftKey == true) return
    else
    display.textContent += nums.textContent
    calculator.currentNum = parseFloat(display.textContent,'10');
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'Backspace'){
       deleteBtn.click();
    }
    if (e.key == '.' ) {
        floatsBtn.click();
    }
    if (e.key == 'Escape' || e.key == 'Delete') {
        clearBtn.click();
    }
    if (e.key == '+'){
        test('+')
    }
    if (e.key == '-'){
        test('-')
    }
    if (e.key == '*'){
        test('*')
    }
    if (e.key == '/'){
        test('/')
    }
    if (e.key == '=') {
        test('=')
    }
    if (e.key == 'Enter'){
        test('=')
    }
})

function test(operator){
    if (calculator.operator) {
        calculator.totalNum = operate(calculator.operator,calculator.totalNum,calculator.currentNum);
    }
    else {
        calculator.totalNum = calculator.currentNum;
    }
    display.textContent = '';
    smallDis.textContent = calculator.totalNum;
    calculator.operator = operator;
    if (calculator.operator === '=') {
        return calculator.operator = ''
    }
}
