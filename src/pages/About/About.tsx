import React from "react";
import { Card } from "../../components/Card";
import pc from "../../assets/pc.svg";

const About: React.FC = () => {
  return (
    <Card title="About Me">
      <section
        aria-labelledby="about-intro"
        className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-6 items-center mb-6"
      >
        <div className="flex justify-center md:justify-start">
          <img
            src={pc}
            loading="lazy"
            role="img"
            aria-label="Illustration of a person using a computer"
            alt="Developer illustration representing Samrudh Kishsan P M"
            className="w-32 md:w-40 lg:w-48 aspect-square object-contain rounded-xl"
          />
        </div>
        <p
          id="about-intro"
          className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed"
        >
          Hi, I'm <strong className="font-semibold">Samrudh</strong>. I'm a
          passionate developer with a keen interest in building modern,
          user-friendly web applications. My journey in technology has always
          been driven by curiosity and a love for problem-solving.
        </p>
      </section>

      <section aria-labelledby="personal-interests">
        <h2
          id="personal-interests"
          className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3"
        >
          Personal Interests
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Web development and design</li>
          <li>Open source contributions</li>
          <li>Reading tech blogs and books</li>
          <li>Solving puzzles</li>
        </ul>
      </section>
    </Card>
  );
};

export default About;
