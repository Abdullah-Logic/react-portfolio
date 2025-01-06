import { FaArrowDown } from "react-icons/fa";
import styles from "./header.module.css";
import CTA from "./CTA";
import { me } from "../../assets/image";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <h5>Hello I'm</h5>
        <h1>Muhammad Abdullah</h1>
        <h5 className={styles.textLight}>Frontend Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className={styles.me}>
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className={styles.scroll__down}>
          <FaArrowDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
