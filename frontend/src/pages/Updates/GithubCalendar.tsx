import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl px-4 mx-4">
          <img src="https://github-readme-stats.vercel.app/api/wakatime?username=k_ish_san" />
        </div>

        <div className=" font-sans w-full sm:max-w-[400px] md:max-w- px-4 light:text-gray-700 dark:text-white">
          <GitHubCalendar
                    username="k-ish-san"
                    blockSize={14}
                    blockMargin={4}
                    fontSize={14}
                    showWeekdayLabels={true}
                    colorScheme={"light"}
          />
        </div>
      </div>
    );
};

export default GithubCalendar;
