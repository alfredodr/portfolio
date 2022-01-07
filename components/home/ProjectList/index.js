import Project from "./Project";
import { projects } from "../../../lib/projects";
import styles from "../../../styles/sass/Projects.module.scss";
import VisibilityIcon from '@mui/icons-material/Visibility';

const index = () => {
  return (
    <div>
      <h2 className={styles.intro_container}>
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
        <VisibilityIcon className={styles.view_icon} />
        <a className={styles.view_text} href="https://github.com/alfredodr">View All</a>
      </button>
    </div>
  );
};

export default index;
