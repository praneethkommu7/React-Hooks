import React, { useState, useEffect } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect`);
    count === 0
      ? (document.title = `Chats`)
      : (document.title = `Chats (${count})`);
  }, [count]);

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

export default UseEffect1;
