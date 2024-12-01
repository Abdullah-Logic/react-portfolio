import { navLink } from "../../const";
import "./nav.css";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(
    `#${navLink[0]?.section.toLowerCase()}`
  );
  return (
    <nav>
      {navLink.map(({ id, icon, section }) => {
        const hrefValue = section.toLowerCase();
        return (
          <a
            key={id}
            href={`#${hrefValue}`}
            onClick={() => setActiveNav(`#${hrefValue}`)}
            className={activeNav === `#${hrefValue}` ? "active" : ""}
          >
            {icon}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
