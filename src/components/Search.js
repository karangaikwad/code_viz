import React, { useState } from "react";

const Search = (props) => {
  const [name, setName] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    props.handleUserName(name);
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="USERNAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <input type="submit">SUBMIT</input> */}
      </form>
    </div>
  );
};
export default Search;
