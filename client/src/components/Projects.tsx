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
      <h1 className=" text-2xl light:text-gray-700 dark:text-base-content font-bold text-center mt-3 mb-3">
        Featured Projects
      </h1>
      <div className="flex justify-center mb-6">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jiechenmc&layout=compact&theme=dark&hide_border=true" />
      </div>
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
