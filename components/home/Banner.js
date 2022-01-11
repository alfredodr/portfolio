import styles from "../../styles/sass/Banner.module.scss";
import { AiOutlineEye } from "react-icons/ai";

const Banner = () => {
  return (
    <>
      <div className={styles.intro_container}>
        <span className={styles.rectangle}></span>
        <h1 className={styles.name_container}>
          ALFREDO
          <span>
            DOMINGUEZ
          </span>
        </h1>
        <span className={styles.description}>Web Developer</span>
        <button className={styles.project_button_container}>
          <AiOutlineEye className={styles.view_icon} size="1.4rem" />
          <a className={styles.view_text} href="#projects">View Projects</a>
        </button>
      </div>
    </>
  )
};

export default Banner;
