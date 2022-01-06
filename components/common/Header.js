import Link from "next/link";
import styles from "../../styles/sass/Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [isActive, setActive] = useState("false");

  const mobileMenu = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header className={styles.header_container}>
        <div className={styles.brand_menu_container}>
          <Link href="/">
            <a className={styles.brand}>AD</a>
          </Link>
          <div className={isActive ? styles.active : styles.hamburger} onClick={mobileMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>
        <nav className={isActive ? styles.active_nav_container : styles.nav_container} onClick={mobileMenu}>
          <ul className={styles.menu_container}>
            <li className={styles.nav__item}>
              <Link href="#home"><a>HOME</a></Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#about"><a>ABOUT</a></Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#projects"><a>PROJECTS</a></Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#contact"><a>CONTACT</a></Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
};

export default Header;


