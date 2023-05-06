import React, { useReducer, useState } from "react";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

const UseReducer1 = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2 className="counter">{state}</h2>
      <div className="inline">
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          Increment
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseReducer1;
