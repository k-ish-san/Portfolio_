import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { Card } from "../../components/Card";
import Tooltip from "../../components/Tooltip";
import {
  SiReact,
  SiFirebase,
  SiNpm,
  SiJavascript,
  SiImdb,
  SiArduino,
  SiRaspberrypi,
  SiVercel,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  SiPostman,
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

const categories = ["All", "Web development", "IoT"];

// Project list
const projects = [
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

];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    return filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <Card title="Projects">
      <div className="flex flex-col">
        {/* Filter Tabs */}
        <div className="sticky top-0 z-20 px-6 py-4 border-b light:bg-blue-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-3 items-center justify-start">
            {categories.map((cat) => (
              <Tooltip key={cat} text={`Filter by: ${cat}`}>
                <button
                  className={`px-4 py-2 rounded-sm font-semibold border transition ${
                    filter === cat
                      ? "bg-[#3aa5fd] text-white border-[#3aa5fd]"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-[#3aa5fd]"
                  }`}
                  onClick={() => setFilter(cat)}
                  aria-label={`Filter projects by ${cat}`}
                >
                  {cat}
                </button>
              </Tooltip>
            ))}
            <Tooltip text="Total Projects">
              <span className="ml-2 bg-[#3aa5fd] text-white px-3 py-2 text-sm rounded-sm border border-[#3aa5fd]">
                {filteredProjects.length}
              </span>
            </Tooltip>
          </div>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2 py-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title + idx} {...project} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Projects;
