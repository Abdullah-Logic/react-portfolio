import "./about.css";
// import { meAbout } from "../../assets/image";
import { aboutCards } from "../../const";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={meAbout} alt="Me" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            {aboutCards.map(({ id, logo, heading, description }) => (
              <article key={id} className="about__card">
                <div className="about__icon">{logo}</div>
                <h5>{heading}</h5>
                <small>{description}</small>
              </article>
            ))}
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
