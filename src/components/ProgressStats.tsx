import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";
import { TrendingUp, Award, Target } from "lucide-react";

export function ProgressStats() {
  // Growth data over time
  const growthData = [
    { month: "Jul", height: 82, weight: 11.2 },
    { month: "Aug", height: 83, weight: 11.5 },
    { month: "Sep", height: 85, weight: 11.8 },
    { month: "Oct", height: 87, weight: 12.1 },
    { month: "Nov", height: 89, weight: 12.5 }
  ];

  // Developmental milestones comparison
  const developmentData = [
    {
      category: "Language",
      emma: 140,
      average: 100,
      percentile: 92
    },
    {
      category: "Motor Skills",
      emma: 115,
      average: 100,
      percentile: 78
    },
    {
      category: "Social",
      emma: 130,
      average: 100,
      percentile: 88
    },
    {
      category: "Cognitive",
      emma: 125,
      average: 100,
      percentile: 85
    },
    {
      category: "Self-Care",
      emma: 110,
      average: 100,
      percentile: 72
    }
  ];

  // Weekly activity tracking
  const activityData = [
    { day: "Mon", play: 3.5, outdoor: 2, learning: 1.5 },
    { day: "Tue", play: 4, outdoor: 1.5, learning: 2 },
    { day: "Wed", play: 3, outdoor: 2.5, learning: 1.5 },
    { day: "Thu", play: 4.5, outdoor: 2, learning: 2.5 },
    { day: "Fri", play: 3.5, outdoor: 3, learning: 1.5 },
    { day: "Sat", play: 5, outdoor: 3.5, learning: 1 },
    { day: "Sun", play: 4.5, outdoor: 3, learning: 1.5 }
  ];

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-purple-900 mb-1">Progress & Development Stats</h2>
          <p className="text-gray-500">AI-powered insights and milestone tracking</p>
        </div>
        <Badge className="bg-gradient-to-r from-pink-400 to-purple-400 text-white border-0">
          <Award className="w-3 h-3 mr-1" />
          Advanced Analytics
        </Badge>
      </div>

      <Tabs defaultValue="milestones" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="milestones">Developmental Milestones</TabsTrigger>
          <TabsTrigger value="growth">Growth Tracking</TabsTrigger>
          <TabsTrigger value="activities">Weekly Activities</TabsTrigger>
        </TabsList>

        {/* Developmental Milestones */}
        <TabsContent value="milestones" className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            {developmentData.map((item) => (
              <div key={item.category} className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                <p className="text-sm text-gray-600 mb-1">{item.category}</p>
                <p className="text-purple-900 mb-1">{item.emma > item.average ? "+" : ""}{item.emma - item.average}%</p>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <p className="text-xs text-gray-500">{item.percentile}th percentile</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={developmentData}>
                <PolarGrid stroke="#e9d5ff" />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis angle={90} domain={[0, 150]} />
                <Radar name="Emma" dataKey="emma" stroke="#ec4899" fill="#ec4899" fillOpacity={0.6} />
                <Radar name="Age Average" dataKey="average" stroke="#a78bfa" fill="#a78bfa" fillOpacity={0.3} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-green-600" />
                <h3 className="text-green-900">Recent Achievement</h3>
              </div>
              <p className="text-gray-700">First independent steps</p>
              <p className="text-xs text-gray-500 mt-1">2 days ago</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h3 className="text-blue-900">AI Prediction</h3>
              </div>
              <p className="text-gray-700">Full sentence speech</p>
              <p className="text-xs text-gray-500 mt-1">Expected in 3-4 weeks</p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-purple-600" />
                <h3 className="text-purple-900">Next Milestone</h3>
              </div>
              <p className="text-gray-700">Counting to 10</p>
              <p className="text-xs text-gray-500 mt-1">In progress - 60%</p>
            </div>
          </div>
        </TabsContent>

        {/* Growth Tracking */}
        <TabsContent value="growth">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-purple-900 mb-4">Height Progress</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[75, 95]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="height" stroke="#ec4899" strokeWidth={3} dot={{ fill: "#ec4899", r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                <p className="text-sm text-gray-600">Growth Rate</p>
                <p className="text-pink-700">+7 cm in 5 months (above average)</p>
              </div>
            </div>

            <div>
              <h3 className="text-purple-900 mb-4">Weight Progress</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[10, 14]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="weight" stroke="#a78bfa" strokeWidth={3} dot={{ fill: "#a78bfa", r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600">Growth Rate</p>
                <p className="text-purple-700">+1.3 kg in 5 months (healthy)</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Weekly Activities */}
        <TabsContent value="activities">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="play" fill="#ec4899" name="Playtime (hrs)" />
                <Bar dataKey="outdoor" fill="#a78bfa" name="Outdoor (hrs)" />
                <Bar dataKey="learning" fill="#60a5fa" name="Learning (hrs)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-pink-50">
              <p className="text-sm text-gray-600 mb-1">Total Playtime This Week</p>
              <p className="text-pink-700">28.5 hours</p>
              <p className="text-xs text-green-600 mt-1">↑ 12% from last week</p>
            </div>
            <div className="p-4 rounded-lg bg-purple-50">
              <p className="text-sm text-gray-600 mb-1">Outdoor Activities</p>
              <p className="text-purple-700">17.5 hours</p>
              <p className="text-xs text-green-600 mt-1">↑ 8% from last week</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50">
              <p className="text-sm text-gray-600 mb-1">Learning Time</p>
              <p className="text-blue-700">11.5 hours</p>
              <p className="text-xs text-green-600 mt-1">↑ 15% from last week</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
