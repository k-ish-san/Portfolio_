import React, { Suspense, lazy, useState, useEffect } from "react";
import { Card } from "../../components/Card";
const SkillGrid = lazy(() => import("./SkillGrid"));

const Skills: React.FC = () => {
  const [technicalSkills, setTechnicalSkills] = useState<any[]>([]);
  const [toolSkills, setToolSkills] = useState<any[]>([]);

  // Dynamically import icons only when component mounts
  useEffect(() => {
    import("./SkillIcons").then((mod) => {
      setTechnicalSkills(mod.technicalSkills);
      setToolSkills(mod.toolSkills);
    });
  }, []);

  return (
    <Card title="Skills">
      <section aria-labelledby="tech-skills">
        <h2
          id="tech-skills"
          className="text-2xl font-semibold dark:text-white my-4"
        >
          <span className="text-[#3aa5fd]">Technical</span> Skills
        </h2>
        <Suspense fallback={<div className="h-10">Loading...</div>}>
          <SkillGrid skills={technicalSkills} />
        </Suspense>
      </section>

      <section aria-labelledby="tools-skills">
        <h2
          id="tools-skills"
          className="text-2xl font-semibold dark:text-white my-4"
        >
          <span className="text-[#3aa5fd]">Tools</span> I Use
        </h2>
        <Suspense fallback={<div className="h-10">Loading...</div>}>
          <SkillGrid skills={toolSkills} />
        </Suspense>
      </section>
    </Card>
  );
};

export default Skills;
