import Image from "next/image";
import styles from "../../../styles/sass/Projects.module.scss";
import { BiLinkExternal } from "react-icons/bi";


const Project = ({ data }) => {
  const { name, id, img, } = data;
  return (
    <>
      <div className={id === 1 ? styles.project1 : styles.project2} >
        <Image
          className={id === 1 ? styles.image1 : styles.image1} src={img} placeholder="blur" blurDataURL={"/blank.jpg"}
          alt="Find an Agent Project for Client"
          width="500px"
          height="400px" />
        <a
          target="blank"
          href={id === 1 ? "https://www.univistainsurance.com/location/univista-insurance-hialeah-fl-33010-2/" : ""}
          className={id === 1 ? styles.detail1 : styles.detail2}>
          Details
          <BiLinkExternal className={styles.external_link} size="1.5rem" />
        </a>
        <h3 className={styles.description}>Project {id} - {name}</h3>
      </div>
    </>
  );
};

export default Project;
