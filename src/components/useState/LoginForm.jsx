import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userDetails, setUserDetails] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newUserDetail = {
        id: new Date().getTime(),
        email,
        password,
      };
      setUserDetails([...userDetails, newUserDetail]);

      setEmail("");
      setPassword("");
    } else {
      alert(`Please Fill Data`);
    }
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="submitButton" type="submit">
          Login
        </button>
      </form>
      <div>
        {userDetails.map((val) => {
          const { id, email, password } = val;
          return (
            <div className="showDetails" key={id}>
              <h6>Email: {email}</h6>
              <h6>Password: {password}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LoginForm;
