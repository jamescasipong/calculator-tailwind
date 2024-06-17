// script.js
let displayValue = "";

function appendToDisplay(val) {
  displayValue = displayValue + val;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = result.toString(); // Store result for further calculations
  } catch (error) {
    document.getElementById("display").value = "Error";
    displayValue = ""; // Reset display on error
  }
}
