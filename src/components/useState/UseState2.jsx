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
        <button className="btn" onClick={onIncrement}>
          Increment
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={onDecrement}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseState2;
