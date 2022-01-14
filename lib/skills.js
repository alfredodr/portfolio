import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiWordpress } from "react-icons/di";


const icon1=<DiHtml5 size="5rem"/>
const icon2=<DiCss3 size="5rem"/>
const icon3=<DiSass size="5rem"/>
const icon4=<DiJavascript size="5rem"/>
const icon5=<DiReact size="5rem"/>
const icon6=<i className="devicon-nextjs-original colored" style={{fontSize: 40, margin:"20px"}}/>
const icon7=<i className="devicon-materialui-plain" style={{fontSize: 40, margin:"20px"}}/>
const icon8=<DiGit size="5rem"/>
const icon9=<DiGithubBadge size="5rem"/>
const icon10=<DiNpm size="5rem"/>
const icon11=<DiWordpress size="5rem"/>

export const skills = [
  { id: 1, name: "HTML", icon: icon1, description: "HTML" },
  { id: 2, name: "CSS", icon: icon2, description: "CSS" },
  { id: 3, name: "SASS", icon: icon3, description: "SASS" },
  { id: 4, name: "JAVASRIPT", icon: icon4, description: "JAVASRIPT" },
  { id: 5, name: "REACT", icon: icon5, description: "REACT" },
  { id: 6, name: "NEXT.JS", icon: icon6, description: "NEXT.JS" },
  { id: 7, name: "MATERIAL UI", icon: icon7, description: "MATERIAL UI" },
  { id: 8, name: "GIT", icon: icon8, description: "GIT" },
  { id: 9, name: "GITHUB", icon: icon9, description: "GITHUB" },
  { id: 10, name: "NPM", icon: icon10, description: "NPM" },
  { id: 11, name: "WORDPRESS", icon: icon11, description: "WORDPRESS" }
];
