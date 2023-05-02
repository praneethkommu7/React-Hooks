import React, { useState } from "react";

const UseState3 = () => {
  const bioData = [
    {
      id: 0,
      name: "Praneeth",
      age: 22,
    },
    {
      id: 1,
      name: "Indu",
      age: 21,
    },
    {
      id: 2,
      name: "Srinivas",
      age: 51,
    },
    {
      id: 3,
      name: "Pranathi",
      age: 16,
    },
  ];

  const [users, setUsers] = useState(bioData);

  const clearAll = () => {
    setUsers([]);
  };

  const removeEle = (id) => {
    const updatedUsers = users.filter((val) => {
      return val.id !== id;
    });
    setUsers(updatedUsers);
  };

  return (
    <div>
      {users.map((val) => {
        return (
          <div className="h1style" key={val.id}>
            <p>
              Name: {val.name} & Age: {val.age}
            </p>
            <button className="remove" onClick={() => removeEle(val.id)}>
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default UseState3;
