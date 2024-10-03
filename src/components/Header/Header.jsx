import React from "react";
import Navigation from "../Navigation";
import "./Header.css";

function Header() {
  return (
    <header
      className="header-container header-content"
      style={{ display: "flex" }}
    >
        <h1 className="name">SOUAD HASSEN</h1>
        <Navigation />
 
    </header>
  );
}

export default Header;
