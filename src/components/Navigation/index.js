import React from "react";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="navList list-unstyled d-flex justify-content-between flex-row">
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
