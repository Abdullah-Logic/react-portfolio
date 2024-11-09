import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/muhammad-abdullah-a38b41306/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin />
      </a>

      <a
        href="https://github.com/Abdullah-dev1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://dribbble.com/Abdullah-dev08"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
