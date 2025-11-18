import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { Moon, Utensils, Droplet, Activity } from "lucide-react";

export function RoutineLogs() {
  const sleepData = {
    lastNight: {
      duration: "10.5 hours",
      quality: "Excellent",
      interruptions: 1
    },
    weekAverage: "10.2 hours",
    schedule: [
      { time: "8:00 PM", type: "Bedtime", status: "completed" },
      { time: "10:30 PM", type: "Woke up (brief)", status: "completed" },
      { time: "6:30 AM", type: "Wake up", status: "completed" }
    ]
  };

  const feedingData = {
    today: [
      { time: "7:00 AM", meal: "Breakfast", amount: "90%", items: "Oatmeal, Banana" },
      { time: "10:00 AM", meal: "Snack", amount: "100%", items: "Apple slices, Yogurt" },
      { time: "12:30 PM", meal: "Lunch", amount: "85%", items: "Pasta, Vegetables" },
      { time: "3:00 PM", meal: "Snack", amount: "100%", items: "Crackers, Cheese" }
    ],
    hydration: "1.2L / 1.5L",
    hydrationPercent: 80
  };

  const activitiesData = [
    { time: "9:00 AM", activity: "Story Time", duration: "30 min", engagement: "high" },
    { time: "10:30 AM", activity: "Outdoor Play", duration: "45 min", engagement: "high" },
    { time: "1:30 PM", activity: "Art & Crafts", duration: "40 min", engagement: "medium" },
    { time: "4:00 PM", activity: "Music & Dance", duration: "25 min", engagement: "high" }
  ];

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
      <h2 className="text-purple-900 mb-4">Daily Routine & Health Logs</h2>

      <Tabs defaultValue="sleep" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="sleep">
            <Moon className="w-4 h-4 mr-2" />
            Sleep
          </TabsTrigger>
          <TabsTrigger value="feeding">
            <Utensils className="w-4 h-4 mr-2" />
            Feeding
          </TabsTrigger>
          <TabsTrigger value="activities">
            <Activity className="w-4 h-4 mr-2" />
            Activities
          </TabsTrigger>
        </TabsList>

        {/* Sleep Tab */}
        <TabsContent value="sleep" className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <p className="text-xs text-gray-600 mb-1">Last Night</p>
              <p className="text-blue-900">{sleepData.lastNight.duration}</p>
              <Badge className="mt-2 bg-green-500 text-white border-0 text-xs">
                {sleepData.lastNight.quality}
              </Badge>
            </div>
            <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
              <p className="text-xs text-gray-600 mb-1">Week Average</p>
              <p className="text-purple-900">{sleepData.weekAverage}</p>
              <p className="text-xs text-gray-500 mt-2">Consistent</p>
            </div>
            <div className="p-4 rounded-lg bg-pink-50 border border-pink-200">
              <p className="text-xs text-gray-600 mb-1">Interruptions</p>
              <p className="text-pink-900">{sleepData.lastNight.interruptions}</p>
              <p className="text-xs text-green-600 mt-2">Below average</p>
            </div>
          </div>

          <div>
            <h4 className="text-purple-900 mb-3">Sleep Schedule (Last Night)</h4>
            <div className="space-y-2">
              {sleepData.schedule.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Moon className="w-4 h-4 text-blue-500" />
                    <div>
                      <p className="text-gray-900">{item.type}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-green-500 text-green-700">
                    Completed
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
            <h4 className="text-purple-900 mb-2">AI Insight</h4>
            <p className="text-gray-700 text-sm">
              Odaisa's sleep pattern is excellent. She's consistently meeting recommended sleep duration for her age (10-12 hours). Consider maintaining the current bedtime routine.
            </p>
          </div>
        </TabsContent>

        {/* Feeding Tab */}
        <TabsContent value="feeding" className="space-y-4">
          <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Droplet className="w-5 h-5 text-blue-500" />
                <h4 className="text-gray-900">Hydration Today</h4>
              </div>
              <Badge className="bg-blue-500 text-white border-0">
                {feedingData.hydrationPercent}%
              </Badge>
            </div>
            <Progress value={feedingData.hydrationPercent} className="h-2 mb-2" />
            <p className="text-sm text-gray-600">{feedingData.hydration} consumed</p>
          </div>

          <div>
            <h4 className="text-purple-900 mb-3">Today's Meals</h4>
            <div className="space-y-2">
              {feedingData.today.map((item, index) => (
                <div key={index} className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-green-500" />
                        <h5 className="text-gray-900">{item.meal}</h5>
                      </div>
                      <p className="text-xs text-gray-500 ml-6">{item.time}</p>
                    </div>
                    <Badge className="bg-green-500 text-white border-0">
                      {item.amount}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">{item.items}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="text-xs text-gray-600 mb-1">Average Consumption</p>
              <p className="text-green-900">93.75%</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
              <p className="text-xs text-gray-600 mb-1">Dinner Pending</p>
              <p className="text-yellow-900">6:00 PM</p>
            </div>
          </div>
        </TabsContent>

        {/* Activities Tab */}
        <TabsContent value="activities" className="space-y-4">
          <div className="space-y-2">
            {activitiesData.map((item, index) => {
              const engagementColor = 
                item.engagement === "high" ? "bg-green-500" :
                item.engagement === "medium" ? "bg-yellow-500" : "bg-gray-500";

              return (
                <div key={index} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-purple-500 mt-1" />
                      <div>
                        <h5 className="text-gray-900">{item.activity}</h5>
                        <p className="text-xs text-gray-500">{item.time} · {item.duration}</p>
                      </div>
                    </div>
                    <Badge className={`${engagementColor} text-white border-0 capitalize`}>
                      {item.engagement}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
            <h4 className="text-purple-900 mb-2">Activity Summary</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Total Active Time</p>
                <p className="text-purple-900">2 hours 20 min</p>
              </div>
              <div>
                <p className="text-gray-600">High Engagement</p>
                <p className="text-purple-900">75% of activities</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
