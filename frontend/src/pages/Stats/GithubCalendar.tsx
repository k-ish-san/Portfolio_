
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <div className="w-full flex justify-center bg-zinc-950 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 w-full max-w-7xl px-4">
        {/* 🧠 Daily.dev Card */}
        <div className="flex flex-col items-center dark:text-white">
          <div className="text-2xl font-bold mb-4">Daily.dev Card</div>
          <a
            href="https://app.daily.dev/samrudhkishsanpm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://api.daily.dev/devcards/v2/dcrCY9nLXBGvBvyU9y6SU.png?type=default&r=0xn"
              width="356"
              alt="Samrudh Kishsan P M's Dev Card"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>

        {/* 🧮 LeetCode Stats */}
        <div className="flex flex-col items-center dark:text-white">
          <div className="text-2xl font-bold mb-4">LeetCode Stats</div>
          <img
            src="https://leetcard.jacoblin.cool/k-ish-san?theme=dark"
            alt="LeetCode Stats"
            className="rounded-lg shadow-lg max-w-[400px] w-full"
          />
        </div>

        {/* ⏱️ WakaTime Summary Stats */}
        <div className="flex flex-col items-center dark:text-white">
          <div className="text-2xl font-bold mb-4">WakaTime (Summary)</div>
          <img
            src="https://github-readme-stats.vercel.app/api/wakatime?username=k_ish_san&theme=dark"
            alt="WakaTime Summary"
            className="rounded-lg shadow-lg max-w-[400px] w-full"
          />
        </div>

        {/* ⏳ WakaTime Language Stats */}
        <div className="flex flex-col items-center dark:text-white">
          <div className="text-2xl font-bold mb-4">Languages Used</div>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=k-ish-san&layout=compact&theme=dark"
            alt="Most Used Languages"
            className="rounded-lg shadow-lg max-w-[400px] w-full"
          />
        </div>

        {/* 🕒 WakaTime Weekly Activity */}
        <div className="flex flex-col items-center dark:text-white">
          <div className="text-2xl font-bold mb-4">WakaTime Weekly</div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=k-ish-san&theme=dark"
            alt="GitHub Streak"
            className="rounded-lg shadow-lg max-w-[400px] w-full"
          />
        </div>

        {/* 📆 GitHub Calendar */}
        <div className="flex flex-col items-center font-sans dark:text-white col-span-full">
          <div className="text-2xl font-orbitron font-bold mb-4">GitHub Calendar</div>
          <GitHubCalendar
            username="k-ish-san"
            blockSize={14}
            blockMargin={4}
            fontSize={14}
            showWeekdayLabels={true}
            colorScheme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default GithubCalendar;
