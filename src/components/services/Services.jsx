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
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create user-centered designs that focus on clear, intuitive
                interactions.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Use basic editing skills to enhance design presentations.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experiment with color schemes, typography, and layouts to align
                with brand identity.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX  */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build responsive and interactive pages using HTML, CSS, and
                JavaScript with advanced proficiency.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Utilize React at an intermediate level to create reusable,
                dynamic UI components.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implement responsive design techniques for optimal viewing on
                all device types.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Apply version control practices with Git to track and manage
                project changes.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Use foundational Python and C skills to support logic
                development and simple automation tasks.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX  */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Design mockups and prototypes to showcase ideas and enhance
                communication with stakeholders.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Produce visually appealing image-based content for various
                digital platforms.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create simple video content to support marketing or
                instructional objectives.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Bring a creative approach to each project, crafting content that
                resonates with target audiences.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX  */}
      </div>
    </section>
  );
};

export default Services;
