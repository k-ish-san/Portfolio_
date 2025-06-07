import GitHubCalendar from "react-github-calendar";
import { Card } from "../../components/Card";

const GithubCalendar = () => {
    return (
      <Card>
    <div>
      <img src="https://github-readme-stats.vercel.app/api/wakatime?username=your-wakatime-username" />
      <div className="w-full max-w-4xl px-4">
        <GitHubCalendar
          username="k-ish-san"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          colorScheme={
            document.documentElement.classList.contains("dark")
              ? "dark"
              : "light"
          }
        />
      </div>
            </div>
      </Card>
  );
};

export default GithubCalendar;
