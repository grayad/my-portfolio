import React from "react";

function Nav() {
  const pageNames = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <nav>
      <ul className="nav list-unstyled">
        {pageNames.map((name) => {
          return (
            <li className="nav-item">
              <a className="nav-link" href={`#${name.toLowerCase()}`}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
