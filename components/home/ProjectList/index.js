import Project from "./Project";
import { projects } from "../../../lib/projects";

const index = () => {
  return (
    <div>
      project list
      {projects.map((project) => (
        <Project key={project.id} data={project} />
      ))}
    </div>
  );
};

export default index;
