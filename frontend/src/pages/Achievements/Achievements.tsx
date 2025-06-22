import React from "react";
import { Card } from "../../components/Card";

const Achievements: React.FC = () => {
  return (
    <Card title="Achievements">
      <section aria-labelledby="achievements-heading">
        <h2 id="achievements-heading" className="sr-only">
          Achievements
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
          Coming soon!
        </p>
      </section>
    </Card>
  );
};

export default Achievements;
