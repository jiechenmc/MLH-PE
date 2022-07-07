import { ReactComponent as LinkedinFooterIcon } from "../assets/LinkedinFooterIcon.svg";
import { ReactComponent as GithubFooterIcon } from "../assets/GithubFooterIcon.svg";

const Footer = () => {
  return (
    <footer className="footer footer-center items-center p-4 bg-base-300 text-base">
      <div className="flex flex-row justify-center gap-3">
        <a href="https://github.com/jiechenmc">
          <GithubFooterIcon />
        </a>
        <a href="https://www.linkedin.com/in/jiechen-sbu/">
          <LinkedinFooterIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
