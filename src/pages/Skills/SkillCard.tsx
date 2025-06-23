import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, label }) => (
  <li
    className="flex flex-col items-center justify-center min-w-[100px] min-h-[100px] px-4 py-3 rounded-lg border border-gray-300 dark:border-white shadow-md dark:shadow-black bg-transparent transition-transform hover:scale-105 duration-200"
  >
    <div className="text-3xl text-gray-900 dark:text-white">{icon}</div>
    <span className="mt-2 text-sm font-mono tracking-widest uppercase text-gray-800 dark:text-gray-200">
      {label}
    </span>
  </li>
);

export default SkillCard;
