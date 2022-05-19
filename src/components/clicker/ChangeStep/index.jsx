import React from "react";

const ChangeStep = ({ step, changeStep }) => {
  const changeHendler = (e) => changeStep(Number(e.target.value));
  return (
    <label htmlFor="">
      <span>Шаг =</span>
      <input value={step} onChange={changeHendler} />
    </label>
  );
};

export default ChangeStep;
