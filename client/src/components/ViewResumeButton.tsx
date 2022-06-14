import useFetch from "../hooks/useFetch";

interface Link {
  url: string;
}

const ViewResumeButton = () => {
  const RESUMELINK: Link = useFetch("/api/resume")!;

  return (
    <a
      className="inline-block px-7 py-3 mb-1 border-2 border-gray-500 md:text-gray-500 sm:text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      href={RESUMELINK?.url}
      target="_blank"
      rel="noreferrer"
      role="button"
    >
      View Resume
    </a>
  );
};

export default ViewResumeButton;
