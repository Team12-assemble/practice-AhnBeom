import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <h3>타이머:{count}</h3>;
}

export default function TimerApp() {
  return <Timer />;
}
