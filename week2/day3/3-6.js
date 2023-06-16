// getElementById
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const num = document.getElementById("num");

function countDown() {
  return (num -= 1);
}

function countUp() {
  return (num += 1);
}

decrease.addEventListener("click", countDown);
increase.addEventListener("click", countUp);
