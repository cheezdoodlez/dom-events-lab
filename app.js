/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

let currentInput =''
let operator =''
let previousInput =''




  calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {
        currentInput += event.target.innerText;
        display.innerText = currentInput;
      
    }
  })
   if (event.target.classList.contains('operator')) {
    if (event.target.innerText === 'C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        display.innerText = '';
    } else {
        if (currentInput === '' && previousInput === '') return;

        if (currentInput !== '') {
            if (previousInput !== '') {
                calculate();
            }
            previousInput = currentInput;
            currentInput = '';
        }
        operator = event.target.innerText;
    }
} 
else if (event.target.classList.contains('equals')) { // coud not fix depracated error
    if (currentInput === '' || previousInput === '') return;
    calculate();
}


function calculate() {
let result;
const prev = parseFloat(previousInput); // translates string into numerical value 
const current = parseFloat(currentInput);

if (isNaN(prev) || isNaN(current)) return;

switch (operator) {
    case '+':
        result = prev + current;
        break;
    case '-':
        result = prev - current;
        break;
    case '*':
        result = prev * current;
        break;
    case '/':
        result = prev / current;
        break;
    default:
        return;
}

currentInput = result;
operator = '';
previousInput = '';
display.innerText = currentInput;
}
  //used chatgpt for code and tried to make sense of each function/operator that were new, still running into errors. will go over with TA during TA hours
  //Will try my best to update git after submission with my own work. just need time to better understand solutions
  //finding it hard to review previous lessons and wokr on labs when there is another one due the next day to work on. need to find better work/study flow