import styles from "../../styles/sass/About.module.scss";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <>
      <h2 className={styles.about_container}>
        ABOUT
        <span className={styles.about_inner}>ABOUT</span>
      </h2>
      <hr className={styles.line_break} />
      <p className={styles.description}>I am a Web Developer with over 6 months of experience as a freelancer. I am passionate about my work every step of the way.
        My goal is to grow businesses and offer my clients the best results. I like to stay up to date with the industry trends and continue
        learning and improving my skills every day
      </p>
      <div className={styles.icons_container}>
        <a href="https://github.com/alfredodr" ><AiFillGithub className={styles.icon} /></a>
        <a href="https://www.linkedin.com/in/alfredodominguez1"><AiFillLinkedin className={styles.icon} /></a>
      </div>
    </>
  )
};

export default About;
