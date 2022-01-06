import Skill from "./Skill";
import { skills } from "../../../lib/skills";

const index = () => {
  return (
    <div>
      skill list
      {skills.map((skill) => (
        <Skill key={skill.id} data={skill} />
      ))}
    </div>
  );
};

export default index;
