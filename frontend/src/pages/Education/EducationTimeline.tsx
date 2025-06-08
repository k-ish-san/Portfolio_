// src/Pages/Education/EducationTimeline.tsx

import EducationItem from "./EducationItem";
import type { EducationItemProps } from "./EducationItem";
import { Card } from "../../components/Card";
import logo2 from "../../assets/gcekLogo.png";
import logo1 from "../../assets/NbemsLogo.png";

const educationData: EducationItemProps[] = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Government College of Engineering Kannur",
    location: "",
    logo: logo1, // Replace with your actual logo path
    start: "2020",
    end: "2024",
    highlights: [
      "Graduated with a Bachelor's degree in Electronics and Communication Engineering",
      "Honing skills in both hardware and software development",
      "Current CGPA: 7.58",
      "Key coursework: Digital Electronics, Communication Systems, Microprocessors",
    ],
    tags: [
      "electronics",
      "IoT",
      "Wireless communication",
      "Microcontrollers",
      "Embedded systems",
    ],
  },
  {
    degree: "12th Grade",
    institution: "Nithyananda Bhavan English Medium School",
    location: "",
    logo: logo2, // Replace with your actual logo path
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
    degree: "10th Grade",
    institution: "Nithyananda Bhavan English Medium School",
    location: "",
    logo: logo2, // Replace with your actual logo path
    start: "2016",
    end: "2018",
    highlights: [
      "Completed my schooling with a focus on science and mathematics",
      "Laid the foundation for my interest in technology",
      "CBSE curriculum",
    ],
    tags: ["science", "mathematics", "cbse"],
  },
  
];

export default function EducationTimeline() {
  return (
    <Card title="Education">
      <div className="relative">
        {/* Vertical timeline line */}
        
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
