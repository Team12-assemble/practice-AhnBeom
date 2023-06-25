import { useEffect, useState } from "react";
import "./style.scss";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const hours = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");
  const sec = String(time.getSeconds()).padStart(2, "0");

  return (
    <h2 className="clock">
      {hours}:{min}:{sec}
    </h2>
  );
}
