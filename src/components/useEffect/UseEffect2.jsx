import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const widthSize = () => {
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    // console.log(`add Event`);
    window.addEventListener("resize", widthSize);
    return () => {
      //   console.log(`remove Event`);
      window.removeEventListener("resize", widthSize); // CleanUp Function
    };
  }, [widthCount]);

  return (
    <div>
      <p>The Actual size of Window is:</p>
      <h2>{widthCount}</h2>
    </div>
  );
};

export default UseEffect2;
