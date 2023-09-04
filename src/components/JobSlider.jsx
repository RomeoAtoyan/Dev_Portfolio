import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "../styles/Slider/TechSlider.module.css";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../Content/content";

const JobSlider = () => {
  return (
    <div className={styles.slider}>
      <Swiper modules={[Autoplay]} autoplay spaceBetween={0}>
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              img={project.img}
              name={project.name}
              stack={project.stack}
              href={project.href}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default JobSlider;
