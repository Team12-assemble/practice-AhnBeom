import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("마운트되었습니다!");
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    console.log("언마운트되었습니다!");
    return () => {
      console.log("리턴되었습니다.");
      clearInterval(timer);
    };
  }, [seconds]);

  return <div>{seconds}</div>;
}

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Timer />
      <p>카운트: {count}</p>
      <button onClick={handleIncrease}>증가</button>
    </div>
  );
}
