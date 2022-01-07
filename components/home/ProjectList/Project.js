import Image from "next/image";
import styles from "../../../styles/sass/Projects.module.scss";

const Project = ({ data }) => {
  const { name, id, img, } = data;
  return (
    <>
      <div className={id === 1 ? styles.project1 : styles.project2} >
        <Image
          className={id === 1 ? styles.image1 : styles.image1} src={img} placeholder="blur" blurDataURL={"/blank.jpg"}
          alt="Find an Agent Project for Client"
          width="600px"
          height="550px" />
        <button className={id === 1 ? styles.detail1 : styles.detail2}>
          <a target="blank" href={id === 1 ? "https://www.univistainsurance.com/location/univista-insurance-hialeah-fl-33010-2/" : ""}>
            Details
          </a>
        </button>
        <b className={styles.description}>Project {id} - {name}</b>
      </div>
    </>
  );
};

export default Project;
