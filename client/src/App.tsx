import React from "react";
import TimeLine from "./components/TimeLine";
import AboveTheFold from "./components/AboveTheFold";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="snap-y snap-mandatory">
      <AboveTheFold />
      <div className="flex sm:flex-col md:flex-row justify-evenly">
        <TimeLine />
        <Projects />
      </div>
    </div>
  );
}

export default App;
