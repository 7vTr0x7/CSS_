import React from "react";
import "./header.style.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

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
        <div className="nav-right">
          <div className="icons">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaMoon />
            </span>
          </div>

          <button className="sub-btn">Subscribe</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
