function appendToDisplay(value) {
    let display = document.getElementById("out");

    // Prevent multiple leading zeros
    if (display.innerText === "0" && value !== ".") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById("out").innerText = "0";
}

function calculateResult() {
    let display = document.getElementById("out");

    try {
        // Evaluate the expression
        let result = eval(display.innerText);

        // If the result is undefined or invalid, don't update display
        if (result === undefined || result === Infinity || isNaN(result)) {
            display.innerText = "Error";
        } else {
            display.innerText = result;
        }
    } catch (error) {
        display.innerText = "Error";
    }
}
