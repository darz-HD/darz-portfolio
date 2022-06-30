import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    id: 1,
    title: "Property Finder",
    image: "/../public/assets/projects/property.jpg",
    url: "/property",
    techs: ["ReactJS", "HTML"],
  },
  {
    id: 2,
    title: "Crypto App",
    image: "/../public/assets/projects/crypto.jpg",
    url: "/crypto",
    techs: ["ReactJS", "HTML"],
  },
  {
    id: 3,
    title: "Netflix App",
    image: "/../public/assets/projects/netflix.jpg",
    url: "/netflix",
    techs: ["ReactJS", "HTML"],
  },
  {
    id: 4,
    title: "Twitch UI",
    image: "/../public/assets/projects/twitch.jpg",
    url: "/twitch",
    techs: ["ReactJS", "HTML"],
  },
];

const Projects = () => {
  const projectList = projects.map((project) => (
    <ProjectItem
      key={project.id}
      title={project.title}
      backgroundImg={project.image}
      projectUrl={project.url}
      techs={project.techs}
    />
  ));
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">{projectList}</div>
      </div>
    </div>
  );
};

export default Projects;
