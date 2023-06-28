import { useState } from "react";

export function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);
  const onClick = () => {
    setCount((prev) => prev + 1);
  };
  return { count, onClick };
}
