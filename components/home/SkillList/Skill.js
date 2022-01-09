import styles from "../../../styles/sass/Skills.module.scss";

const Skill = ({ data }) => {
  const { icon, description } = data;

  return (
    <div className={styles.icon_container}>
       {icon}
       <span>{description}</span>
    </div>
  );
};

export default Skill;
