import Image from "next/image";
import styles from "../../../styles/sass/Projects.module.scss";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";

const Project = ({ data }) => {
  const { name, id, img, } = data;

  return (
    <>
      <div className={
        id === 1 ? styles.project1 :
          id === 2 ? styles.project2 :
            id === 3 ? styles.project3 : null
      }>
        <div className={styles.img_dtls_container}>
          <Image
            className={
              id === 1 ? styles.image1 :
                id === 2 ? styles.image2 :
                  id === 3 ? styles.image3 : null
            }
            src={img}
            alt="Find an Agent Project for Client"
            width="625px"
            height="430px"
            priority />
          <Link
            href={`/project/${id}`}
            passHref
          >
            <a
              className={
                id === 1 ? styles.detail1 :
                  id === 2 ? styles.detail2 :
                    id === 3 ? styles.detail3 : null
              }>
              Details
              <BiLinkExternal className={styles.external_link} size="1.5rem" />
            </a>
          </Link>
        </div>
        <h3 className={styles.description}>Project {id} - {name}</h3>
      </div>
    </>
  );
};

export default Project;
