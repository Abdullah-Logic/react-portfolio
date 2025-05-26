import styles from "./header.module.css";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a
        href="https://flowcv.com/resume/bl1ug7oqasun"
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        View CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
