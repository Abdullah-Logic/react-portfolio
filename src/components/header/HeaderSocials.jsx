import { Socials } from "../../const";
import styles from "./header.module.css";

const HeaderSocials = () => {
  return (
    <div className={styles.headerSocials}>
      {Socials.map(({ id, icon, link }) => (
        <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
