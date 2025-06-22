import React, { Suspense } from "react";
import { Card } from "../../components/Card";
const SkillGrid = React.lazy(() => import("./SkillGrid")); // Lazy-load grid

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

// Skill Arrays (keep outside component for perf)
const skills = [
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

const tools = [
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

const Skills: React.FC = () => {
  return (
    <Card title="Skills">
      {/* Technical Skills Section */}
      <section aria-labelledby="tech-skills">
        <h2
          id="tech-skills"
          className="text-2xl font-semibold dark:text-white my-4"
        >
          <span className="text-[#3aa5fd]">Technical</span> Skills
        </h2>
        <Suspense
          fallback={
            <div className="h-10" aria-busy="true">
              Loading...
            </div>
          }
        >
          <SkillGrid skills={skills} />
        </Suspense>
      </section>

      {/* Tools Section */}
      <section aria-labelledby="tools-skills">
        <h2
          id="tools-skills"
          className="text-2xl font-semibold dark:text-white my-4"
        >
          <span className="text-[#3aa5fd]">Tools</span> I Use
        </h2>
        <Suspense
          fallback={
            <div className="h-10" aria-busy="true">
              Loading...
            </div>
          }
        >
          <SkillGrid skills={tools} />
        </Suspense>
      </section>
    </Card>
  );
};

export default Skills;
