let calculator = document.querySelector('.calculator')
let display = document.querySelector('.display');
let termA;
let termB;
let operation;
let newDisplayVal = true

calculator.addEventListener('click', (event) => {
    let id = event.target.id;
    let textContent = event.target.textContent;
    switch (id) {
        case '.':
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
            newDisplayVal = true;
            operation = id;
            termA = display.textContent;
            break;
        case 'equals':
            newDisplayVal = true
            if (termB === undefined) {
                termB = display.textContent;
            }
            console.log(termA, operation, termB);
            termA = compute()
            clearDisplay();
            updateDisplay(termA);
            break;
        case 'clear':
            reset();
            break;
        case 'back':
            backspace();
            break;
        case 'negative':
            togglePositiveNegative(display.textContent);
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
            result = termA
            for (i = 1; i < termB; i++) {
                result *= termA;
            }
            break;
    }
    return result
}

function reset() {
    newDisplayVal = true
    termA = undefined;
    termB = undefined;
    operation = undefined;
    display.textContent = 0;
}

function backspace() {
    let text = display.textContent
    if (text.length === 1) {
        display.textContent = 0;
        newDisplayVal = true
    } else {
        display.textContent = text.substring(0, text.length - 1);
    }
}

function togglePositiveNegative() {
    let text = display.textContent
    if (text.at(0) === '-') {
        text = text.substring(0);
    } else {
        text = `-${text}`
    }
    display.textContent = text;
}

function clearDisplay() {
    display.textContent = 0;
}

function updateDisplay(string) {
    if (newDisplayVal == true) {
        display.textContent = string;
        newDisplayVal = false; 
    } else {
        display.textContent += string;
    }
}

function updateTerm(term, string) {
    if (term) {
        term = string;
    } else {
        term += string;
    }
    return term
}