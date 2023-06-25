import React, { useState } from "react";

function ShowNum(props) {
  return <h2>{props.random}</h2>;
}

function Generator(props) {
  const handleRandom = () => {
    props.setRandom(Math.floor(Math.random() * 100) + 1);
  };
  return <button onClick={handleRandom}>생성</button>;
}

export default function RandomNum() {
  const [random, setRandom] = useState(0);

  return (
    <>
      <ShowNum random={random} />
      <Generator setRandom={setRandom} />
    </>
  );
}
