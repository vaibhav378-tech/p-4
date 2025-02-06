import './App.css';
import { useState, React } from "react";
import { MyContext } from "./MyContext";
import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay"

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <MyContext.Provider value={{ counter, setCounter }}>
        <CounterDisplay/>
        <CounterControls  />
      </MyContext.Provider>
    </div>
  );
}
export default App;
