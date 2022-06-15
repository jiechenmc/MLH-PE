import React from "react";
import ProjectEntries from "./subcomponents/ProjectEntries";
import useFetch from "../hooks/useFetch";

interface ProjectElement {
  title: string;
  date: string;
  description: string;
  URL: string;
  status: string;
}

const Projects = () => {
  let projects: ProjectElement[] = useFetch("/api/projects")!;

  if (!projects) return null;

  return (
    <div className="snap-center">
      <h1 className="relative text-2xl text-gray-700 font-bold text-center mt-3 mb-3">
        My Projects
      </h1>
      {[...projects]?.reverse().map((project: ProjectElement) => (
        <ProjectEntries
          title={project?.title}
          date={project?.date}
          description={project?.description}
          URL={project?.URL}
          status={project?.status}
        />
      ))}
    </div>
  );
};

export default Projects;
