document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    const themeBtn = document.getElementById("themeBtn");
    const calculator = document.getElementById("calculator");
    let currentValue = "0";

    // Function to update display
    function updateDisplay(value) {
        if (currentValue === "0" && value !== ".") {
            currentValue = value;
        } else {
            currentValue += value;
        }
        display.value = currentValue;
    }

    // Button Click Handling
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "C") {
                currentValue = "0";
            } else if (value === "=") {
                try {
                    currentValue = eval(currentValue);
                } catch {
                    currentValue = "Error";
                }
            } else if (value === "⌫") {
                currentValue = currentValue.slice(0, -1);
                if (currentValue === "") currentValue = "0";
            } else {
                updateDisplay(value);
            }

            display.value = currentValue;
        });
    });

    // Theme Toggle
    themeBtn.addEventListener("click", () => {
        if (calculator.classList.contains("dark-mode")) {
            calculator.classList.remove("dark-mode");
            calculator.classList.add("light-mode");
            document.body.style.background = "#ffffff";
        } else {
            calculator.classList.remove("light-mode");
            calculator.classList.add("dark-mode");
            document.body.style.background = "#f0f2f5";
        }
    });
});
