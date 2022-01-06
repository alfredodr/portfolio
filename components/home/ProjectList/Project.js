import Image from "next/image";
import styles from "../../../styles/sass/Projects.module.scss";

const Project = ({ data }) => {
  const { name, id, img } = data;
  console.log(img);
  return (
    <>
      <div className={styles.projects_container}>
        <Image className={styles.image} src={img} placeholder="blur" blurDataURL={"/blank.jpg"} alt="Find an Agent Project for Client" />
        Project {id} - {name}
      </div>
    </>
  );
};

export default Project;
