import Skill from "./Skill";
import { skills } from "../../../lib/skills";
import styles from "../../../styles/sass/Skills.module.scss";

const index = () => {
  return (
    <div>
      <h2 className={styles.intro_container}>
        SKILLS
        <span className={styles.intro_inner}>SKILLS</span>
      </h2>
      <hr className={styles.line_break} />
      <div className={styles.skills_container}>
        {skills.map((skill) => (
          <Skill key={skill.id} data={skill} />
        ))}
      </div>
    </div>
  );
};

export default index;
