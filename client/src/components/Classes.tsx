import ClassEntries from "./subcomponents/ClassEntries";
import JOURNIES from "../data/CLASSES";
import { v4 as uuidv4 } from "uuid";
import SBULogo from "../assets/sbu.webp";

interface JourneyElement {
  date: string;
  title: string;
  events: string[];
}

const Classes = () => {
  return (
    <div id="education">
      <h1 className="relative text-2xl text-base-content font-bold text-center my-3">
        Education
      </h1>

      <div className="flex justify-center mb-6 gap-2">
        <img className="" src={SBULogo} width="96px" />
        <div className="whitespace-nowrap ">
          <p className="font-bold w-36 ">Stony Brook University</p>
          <p className="font-bold w-36 ">B.S. — Computer Science</p>
          <small className="font-bold ">Expected Graduation: May 2025</small>
          <br />
          <small className="font-bold">GPA: 3.49</small>
        </div>
      </div>

      <div className="flex justify-center ml-3">
        <ol className="border-l border-gray-300">
          {[...JOURNIES]?.reverse().map((journey: JourneyElement) => (
            <ClassEntries
              key={uuidv4()}
              date={journey?.date}
              title={journey?.title}
              events={journey?.events}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Classes;
