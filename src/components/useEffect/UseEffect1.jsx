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
      <h2>{count}</h2>
      <div className="inline">
        <input type="button" onClick={countIncrement} value="Increment" />
        <input type="button" onClick={countDecrement} value="Decrement" />
      </div>
    </div>
  );
};

export default UseEffect1;
