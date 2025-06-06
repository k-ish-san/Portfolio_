import React from "react";
import { Card } from "../../components/Card";
const About: React.FC = () => {
    return (
      <Card  title="About Me">
        
    
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Hi, I'm [Your Name]. I'm a passionate developer with a keen
              interest in building modern, user-friendly web applications. My
              journey in technology has always been driven by curiosity and a
              love for problem-solving.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Personal Interests
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Web development and design</li>
              <li>Open source contributions</li>
              <li>Reading tech blogs and books</li>
              <li>Exploring new programming languages</li>
              <li>Outdoor activities and photography</li>
            </ul>
          </div>
       
      </Card>
    );
};

export default About;
