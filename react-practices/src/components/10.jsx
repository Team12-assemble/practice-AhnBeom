import { useState } from "react";

export default function CharacterCounter() {
  const [count, setCount] = useState(0);

  const onChangeCharacter = (e) => {
    setCount(e.target.value.length);
  };

  return (
    <div>
      <input onChange={onChangeCharacter} />
      <p>count: {count}</p>
    </div>
  );
}
