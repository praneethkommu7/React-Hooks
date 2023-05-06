import React, { useRef, useState } from "react";

const UnControlledForm = () => {
  // it is like useState only and its preserve the value. No rerender
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(luckyName.current.value);
    const name = luckyName.current.value;
    name === "" ? alert(`Please Fill Data`) : setShow(true);
  };

  return (
    <>
      <h4 style={{ fontSize: "30px", fontFamily: "fantasy" }}>Lucky Name</h4>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyName">Enter your Lucky Name</label>
          <input type="text" name="luckyName" id="luckyName" ref={luckyName} />
        </div>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
      <h2>{show ? `${luckyName.current.value}` : ""}</h2>
    </>
  );
};

export default UnControlledForm;
