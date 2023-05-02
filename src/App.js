import React from "react";
// import "./App.css";
import "./GitHubApp.css"; // Enable only for GitHubProfileFetch
import UseEffect1 from "./components/useEffect/UseEffect1";
import UseEffect2 from "./components/useEffect/UseEffect2";
import GitHubProfileFetch from "./components/useEffect/GitHubProfile/GitHubProfileFetch";

const App = () => {
  return (
    <div>
      <GitHubProfileFetch />
    </div>
  );
};

export default App;
