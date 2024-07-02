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

let getBodyId;
let isLight = true;
let element;

document.addEventListener("DOMContentLoaded", function() {
  // Code here will run after the DOM is fully loaded and parsed
  getBodyId = document.getElementById("light-mode");
  element = document.getElementById("toggleMode");
});

function toggleTheme(){
  if (!getBodyId) {
    console.error("Element with id 'light-mode' not found.");
    return;
  }

  if(isLight){
    getBodyId.id = "dark-mode";
    element.innerHTML = "Light MODE";
    isLight = false;
    console.log(isLight);
  } else {
    getBodyId.id = "light-mode";
    element.innerHTML = "DAY MODE";
    isLight = true;
  }
}
