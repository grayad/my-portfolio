import React from "react";

export default function Resume() {
  return (
    <section class='d-flex justify-content-around align-items-center'>
      <div className="resumeDiv">
        <h2>Resume</h2>
        <a href="./assets/AlexusGray_Resume.png" className="fs-4 text" download>
          <button className="btn btn-light">Download Resume</button>
        </a>
      </div>
      <div className="resumeDiv">
        <h3>Coding Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>APIs</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
      </div>
    </section>
  );
}
