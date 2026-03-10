import React from "react";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>Todo App</h3>
        <p>React todo application with add and delete tasks.</p>
      </div>

      <div className="project-card">
        <h3>Weather App</h3>
        <p>Weather application using API.</p>
      </div>

      <div className="project-card">
        <h3>Ecommerce UI</h3>
        <p>React ecommerce UI with product listing.</p>
      </div>

    </section>
  );
}

export default Projects;