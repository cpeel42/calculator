let display = document.querySelector('.display');
let buttons = document.querySelector('.buttons');
let termA;
let termB;
let result;
let operator;

buttons.addEventListener('click', (event) => {
    let button = event.target.dataset;
    switch (button.buttonType) {
        case 'number':
            addToTerm(button.number);
            break;
        case 'operator':
            termB = undefined;
            operator = button.operator;
            break;
        case 'special':
            switch (button.special) {
                case 'clear':
                    reset()
                    break;
                case 'back':
                    backspace()
                    break;
                case 'negative':
                    toggleNeg()
                    break;
                case 'equals':
                    compute();
                    break;
            }
            break;
    }
    updateDisplay()
    console.log(`${termA} ${operator} ${termB} = ${result}`);
});

function reset() {
    termA = undefined;
    termB = undefined;
    operator = undefined;
    result = undefined;
    display.textContent = 0;
}

function compute() {
    if (result) {
        termA = result;
    }
    if (operator) {
        switch (operator) {
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
    }
}

function updateDisplay() {
    if (result) {
        display.textContent = result;
    } else if (termB) {
        display.textContent = termB
    } else if (termA) {
        display.textContent = termA
    } else {
        display.textContent = '0'
    }
}

// These need to be refactored:

function addToTerm(number) {
    if (operator) {
        termB = addIfDefined(number, termB);
    } else {
        termA = addIfDefined(number, termA);
    }
}

function addIfDefined(number, term) {
    if (term) {
        term += number;
    } else {
        term = number;
    }
    return term
}

function backspace() {
    if (operator) {
        termB = backspaceIfDefined(termB);
    } else {
        termA = backspaceIfDefined(termA);
    }
}

function backspaceIfDefined(term) {
    if (term.length === 1) {
        term = undefined;
    } else {
        term = term.substring(0, term.length - 1);
    }
    return term;
}

function toggleNeg() {
    if (operator) {
        termB = toggleNegIfDefined(termB);
    } else {
        termA = toggleNegIfDefined(termA);
    }
}

function toggleNegIfDefined(number) {
    if (number.at(0) === '-') {
        number = number.substring(0);
    } else {
        number = `-${number}`;
    }
    return number;
}

/* chat gpt idea to combine:
function updateTerm(action, number) {
    let term = operator ? termB : termA;

    switch (action) {
        case 'add':
            term = (term !== undefined) ? term + number : number;
            break;
        case 'backspace':
            term = (term && term.length > 1) ? term.slice(0, -1) : undefined;
            break;
        case 'toggleNeg':
            term = (term && term.startsWith('-')) ? term.slice(1) : `-${term}`;
            break;
        default:
            throw new Error('Unknown action');
    }

    if (operator) {
        termB = term;
    } else {
        termA = term;
    }
}
*/