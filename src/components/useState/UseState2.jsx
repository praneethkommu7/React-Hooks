import React, { useState } from "react";

const UseState2 = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };
  const onDecrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h2 className="counter">{count}</h2>
      <div className="inline">
        <input type="button" onClick={onIncrement} value="Increment" />
        <input type="button" onClick={reset} value="Reset" />
        <input type="button" onClick={onDecrement} value="Decrement" />
      </div>
    </>
  );
};

export default UseState2;
