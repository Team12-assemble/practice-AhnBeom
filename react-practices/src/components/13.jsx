import { useReducer } from "react";
// useReducer를 사용한 방식 1
const initial = {
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};
export default function ToggleTheme() {
  // useState를 사용한 방식
  //   const [isLight, setIsLight] = useState(false);

  //   const handleToggle = () => {
  //     setIsLight((prev) => !prev);
  //   };

  // useReducer를 사용한 방식 2
  const [isLight, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <p>current theme: {isLight.theme}</p>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        toggle theme
      </button>
    </div>
    // <div>
    //   <p>current theme: {isLight ? "light" : "dark"}</p>
    //   <button onClick={handleToggle}>toggle theme</button>
    // </div>
  );
}
