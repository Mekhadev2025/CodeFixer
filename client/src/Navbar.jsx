import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"; // Create a corresponding CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-title">CodeQuest</div>
      <ul className="navlist">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/code">Code</Link>
        </li>
        <Link to="/code">
            <button className="btn">Get Started</button>
          </Link>

      </ul>
    </nav>
  );
}

export default Navbar;
