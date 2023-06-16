// 3-7 html에 연결
const ironMan = {
  name: "토니스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const { name, actor, alias } = ironMan;
console.log(name, actor, alias);

const onChange = (e) => {
  const {
    target: { value },
  } = e;
  console.log(value); // 이것은 e.target.value와 같다.
};

let arr = [1234, "test", true];

arr.length = 5;
arr[5] = "12";
arr.push("pet");

console.log(arr);
