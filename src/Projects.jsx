import React from "react";
import toDoImg from "./img/to-do.jpeg";
import gudworkImg from "./img/gudwork.jpeg";
import sixrerImg from "./img/sixrer.jpeg";
import happyNewYearImg from "./img/happyNewYear.jpeg";

let Projects = () => {
  return (
    <section className="py-10">
      <div className="heading text-5xl w-1/2 ml-5 sm:ml-0 text-center py-5">
        Projects
      </div>
      {/* Gud Work Website */}
      <div className="project flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center md:justify-around lg:justify-center my-20 px-5">
        <div className="project-left text-center sm:text-start md:text-start lg:text-start">
          <h3 className="text-2xl">GudWork - Business Website</h3>
          <p className="mx-auto max-w-md mt-5">
            Single page website Developed in Bootstrap. This websites is for
            company owners who want to build their online presence.
          </p>
        </div>
        <div className="project-right mx-auto sm:mx-0 md:mx-0 lg:mx-20 mt-10 sm:mt-0 md:mt-0 lg:mt-0">
          <a href="https://shivamsk-creator.github.io/gudwork/" target="_blank">
            <img
              className="w-80 h-64 lg:w-96 lg:h-72 animate-pulse"
              src={gudworkImg}
              alt=""
            />
          </a>
        </div>
      </div>
      {/* Sixrer Website */}
      <div className="project flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center md:justify-around lg:justify-center my-20 px-5">
        <div className="project-left text-center sm:text-start md:text-start lg:text-start">
          <h3 className="text-2xl">Sixrer - Freelancing Website</h3>
          <p className="mx-auto max-w-md mt-5">
            Single page website Developed in Tailwind CSS. The UI is of
            freelancing site where freelancers get work and Client post their
            requirements.
          </p>
        </div>
        <div className="project-right mx-auto sm:mx-0 md:mx-0 lg:mx-20 mt-10 sm:mt-0 md:mt-0 lg:mt-0">
          <a href="https://shivamsk-creator.github.io/sixrer/" target="_blank">
            <img
              className="w-80 h-64 lg:w-96 lg:h-72 animate-pulse"
              src={sixrerImg}
              alt=""
            />
          </a>
        </div>
      </div>
      {/* To Do App */}
      <div className="project flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center md:justify-around lg:justify-center my-20 px-5">
        <div className="project-left text-center sm:text-start md:text-start lg:text-start">
          <h3 className="text-2xl">To Do List App</h3>
          <p className="mx-auto max-w-md mt-5">
            Developed this To do app with React And Bootstrap. In this project
            users can Add tasks, update them. If they have done the task then
            they can mark it done and it also has a delete feature!
          </p>
        </div>
        <div className="project-right mx-auto sm:mx-0 md:mx-0 lg:mx-20 mt-10 sm:mt-0 md:mt-0 lg:mt-0">
          <a href="https://shivamsk-creator.github.io/to-do/" target="_blank">
            <img
              className="w-80 h-64 lg:w-96 lg:h-72 animate-pulse"
              src={toDoImg}
              alt=""
            />
          </a>
        </div>
      </div>
      {/* Happy New Year Card  */}
      <div className="project flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center md:justify-around lg:justify-center my-20 px-5">
        <div className="project-left text-center sm:text-start md:text-start lg:text-start">
          <h3 className="text-2xl">Happy New Year Card</h3>
          <p className="mx-auto max-w-md mt-5">
            Happy New Year Dynamic Card. You Enter your Name and you will see aa
            Happy New Year Card with wishes and your name.
          </p>
        </div>
        <div className="project-right mx-auto sm:mx-0 md:mx-0 lg:mx-20 mt-10 sm:mt-0 md:mt-0 lg:mt-0">
          <a
            href="https://shivamsk-creator.github.io/happy-new-year/"
            target="_blank"
          >
            <img
              className="w-80 h-64 lg:w-96 lg:h-72 animate-pulse"
              src={happyNewYearImg}
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
