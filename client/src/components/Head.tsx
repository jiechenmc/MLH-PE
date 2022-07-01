import ViewResumeButton from "./ViewResumeButton";
import worry from "../assets/worry_study.webp";
import NavBar from "./NavBar";

const Head = () => {
  return (
    <div id="home">
      <NavBar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="avatar">
              <div className="w-24">
                <img src={worry} />
              </div>
            </div>
            <img src="https://readme-typing-svg.herokuapp.com?duration=3500&color=67738A&center=true&vCenter=true&lines=Hi+I+am+Jie+Chen!;My+interests+are+...;Data+Engineering+%F0%9F%93%8A!;Production+Engineering+%F0%9F%92%BF!;and+Software+Engineering+%F0%9F%92%BB!+" />
            <p className="pb-6">SBU '25 — B.S. Computer Science</p>
            <ViewResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
