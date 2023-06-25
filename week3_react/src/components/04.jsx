import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleIsOn = () => {
    setIsOn((prev) => !prev);
  };

  return <button onClick={handleIsOn}>{isOn ? "켜짐" : "꺼짐"}</button>;
};

export default function Practice04() {
  return (
    <>
      <Toggle />
    </>
  );
}
