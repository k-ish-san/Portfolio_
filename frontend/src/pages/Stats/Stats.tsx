import { lazy, Suspense } from "react";
import { Card } from "../../components/Card";

// Lazy load the GitHubCalendar component
const GitHubCalendar = lazy(() => import("./GithubCalendar"));

const Stats = () => {
  return (
    <Card title="Stats">
      <Suspense fallback={<div className="h-10">Loading stats...</div>}>
        <GitHubCalendar />
      </Suspense>
    </Card>
  );
};

export default Stats;
