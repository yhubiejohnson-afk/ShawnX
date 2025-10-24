import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;