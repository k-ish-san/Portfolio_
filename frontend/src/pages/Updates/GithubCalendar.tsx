import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl px-4 py-8">
      <div className="flex flex-col items-center dark:text-white">
        <a href="https://app.daily.dev/samrudhkishsanpm">
          <img
            src="https://api.daily.dev/devcards/v2/dcrCY9nLXBGvBvyU9y6SU.png?type=default&r=0xn"
            width="356"
            alt="Samrudh Kishsan P M's Dev Card"
          />
          </a>
          </div>
        {/* LeetCode */}
        <div className="flex flex-col items-center dark:text-white">
          <div className="text-2xl font-bold mb-4">LeetCode Stats</div>
          <img
            src="https://leetcard.jacoblin.cool/k-ish-san?theme=dark"
            alt="LeetCode Stats"
            style={{ maxWidth: 400, width: "100%" }}
            className="rounded-lg shadow"
          />
        </div>

        {/* Wakatime */}
        <div className="flex flex-col items-center dark:text-white">
          <div className="text-2xl font-bold mb-4">Wakatime Stats</div>
          <img
            src="https://github-readme-stats.vercel.app/api/wakatime?username=k_ish_san&theme=dark"
            alt="Wakatime Stats"
            style={{ maxWidth: 400, width: "100%" }}
            className="rounded-lg shadow"
          />
        </div>

        {/* GitHub Calendar */}
        <div className="flex flex-col items-center dark:text-white">
          <div className="text-2xl font-bold mb-4">GitHub Calendar</div>
          <GitHubCalendar
            username="k-ish-san"
            blockSize={14}
            blockMargin={4}
            fontSize={14}
            showWeekdayLabels={true}
            colorScheme={"dark"}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubCalendar;
