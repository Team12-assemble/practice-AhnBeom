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

let text4 = "Hello World!";
// 대문자
let text5 = text4.toUpperCase();
//소문자
let text6 = text4.toLowerCase();
// 문자 합치기
let text7 = "Hello";
let text8 = "World";
let text9 = text7.concat(" ", text8);

let text10 = "Please locate where 'locate' occurs!";
let index = text10.lastIndexOf("John"); // -1
let index2 = text10.indexOf("locate", 15); // 21
console.log(index, index2);
