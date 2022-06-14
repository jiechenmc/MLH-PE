import React from "react";
import TimeLine from "./components/TimeLine";
import AboveTheFold from "./components/AboveTheFold";

function App() {
  return (
    <div className="snap-y snap-mandatory">
      <AboveTheFold />
      <TimeLine />
    </div>
  );
}

export default App;
