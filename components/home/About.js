import styles from "../../styles/sass/About.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <h2 id="about" className={styles.about_container}>
        ABOUT
        <span className={styles.about_inner}>ABOUT</span>
      </h2>
      <hr className={styles.line_break} />
      <p className={styles.description}>I am a Web Developer, passionate about creating applications from start to finish 
        and helping businesses drive revenue and growth. I like to stay up to date with the industry trends and continue 
        learning and harnessing my skills.
      </p>
      <div className={styles.icons_container}>
        <a href="https://github.com/alfredodr" ><AiFillGithub className={styles.icon} />Github</a>
        <a href="https://www.linkedin.com/in/alfredodominguez1"><AiFillLinkedin className={styles.icon} />Linkedin</a>
        <a href="https://drive.google.com/file/d/1kpBVbRzUqZuGxGX-NuMQABxil3bdU_gS/view?usp=sharing"><BsFillPersonLinesFill className={styles.icon} />Resume</a>
      </div>
    </>
  )
};

export default About;
