import styles from "../../styles/sass/About.module.scss";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <hr className={styles.line_break} />
      <p className={styles.description}>I am a Web Developer with over 6 months of experience as a freelancer. I am passionate about my work every step of the way.
        My goal is to grow businesses and offer my clients the best results. I like to stay up to date with the industry trends and continue
        learning and improving my skills every day</p>
    </>
  )
};

export default About;
