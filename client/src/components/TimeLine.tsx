import React from "react";
import useFetch from "../hooks/useFetch";
import TimeLineEntries from "./subcomponents/TimeLineEntries";

interface JourneyElement {
  date: string;
  title: string;
  events: string[];
}
const TimeLine = () => {
  let journies: JourneyElement[] = useFetch("/api/journey")!;

  if (!journies) return null;

  return (
    <div className="snap-center">
      <h1 className="relative text-2xl text-gray-700 font-bold text-center mt-3 mb-3">
        My Journey
      </h1>
      <div className="flex justify-center ml-3">
        <ol className="border-l border-gray-300">
          {[...journies]?.reverse().map((journey: JourneyElement) => (
            <TimeLineEntries
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

export default TimeLine;
