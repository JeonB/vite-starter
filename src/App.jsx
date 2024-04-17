import { useState } from "react";
import "./App.css";
function App() {
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <button className="red">Change to blue</button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
