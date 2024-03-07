import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from './FootStats Logo Design-01.png';

function Navbar() {
  return (
    // Container
    <div className="nav-background">
      <img src={logo} className="logo" alt="logo" />

      <ul className="nav-links">
        <li className="nav-link"> 
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-link"> 
          <Link to="/Chat" className="nav-link">Chat</Link>
        </li> 
      </ul>
    </div>
  );
}

export default Navbar;

