import "./footer.css";
import { footerLink, footerSocials } from "../../const";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#header" className="footer__logo">
        Abdullah
      </a>

      <ul className="permalinks">
        {footerLink.map(({ id, section }) => {
          const hrefValue = section.toLowerCase();

          return (
            <li key={id}>
              <a href={`#${hrefValue}`}>{section}</a>
            </li>
          );
        })}
      </ul>

      <div className="footer__socials">
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
