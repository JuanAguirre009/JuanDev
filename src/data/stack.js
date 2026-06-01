import {
  SiAngular,
  SiDocker,
  SiDotnet,
  SiFastapi,
  SiGithub,
  SiGit,
  SiNpm,
  SiPython,
} from "react-icons/si";
import {
  FaAws,
  FaDatabase,
  FaCode,
  FaHashtag,
  FaMicrosoft,
  FaRobot,
  FaTerminal,
} from "react-icons/fa";

export const STACK = {
  frontend: [
    { name: "HTML", image: "/images/stack/html-5.png" },
    { name: "CSS", image: "/images/stack/css-3.png" },
    { name: "JavaScript", image: "/images/stack/js.png" },
    { name: "React.js", image: "/images/stack/reactjs.png" },
    { name: "Tailwind CSS", image: "/images/stack/tailwind.png" },
    { name: "Figma", image: "/images/stack/figma.png" },
  ],
  backend: [
    { name: "C#", icon: FaHashtag, color: "#9B4F96" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Django", image: "/images/stack/django.png" },
    { name: "SQL Server", icon: FaDatabase, color: "#CC2927" },
    { name: "MySQL", image: "/images/stack/mysql.png" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  ],
  tools: [
    { name: "Git", image: "/images/stack/git.png" },
    { name: "GitHub", icon: SiGithub, color: "#E2E8F0" },
    { name: "Terminal", icon: FaTerminal, color: "#94A3B8" },
    { name: "VS Code", icon: FaCode, color: "#007ACC" },
    { name: "npm", icon: SiNpm, color: "#CB3837" },
    { name: "Postman", image: "/images/stack/postman.png" },
    { name: "Swagger", image: "/images/stack/swagger.png" },
    { name: "Azure DevOps", image: "/images/stack/azuredevop.png" },
    { name: "Microsoft Azure", icon: FaMicrosoft, color: "#0089D6" },
    { name: "IA", icon: FaRobot, color: "#00A8E8" },
  ],
  learning: [
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Next.js", image: "/images/stack/next-js.png" },
  ],
};
