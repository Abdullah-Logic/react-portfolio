import styles from "./about.module.css";
import { meAbout } from "../../assets/image";
import { aboutCards } from "../../const";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={styles.container}>
        <div className={styles.about__me}>
          <div className={styles.about__meImage}>
            <img src={meAbout} alt="Me" />
          </div>
        </div>

        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            {aboutCards.map(({ id, logo, heading, description }) => (
              <article key={id} className={styles.about__card}>
                <div className={styles.about__icon}>{logo}</div>
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

          <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
