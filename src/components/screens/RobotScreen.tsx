import { RobotControls } from "../RobotControls";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Bot, Activity, Battery, Wifi, MapPin, Settings, X } from "lucide-react";
import { useState } from "react";
import { RobotSettingsScreen } from "./RobotSettingsScreen";

export function RobotScreen() {
  const [showSettings, setShowSettings] = useState(false);

  const robotStatus = {
    status: "online",
    battery: 85,
    location: "Playroom",
    currentActivity: "Following Odaisa",
    uptime: "5 hours 23 minutes",
    lastMaintenance: "Nov 10, 2024"
  };

  const activityLog = [
    { time: "2:34 PM", activity: "Playing music - 'Twinkle Twinkle Little Star'", duration: "5 min" },
    { time: "1:45 PM", activity: "Story time - 'The Very Hungry Caterpillar'", duration: "12 min" },
    { time: "12:30 PM", activity: "Lunch supervision", duration: "25 min" },
    { time: "11:00 AM", activity: "Outdoor play monitoring", duration: "45 min" },
    { time: "9:00 AM", activity: "Story time - 'Where the Wild Things Are'", duration: "15 min" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-purple-900 mb-2">Robot Controls</h1>
          <p className="text-gray-600">Command and schedule your AI childcare assistant</p>
        </div>
        <Button variant="outline" className="border-purple-200" onClick={() => setShowSettings(true)}>
          <Settings className="w-4 h-4 mr-2" />
          Robot Settings
        </Button>
      </div>

      {/* Robot Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Bot className="w-8 h-8 text-purple-500" />
            <Badge className="bg-green-500 text-white border-0">
              <span className="inline-block w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
              {robotStatus.status}
            </Badge>
          </div>
          <p className="text-xs text-gray-500 mb-1">Robot Status</p>
          <p className="text-purple-900">{robotStatus.currentActivity}</p>
        </Card>

        <Card className="p-4 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Battery className="w-8 h-8 text-green-500" />
            <Badge className={`${
              robotStatus.battery > 50 ? 'bg-green-500' : 
              robotStatus.battery > 20 ? 'bg-yellow-500' : 'bg-red-500'
            } text-white border-0`}>
              {robotStatus.battery}%
            </Badge>
          </div>
          <p className="text-xs text-gray-500 mb-1">Battery Level</p>
          <p className="text-gray-900">Good Charge</p>
        </Card>

        <Card className="p-4 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <MapPin className="w-8 h-8 text-blue-500" />
            <Wifi className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-xs text-gray-500 mb-1">Current Location</p>
          <p className="text-gray-900">{robotStatus.location}</p>
        </Card>

        <Card className="p-4 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-8 h-8 text-pink-500" />
          </div>
          <p className="text-xs text-gray-500 mb-1">Active Time Today</p>
          <p className="text-gray-900">{robotStatus.uptime}</p>
        </Card>
      </div>

      {/* Main Robot Controls Component */}
      <RobotControls />

      {/* Activity Log */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
        <h2 className="text-purple-900 mb-4">Today's Activity Log</h2>
        
        <div className="space-y-3">
          {activityLog.map((log, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div>
                  <p className="text-gray-900">{log.activity}</p>
                  <p className="text-xs text-gray-500">{log.time}</p>
                </div>
              </div>
              <Badge variant="outline" className="border-purple-300 text-purple-700">
                {log.duration}
              </Badge>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full mt-4 border-purple-200 hover:bg-purple-50">
          View Full Activity History
        </Button>
      </Card>

      {/* Maintenance Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <h3 className="text-purple-900 mb-4">Maintenance & Updates</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last Maintenance</span>
              <span className="text-gray-900">{robotStatus.lastMaintenance}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Software Version</span>
              <Badge variant="outline" className="border-green-500 text-green-700">v2.4.1</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Next Update</span>
              <span className="text-gray-900">Available Now</span>
            </div>
          </div>
          <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            Update Software
          </Button>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <h3 className="text-purple-900 mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start border-purple-200 hover:bg-purple-50">
              Calibrate Sensors
            </Button>
            <Button variant="outline" className="w-full justify-start border-purple-200 hover:bg-purple-50">
              Test Audio System
            </Button>
            <Button variant="outline" className="w-full justify-start border-purple-200 hover:bg-purple-50">
              Reset to Home Position
            </Button>
            <Button variant="outline" className="w-full justify-start border-red-200 hover:bg-red-50 text-red-700">
              Emergency Stop
            </Button>
          </div>
        </Card>
      </div>

      {/* Robot Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-white border-b border-purple-100 p-4 sm:p-6 flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="text-purple-900">Robot Settings</h2>
                <p className="text-xs sm:text-sm text-gray-600">Configure your AI childcare assistant</p>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowSettings(false)}
                className="hover:bg-purple-100 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0 flex items-center justify-center"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-purple-700" />
              </Button>
            </div>
            <div className="overflow-y-auto modal-scrollbar p-4 sm:p-6 flex-1">
              <RobotSettingsScreen onClose={() => setShowSettings(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}