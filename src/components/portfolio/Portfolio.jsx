import { useRef, useState } from "react";
import { data } from "../../const";
import React from "react";
import styles from "./portfolio.module.css";
import NavArrow from "./navArrow";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Portfolio = () => {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className={styles.portfolio}>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${styles.portfolioContainer} `}>
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className={styles.portfolioItem}>
              <div className={styles.portfolioItemImage}>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className={styles.portfolioItemCta}>
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`${styles.buttonPrev} ${styles.swiperbutton} ${
          isBeginning ? styles.disabled : ""
        }`}
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
      >
        <NavArrow />
      </button>
      <button
        className={`${styles.buttonNext} ${styles.swiperbutton} ${
          isEnd ? styles.disabled : ""
        }`}
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
      >
        <NavArrow />
      </button>
    </section>
  );
};

export default Portfolio;
