import styles from "../styles/Projects/ProjectCard.module.css";
import GoTo from "../assets/GoTo";

const ProjectCard = ({ img, name, stack, href }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
        <div className={styles.description}>
          <div className={styles.tech}>
            <span>{name}</span>
            <span>{stack}</span>
          </div>
          <a target="_blank" href={href}>
            <GoTo size={20} color={"white"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
