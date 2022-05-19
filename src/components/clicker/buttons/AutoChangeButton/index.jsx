import React from "react";

function AutoChangeButton({ step, autoClick }) {
  return <button onClick={autoClick}>Додавати автоматично {step}</button>;
}

export default AutoChangeButton;
