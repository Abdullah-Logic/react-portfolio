import styles from "./experience.module.css";
import { MdVerified } from "react-icons/md";
import { frontEnd, backEnd } from "../../const";

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className={styles.container}>
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experience__content}>
            {frontEnd.map(({ id, language, status }) => (
              <article className={styles.experience__details} key={id}>
                <MdVerified className={styles.experience__detailsIcon} />
                <div>
                  <h4>{language}</h4>
                  <small className={styles.textLight}>{status}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className={styles.experience__backend}>
          <h3>Backend Development</h3>
          {backEnd.map(({ id, language, status }) => (
            <article className={styles.experience__details} key={id}>
              <MdVerified className={styles.experience__detailsIcon} />
              <div>
                <h4>{language}</h4>
                <small className={styles.textLight}>{status}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
