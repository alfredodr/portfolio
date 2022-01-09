
import styles from "../../styles/sass/Banner.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Banner = () => {
  return (
    <>
      <div className={styles.intro_container}>
        <span className={styles.rectangle}></span>
        <h1 className={styles.first_name}>ALFREDO</h1>
        <h2 className={styles.last_name}>DOMINGUEZ</h2>
        <span className={styles.description}>Web Developer</span>
        <div className={styles.icons_container}>
          <a href="https://github.com/alfredodr" ><AiFillGithub className={styles.icon} /></a>
          <a href="https://www.linkedin.com/in/alfredodominguez1"><AiFillLinkedin className={styles.icon} /></a>
        </div>
      </div>
    </>
  )
};

export default Banner;
