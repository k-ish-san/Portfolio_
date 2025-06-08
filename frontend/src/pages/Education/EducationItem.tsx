// src/components/EducationItem.tsx

export interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  logo: string;
  start: string;
  end: string;
  highlights: string[];
  tags: string[];
  isFirst?: boolean;
  isLast?: boolean;
  score?: string; // Added new optional prop
}

export default function EducationItem({
  degree,
  institution,
  location,
  logo,
  start,
  end,
  highlights,
  tags,
  isFirst = false,
  isLast = false,
  score = "", // Default empty string
}: EducationItemProps) {
  const isSchoolEducation = degree.includes("Grade");
  const isCollegeEducation =
    degree.includes("B.Tech") || degree.includes("Bachelor");

  return (
    <div className="flex relative z-10">
      {/* Timeline dot and logo */}
      <div className="flex flex-col items-center w-20">
        <div
          className={`rounded-full border-4 ${
            isFirst ? "border-neon-green" : "border-gray-700"
          } bg-sidebar-dark w-16 h-16 flex items-center justify-center z-10`}
        >
          <img
            src={logo}
            alt={institution}
            className="w-12 h-12 object-contain rounded-full"
          />
        </div>
        {!isLast && <div className="flex-1 w-1 bg-gray-700 mt-1" />}
      </div>

      {/* Card */}
      <div className="bg-sidebar-dark rounded-xl shadow-lg flex-1 ml-6 p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div>
            <h3 className="text-2xl font-bold text-neon-green font-orbitron">
              {isSchoolEducation ? (
                <span className="text-white">{degree}</span>
              ) : isCollegeEducation ? (
                <span>
                  <span className="text-neon-green">
                    {degree.split(" in ")[0]}
                  </span>
                  <span className="text-white">
                    {" "}
                    in {degree.split(" in ")[1]}
                  </span>
                </span>
              ) : (
                <span className="text-white">{degree}</span>
              )}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
              <i className="fa-solid fa-university"></i>
              <span>{institution}</span>
              {location && (
                <>
                  <i className="fa-solid fa-location-dot ml-3"></i>
                  <span>{location}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-gray-900 px-4 py-1 rounded-lg mt-3 md:mt-0">
            <i className="fa-regular fa-calendar"></i>
            <span>{start}</span>
            <span className="mx-1">→</span>
            <span className="font-bold text-white">{end}</span>
          </div>
        </div>

        {/* Score display for school/college */}
        {score && (
          <div className="mb-3">
            <span className="text-gray-300 font-medium">{score}</span>
          </div>
        )}

        <ul className="text-gray-200 mt-3 mb-3 list-disc list-inside">
          {highlights.map((line, idx) => (
            <li key={idx} className={idx === 0 ? "mb-1 font-medium" : ""}>
              {line}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-neon-green text-sidebar-dark px-3 py-1 rounded-md text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
