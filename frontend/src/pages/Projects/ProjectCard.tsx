import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { IconType } from "react-icons";
import Tooltip from "../../components/Tooltip";
import { showNotification } from "../../components/NotificationCard";

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
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 border-2 border-[#3aa5fd]/20 dark:border-white/20 rounded-xl p-4 m-4 flex flex-col shadow-lg transition-transform hover:scale-[1.03]">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="rounded-lg w-full h-36 object-cover mb-4"
      />

      <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span
            key={tag.label + idx}
            className="flex items-center gap-1 bg-[#3aa5fd] text-white px-3 py-1 rounded-full text-xs font-semibold"
          >
            {tag.icon && <tag.icon className="text-base" />}
            {tag.label}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-6 font-semibold text-sm">
        <Tooltip text="GitHub Repository">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => showNotification(github, "Visit GitHub Repository")}
            className="flex items-center gap-1 text-[#3aa5fd] hover:underline"
          >
            <FaGithub /> GitHub
          </a>
        </Tooltip>

        <Tooltip text="Live Demo">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => showNotification(live, "Go to Live Demo")}
            className="flex items-center gap-1 text-[#3aa5fd] hover:underline"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProjectCard;
