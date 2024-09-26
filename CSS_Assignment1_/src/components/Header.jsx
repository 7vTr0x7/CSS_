import React from "react";
import "./header.style.css";

const Header = () => {
  return (
    <header className="bg">
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-items">HOME</li>
          <li className="nav-items">TAG</li>
          <li className="nav-items">AUTHOR</li>
          <li className="nav-items">HELP</li>
        </ul>
        <div></div>
      </nav>
    </header>
  );
};

export default Header;
