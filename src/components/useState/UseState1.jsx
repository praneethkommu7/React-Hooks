// Toggle

import { useState } from "react";

const UseState1 = () => {
  const [name, setName] = useState("Praneeth");

  const changeName = () => {
    name === "Praneeth" ? setName("Indu💕") : setName("Praneeth");
  };

  return (
    <>
      <h2>{name}</h2>
      <button className="btn" onClick={changeName}>
        Lover
      </button>
    </>
  );
};

export default UseState1;
