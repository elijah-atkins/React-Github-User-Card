import React, { useState } from "react";
import logo from '../img/github.svg'

const NavBar = ({ changeUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = () => {
    changeUser(searchTerm);
  };

  return (
    <div className="navbar">
    <div className="logo-full">
      <img className="logo" src={logo}></img>
      <h1 className="logo-txt">GitHub</h1>
      </div>
      <div className="searchbar">
      <label htmlFor="name">Search:</label>
      <input
        id="name"
        type="text"
        name="user"
        placeholder="Github User"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default NavBar;
