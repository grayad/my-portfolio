import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className="d-flex align-items-center justify-content-center p-1">
      <a href="https://github.com/grayad/" class='icon'>
        <FaGithub size={40} color='white' class='faIcon'></FaGithub>
      </a>
      <a href="https://www.linkedin.com/in/alexus-lexi-gray-capm-151434179/" class='icon'>
        <FaLinkedinIn size={40} color='white'></FaLinkedinIn>
      </a>
      <a href="mailto: alexus_gray@alumni.unc.edu" class='icon'>
        <AiOutlineMail size={40} color='white'></AiOutlineMail>
      </a>
    </footer>
  );
}

export default Footer;
