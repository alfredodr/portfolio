import { ProjectDetails, CoverImage } from "../../components/project";
import { projects } from "../../lib/projects";

function project({ project }) {
  return (
    <div>
      <ProjectDetails data={project} />
      <CoverImage data={project} />
    </div>
  );
}

export default project;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" }
      }
    ],
    fallback: false,
  }
}//returns a path key which determines which paths in the url will be statically generated at build time

export async function getStaticProps(context) {
  const { params } = context;
  //const response = await fetch(`http://localhost:3000/api/projects/${params.id}`);//extract the id parameter from the url
  //const data = await response.json();
  const data=projects.find(project=>project.id===parseInt(params.id));
  
  return {
    props: {
      project: data
    }
  }
}

