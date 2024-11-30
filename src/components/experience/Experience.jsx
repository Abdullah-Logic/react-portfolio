import "./experience.css";
import { MdVerified } from "react-icons/md";
import { frontEnd, backEnd } from "../../const";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEnd.map(({ id, language, status }) => (
              <article className="experience__details" key={id}>
                <MdVerified className="experience__details-icon" />
                <div>
                  <h4>{language}</h4>
                  <small className="text-light">{status}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          {backEnd.map(({ id, language, status }) => (
            <article className="experience__details" key={id}>
              <MdVerified className="experience__details-icon" />
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
