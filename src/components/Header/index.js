import React from "react";
import Nav from "../Navigation";

function Header() {
  return (
    <header className="d-flex align-items-center justify-content-between p-2">
      <h1 aref="/">Alexus Gray</h1>
      <Nav></Nav>
    </header>
  );
}

export default Header;
