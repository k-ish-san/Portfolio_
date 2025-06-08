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
  score?: string;
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
  score = "",
}: EducationItemProps) {
  const isSchoolEducation = degree.includes("Grade");
  const isCollegeEducation =
    degree.includes("B.Tech") || degree.includes("Bachelor");

  return (
    <div className="flex relative z-10 group">
      {/* Timeline dot and vertical line */}
      <div className="flex flex-col items-center w-20 relative">
        {/* Animated glowing dot */}
        <div className="relative">
          {/* Outer glow (only for first item) */}
          {isFirst && (
            <div className="absolute inset-0 rounded-full bg-[#3aa5fd] opacity-20 animate-ping" />
          )}

          {/* Dot with theme-colored border */}
          <div
            className={`relative rounded-full border-4 ${
              isFirst
                ? "border-[#3aa5fd] border-opacity-90"
                : "border-[#3aa5fd] border-opacity-50"
            } w-16 h-16 flex items-center justify-center z-10 bg-sidebar-dark group-hover:border-opacity-100 transition-all duration-300`}
          >
            {/* Inner dot with theme color */}
            <div
              className={`absolute inset-0 rounded-full ${
                isFirst
                  ? "bg-white bg-opacity-20"
                  : "bg-white bg-opacity-10"
              } group-hover:bg-opacity-30 transition-all duration-300`}
            />

            {/* Logo */}
            <img
              src={logo}
              alt={institution}
              className="w-12 h-12 object-contain rounded-full z-20"
            />
          </div>
        </div>

        {/* Vertical line - with theme color gradient */}
        {!isLast && (
          <div className="absolute top-16 bottom-0 w-0.5 h-full">
            <div className="h-full w-full bg-gradient-to-b from-[#3aa5fd] to-gray-500 opacity-80 group-hover:opacity-50 transition-all duration-300" />
          </div>
        )}
      </div>

      {/* Card */}
      <div className="bg-sidebar-dark rounded-xl shadow-lg flex-1 ml-6 p-8 border border-gray-800 hover:border-[#3aa5fd] hover:border-opacity-30 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div>
            <h3 className="text-2xl font-bold text-[#3aa5fd] font-orbitron">
              {isSchoolEducation ? (
                <span className="text-gray-400">{degree}</span>
              ) : isCollegeEducation ? (
                <span>
                  <span className="text-[#3aa5fd]">
                    {degree.split(" in ")[0]}
                  </span>
                  <span className="text-gray-400">
                    {" "}
                    in {degree.split(" in ")[1]}
                  </span>
                </span>
              ) : (
                <span className="text-gray-600">{degree}</span>
              )}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#3aa5fd"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                  clipRule="evenodd"
                />
              </svg>

              <span>{institution}</span>
              {location && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#3aa5fd"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span>{location}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-gray-700 px-4 py-1 rounded-lg mt-3 md:mt-0 hover:bg-[#3aa5fd] hover:bg-opacity-10 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#3aa5fd"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clipRule="evenodd"
              />
            </svg>

            <span>{start}</span>
            <span className="mx-1 text-[#3aa5fd]">→</span>
            <span className="font-bold text-[#3aa5fd]">{end}</span>
          </div>
        </div>

        {/* Score display for school/college */}
        {score && (
          <div className="mb-3">
            <span className="text-[#3aa5fd] font-medium">{score}</span>
          </div>
        )}

        <ul className="text-gray-400 mt-3 mb-3 list-disc list-inside">
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
              className="bg-[#3aa5fd] text-white px-3 py-1 rounded-md text-xs font-semibold hover:bg-[#3aa5fd] hover:bg-opacity-80 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
