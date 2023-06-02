"use strict";

const validationInput = document.getElementById("validation-input");
const dataLength = validationInput.getAttribute("data-length");

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value.trim();

  if (inputValue.length === parseInt(dataLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
