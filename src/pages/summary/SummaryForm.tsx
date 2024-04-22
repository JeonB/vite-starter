import React, { useState } from "react";
export const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        id="terms-and-conditions"
        defaultChecked={checked}
        onClick={() => {
          setChecked(!checked);
          setDisabled(!disabled);
        }}
      />
      <button disabled={disabled}>Confirm order</button>
      <label htmlFor="terms-and-conditions">terms and conditions</label>
    </div>
  );
};
