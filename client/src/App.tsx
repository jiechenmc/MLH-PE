import React, { useEffect } from "react";
import TimeLine from "./components/TimeLine";
import AboveTheFold from "./components/AboveTheFold";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "./script.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
