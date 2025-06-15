let display = document.getElementById('display');
let currentInput = '0';
let shouldResetDisplay = false;

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }

    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else if (value === '.' && currentInput.includes('.')) {
        return; 
    } else if (['+', '-', '*', '/'].includes(value)) {
        let lastChar = currentInput[currentInput.length - 1];
        if (['+', '-', '*', '/'].includes(lastChar)) {
            currentInput = currentInput.slice(0, -1) + value;
        } else {
            currentInput += value;
        }
    } else {
        currentInput += value;
    }

    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    shouldResetDisplay = false;
    display.classList.remove('error');
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    display.classList.remove('error');
    updateDisplay();
}

function calculate() {
    try {
        let expression = currentInput.replace(/×/g, '*');
        
        if (expression === '' || expression === '0') {
            return;
        }

        let result = eval(expression);
        
        if (!isFinite(result)) {
            throw new Error('Invalid calculation');
        }

        if (result.toString().length > 12) {
            result = parseFloat(result.toPrecision(10));
        }

        currentInput = result.toString();
        shouldResetDisplay = true;
        display.classList.remove('error');
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        shouldResetDisplay = true;
        display.classList.add('error');
        updateDisplay();
        
        setTimeout(() => {
            clearDisplay();
        }, 2000);
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '+') {
        appendToDisplay('+');
    } else if (key === '-') {
        appendToDisplay('-');
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        event.preventDefault(); 
        appendToDisplay('/');
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    display = document.getElementById('display');
    updateDisplay();
});