import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Rating from "./components/Rating";
import Problems from "./components/Problems";
function App() {
  const [username, setUserName] = useState("karanrg");
  const handleUserName = (user) => {
    setUserName(user);
  };
  return (
    <div className="App">
      <Search handleUserName={handleUserName} />
      <Rating name={username} />
      <Problems name={username} />
    </div>
  );
}

export default App;
