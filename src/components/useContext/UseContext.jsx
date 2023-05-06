import React, { createContext } from "react";
import CompA from "./CompA";

const Context = createContext();

const UseContext = () => {
  return (
    <Context.Provider value={"Praneeth"}>
      <CompA />
    </Context.Provider>
  );
};

export default UseContext;
export { Context }; // Context is a component

// Context
// Provider
// Consumer -> too Lengthy so instead we use "useContext"

// context API / useContext
