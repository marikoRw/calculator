const display = document.querySelector("#input");

function appendToDisplay(input) {
    display.value += input;
    adjustFontSize();
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try{
        let result = eval(display.value);

        if (Number.isInteger(result)) {
            display.value = result;
        }
        else {
            display.value = result.toFixed(7);
        }
        adjustFontSize();
    }
    catch{
        display.value = "Error";
    }
}

function adjustFontSize() {
    const length = display.value.length;

    if (length > 12) {
        display.style.fontSize = "1rem";
    } else if (length > 8) {
        display.style.fontSize = "2rem";
    } else {
        display.style.fontSize = "3rem";
    }
}