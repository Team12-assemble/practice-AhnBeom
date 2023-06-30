import { useState } from "react";

export default function ToggleTheme() {
  const [isLight, setIsLight] = useState(false);

  const handleToggle = () => {
    setIsLight((prev) => !prev);
  };
  return (
    <div>
      <p>current theme: {isLight ? "light" : "dark"}</p>
      <button onClick={handleToggle}>toggle theme</button>
    </div>
  );
}
