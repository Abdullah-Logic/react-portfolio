import styles from "./footer.module.css";
import { footerLink, footerSocials } from "../../const";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <a href="#header" className={styles.footer__logo}>
        Abdullah
      </a>

      <ul className={styles.permalinks}>
        {footerLink.map(({ id, section }) => {
          const hrefValue = section.toLowerCase();

          return (
            <li key={id}>
              <a href={`#${hrefValue}`}>{section}</a>
            </li>
          );
        })}
      </ul>

      <div className={styles.footer__socials}>
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
