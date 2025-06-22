import GitHubCalendar from "react-github-calendar";
import { showNotification } from "../../components/NotificationCard";

const containerClass = "flex flex-col items-center text-[#3aa5fd]";
const imageClass = "rounded-lg shadow-lg max-w-[400px] w-full";

const GithubCalendar = () => {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 w-full max-w-7xl px-4">
        {/* 🧠 Daily.dev Card */}
        <div className={containerClass}>
          <h2 className="text-2xl font-bold mb-4">Daily.dev Card</h2>
          <a
            href="https://app.daily.dev/samrudhkishsanpm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Samrudh's Daily.dev profile"
            onClick={() =>
              showNotification(
                "https://app.daily.dev/samrudhkishsanpm",
                "Visit Samrudh Kishsan P M's Dev Card"
              )
            }
          >
            <img
              src="https://api.daily.dev/devcards/v2/dcrCY9nLXBGvBvyU9y6SU.png?type=wide&r=yzv"
              width="652"
              alt="Samrudh Kishsan's Daily.dev Card"
              loading="lazy"
            />
          </a>
        </div>

        {/* 🧮 LeetCode Stats */}
        <div className={containerClass}>
          <h2 className="text-2xl font-bold mb-4">LeetCode Stats</h2>
          <img
            src="https://leetcard.jacoblin.cool/k-ish-san?theme=dark"
            alt="LeetCode progress card for k-ish-san"
            className={imageClass}
            loading="lazy"
          />
        </div>

        {/* ⏱️ WakaTime Summary */}
        <div className={containerClass}>
          <h2 className="text-2xl font-bold mb-4">WakaTime (Summary)</h2>
          <img
            src="https://github-readme-stats.vercel.app/api/wakatime?username=k_ish_san&theme=dark"
            alt="WakaTime summary for k-ish-san"
            className={imageClass}
            loading="lazy"
          />
        </div>

        {/* 🧠 Languages Used */}
        <div className={containerClass}>
          <h2 className="text-2xl font-bold mb-4">Languages Used</h2>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=k-ish-san&layout=compact&theme=dark"
            alt="Top languages used by k-ish-san"
            className={imageClass}
            loading="lazy"
          />
        </div>

        {/* 🔥 GitHub Streak */}
        <div className={containerClass}>
          <h2 className="text-2xl font-bold mb-4">WakaTime Weekly</h2>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=k-ish-san&theme=dark"
            alt="GitHub streak stats for k-ish-san"
            className={imageClass}
            loading="lazy"
          />
        </div>

        {/* 📆 GitHub Calendar */}
        <div className="flex flex-col items-center font-sans text-[#3aa5fd] col-span-full">
          <h2 className="text-2xl font-orbitron font-bold mb-4">
            GitHub Calendar
          </h2>
          <GitHubCalendar
            username="k-ish-san"
            blockSize={14}
            blockMargin={4}
            fontSize={14}
            showWeekdayLabels
            colorScheme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default GithubCalendar;
