
import styles from "../../styles/sass/Banner.module.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "@mui/material";

const Banner = () => {
  return (
    <>
      <div className={styles.intro_container}>
        <span className={styles.inner_intro_container}>
        </span>
        <h1 className={styles.first_name}>Alfredo</h1>
        <h2 className={styles.last_name}>Dominguez</h2>
        <span className={styles.description}>Web Developer</span>
        <div className={styles.icons_container}>
          <Link href="https://github.com/alfredodr" ><GitHubIcon className={styles.icon} /></Link>
          <Link href="https://www.linkedin.com/in/alfredodominguez1"><LinkedInIcon className={styles.icon} /></Link>
        </div>
      </div>
    </>
  )
};

export default Banner;
