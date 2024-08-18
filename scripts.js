let calculator = document.querySelector('.calculator')
let display = document.querySelector('.display');
let termA;
let termB;
let operation;

calculator.addEventListener('click', (event) => {
    let id = event.target.id;
    let textContent = event.target.textContent;
    switch (id) {
        case 'decimal':
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            updateDisplay(textContent);
            break;
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
        case 'exponent':
            operation = id;
            termA = display.textContent
            break;
        case 'equals':
            termB = display.textContent
            clearDisplay();
            updateDisplay(compute());
            break;
        case 'clear':
            reset();
            break;
    }
})

function compute() {
    let result;
    switch (operation) {
        case 'add':
            result = +termA + +termB;
            break;
        case 'subtract':
            result = termA - termB;
            break;
        case 'multiply':
            result = termA * termB;
            break;
        case 'divide':
            result = termA / termB;
            break;
        case 'exponent':
            //to be fixed
            break;
    }
    console.log(result);
    return result
}

function reset() {
    termA = 'undefined';
    termB = 'undefined';
    operation = 'undefined';
    display.textContent = 0;

}

function clearDisplay() {
    display.textContent = 0;
}

function updateDisplay(string) {
    if (display.textContent == 0 || termA) {
        display.textContent = string;
    } else {
        display.textContent += string;
    }
}