import { RoutineLogs } from "../RoutineLogs";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Calendar, Plus, Download } from "lucide-react";

export function RoutinesScreen() {
  const upcomingSchedule = [
    { time: "3:30 PM", activity: "Snack Time", status: "upcoming", color: "yellow" },
    { time: "4:00 PM", activity: "Outdoor Play", status: "upcoming", color: "green" },
    { time: "6:00 PM", activity: "Dinner Time", status: "upcoming", color: "blue" },
    { time: "7:00 PM", activity: "Bath Time", status: "upcoming", color: "purple" },
    { time: "8:00 PM", activity: "Bedtime Routine", status: "upcoming", color: "indigo" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-purple-900 mb-2">Daily Routines</h1>
          <p className="text-gray-600">Track sleep, meals, and daily activities</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-purple-200">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Entry
          </Button>
        </div>
      </div>

      {/* Today's Schedule Overview */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-purple-600" />
          <h2 className="text-purple-900">Today's Remaining Schedule</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
          {upcomingSchedule.map((item, index) => (
            <div key={index} className={`p-3 sm:p-4 rounded-lg ${
              item.color === 'yellow' ? 'bg-yellow-50 border border-yellow-200' :
              item.color === 'green' ? 'bg-green-50 border border-green-200' :
              item.color === 'blue' ? 'bg-blue-50 border border-blue-200' :
              item.color === 'purple' ? 'bg-purple-50 border border-purple-200' :
              'bg-indigo-50 border border-indigo-200'
            }`}>
              <p className="text-xs text-gray-500 mb-1">{item.time}</p>
              <h3 className="text-gray-900 text-sm mb-2">{item.activity}</h3>
              <Badge variant="outline" className="border-gray-400 text-gray-700 text-xs">
                Upcoming
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Main Routine Logs Component */}
      <RoutineLogs />

      {/* Weekly Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <h3 className="text-purple-900 mb-4">Sleep Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Duration</span>
              <span className="text-purple-900">10.2 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Consistency Score</span>
              <Badge className="bg-green-500 text-white border-0">95%</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Quality Rating</span>
              <Badge className="bg-blue-500 text-white border-0">Excellent</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <h3 className="text-purple-900 mb-4">Nutrition Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Meals Completed</span>
              <span className="text-purple-900">95%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Hydration Level</span>
              <Badge className="bg-blue-500 text-white border-0">Good</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">New Foods Tried</span>
              <span className="text-purple-900">3 this week</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <h3 className="text-purple-900 mb-4">Activity Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Active Time</span>
              <span className="text-purple-900">32.5 hrs</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Engagement Level</span>
              <Badge className="bg-green-500 text-white border-0">High</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Variety Score</span>
              <span className="text-purple-900">8/10</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}