// getElementById
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const num = document.getElementById("num");

let count = 0;

function countDown() {
  num.innerHTML = count--;
  console.log("down");
}

function countUp() {
  num.innerHTML = count++;
  console.log("up");
}

decrease.addEventListener("click", countDown);
increase.addEventListener("click", countUp);

// getElementsByClassName

const text = document.getElementsByClassName("text");
const textChange = document.getElementsByClassName("textChange");

textChange[0].addEventListener("click");
