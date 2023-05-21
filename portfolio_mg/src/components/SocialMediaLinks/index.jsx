import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import "./SocialMediaLinks.scss";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/matheus-ghignatti-758439209/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        href="https://github.com/MG-108"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
