// src/Pages/Education/EducationTimeline.tsx

import EducationItem from "./EducationItem";
import type { EducationItemProps } from "./EducationItem";
import { Card } from "../../components/Card";


const educationData: EducationItemProps[] = [
  {
    degree: "PhD in Computer Science",
    institution: "Harvard University",
    location: "Massachusetts – US",
    logo: "/harvard-logo.png", // Replace with your asset path
    start: "Sep 2022",
    end: "Jun 2025",
    highlights: [
      "Currently pursuing a PhD with a focus on deep learning and its real-world applications, particularly in:",
      "Computer Vision",
      "Innovative AI research",
      "Developing novel algorithms for image recognition",
    ],
    tags: ["deep learning", "computer vision", "ai research", "algorithms"],
  },
  {
    degree: "Master's in Artificial Intelligence",
    institution: "University of Paris",
    location: "France",
    logo: "/paris-logo.png", // Replace with your asset path
    start: "Sep 2020",
    end: "Jun 2022",
    highlights: [
      "Completed a comprehensive Master's program focused on cutting-edge AI topics, including:",
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Neural Networks",
    ],
    tags: ["neural networks", "machine learning"],
  },
];

export default function EducationTimeline() {
  return (
    <Card
    title="About Me"
   
  >
    <section className="px-8 py-10">
      <h2 className="text-4xl font-bold text-neon-green mb-10 font-orbitron">
        <span className="text-white">Education</span> Background
      </h2>
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
      </section>
      </Card>
  );
}
