import { data } from "../../const";
import styles from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className={styles.container}>
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className={styles.portfolio__item}>
              <div className={styles.portfolio__itemImage}>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className={styles.portfolio__itemCta}>
                <a
                  href={github}
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
