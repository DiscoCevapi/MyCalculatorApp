
// Function to perform calculation inspired by my Dice project but using if or 
// else if statements.
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    if (operation === "addition") {
        const result = num1 + num2;
        document.getElementById("result").value = result;
    } else if (operation === "subtraction") {
        const result = num1 - num2;
        document.getElementById("result").value = result;
    } else if (operation === "multiplication") {
        const result = num1 * num2;
        document.getElementById("result").value = result;
    } else if (operation === "division") {
        if (num2 === 0) {
            document.getElementById("result").value = "Cannot divide by zero";
        } else {
            const result = num1 / num2;
            document.getElementById("result").value = result;
        }
    }
}
