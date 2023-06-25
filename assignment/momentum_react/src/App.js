import "./App.css";
import Background from "./components/Background";
import Clock from "./components/Clock";
import Greeting from "./components/Greeting";
import TodoList from "./components/TodoList";
// import Weather from "./components/Weather";

function App() {
  return (
    <Background>
      {/* <Weather /> */}
      <Clock />
      <Greeting />
      <TodoList />
    </Background>
  );
}

export default App;
