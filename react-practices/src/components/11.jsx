import { useState } from "react";
import { Timer } from "./09";

export default function HideTimer() {
  const [isHide, setIsHide] = useState(false);

  const handleHide = () => {
    setIsHide((prev) => !prev);
  };

  return (
    <div>
      {!isHide && <Timer />}
      <button onClick={handleHide}>{isHide ? "show" : "hide"}</button>
    </div>
  );
}
