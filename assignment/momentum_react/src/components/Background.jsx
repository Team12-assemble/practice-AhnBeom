import "./style.scss";
const images = [
  "image01.webp",
  "image02.webp",
  "image03.webp",
  "image04.webp",
  "image05.webp",
  "image06.webp",
  "image07.webp",
];

export default function Background({ children }) {
  const chosenImage = images[Math.floor(Math.random() * images.length)];

  return (
    <main
      className="bg"
      style={{ backgroundImage: `url(/images/${chosenImage})` }}
    >
      {children}
    </main>
  );
}
