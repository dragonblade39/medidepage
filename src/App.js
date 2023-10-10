import "./App.css";
import Title from "./components/Title/Title";
import Info from "./components/Info/Info";
import About from "./components/About/About";
import Impact from "./components/Impact/Impact";
import GetInTouch from "./components/GetInTouch/GetInTouch";
function App() {
  return (
    <div className="App">
      <Title />
      <Info />
      <br />
      <br />
      <About />
      <Impact />
      <br />
      <br />
      <br />
      <GetInTouch />
    </div>
  );
}

export default App;
