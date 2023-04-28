import React from "react";
// icons
import { AiOutlineHtml5 } from "react-icons/ai";
import { ImGit } from "react-icons/im";
import { TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiSequelize, SiMongodb } from "react-icons/si";
import { GrMysql, GrReactjs } from "react-icons/gr";

export default function Resume() {
  return (
    <section class="resumeDiv d-flex flex-column justify-content-center text-center">
      <div class="pb-5">
        <h2>Resume</h2>
        <a href="./assets/AlexusGray_Resume.pdf" className="fs-4 text" download>
          <button className="btn bg-light">Download Resume</button>
        </a>
      </div>
      <div>
        <h3 class="text-center">Coding Proficiencies</h3>
        <ul class="row d-flex align-items-center justify-content-center">
          <li class="col-5 icon">
            <AiOutlineHtml5 size={40} color="#87BFC2"></AiOutlineHtml5>HTML
          </li>
          <li class="col-5">
            <TbBrandCss3 size={40} color="#87BFC2"></TbBrandCss3>CSS
          </li>
          <li class="col-5">
            <ImGit size={40} color="#87BFC2"></ImGit> Git
          </li>
          <li class="col-5">
            <TbBrandJavascript size={40} color="#87BFC2"></TbBrandJavascript>
            JavaScript
          </li>
          <li class="col-5">
            <IoLogoNodejs size={40} color="#87BFC2"></IoLogoNodejs>Node.js
          </li>
          <li class="col-5">
            <SiExpress size={40} color="#87BFC2"></SiExpress> Express.js
          </li>
          <li class="col-5">
            <GrMysql size={40} color="#87BFC2"></GrMysql>MySQL
          </li>
          <li class="col-5">
            <SiSequelize size={40} color="#87BFC2"></SiSequelize> Sequelize
          </li>
          <li class="col-5">
            <SiMongodb size={40} color="#87BFC2"></SiMongodb>MongoDB
          </li>
          <li class="col-5">
            <GrReactjs size={40} color="#87BFC2"></GrReactjs> React
          </li>
        </ul>
      </div>
    </section>
  );
}
