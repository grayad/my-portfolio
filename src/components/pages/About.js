import React from "react";

export default function About() {
  return (
    <div class="text-center">
      <h2>About Me</h2>
      <div
        id="aboutDiv"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/NewHeadshot.jpg"}
          alt="Alexus Gray"
          class="img-thumbnail my-2"
          width={150}
          height={120}
        ></img>
        <p class="p-1">
          Hi everyone! My name is Alexus Gray and I am from Sanford, North
          Carolina. In May 2020, I graduated from the University of North
          Carolina at Chapel Hill with a Bachelor's in Business Administration
          and Communication Studies, as well as a Spanish minor. Since then, I
          have completed the Associate Project Management Certification (CAPM)
          and have been working as a Project Analyst at a global IT company.
          <br></br>
          <br></br>
          Recently, I discovered my new passion for coding and, in September of 2022, I completed the UNC
          Coding Boot Camp to become a Certified Full Stack Developer. This
          website hosts some of my projects. Take a look around!
        </p>
      </div>
    </div>
  );
}
