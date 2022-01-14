import { ProjectDetails, CoverImage } from "../../components/project";

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
  const response = await fetch(`http://localhost:3000/api/projects/${params.id}`);//extract the id parameter from the url
  const data = await response.json();

  return {
    props: {
      project: data
    }
  }
}

//getStaticPath and getStaticProp to get the data are only available inside the page folder
//fallback:false paths returned by getStaticPaths will be rendered to HTML at build time by getStaticProps. Any paths not retunred by getStaticPaths
//will return a 404 page. Ideal for an app with few path and new paths are not added often

//fallback:true paths returned by getStaticPaths will be rendered to HTML at build time by getStaticProps.
