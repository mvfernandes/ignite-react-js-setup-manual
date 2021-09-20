import { useState } from "react";
import "./styles/global.scss";

export function App() {
  const [counter, setCounter] = useState<number>(0);
  function setIncrement() {
    setCounter((prev) => prev + 1);
  }
  return (
    <div>
      <h1>React WebPack</h1>
      <div>
        <button className="increment-button" onClick={setIncrement}>
          increment {counter}
        </button>
      </div>
    </div>
  );
}
