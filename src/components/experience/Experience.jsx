import styles from "./experience.module.css";
import { MdVerified } from "react-icons/md";
import { useState } from "react";
import { frontEnd, backEnd, languages, versionControl, cms, other } from "../../const";

const Experience = () => {
  const stacks = [
    { id: "frontend", label: "Frontend", title: "Frontend Development", items: frontEnd },
    { id: "backend", label: "Backend", title: "Backend Development", items: backEnd },
    { id: "languages", label: "Languages", title: "Programming Languages", items: languages },
    { id: "versionControl", label: "Version Control", title: "Version Control", items: versionControl },
    { id: "cms", label: "CMS", title: "Content Management Systems", items: cms },
    { id: "other", label: "Other", title: "Other Skills", items: other },
  ];
  const [activeStack, setActiveStack] = useState(stacks[0].id);

  const activeIndex = stacks.findIndex(({ id }) => id === activeStack);
  const activeStackData = stacks[activeIndex] ?? stacks[0];

  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div
        className={styles.stackSelector}
        role="tablist"
        aria-label="Experience stacks"
      >
        {stacks.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeStack === id}
            className={`${styles.stackSelectorButton} ${
              activeStack === id ? styles.stackSelectorButtonActive : ""
            }`}
            onClick={() => setActiveStack(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={`container ${styles.experienceContainer} `}>
        <div className={styles.experienceLabelColumn}>
          <h5>Skills</h5>
        </div>
        <div className={styles.experienceCard}>
          <h3>{activeStackData.title}</h3>
          <div className={styles.experienceContent}>
            {activeStackData.items.map(({ id, language, status }) => (
              <article className={styles.experienceDetails} key={id}>
                <MdVerified
                  className={styles.experienceDetailsIcon}
                  aria-hidden="true"
                />
                <div>
                  <h4>{language}</h4>
                  <small className="text-light">{status}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div
          className={styles.experienceProgress}
          aria-label={`${stacks.length} experience stacks`}
        >
          {stacks.map(({ id }, index) => (
            <div
              key={id}
              className={`${styles.progressDash} ${
                index <= activeIndex ? styles.progressDashActive : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
