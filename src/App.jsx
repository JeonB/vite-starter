import { useEffect, useState } from "react";
import "./App.css";
import { kebabCaseToTitleCase } from "./helper";
function App() {
  const [disabled, setDisabled] = useState(false);
  const [color, setColor] = useState("medium-violet-red");
  const nextColorClass =
    color === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const nextColorTitleCase = kebabCaseToTitleCase(nextColorClass);
  const className = disabled ? "gray" : color;
  useEffect(() => {
    // console.log(disabled);
  }, [disabled]);
  return (
    <div>
      <button
        className={className}
        disabled={disabled}
        onClick={() => setColor(nextColorClass)}
      >
        Change to {nextColorTitleCase}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onClick={() => {
          setDisabled(!disabled);
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
