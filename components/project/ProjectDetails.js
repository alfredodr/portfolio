import styles from "../../styles/sass/project-details/Details.module.scss";
import { BiCategory } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";

const ProjectDetails = ({ data }) => {
  const { id, name, description, category, client } = data;

  let stacks = (id) => {
    if (id === 1) {
      return (
        <div className={styles.stacks_container}>
          <div className={styles.icon_container}>
            <DiHtml5 style={{ fontSize: 40 }} />
            <span>HTML</span>
          </div>
          <div className={styles.icon_container}>
            <DiCss3 style={{ fontSize: 40 }} />
            <span>CSS</span>
          </div>
          <div className={styles.icon_container}>
            <DiSass style={{ fontSize: 40 }} />
            <span>SASS</span>
          </div>
          <div className={styles.icon_container}>
            <DiJavascript style={{ fontSize: 40 }} />
            <span>Javascript</span>
          </div>
          <div className={styles.icon_container}>
            <DiWordpress style={{ fontSize: 40 }} />
            <span>Wordpress</span>
          </div>
        </div>
      );
    } else if (id === 2) {
      return (
        <div className={styles.stacks_container}>
          <div className={styles.icon_container}>
            <DiHtml5 style={{ fontSize: 40 }} />
            <span>HTML</span>
          </div>
          <div className={styles.icon_container}>
            <DiCss3 style={{ fontSize: 40 }} />
            <span>CSS</span>
          </div>
          <div className={styles.icon_container}>
            <DiJavascript style={{ fontSize: 40 }} />
            <span>Javascript</span>
          </div>
          <div className={styles.icon_container}>
            <DiReact style={{ fontSize: 40 }} />
            <span>React</span>
          </div>
          <div className={styles.icon_container}>
            <SiMaterialui style={{ fontSize: 40 }} />
            <span>Material UI</span>
          </div>
        </div>
      );
    } else if (id === 3) {
      return (
        <div className={styles.stacks_container}>
          <div className={styles.icon_container}>
            <DiHtml5 style={{ fontSize: 40 }} />
            <span>HTML</span>
          </div>
          <div className={styles.icon_container}>
            <DiCss3 style={{ fontSize: 40 }} />
            <span>CSS</span>
          </div>
          <div className={styles.icon_container}>
            <DiSass style={{ fontSize: 40 }} />
            <span>SASS</span>
          </div>
          <div className={styles.icon_container}>
            <DiJavascript style={{ fontSize: 40 }} />
            <span>Javascript</span>
          </div>
          <div className={styles.icon_container}>
            <DiReact style={{ fontSize: 40 }} />
            <span>React</span>
          </div>
          <div className={styles.icon_container}>
            <SiNextdotjs style={{ fontSize: 40 }} />
            <span>Next.js</span>
          </div>
        </div>
      );
    }
  };

  let externalLinks = (id) => {
    if (id === 1) {
      return (
        <button className={styles.project_button_container}>
          <AiOutlineEye className={styles.view_icon} size="1.4rem" />
          <Link
            href={
              "https://www.univistainsurance.com/location/univista-insurance-hialeah-fl-33010-2/"
            }
            passHref
          >
            <a className={styles.view_text} target="_blank">
              View Project
            </a>
          </Link>
        </button>
      );
    } else if (id === 2) {
      return (
        <>
          <div className={styles.buttons}>
            <button className={styles.project_button_container}>
              <AiOutlineEye className={styles.view_icon} size="1.4rem" />
              <Link
                href={"https://breaking-bad-quotes-lime.vercel.app/"}
                passHref
              >
                <a className={styles.view_text} target="_blank">
                  View Project
                </a>
              </Link>
            </button>
            <button className={styles.github_button_container}>
              <AiFillGithub className={styles.view_icon} size="1.4rem" />
              <Link
                href={"https://github.com/alfredodr/breaking-bad-quotes"}
                passHref
              >
                <a className={styles.view_text} target="_blank">
                  View Github
                </a>
              </Link>
            </button>
          </div>
        </>
      );
    } else if (id === 3) {
      return (
        <>
          <div className={styles.buttons}>
            <button className={styles.project_button_container}>
              <AiOutlineEye className={styles.view_icon} size="1.4rem" />
              <Link href={"/"} passHref>
                <a className={styles.view_text} target="_blank">
                  View Project
                </a>
              </Link>
            </button>
            <button className={styles.github_button_container}>
              <AiFillGithub className={styles.view_icon} size="1.4rem" />
              <Link href={"https://github.com/alfredodr/portfolio"} passHref>
                <a className={styles.view_text} target="_blank">
                  View Github
                </a>
              </Link>
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <section className={styles.detail_container}>
      <h1 className={styles.intro_container}>
        {name}
        <span className={styles.intro_inner}>{name}</span>
      </h1>
      <hr className={styles.line_break} />
      <h2 className={styles.intro}>Details</h2>
      <ul className={styles.list_container}>
        <li className={styles.list_Item}>
          <BiCategory style={{ fontSize: 30 }} />
          <h3 className={styles.list_Item_Details}>Category:</h3>
          <p>{category}</p>
        </li>
        <li className={styles.list_Item}>
          <BiUserCircle style={{ fontSize: 30 }} />
          <h3 className={styles.list_Item_Details}>Client:</h3>
          <p>{client}</p>
        </li>
        <li className={styles.list_Item}>
          <FaLaptopCode style={{ fontSize: 30 }} />
          <h3 className={styles.list_Item_Details}>Stacks Used:</h3>
        </li>
        <li className={styles.list_Item}>
          <p className={styles.stacks}>{stacks(id)}</p>
        </li>
      </ul>
      <p className={styles.description}>{description}</p>
      {externalLinks(id)}
    </section>
  );
};

export default ProjectDetails;

//
//<div className={styles}>
//        <BiCategory style={{ fontSize: 30 }} />
//        <span>Category:</span>
//        <span>{category}</span>
//        <BiUserCircle style={{ fontSize: 30 }} />
//        <span>Client:</span>
//        <span>{client}</span>
//        <FaLaptopCode style={{ fontSize: 30 }} />
//        <span>Stacks Used:</span>
//        {stacks(id)}
//      </div>

//<i
//              className="devicon-nextjs-original colored"
//              style={{ fontSize: 40, margin: "20px" }}
//            />
