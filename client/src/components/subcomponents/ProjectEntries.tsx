import React from "react";
import { ReactComponent as GitHubLogo } from "../../assets/GithubLogo.svg";

interface ProjectEntriesProps {
  title: string;
  date: string;
  description: string;
  URL: string;
  status: string;
}

const ProjectEntries = ({
  title,
  date,
  description,
  URL,
  status,
}: ProjectEntriesProps) => {
  const statusStyles: { [key: string]: string } = {
    complete: "border-emerald-400",
    incomplete: "border-amber-200",
  };

  const handleOnClick = () => {
    window.open(URL, "_blank");
  };

  return (
    <div className="flex justify-center mb-2">
      <div
        className={`block p-6 rounded-lg shadow-lg bg-white max-w-sm ${
          statusStyles[status] ?? "border-red-500"
        } border-2`}
      >
        <h5 className="text-gray-800 text-xl leading-tight font-medium mb-0 border-b-2">
          {title}
        </h5>
        <p className="appearance-none mb-2 text-gray-500 text-sm">{date}</p>
        <p className="text-gray-500 text-base mb-4 animation-element">
          {description}
        </p>
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-[#333] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#4078c0] hover:shadow-lg focus:bg-[#4078c0] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={handleOnClick}
        >
          <GitHubLogo className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProjectEntries;
