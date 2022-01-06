import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { About, Banner } from "../components/home";
import styles from "../styles/Home.module.css";
import ProjectList from "../components/home/ProjectList";
import SkillList from "../components/home/SkillList";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alfredo Dominguez</title>
        <meta name="Alfredo Dominguez " content="Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <About />
      <ProjectList />
      <SkillList />
      <Contact />
    </div>
  );
}
