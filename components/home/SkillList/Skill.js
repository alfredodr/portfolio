import styles from "../../../styles/sass/Skills.module.scss";
import Image from "next/image";

const Skill = ({ data }) => {
  const { id, icon } = data;

  return (
    <div>
      <Image
        className={styles.image} src={icon} placeholder="blur" blurDataURL={"/blank.jpg"}
        alt="Skills"
        width="50px"
        height="50px" />
    </div>
  );
};

export default Skill;
