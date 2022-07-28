import Classes from "./components/Education";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Projects from "./components/Projects";
import { Work } from "./components/Work";

function App() {
  return (
    <div>
      <Head />
      <div className="justify-evenly sm:flex-col md:flex-row">
        <Work />
        <Classes />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
