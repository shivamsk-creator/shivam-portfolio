import React from "react";
import toDoImg from "./img/to-do.jpeg";
import gudworkImg from "./img/gudwork.jpeg";
import sixrerImg from "./img/sixrer.jpeg";
import postmortemshalaImg from "./img/postmortemshala.png";

let Projects = () => {
  const projects = [
    {
      title: "Postmortemshala - Learning Platform",
      desc: "Postmortemshala is an online learning platform where students can learn and practice their skills. This website is developed in React and Tailwind CSS.",
      img: postmortemshalaImg,
      link: "https://postmortemshala.co.in",
    },
    {
      title: "GudWork - Business Website",
      desc: "Single page website Developed in Bootstrap. This websites is for company owners who want to build their online presence.",
      img: gudworkImg,
      link: "https://shivamsk-creator.github.io/gudwork/",
    },
    {
      title: "Sixrer - Freelancing Website",
      desc: "Single page website Developed in Tailwind CSS. The UI is of freelancing site where freelancers get work and Client post their requirements.",
      img: sixrerImg,
      link: "https://shivamsk-creator.github.io/sixrer/",
    },
    {
      title: "To Do List App",
      desc: "Developed this To do app with React And Bootstrap. In this project users can Add tasks, update them. If they have done the task then they can mark it done and it also has a delete feature!",
      img: toDoImg,
      link: "https://shivamsk-creator.github.io/to-do/",
    },
  ];

  return (
    <section className="py-10">
      <div className="heading text-5xl w-1/2 ml-5 sm:ml-0 text-center py-5">
        Projects
      </div>

      {projects.map((project) => {
        return (
          <div className="project flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center md:justify-around lg:justify-center my-20 px-5">
            <div className="project-left text-center sm:text-start md:text-start lg:text-start">
              <h3 className="text-2xl">{project?.title}</h3>
              <p className="mx-auto max-w-md mt-5">{project?.desc}</p>
            </div>
            <div className="project-right mx-auto sm:mx-0 md:mx-0 lg:mx-20 mt-10 sm:mt-0 md:mt-0 lg:mt-0">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  className="w-80 h-64 lg:w-96 lg:h-72 animate-pulse"
                  src={project.img}
                  alt={project.title}
                />
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
