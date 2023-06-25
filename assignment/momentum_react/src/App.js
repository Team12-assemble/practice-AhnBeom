import "./App.css";
import Background from "./components/Background";
import Clock from "./components/Clock";
import Greeting from "./components/Greeting";

function App() {
  return (
    <Background>
      <Clock />
      <Greeting />
    </Background>
  );
}

export default App;
