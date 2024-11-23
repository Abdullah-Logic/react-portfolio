import "./portfolio.css";
import {
  biakitchen,
  landingpage,
  techdoc,
  tribute,
  responsivebakery,
  portfolio,
} from "../../assets/image";

const data = [
  {
    id: 1,
    image: biakitchen,
    title: "Bia's Baking Kitchen",
    github: "https://github.com/Abdullah-dev1/bias-baking-kitchen.git",
  },
  {
    id: 2,
    image: landingpage,
    title: "Virtual Bakery",
    github: "https://github.com/Abdullah-dev1/bakery-responsive.git",
  },
  {
    id: 3,
    image: techdoc,
    title: "Product Landing Page",
    github:
      "https://github.com/Abdullah-dev1/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/landing_page",
  },
  {
    id: 4,
    image: tribute,
    title: "Technical Documentation Page",
    github:
      "https://github.com/Abdullah-dev1/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/technical_doc_page",
  },
  {
    id: 5,
    image: responsivebakery,
    title: "Tribute Page",
    github:
      "https://github.com/Abdullah-dev1/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/tribute_page",
  },
  {
    id: 6,
    image: portfolio,
    title: "Simple Portfolio Page",
    github:
      "https://github.com/Abdullah-dev1/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/personal_port_page",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn btn-primary"
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
