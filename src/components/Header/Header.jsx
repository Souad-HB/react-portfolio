import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header-container header-content">
      <h1 style={{ fontSize: "35px" }}>SOUAD HASSEN - BOUZOUITA</h1>
      <Navigation />
    </header>
  );
}

export default Header;
