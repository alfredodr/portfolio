import styles from "../../styles/sass/About.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

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
        <Link href="https://github.com/alfredodr">
          <a target="_blank" rel="noreferrer noopener"><AiFillGithub className={styles.icon} />Github</a>
        </Link>
        <Link href="https://www.linkedin.com/in/alfredodominguez1">
          <a target="_blank" rel="noreferrer noopener"><AiFillLinkedin className={styles.icon} />Linkedin</a>
        </Link>
        <Link href="https://drive.google.com/file/d/1BGmR_irXPOcWYPj8JkSWp9DsAfnvT4aS/view?usp=sharing"> 
          <a target="_blank" rel="noreferrer noopener"><BsFillPersonLinesFill className={styles.icon} />Resume</a>
        </Link>
      </div>
    </>
  )
};

export default About;
