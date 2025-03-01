// Pure function: Handles appending values to the display string
const appendValue = (currentDisplay, value) => {
    if (currentDisplay === "0" && value !== ".") {
        return value;
    }
    return currentDisplay + value;
};

// Pure function: Clears the display to "0"
const clearValue = () => "0";

// Pure function: Evaluates the expression safely
const evaluateExpression = (expression) => {
    try {
        let result = Function(`"use strict"; return (${expression})`)();
        return (result === undefined || result === Infinity || isNaN(result)) ? "Error" : result.toString();
    } catch {
        return "Error";
    }
};

// UI update function (isolates side effects)
const updateDisplay = (newValue) => {
    document.getElementById("out").innerText = newValue;
};

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    let display = "0";
    updateDisplay(display);

    document.querySelectorAll(".num").forEach((button) => {
        button.addEventListener("click", (event) => {
            const value = event.target.innerText;
            display = appendValue(display, value);
            updateDisplay(display);
        });
    });

    document.querySelector(".num1:first-child").addEventListener("click", () => {
        display = clearValue();
        updateDisplay(display);
    });

    document.querySelector(".num1:last-child").addEventListener("click", () => {
        display = evaluateExpression(display);
        updateDisplay(display);
    });
});
