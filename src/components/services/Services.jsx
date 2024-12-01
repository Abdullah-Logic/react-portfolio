import { design, webDev, contentCreation } from "../../const";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            {design.map(({ id, description }) => (
              <li key={id}>
                <BiCheck className="service__list-icon" />
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* END OF UI/UX  */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            {webDev.map(({ id, description }) => (
              <li key={id}>
                <BiCheck className="service__list-icon" />
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* END OF UI/UX  */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            {contentCreation.map(({ id, description }) => (
              <li key={id}>
                <BiCheck className="service__list-icon" />
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
