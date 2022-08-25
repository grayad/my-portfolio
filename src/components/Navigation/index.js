import React from "react";

function Nav() {
  return (
    <nav>
      <ul className="nav list-unstyled">
        <li class="nav-item">
          <a class="nav-link" href="#about">
            About me
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">
            Contact
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
