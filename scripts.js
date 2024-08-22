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
            setOperator(button.operator);
            break;
        case 'special':
            switch (button.special) {
                case 'clear':
                    reset()
                    break;
                case 'back':
                    backspace();
                    break;
                case 'negative':
                    toggleNeg();
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

function setOperator(button) {
    if (operator !== undefined) {
        compute();
    }
    termB = undefined;
    operator = button;
}

function toggleNeg() {
    let term = operator ? termB : termA;
    term = (term && term.startsWith('-')) ? term.slice(1) : `-${term}`;
    commitTerm(term);
}

function addToTerm(number) {
    let term = operator ? termB : termA;
    term = (term !== undefined) ? term + number : number;
    commitTerm(term);
}

function backspace() {
    let term = operator ? termB : termA;
    term = (term && term.length > 1) ? term.slice(0, -1) : undefined;
    commitTerm(term);
}

function commitTerm(term) {
    if (operator) {
        termB = term;
    } else {
        termA = term;
    }
}

function compute() {
    if (result !== undefined) {
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
    if (result !== undefined) {
        console.log('displaying result');
        display.textContent = result;
    } else if (termB !== undefined) {
        console.log('displaying termB');
        display.textContent = termB
    } else if (termA !== undefined) {
        console.log('displaying termA');
        display.textContent = termA
    } else {
        console.log('displaying 0 by default');
        display.textContent = '0'
    }
}

function reset() {
    termA = undefined;
    termB = undefined;
    operator = undefined;
    result = undefined;
    display.textContent = 0;
}