// script.js
let displayValue = "";

function appendToDisplay(val, operator) {
  displayValue = displayValue + val;
  if (displayValue !== ""){
    displayValue = displayValue + operator;
    document.getElementById("display").value = displayValue;
  }

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

let getBodyId;
let isLight = false;
let element;

document.addEventListener("DOMContentLoaded", function() {
  // Code here will run after the DOM is fully loaded and parsed
  getBodyId = document.getElementById("dark-mode");
  element = document.getElementById("toggleMode");
});

function toggleTheme(){
  if (!getBodyId) {
    console.error("Element with id 'light-mode' not found.");
    return;
  }

  if (isLight){
    // Switching to dark mode
    getBodyId.id = "dark-mode";
    element.classList.remove("fas", "fa-sun");
    element.classList.add("fas", "fa-moon");
    
    isLight = false;
  } else {
    // Switching to light mode
    getBodyId.id = "light-mode";
    element.classList.remove("fas", "fa-moon");
    element.classList.add("fas", "fa-sun");
    isLight = true;
  }
}

