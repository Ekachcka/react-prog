import React from "react";

function Buttons({ step, counterIncrecse, autoClick }) {
  return (
    <>
     <button onClick={counterIncrecse}>Додати {step}</button>
     <button onClick={autoClick}>Додавати автоматично {step}</button>
    </>
  );
}

export default Buttons;
