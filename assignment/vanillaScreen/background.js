const images = [
  "image01.jpg",
  "image02.jpg",
  "image03.jpg",
  "image04.jpg",
  "image05.jpg",
  "image06.jpg",
  "image07.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.querySelector("section");
background.style.backgroundImage = `url(./images/${chosenImage})`;
