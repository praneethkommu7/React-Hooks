// RegistrationForm

import React, { useState } from "react";

const RegistrationForm = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegistration({ username: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <h4 style={{ fontSize: "30px", fontFamily: "fantasy" }}>
        Registration Form
      </h4>

      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            name="username"
            value={userRegistration.username}
            onChange={handleInput}
            id="username"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={userRegistration.email}
            onChange={handleInput}
            id="email"
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={userRegistration.phone}
            onChange={handleInput}
            id="phone"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={userRegistration.password}
            onChange={handleInput}
            id="password"
          />
        </div>

        <button className="submitButton" onChange={handleInput} type="submit">
          Submit
        </button>
      </form>
      <div>
        {records.map((val) => {
          const { id, username, email, phone, password } = val;
          return (
            <div className="showDetails" key={id}>
              <h3 style={{ fontStyle: "italic" }}>{username}</h3>
              <h6>{email}</h6>
              <h6>{phone}</h6>
              <h6>{password}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RegistrationForm;
