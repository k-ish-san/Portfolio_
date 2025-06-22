import React from "react";
import SkillCard from "./SkillCard";

interface SkillGridProps {
  skills: { icon: React.ReactNode; label: string; title?: string }[];
}

const SkillGrid: React.FC<SkillGridProps> = ({ skills }) => (
  <div
    className="grid gap-6 sm:gap-8 px-4 sm:px-8 md:px-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 justify-items-center"
    role="list"
  >
    {skills.map((skill, idx) => (
      <SkillCard
        key={`${skill.label}-${idx}`}
        icon={skill.icon}
        label={skill.label}
      />
    ))}
  </div>
);

export default SkillGrid;
