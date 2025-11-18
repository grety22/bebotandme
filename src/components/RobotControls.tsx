import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Bot, Music, BookOpen, Moon, Play, Volume2, 
  Calendar, Clock, Plus, Check 
} from "lucide-react";

export function RobotControls() {
  const [activeCommand, setActiveCommand] = useState<string | null>(null);

  const quickCommands = [
    { id: "story", label: "Story Time", icon: BookOpen, color: "bg-blue-500" },
    { id: "music", label: "Play Music", icon: Music, color: "bg-pink-500" },
    { id: "lullaby", label: "Lullaby", icon: Moon, color: "bg-purple-500" },
    { id: "play", label: "Play Games", icon: Play, color: "bg-green-500" }
  ];

  const schedule = [
    { time: "7:00 AM", activity: "Wake Up Routine", status: "completed" },
    { time: "7:30 AM", activity: "Breakfast Time", status: "completed" },
    { time: "9:00 AM", activity: "Story Time", status: "completed" },
    { time: "12:30 PM", activity: "Lunch Time", status: "completed" },
    { time: "2:00 PM", activity: "Naptime", status: "pending" },
    { time: "3:30 PM", activity: "Snack Time", status: "upcoming" },
    { time: "6:00 PM", activity: "Dinner Time", status: "upcoming" },
    { time: "8:00 PM", activity: "Bedtime Routine", status: "upcoming" }
  ];

  const handleCommand = (commandId: string) => {
    setActiveCommand(commandId);
    setTimeout(() => setActiveCommand(null), 2000);
  };

  const getStatusColor = (status: string) => {
    if (status === "completed") return "text-green-600 bg-green-50 border-green-200";
    if (status === "pending") return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-gray-600 bg-gray-50 border-gray-200";
  };

  const getStatusIcon = (status: string) => {
    if (status === "completed") return <Check className="w-4 h-4" />;
    if (status === "pending") return <Clock className="w-4 h-4 animate-pulse" />;
    return <Calendar className="w-4 h-4" />;
  };

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-purple-600" />
          <h2 className="text-purple-900">Robot Controls</h2>
        </div>
        <Badge className="bg-green-500 text-white border-0">
          <span className="inline-block w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
          Online
        </Badge>
      </div>

      <Tabs defaultValue="commands" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="commands">Quick Commands</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        {/* Quick Commands Tab */}
        <TabsContent value="commands" className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {quickCommands.map((command) => {
              const Icon = command.icon;
              const isActive = activeCommand === command.id;
              
              return (
                <Button
                  key={command.id}
                  onClick={() => handleCommand(command.id)}
                  className={`h-24 flex flex-col items-center justify-center gap-2 ${
                    isActive 
                      ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white" 
                      : "bg-gradient-to-br from-purple-50 to-pink-50 text-purple-900 hover:from-purple-100 hover:to-pink-100"
                  } border-2 ${isActive ? "border-purple-400" : "border-purple-200"}`}
                  variant="outline"
                >
                  <Icon className={`w-6 h-6 ${isActive ? "animate-bounce" : ""}`} />
                  <span>{command.label}</span>
                  {isActive && (
                    <Badge className="absolute top-2 right-2 bg-green-500 text-white border-0 text-xs">
                      Active
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>

          {/* Additional Controls */}
          <div className="space-y-2 pt-4 border-t border-purple-100">
            <h4 className="text-purple-900 mb-3">Additional Controls</h4>
            
            <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-purple-500" />
                <span className="text-gray-900">Volume Level</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">-</Button>
                <Badge variant="outline" className="px-3">60%</Badge>
                <Button variant="outline" size="sm">+</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div className="flex items-center gap-3">
                <Bot className="w-5 h-5 text-purple-500" />
                <span className="text-gray-900">Movement Mode</span>
              </div>
              <Badge className="bg-blue-500 text-white border-0">
                Follow
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-purple-500" />
                <span className="text-gray-900">Night Mode</span>
              </div>
              <Badge variant="outline" className="border-gray-400">
                Off
              </Badge>
            </div>
          </div>

          {/* Emergency Controls */}
          <div className="p-4 rounded-lg bg-red-50 border border-red-200">
            <h4 className="text-red-900 mb-2">Emergency Controls</h4>
            <div className="flex gap-2">
              <Button variant="destructive" size="sm" className="flex-1">
                Stop All Activities
              </Button>
              <Button variant="outline" size="sm" className="flex-1 border-red-300 text-red-700 hover:bg-red-50">
                Call Caregiver
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Schedule Tab */}
        <TabsContent value="schedule" className="space-y-4">
          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add New Schedule Item
          </Button>

          <div className="space-y-2">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border ${getStatusColor(item.status)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(item.status)}
                    <div>
                      <h5 className="text-gray-900">{item.activity}</h5>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`capitalize ${
                      item.status === "completed" 
                        ? "border-green-500 text-green-700"
                        : item.status === "pending"
                        ? "border-yellow-500 text-yellow-700"
                        : "border-gray-500 text-gray-700"
                    }`}
                  >
                    {item.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
            <h4 className="text-purple-900 mb-2">Schedule Overview</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Completed</p>
                <p className="text-green-700">4 tasks</p>
              </div>
              <div>
                <p className="text-gray-600">Pending</p>
                <p className="text-yellow-700">1 task</p>
              </div>
              <div>
                <p className="text-gray-600">Upcoming</p>
                <p className="text-gray-700">3 tasks</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
