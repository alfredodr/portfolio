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

const ProjectDetails = ({ data }) => {
  const { id, name, description } = data;

  let stacks=(id)=>{
    if(id===1){
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
      )
    }else if(id===2){
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
            <DiReact style={{ fontSize: 40 }}/>
            <span>React</span>
          </div>          
        </div>
      ) 
    }else if(id===3){
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
          <DiReact style={{ fontSize: 40 }}/>
          <span>React</span>
          </div>
          <div className={styles.icon_container}>
          <i className="devicon-nextjs-original colored" style={{fontSize: 40, margin:"20px"}}/>
          <span>Next.js</span>
          </div>       
        </div>
      ) 
    }
  }

  return (
    <section className={styles.detail_container}>
      <h1 className={styles.intro_container}>
        Project {id} {name}
        <span className={styles.intro_inner}>Project {id} {name}</span>
      </h1>
      <hr className={styles.line_break} />
      <h2 className={styles.intro}>Details</h2>
      <div className={styles.info_container}>
        <BiCategory style={{ fontSize: 30 }} />
        <span>Category:</span>
        <span>HTML, CSS, JS, Wordpress</span>
        <BiUserCircle style={{ fontSize: 30 }} />
        <span>Client:</span>
        <span>Univista Insurance</span>
        <FaLaptopCode style={{ fontSize: 30 }} />
        <span>Stacks Used:</span>
        {stacks(id)}
      </div>
      <p className={styles.description}>{description}</p>
      <button className={styles.project_button_container}>
        <AiOutlineEye className={styles.view_icon} size="1.4rem" />
        <Link
          href={
            id === 1 ? "https://www.univistainsurance.com/location/univista-insurance-hialeah-fl-33010-2/" :
              id === 2 ? "/" :
                id === 3 ? "/" : null}
          target={"blank"}
          passHref
        >
          <a
            className={styles.view_text}
          >View Project</a>
        </Link>
      </button>
    </section>
  )
};

export default ProjectDetails;

