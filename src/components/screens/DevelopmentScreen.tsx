import { ProgressStats } from "../ProgressStats";

export function DevelopmentScreen() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-purple-900 mb-2">Development & Progress</h1>
        <p className="text-gray-600">Track milestones and compare against age-group averages</p>
      </div>

      {/* Main Progress Stats Component */}
      <ProgressStats />
    </div>
  );
}
