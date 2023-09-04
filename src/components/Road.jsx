import React from "react";
import styles from "../styles/Road/Road.module.css";
import Young from "../assets/Young";
import ArrowDown from "../assets/ArrowDown";
import PC from "../assets/PC";
import Udemy from "../assets/Udemy";
import CodeCademy from "../assets/CodeCademy";
import Code from "../assets/Code";
import intec from "/images/intec.png";
import FMA from "/images/FMA.svg";
import MoveDown from "./MoveDown";

const Road = () => {
  return (
    <div className={styles.container}>
      <MoveDown initialY={"-100px"} inViewY={0}>
        <div className={styles.step}>
          <Young size={100} />
          <span>Fascinated by computers</span>
          <div></div>
        </div>
      </MoveDown>
      <ArrowDown size={50} />
      <MoveDown initialY={"-100px"} inViewY={0}>
        <div className={styles.step}>
          <PC size={100} />
          <span>Built and Fixed PC's</span>
        </div>
      </MoveDown>
      <ArrowDown size={50} />
      <MoveDown initialY={"-100px"} inViewY={0}>
        <div className={styles.step}>
          <div className={styles.learnOnline}>
            <div>
              <Udemy size={100} />
              <CodeCademy size={100} />
            </div>
            <span>Learned development online</span>
          </div>
          <div></div>
        </div>
      </MoveDown>
      <ArrowDown size={50} />
      <MoveDown initialY={"-100px"} inViewY={0}>
        <div className={styles.step}>
          <div className={styles.intec}>
            <img src={intec} alt="" />
            <span>Learned development in group</span>
          </div>
        </div>
      </MoveDown>
      <ArrowDown size={50} />
      <MoveDown initialY={"-100px"} inViewY={0}>
        <div className={styles.step}>
          <Code size={100} />
          <span>Made projects</span>
        </div>
      </MoveDown>
      <ArrowDown size={50} />
      <MoveDown initialY={"-100px"} inViewY={0}>
        <div className={styles.step}>
          <img className={styles.FMA} src={FMA} alt="" />
          <span>Used all skills during my internship</span>
        </div>
      </MoveDown>
    </div>
  );
};

export default Road;
