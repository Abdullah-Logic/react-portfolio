import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Studying</small>
            </article>

            <article className="about__card">
              <LuUsers2 className="about__icon" />
              <h5>Clients</h5>
              <small>None</small>
            </article>

            <article className="about__card">
              <GoProjectSymlink className="about__icon" />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>

          <p>
            I have over 2 years of dedicated study and hands-on project
            experience, creating numerous projects for learning and skill
            development. While I haven’t yet stepped into a formal job role, I
            am now fully prepared and eager to begin my professional journey.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
