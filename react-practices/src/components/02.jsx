import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      카운트: {count}
      <button onClick={handleCount}>+</button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
    </>
  );
}
