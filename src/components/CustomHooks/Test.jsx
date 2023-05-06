import React, { useEffect, useState } from "react";
import useTitleCount from "./useTitleCount";

const Test = () => {
  const [count, setCount] = useState(0);

  // custom Hook
  useTitleCount(count);

  const countIncrement = () => {
    console.log(`Clicked Increment`);
    setCount(count + 1);
  };
  const countDecrement = () => {
    console.log(`Clicked Decrement`);
    setCount(count - 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <div className="inline">
        <button className="btn" onClick={countIncrement}>
          Increment
        </button>
        <button className="btn" onClick={countDecrement}>
          Decrement
        </button>
      </div>
    </>
  );
};
export default Test;
