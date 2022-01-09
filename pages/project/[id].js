import { ProjectDetails, CoverImage } from "../../components/project";
function project() {
  return (
    <div>
      <ProjectDetails data={"project data"} />
      <CoverImage image={"image data"} />
    </div>
  );
}

export default project;

//here use getStaticPath and getStaticProp to get the data
