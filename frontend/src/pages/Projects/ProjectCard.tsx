import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

interface ProjectCardProps {
  image: string;
  title: string;
  tags: { label: string; icon?: IconType }[];
  github: string;
  live: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  tags,
  github,
  live,
}) => (
  <div className=" light:bg-gray-100  border-2 shadow-lg light:shadow-[#3aa5fd] dark:shadow-black light:border-[#3aa5fd]/20 dark:border-white/20 bg-clip-padding dark:text-white light:text-black rounded-xl  p-4 flex flex-col h-full transition-transform hover:scale-[1.03]">
    <img
      src={image}
      alt={title}
      className="rounded-lg w-full h-36 object-cover mb-4"
    />
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, idx) => (
        <span
          key={tag.label + idx}
          className="flex items-center gap-1 light:bg-[#3aa5fd] light:text-gray-200 dark:bg-indigo-500 dark:text-white px-3 py-1 rounded-full text-xs font-semibold"
        >
          {tag.icon && <tag.icon className="text-base" />}
          {tag.label}
        </span>
      ))}
    </div>
    <div className="mt-auto flex gap-4 font-semibold">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 dark:text-[#3aa5fd] hover:underline"
      >
        <FaGithub /> GitHub
      </a>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 dark:text-[#3aa5fd] hover:underline"
      >
        <FaExternalLinkAlt /> Live
      </a>
    </div>
  </div>
);

export default ProjectCard;
