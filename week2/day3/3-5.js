// 3-3.html과 연결
let text = "ABCDEFGHIJK";
let length = text.length;
document.querySelector("#length").innerHTML = length;

let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 13);
document.querySelector("#part").innerHTML = part;

let text3 = "Please visit Microsoft!";
let newText = text3.replace("Microsoft", "W3Schools");
document.querySelector("#new").innerHTML = newText;
