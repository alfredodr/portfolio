import styles from "../../styles/sass/About.module.scss";
import VisibilityIcon from '@mui/icons-material/Visibility';

const About = () => {
  return (
    <>
      <h1 className={styles.about_container}>
        About
        <span className={styles.about_inner}>About</span>
      </h1>
      <hr className={styles.line_break} />
      <p className={styles.description}>I am a Web Developer with over 6 months of experience as a freelancer. I am passionate about my work every step of the way.
        My goal is to grow businesses and offer my clients the best results. I like to stay up to date with the industry trends and continue
        learning and improving my skills every day
      </p>
      <button className={styles.about_button_container}>
        <VisibilityIcon className={styles.view_icon} />
        <a className={styles.view_text} href="https://drive.google.com/file/d/1kpBVbRzUqZuGxGX-NuMQABxil3bdU_gS/view?usp=sharing">View CV</a>
      </button>
    </>
  )
};

export default About;
