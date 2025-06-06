import React from "react";
import SkillCard from "./SkillCard";

interface SkillGridProps {
  skills: { icon: React.ReactNode; label: string ,title?: string }[];
}

const SkillGrid: React.FC<SkillGridProps> = ({ skills }) => (
  <div className="px-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-8 justify-items-center">
    {skills.map((skill, idx) => (
      <SkillCard
        key={skill.label + idx}
        icon={skill.icon}
        label={skill.label}
      />
    ))}
  </div>
);

export default SkillGrid;
