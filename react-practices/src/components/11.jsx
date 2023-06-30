import { useEffect, useState } from "react";

export default function HideTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  const handleHide = () => {
    setIsHide((prev) => !prev);
  };

  return (
    <div>
      <p style={{ display: isHide ? "none" : "block" }}>초: {seconds}</p>
      <button onClick={handleHide}>Hide Timer</button>
    </div>
  );
}
