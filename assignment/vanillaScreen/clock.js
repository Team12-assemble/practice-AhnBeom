const clock = document.querySelector("h2#clock");

// interval 개념
// 매번 일어나야 하는 것
function getClock() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 즉시 getClock을 호출해야 디폴트 값인 00:00:00이 보이지 않음
getClock();
// 두 개의 argument를 받음. 첫 번째는 콜백함수, 두 번째는 ms(몇 초마다 호출할 것인지 숫자로 입력)
setInterval(getClock, 1000);

// 몇 초후에 나타나게 하고 싶다면 setTimeout을 사용
// setTimeout();
