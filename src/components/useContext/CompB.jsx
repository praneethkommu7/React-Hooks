import React, { useContext } from "react";
import { Context } from "./UseContext";

const CompB = ({ name }) => {
  const myName = useContext(Context);
  return (
    <div>
      <h1>Hello CompB {myName}</h1>
    </div>
  );
};

export default CompB;
