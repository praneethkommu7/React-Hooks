import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import GitHubUsers from "./GitHubUsers";

const GitHubProfileFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      setLoading(false);
      // console.log(response);
      // const data = await response.json();
      // console.log(data);
      setUsers(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <GitHubUsers users={users} />
    </>
  );
};

export default GitHubProfileFetch;
