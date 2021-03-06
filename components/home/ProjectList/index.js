import Project from "./Project";
import { projects } from "../../../lib/projects";
import styles from "../../../styles/sass/Projects.module.scss";
import { AiOutlineEye } from "react-icons/ai";

const index = () => {
  return (
    <div>
      <h2 id="projects" className={styles.projects}>
        PROJECTS
        <span className={styles.intro_inner}>PROJECTS</span>
      </h2>
      <hr className={styles.line_break} />
      <div className={styles.projects_container}>
        {projects.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </div>
      <button className={styles.about_button_container}>
        <AiOutlineEye className={styles.view_icon} size="1.4rem" />
        <a className={styles.view_text} href="https://github.com/alfredodr">View All</a>
      </button>
    </div>
  );
};

export default index;
