import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [disabled, setDisabled] = useState(false);
  const [color, setColor] = useState("blue");
  useEffect(() => {
    // console.log(disabled);
  }, [disabled]);
  return (
    <div>
      <button
        className={color}
        disabled={disabled}
        onClick={() => (color === "red" ? setColor("blue") : setColor("red"))}
      >
        Change to {color}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onClick={() => setDisabled(!disabled)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
