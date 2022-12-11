import logo from "./logo.svg";
import "./App.css";
import useWindowSize from "./use-window-size";
import { useEffect } from "react";

function App() {
  const size = useWindowSize();
  function clientWidth() {
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    return width;
  }
  useEffect(() => {
    console.log(clientWidth());
  }, [document.documentElement.clientWidth, window.innerWidth || 0]);
  return (
    <div className="App">
      <h1>Hello Universe!</h1>
      <h3>Responsiveness according the width of the screen</h3>
      {size.width <= 950 ? (
        <div style={{ backgroundColor: "red" }}>Hello</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
