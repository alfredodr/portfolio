import Image from "next/image";
import styles from "../../styles/sass/project-details/Cover.module.scss";

const CoverImage = ({ data }) => {
  const { img } = data;
  return <Image src={img} alt="Project Image" className={styles.cover} priority></Image>;
};

export default CoverImage;
