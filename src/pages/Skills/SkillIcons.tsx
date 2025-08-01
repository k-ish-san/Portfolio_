import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiGit,
  SiVercel,
  SiFigma,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  SiOverleaf,
  SiPostman,
  SiPerplexity,
  SiGithub,
  SiRedux,
} from "react-icons/si";

import { DiVisualstudio, DiMysql } from "react-icons/di";

// Export as plain arrays so Skills can lazy-load it
export const technicalSkills = [
  { icon: <SiHtml5 />, label: "HTML" },
  { icon: <SiCss3 />, label: "CSS" },
  { icon: <SiPython />, label: "Python" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiCplusplus />, label: "C++" },
  { icon: <SiReact />, label: "React.js" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express.js" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <DiMysql />, label: "MySQL" },
];

export const toolSkills = [
  { icon: <DiVisualstudio />, label: "VS Code" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiVercel />, label: "Vercel" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiVite />, label: "Vite" },
  { icon: <SiRedux />, label: "Redux" },
  { icon: <SiFigma />, label: "Figma" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <SiOverleaf />, label: "Overleaf" },
  { icon: <SiPerplexity />, label: "Perplexity" },
];
