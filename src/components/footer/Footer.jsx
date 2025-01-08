import styles from "./footer.module.css";
import { footerLink, footerSocials } from "../../const";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#header" className={styles.footerLogo}>
        Abdullah
      </a>

      <ul className={styles.permaLinks}>
        {footerLink.map(({ id, section }) => {
          const hrefValue = section.toLowerCase();

          return (
            <li key={id}>
              <a href={`#${hrefValue}`}>{section}</a>
            </li>
          );
        })}
      </ul>

      <div className={styles.footerSocials}>
        {footerSocials.map(({ id, link, icon }) => (
          <a href={link} key={id}>
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
