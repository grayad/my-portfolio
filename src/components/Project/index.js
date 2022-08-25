import React from "react";

function Project() {
  const projects = [
    {
      title: "Timed-Quiz-Game",
      technologies: "HTML/CSS/JS",
      imageUrl: '/assets/Timed-Quiz.png',
      app: "https://grayad.github.io/timed-quiz-game/",
      github: "https://github.com/grayad/timed-quiz-game",
    },
    {
      title: "Weather-Retriever",
      technologies: "HTML/CSS/JS/Server-Side API",
      app: "https://grayad.github.io/weather-retriever/",
      github: "https://github.com/grayad/weather-retriever",
    },
    {
      title: "Habit-Rabbit",
      technologies: "Full Stack Application: HTML/CSS/JS/SQL/Node/Express",
      app: "https://habit--rabbit.herokuapp.com/",
      github: "https://github.com/grayad/habit-rabbit",
    },
  ];
  return (
    <section>
      <div className="d-flex flex-row flex-wrap justify-content-center p-3">
        {projects.map((project) => (
          <div className="card m-2" key={project.title}>
            <img
              src={project.imageUrl}
              class="card-img"
              alt="Application Screenshot"
            ></img>
            <div class="card-img-overlay">
              <h5 class="card-title">{project.title}</h5>
              <p class="card-text">
                This application was built using the following:{" "}
                {project.technologies}
              </p>
              {/* <a href={project.app} class="btn btn-primary">
                Go to Application
              </a>
              <a href={project.github} class="btn btn-primary">
                Go to Github
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
