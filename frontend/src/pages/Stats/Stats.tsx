import { lazy, Suspense } from "react";
import { Card } from "../../components/Card";

// Lazy load the GitHubCalendar component
const Dashboard = lazy(() => import("./Dashboard"));

const Stats = () => {
  return (
    <Card title="Stats">
      <Suspense fallback={<div className="h-10">Loading stats...</div>}>
        <Dashboard />
      </Suspense>
    </Card>
  );
};

export default Stats;
