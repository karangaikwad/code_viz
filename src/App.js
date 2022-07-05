import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Rating from "./components/Rating";
import Problems from "./components/Problems";
import Levels from "./components/Levels";
import Tags from "./components/Tags";
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
      <Levels name={username} />
      <Tags />
    </div>
  );
}

export default App;
