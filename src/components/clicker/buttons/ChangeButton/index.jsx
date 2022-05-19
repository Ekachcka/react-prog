import React from "react";

function ChangeButton({ step, counterIncrecse }) {
  return <button onClick={counterIncrecse}>Додати {step}</button>;
}

export default ChangeButton;
