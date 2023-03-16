import React from "react";
import toDoImg from "./img/to-do.jpeg";

let Projects = () => {
  return (
    <section className="py-10">
      <div className="heading text-5xl w-1/2 text-center py-5">Projects</div>
      <div className="project flex space-x-10 justify-center my-10">
        <div className="project-left">
          <h3 className="text-2xl">To Do List App</h3>
          <p className="max-w-md mt-5">
            Developed this To do app with React And Bootstrap. In this project
            users can Add tasks, update them. If they have done the task then
            they can mark it done and it also has a delete feature!
          </p>
        </div>
        <div className="project-right">
          <a href="https://shivamsk-creator.github.io/to-do/" target="_blank">
            <img className="w-96 h-72" src={toDoImg} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
