import { design, webDev, contentCreation } from "../../const";
import styles from "./services.module.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={styles.container}>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>UI/UX Design</h3>
          </div>

          <ul className={styles.service__list}>
            {design.map(({ id, description }) => (
              <li key={id}>
                <BiCheck className={styles.service__listIcon} />
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* END OF UI/UX  */}

        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Web Development</h3>
          </div>

          <ul className={styles.service__list}>
            {webDev.map(({ id, description }) => (
              <li key={id}>
                <BiCheck className={styles.service__listIcon} />
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* END OF UI/UX  */}

        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Content Creation</h3>
          </div>

          <ul className={styles.service__list}>
            {contentCreation.map(({ id, description }) => (
              <li key={id}>
                <BiCheck className={styles.service__listIcon} />
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* END OF UI/UX  */}
      </div>
    </section>
  );
};

export default Services;
