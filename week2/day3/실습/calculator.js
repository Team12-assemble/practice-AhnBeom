const inputValue = document.querySelector(".inputValue");
const operators = document.getElementsByClassName("operators button");
const btn = document.querySelectorAll("button");

function multiple() {}

let result = inputValue.value;

btn[0].addEventListener("click", () => {
  inputValue.value = btn[0].value;
});

btn[0].addEventListener("click", () => {
  inputValue.value = btn[1].value;
});

operators[0].children[0].addEventListener("click", () => {
  result += inputValue.value;
});

inputValue.value = result;
