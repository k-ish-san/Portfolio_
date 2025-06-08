// src/Pages/Education/EducationTimeline.tsx

import EducationItem from "./EducationItem";
import type { EducationItemProps } from "./EducationItem";
import { Card } from "../../components/Card";
import logo1 from "../../assets/gcekLogo.png";
import logo2 from "../../assets/NbemsLogo.png";

const educationData: EducationItemProps[] = [
  {
    degree: "10th Grade",
    institution: "Nithyananda Bhavan English Medium School",
    location: "",
    logo: "/school-logo.png", // Replace with your actual logo path
    start: "2016",
    end: "2018",
    highlights: [
      "Completed my schooling with a focus on science and mathematics",
      "Laid the foundation for my interest in technology",
      "CBSE curriculum",
    ],
    tags: ["science", "mathematics", "cbse"],
  },
  {
    degree: "12th Grade",
    institution: "Nithyananda Bhavan English Medium School",
    location: "",
    logo: "/school-logo.png", // Replace with your actual logo path
    start: "2018",
    end: "2020",
    highlights: [
      "Completed my schooling with a focus on computer science and mathematics",
      "Laid the foundation for my interest in technology",
      "CBSE curriculum",
      "Scored 94.2% in final exams",
    ],
    tags: ["computer science", "mathematics", "cbse"],
  },
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Government College of Engineering Kannur",
    location: "",
    logo: "/college-logo.png", // Replace with your actual logo path
    start: "2020",
    end: "2024",
    highlights: [
      "Pursuing a Bachelor's degree in Electronics and Communication Engineering",
      "Honing skills in both hardware and software development",
      "Current CGPA: 7.58",
      "Key coursework: Digital Electronics, Communication Systems, Microprocessors",
    ],
    tags: [
      "electronics",
      "communication",
      "engineering",
      "hardware",
      "software",
    ],
  },
];

export default function EducationTimeline() {
  return (
    <Card title="Education">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-gray-700 rounded-full z-0" />
        <div className="flex flex-col gap-12">
          {educationData.map((item, idx) => (
            <EducationItem
              key={item.degree}
              {...item}
              isFirst={idx === 0}
              isLast={idx === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
