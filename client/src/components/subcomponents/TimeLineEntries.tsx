import React from "react";

interface TimeLineEntriesProps {
  date: string;
  title: string;
  events: string[];
}

const TimeLineEntries = ({ date, title, events }: TimeLineEntriesProps) => {
  return (
    <li>
      <div className="flex flex-start items-center">
        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
      <div className="mt-0.5 ml-4 mb-6 whitespace-pre-line">
        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">{title}</h4>
        <p className="text-gray-500 mb-3 animation-element">{events}</p>
      </div>
    </li>
  );
};

export default TimeLineEntries;
