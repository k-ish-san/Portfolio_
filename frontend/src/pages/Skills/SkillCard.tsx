import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center bg-transparent border dark:border-white light:border:black rounded-lg p-2 min-w-[100px] min-h-[100px] hover:scale-105 transition-transform duration-200 shadow-md">
    <div className="text-3xl light:text-black dark:text-white">{icon}</div>
    <span className=" light:text-black dark:text-white font-mono text-sm tracking-widest uppercase">
      {label}
    </span>
  </div>
);

export default SkillCard;
