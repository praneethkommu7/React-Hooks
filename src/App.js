import React from "react";
import "./App.css"; // Disabel only for GitHubProfileFetch
// import "./GitHubApp.css"; // Enable only for GitHubProfileFetch
import UseEffect1 from "./components/useEffect/UseEffect1";
import UseEffect2 from "./components/useEffect/UseEffect2";
import GitHubProfileFetch from "./components/useEffect/GitHubProfile/GitHubProfileFetch";
import UseState1 from "./components/useState/UseState1";
import UseState2 from "./components/useState/UseState2";
import UseState3 from "./components/useState/UseState3";
import LoginForm from "./components/useState/LoginForm";
import RegistrationForm from "./components/useState/RegistrationForm";

const App = () => {
  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default App;
