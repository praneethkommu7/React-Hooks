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
    <div>
      <h1>{count}😂</h1>
      <button className="btn" onClick={countIncrement}>
        Increment Me
      </button>
      <button className="btn" onClick={countDecrement}>
        Decrement Me
      </button>
    </div>
  );
};

export default UseEffect1;
