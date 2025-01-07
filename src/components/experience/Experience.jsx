import styles from "./experience.module.css";
import { MdVerified } from "react-icons/md";
import { frontEnd, backEnd } from "../../const";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className={`container ${styles.experienceContainer} `}>
        <div className={styles.experienceFrontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experienceContent}>
            {frontEnd.map(({ id, language, status }) => (
              <article className={styles.experienceDetails} key={id}>
                <MdVerified className={styles.experienceDetailsIcon} />
                <div>
                  <h4>{language}</h4>
                  <small className="text-light">{status}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className={styles.experienceBackend}>
          <h3>Backend Development</h3>
          {backEnd.map(({ id, language, status }) => (
            <article className={styles.experienceDetails} key={id}>
              <MdVerified className={styles.experienceDetailsIcon} />
              <div>
                <h4>{language}</h4>
                <small className="text-light">{status}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
