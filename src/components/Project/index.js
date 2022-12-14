import React from "react";

function Project() {
  const projects = [
    {
      title: "DevNet",
      technologies: "MERN: MongoDB, Express, React, Node",
      imageUrl: "/assets/devnet.png",
      app: "https://devnet-production.up.railway.app/",
      github: "https://github.com/grayad/DevNet",
    },
    {
      title: "Timed-Quiz-Game",
      technologies: "HTML/CSS/JS",
      imageUrl: "/assets/Timed-Quiz.png",
      app: "https://grayad.github.io/timed-quiz-game/",
      github: "https://github.com/grayad/timed-quiz-game",
    },
    {
      title: "Weather-Retriever",
      technologies: "HTML/CSS/JS/Server-Side API",
      imageUrl: "/assets/Weather-Retriever.png",
      app: "https://grayad.github.io/weather-retriever/",
      github: "https://github.com/grayad/weather-retriever",
    },
    {
      title: "Habit-Rabbit",
      technologies: "Full Stack Application: HTML/CSS/JS/SQL/Node/Express",
      imageUrl: "/assets/Habit-Rabbit.png",
      app: "https://habit--rabbit.herokuapp.com/",
      github: "https://github.com/grayad/habit-rabbit",
    },
    {
      title: "Plan-It-Scheduler",
      technologies: "JS/Moment.js",
      imageUrl: "/assets/Plan-It-Scheduler.png",
      app: "https://grayad.github.io/plan-it-scheduler/",
      github: "https://github.com/grayad/plan-it-scheduler",
    },
    {
      title: "Investment-Portfolio-Dashboard",
      technologies: "HTML/CSS/JS/Server-Side APIs",
      imageUrl: "/assets/investment-portfolio-dashboard.png",
      app: "https://cpm-128.github.io/investment-portfolio-dashboard/",
      github: "https://github.com/grayad/timed-quiz-game",
    },
    {
      title: "Gray-Portfolio",
      technologies: "HTML/CSS",
      imageUrl: "/assets/Gray-Portfolio.png",
      app: "https://grayad.github.io/Gray-Portfolio/",
      github: "https://github.com/grayad/gray-portfolio",
    },
  ];
  return (
    <section>
      <p>Hover over or click on project images to see details.</p>
      <div className="row ">
        {projects.map((project) => (
          <div class="container col d-flex justify-content-center">
            <div class="card">
              <div class="slide slide1">
                <div class="content">
                  <img
                    src={process.env.PUBLIC_URL + project.imageUrl}
                    class="card-img"
                    alt="Application Screenshot"
                  ></img>
                </div>
              </div>

              <div class="slide slide2">
                <div class="content text-center">
                  <h3>{project.title}</h3>

                  <p>Built With: {project.technologies}</p>
                  <a href={project.app} class="btn border-secondary m-1 p-1">
                    Application
                  </a>
                  <a href={project.github} class="btn border-secondary m-1 p-1">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
