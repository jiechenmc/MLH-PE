import ProjectEntries from "./subcomponents/ProjectEntries";
import PROJECTS from "../data/PROJECTS";
import { v4 as uuidv4 } from "uuid";

interface ProjectElement {
  title: string;
  date: string;
  description: string;
  URL: string;
  status: string;
  stack: string;
}

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="relative text-2xl light:text-gray-700 dark:text-base-content font-bold text-center mt-3 mb-3">
        Featured Projects
      </h1>
      <div className="sm:flex-col md:grid md:grid-cols-3 justify-between">
        {[...PROJECTS]?.reverse().map((project: ProjectElement) => (
          <ProjectEntries
            key={uuidv4()}
            title={project?.title}
            date={project?.date}
            description={project?.description}
            URL={project?.URL}
            status={project?.status}
            stack={project?.stack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
