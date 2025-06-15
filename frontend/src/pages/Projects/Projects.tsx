import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import {Card} from "../../components/Card";
import Tooltip from "../../components/Tooltip";
import {
  SiReact,
  SiFirebase,
  SiNpm,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiImdb,
  SiArduino,
  SiRaspberrypi,
  SiVercel,

  // SiFigma,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  //SiOverleaf,
  SiPostman,
  // SiPerplexity,
  // SiGithub,
  SiRedux,
} from "react-icons/si";

import { DiNodejs } from "react-icons/di";

import {
  MdOutlineSensors,
  MdOutlineSolarPower,
  MdOutlineWifiTethering,
  MdOutlineCloudUpload,
} from "react-icons/md";

import { FaCarBattery } from "react-icons/fa";

const projects = [
  // E-commerce Website using MERN Stack
  {
    image:
      "https://res.cloudinary.com/dc4gefidz/image/upload/v1748863601/c9ca06ec-4bac-4fd2-9df2-71a267d3ec98.png",
    title: "E-commerce Website using MERN Stack",
    tags: [
      { label: "Npm", icon: SiNpm },
      { label: "React.js", icon: SiReact },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Node.js", icon: DiNodejs },
      { label: "Express.js", icon: SiExpress },
      { label: "Redux", icon: SiRedux },
      { label: "Vite", icon: SiVite },
      { label: "Postman", icon: SiPostman },
      { label: "Tailwind Css", icon: SiTailwindcss },
      { label: "JavaScript", icon: SiJavascript },
      { label: "Vercel", icon: SiVercel },
    ],
    github: "https://github.com/k-ish-san/E-commerce-MERN",
    live: "https://mern-frontend-tau-two.vercel.app/",
    category: "Web development",
  },
  // Tmdb Clone
  {
    image:
      "https://res.cloudinary.com/dc4gefidz/image/upload/v1748864535/5624ba8e-05d1-46bc-a004-4a9a4b3897fd.png",
    title: "Tmdb Clone",
    tags: [
      { label: "React.js", icon: SiReact },
      { label: "Tmdb API", icon: SiImdb },
      { label: "Vercel", icon: SiVercel },
      { label: "Tailwind Css", icon: SiTailwindcss },
      { label: "Vite", icon: SiVite },
    ],
    github: "https://github.com/k-ish-san/Tmdb-clone",
    live: "https://tmdb-clone-ticp.vercel.app/",
    category: "Web development",
  },
  // Water Quality Monitoring System using LoRaWAN
  {
    image:
      "https://res.cloudinary.com/dc4gefidz/image/upload/v1748863045/Screenshot_2025-06-02_164708_wopzzj.png",
    title: "Water Quality Monitoring System using LoRaWAN",
    tags: [
      { label: "LoRaWAN", icon: MdOutlineWifiTethering },
      { label: "Arduino IDE", icon: SiArduino },
      { label: "Raspberry Pi", icon: SiRaspberrypi },
      { label: "Sensors", icon: MdOutlineSensors },
      { label: "The Things Network", icon: MdOutlineCloudUpload },
    ],
    github:
      "https://github.com/k-ish-san/Water-Quality-Monitoring-System-using-LoRaWAN/",
    live: "https://github.com/k-ish-san/Water-Quality-Monitoring-System-using-LoRaWAN/blob/main/Water%20Quality%20Monitoring%20System%20using%20LoRaWAN.pdf",
    category: "IoT",
  },
  // Pollution Monitoring System using ESP32
  {
    image:
      "https://res.cloudinary.com/dc4gefidz/image/upload/v1748863411/Screenshot_2025-06-02_162707_zcnbhj.png",
    title: "Pollution Monitoring System using ESP32",
    tags: [
      { label: "ESP32", icon: MdOutlineWifiTethering },
      { label: "Arduino IDE", icon: SiArduino },
      { label: "Sensors", icon: MdOutlineSensors },
      { label: "Solar Panel", icon: MdOutlineSolarPower },
      { label: "Lithium Battery", icon: FaCarBattery },
      { label: "Firebase", icon: SiFirebase },
    ],
    github:
      "https://github.com/k-ish-san/Pollution-monitoring-system-for-enhancing-sustainability-of-environment-using-IoT",
    live: "https://github.com/k-ish-san/Pollution-monitoring-system-for-enhancing-sustainability-of-environment-using-IoT/blob/main/POLLUTION%20MONITORING%20SYSTEM%20FOR%20ENHANCING%20THE%20SUSTAINABILITY%20OF%20ENVIRONMENT%20USING%20IOT.pdf",
    category: "IoT",
  },
  // Rock Paper Scissors Game
  {
    image:
      "https://res.cloudinary.com/dc4gefidz/image/upload/v1748864915/22409bb1-55ad-4bc0-b3b5-c6c08805b17b.png",
    title: "Rock Paper Scissors Game",
    tags: [
      { label: "Html5", icon: SiHtml5 },
      { label: "Css3", icon: SiCss3 },
      { label: "Javascript", icon: SiJavascript },
    ],
    github: "https://github.com/k-ish-san/Rock-Paper-Scissors",
    live: "https://k-ish-san.github.io/Rock-Paper-Scissors/",
    category: "Web development",
  },
  // ...more projects
];

const categories = ["All", "Web development", "IoT"];




const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Card title="Projects">
     
        {/* Sticky category buttons */}
        <div className="absolute top-18 w-full bg-blue-100 dark:bg-gray-800 z-10 py-4  border-y border-gray-300 dark:border-gray-600 ">
          <div className="flex gap-2 mb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-sm border ${
                  filter === cat
                    ? "bg-[#3aa5fd] text-white border-[#3aa5fd]"
                    : "bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-200 border-[#3aa5fd]"
                } font-semibold transition`}
                onClick={() => setFilter(cat)}
              >
                <Tooltip text={`Filter by: ${cat}`}>
                  {cat}
                </Tooltip>
              </button>
            ))}

            <span className="bg-[#3aa5fd] rounded-sm pt-2 text-white px-2 border-2 border-indigo-200">
              <Tooltip text="Number of Projects">
                {filteredProjects.length}
              </Tooltip>
            </span>
          </div>
        </div>
        {/* Scrollable projects grid */}
        <div
          className="overflow-y-auto max-h-[90vh]"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 p-2">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.title + idx} {...project} />
            ))}
          </div>
        </div>
  
    </Card>
  );
};

export default Projects;
