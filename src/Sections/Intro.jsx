import React, { useState } from "react";
import Black from "../components/Black";
import Yellow from "../components/Yellow";
import styles from "../styles/Intro/Intro.module.css";
import Typewriter from "typewriter-effect";
import Projects from "./Projects";
import Arrow from "../assets/Arrow";
import { additionalTech, tech } from "../Content/content";
import WhileInView from "../components/WhileInView";
import SlideIn from "../components/SlideIn";
import SlideLeft from "../components/SlideLeft";
import Romeo from "../../public/images/Romeo.png";
import Road from "../components/Road";
import certificate from "../../public/images/Certificate.png";
const Intro = () => {
  return (
    <div className="intro">
      <Black className={styles.black}>
        <h1>DEV.ROMEO</h1>
        <div>
          <img className={styles.Romeo} src={Romeo} alt="" />
        </div>
        <div>
          <span>Romeo Atoyan</span>
          <h1>
            <Typewriter
              options={{
                strings: ["Front End Developer", "Passion", "Dedication"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </Black>
      <Yellow className={styles.yellow}>
        <div className={styles.yellowLeft}>
          <WhileInView>
            <div className={styles.story}>
              <SlideLeft transition={2.5}>
                <h4>
                  1. The Road{" "}
                  <Arrow strokeWidth={2} size={20} color={"var(--yellow)"} />
                </h4>
              </SlideLeft>
              <SlideLeft>
                <p>
                  Already having the passion and great interest for computers at
                  a very young age building my custom PC's, upgrading them and
                  even fixing them. I was destined to find my way in the IT
                  world. As an adult I followed online courses on development on
                  platforms like Udemy and CodeCademy. After that I applied for
                  an 8 month training course in Brussels. Travelling there,
                  learning development and earning a certificate. Instantly I
                  became hooked and I've been learning since.
                </p>
              </SlideLeft>
            </div>
          </WhileInView>
          <WhileInView>
            <div className={styles.story}>
              <SlideLeft transition={2.5}>
                <h4>
                  2. The Tech Stack{" "}
                  <Arrow strokeWidth={2} size={20} color={"var(--yellow)"} />
                </h4>
              </SlideLeft>
              <SlideLeft>
                <Yellow className={styles.techContainer}>
                  <div>
                    {tech.map((item, index) => (
                      <SlideIn transition={1}>{item.icon}</SlideIn>
                    ))}
                  </div>
                  <div>
                    {additionalTech.map((item, index) => (
                      <SlideIn transition={2}>{item.icon}</SlideIn>
                    ))}
                  </div>
                  <div>
                    Actively learning more
                    <Typewriter
                      options={{
                        strings: ["..."],
                        autoStart: true,
                        loop: true,
                        cursorClassName: "dots_cursor",
                      }}
                    />
                  </div>
                </Yellow>
              </SlideLeft>
            </div>
          </WhileInView>
          <WhileInView>
            <div className={styles.story}>
              <SlideLeft transition={2}>
                <h4>
                  3. Certificate{" "}
                  <Arrow strokeWidth={2} size={20} color={"var(--yellow)"} />
                </h4>
              </SlideLeft>
              <SlideLeft>
                <div>
                  <img
                    className={styles.certificate}
                    src={certificate}
                    alt=""
                  />
                </div>
              </SlideLeft>
            </div>
          </WhileInView>
          <WhileInView>
            <div className={styles.story}>
              <SlideLeft transition={2}>
                <h4>
                  4. The Experience{" "}
                  <Arrow strokeWidth={2} size={20} color={"var(--yellow)"} />
                </h4>
              </SlideLeft>
              <SlideLeft>
                <p>
                  After learning and making my own projects I was ready to apply
                  the technical skills I acquired in a real professional
                  environment. I was given 3 projects to complete by the end of
                  my internship which went flawlessly. Altough I had to use
                  Next.js which I had no experience with, I adapted and
                  completed them. Overall I learned alot of new things working
                  in a real environment.
                </p>
              </SlideLeft>
            </div>
          </WhileInView>
          <WhileInView>
            <div className={styles.story}>
              <SlideLeft transition={2}>
                <h4>
                  5. The Projects{" "}
                  <Arrow strokeWidth={2} size={20} color={"var(--yellow)"} />
                </h4>
              </SlideLeft>
              <SlideLeft>
                <Projects />
              </SlideLeft>
            </div>
          </WhileInView>
          <WhileInView>
            <div className={styles.story}>
              <SlideLeft transition={2}>
                <h4>
                  6. What Now{" "}
                  <Arrow strokeWidth={2} size={20} color={"var(--yellow)"} />
                </h4>
              </SlideLeft>
              <SlideLeft>
                <p>
                  Being an ambitious person by nature , I will not stop at Front
                  End Development. I want to reach beyond my potential and
                  become a great Full Stack Developer and own a software
                  company. I really love what I do and believe that
                </p>
                <span className={styles.quote}>
                  If you do what you love, you will not have to work a single
                  day in your life.
                </span>
              </SlideLeft>
            </div>
          </WhileInView>
        </div>
        <div className={styles.yellowRight}>
          <Road />
        </div>
      </Yellow>
    </div>
  );
};

export default Intro;
