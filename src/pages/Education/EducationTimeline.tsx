// src/Pages/Education/EducationTimeline.tsx

import EducationItem from "./EducationItem";
import type { EducationItemProps } from "./EducationItem";
import { Card } from "../../components/Card";

import logoGCEK from "../../assets/GcekLogo.webp";
import logoNBEMS from "../../assets/NbemsLogo.webp";

// Static education data
const educationData: EducationItemProps[] = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Government College of Engineering Kannur",
    location: "",
    logo: logoGCEK,
    start: "2020",
    end: "2024",
    highlights: [
      "Graduated with a Bachelor's degree in Electronics and Communication Engineering",
      "Honing skills in both hardware and software development",
      "Current CGPA: 7.58",
      "Key coursework: Digital Electronics, Communication Systems, Microprocessors",
    ],
    tags: [
      "Electronics",
      "IoT",
      "Wireless communication",
      "Micro-controllers",
      "Embedded systems",
      "Python for Engineers", 
      "Machine Learning",
    ],
  },
  {
    degree: "12th Grade",
    institution: "Nithyananda Bhavan English Medium School",
    location: "",
    logo: logoNBEMS,
    start: "2018",
    end: "2020",
    highlights: [
      "Completed my schooling with a focus on computer science and mathematics",
      "Laid the foundation for my interest in technology",
      "CBSE curriculum",
      "Scored 94.2% in final exams",
    ],
    tags: ["Computer Science", "Mathematics", "Programming", "C++", "MySQL"],
  },
  {
    degree: "10th Grade",
    institution: "Nithyananda Bhavan English Medium School",
    location: "",
    logo: logoNBEMS,
    start: "2016",
    end: "2018",
    highlights: [
      "Completed my schooling with a focus on science and mathematics",
      "Laid the foundation for my interest in technology",
      "CBSE curriculum",
    ],
    tags: ["Mathematics", "Economics", "Physics", "Chemistry"],
  },
];

export default function EducationTimeline() {
  return (
    <Card title="Education">
      <div className="relative pt-2">
        <div className="flex flex-col gap-12">
          {educationData.map((item, idx) => (
            <EducationItem
              key={`${item.institution}-${item.start}`}
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
