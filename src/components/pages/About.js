import React from "react";

export default function About() {
  return (
    <div>
      <h2>About Me</h2>
      <div id="resumeDiv" class="d-flex flex-row align-items-center flex-wrap">
        <img
          src="./assets/imgOfMe.jpg"
          alt="Alexus Gray"
          class="img-thumbnail my-2"
          width={110}
          height={100}
        ></img>
        <p>
          Hi everyone! My name is Alexus Gray and I am from Sanford, North
          Carolina. In May 2020, I graduated from the University of North
          Carolina at Chapel Hill with a Bachelor's in Business Administration
          and Communication Studies, as well as a Spanish minor. Since then, I
          have completed the Associate Project Management Certification (CAPM)
          and have been working as a Project Analyst in Tech.
          <br></br>
          <br></br>
          Now, I am embarking on a new journey to complete the UNC Coding
          Bootcamp and become a Certified Full Stack Developer. This website
          will host my portfolio of projects throughout this course and going
          forward. Take a look around!
        </p>
      </div>
    </div>
  );
}
