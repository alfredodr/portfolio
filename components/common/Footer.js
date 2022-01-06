import styles from "../../styles/sass/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <p className={styles.footer_text}>© 2022 Alfredo Dominguez.</p>
      <p className={styles.footer_text}>All Rights Reserved</p>
    </footer>
  )
};

export default Footer;
