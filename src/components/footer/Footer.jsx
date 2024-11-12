import "./footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#header" className="footer__logo">
        Abdullah
      </a>

      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#sbout">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100075356611389">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/a_b_d_u_l_l_a_h_._k_h_a_n/">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
