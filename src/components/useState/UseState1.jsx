// Toggle

import { useState } from "react";

const UseState1 = () => {
  const [name, setName] = useState("Praneeth");

  const changeName = () => {
    name === "Praneeth" ? setName("Indu💕") : setName("Praneeth");
  };

  return (
    <div>
      <h2>{name}</h2>
      <button className="btn" onClick={changeName}>
        Toggle
      </button>
    </div>
  );
};

export default UseState1;
