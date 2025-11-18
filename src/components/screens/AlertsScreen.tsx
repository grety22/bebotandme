import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  AlertCircle, 
  CheckCircle, 
  Info, 
  TrendingUp,
  Bell,
  BellOff,
  Settings,
  Shield,
  Activity,
  Heart
} from "lucide-react";

export function AlertsScreen() {
  const alerts = [
    {
      id: 1,
      type: "milestone",
      icon: TrendingUp,
      color: "green",
      title: "New Milestone Achieved!",
      message: "Odaisa took 5 consecutive steps independently",
      time: "15 minutes ago",
      unread: true,
      priority: "high"
    },
    {
      id: 2,
      type: "alert",
      icon: AlertCircle,
      color: "yellow",
      title: "Naptime Delayed",
      message: "Odaisa's naptime is 20 minutes past scheduled time",
      time: "32 minutes ago",
      unread: true,
      priority: "medium"
    },
    {
      id: 3,
      type: "success",
      icon: CheckCircle,
      color: "blue",
      title: "Feeding Complete",
      message: "Lunch completed - consumed 85% of meal",
      time: "1 hour ago",
      unread: false,
      priority: "low"
    },
    {
      id: 4,
      type: "info",
      icon: Info,
      color: "purple",
      title: "Health Tip",
      message: "Time for outdoor play! Vitamin D is important for development",
      time: "2 hours ago",
      unread: false,
      priority: "low"
    },
    {
      id: 5,
      type: "alert",
      icon: AlertCircle,
      color: "red",
      title: "Motion Detected",
      message: "Unusual activity detected in nursery at 3:45 AM",
      time: "10 hours ago",
      unread: false,
      priority: "high"
    },
    {
      id: 6,
      type: "success",
      icon: Activity,
      color: "green",
      title: "Activity Goal Reached",
      message: "Odaisa has reached today's outdoor play goal of 2 hours",
      time: "3 hours ago",
      unread: false,
      priority: "low"
    }
  ];

  const safetyAlerts = [
    {
      id: 1,
      type: "Fall Detection",
      status: "Armed",
      lastTriggered: "Never",
      enabled: true
    },
    {
      id: 2,
      type: "Cry Detection",
      status: "Armed",
      lastTriggered: "2 days ago",
      enabled: true
    },
    {
      id: 3,
      type: "Temperature Alert",
      status: "Armed",
      lastTriggered: "Never",
      enabled: true
    },
    {
      id: 4,
      type: "Motion in Room",
      status: "Armed",
      lastTriggered: "Today, 3:45 AM",
      enabled: true
    }
  ];

  const notificationSettings = [
    { name: "Milestone Achievements", enabled: true },
    { name: "Safety Alerts", enabled: true },
    { name: "Routine Updates", enabled: true },
    { name: "Health Tips", enabled: false },
    { name: "Robot Status", enabled: true },
    { name: "Low Battery Warnings", enabled: true }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; icon: string; border: string }> = {
      green: { bg: "bg-green-50", text: "text-green-700", icon: "text-green-500", border: "border-green-200" },
      yellow: { bg: "bg-yellow-50", text: "text-yellow-700", icon: "text-yellow-500", border: "border-yellow-200" },
      blue: { bg: "bg-blue-50", text: "text-blue-700", icon: "text-blue-500", border: "border-blue-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-700", icon: "text-purple-500", border: "border-purple-200" },
      red: { bg: "bg-red-50", text: "text-red-700", icon: "text-red-500", border: "border-red-200" }
    };
    return colors[color];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-purple-900 mb-2">Alerts & Notifications</h1>
          <p className="text-gray-600">Monitor important events and safety alerts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-purple-200">
            <Settings className="w-4 h-4 mr-2" />
            Alert Settings
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            Mark All as Read
          </Button>
        </div>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card className="p-4 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Bell className="w-8 h-8 text-purple-500" />
            <Badge className="bg-red-500 text-white border-0">2</Badge>
          </div>
          <p className="text-xs text-gray-500 mb-1">Unread Alerts</p>
          <p className="text-purple-900">2 New</p>
        </Card>

        <Card className="p-4 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-8 h-8 text-green-500" />
            <Badge className="bg-green-500 text-white border-0">Active</Badge>
          </div>
          <p className="text-xs text-gray-500 mb-1">Safety Monitoring</p>
          <p className="text-gray-900">All Systems Ok</p>
        </Card>

        <Card className="p-4 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 text-blue-500" />
          </div>
          <p className="text-xs text-gray-500 mb-1">Alerts Today</p>
          <p className="text-gray-900">6 Notifications</p>
        </Card>

        <Card className="p-4 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Heart className="w-8 h-8 text-pink-500" />
          </div>
          <p className="text-xs text-gray-500 mb-1">Milestones This Week</p>
          <p className="text-gray-900">3 Achievements</p>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Alerts</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* All Alerts Tab */}
        <TabsContent value="all" className="space-y-3 mt-6">
          {alerts.map((alert) => {
            const colors = getColorClasses(alert.color);
            const Icon = alert.icon;
            
            return (
              <Card key={alert.id} className={`p-4 bg-white/80 backdrop-blur-sm border ${colors.border} shadow-lg hover:shadow-xl transition-all`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${colors.bg}`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className={`${colors.text} mb-1`}>{alert.title}</h3>
                        <p className="text-gray-700 text-sm">{alert.message}</p>
                      </div>
                      {alert.unread && (
                        <div className="w-2 h-2 bg-pink-500 rounded-full ml-2 mt-1"></div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <p className="text-xs text-gray-500">{alert.time}</p>
                      <Badge variant="outline" className={`text-xs ${
                        alert.priority === 'high' ? 'border-red-500 text-red-700' :
                        alert.priority === 'medium' ? 'border-yellow-500 text-yellow-700' :
                        'border-gray-500 text-gray-700'
                      }`}>
                        {alert.priority} priority
                      </Badge>
                      <div className="flex gap-2 ml-auto">
                        <Button variant="ghost" size="sm" className="h-7 text-xs">
                          View Details
                        </Button>
                        {alert.unread && (
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            Mark Read
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </TabsContent>

        {/* Safety Tab */}
        <TabsContent value="safety" className="space-y-6 mt-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
            <h2 className="text-purple-900 mb-4">Active Safety Monitors</h2>
            
            <div className="space-y-3">
              {safetyAlerts.map((safety) => (
                <div key={safety.id} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <div>
                      <h3 className="text-gray-900">{safety.type}</h3>
                      <p className="text-sm text-gray-600">Last triggered: {safety.lastTriggered}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={`${safety.enabled ? 'bg-green-500' : 'bg-gray-400'} text-white border-0`}>
                      {safety.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-red-200 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <h3 className="text-red-900">Emergency Alert Settings</h3>
            </div>
            <p className="text-gray-700 mb-4">Configure who gets notified in case of emergency situations</p>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Configure Emergency Alerts
            </Button>
          </Card>
        </TabsContent>

        {/* Milestones Tab */}
        <TabsContent value="milestones" className="space-y-3 mt-6">
          {alerts.filter(a => a.type === 'milestone').map((alert) => {
            const colors = getColorClasses(alert.color);
            const Icon = alert.icon;
            
            return (
              <Card key={alert.id} className={`p-6 bg-white/80 backdrop-blur-sm border ${colors.border} shadow-lg`}>
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl ${colors.bg}`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`${colors.text} mb-1 text-lg`}>{alert.title}</h3>
                    <p className="text-gray-700 mb-3">{alert.message}</p>
                    <p className="text-sm text-gray-500">{alert.time}</p>
                    
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="border-purple-200">
                        Share Achievement
                      </Button>
                      <Button variant="outline" size="sm" className="border-purple-200">
                        View Progress
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}

          {alerts.filter(a => a.type === 'milestone').length === 0 && (
            <Card className="p-12 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg text-center">
              <TrendingUp className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No milestone notifications yet</p>
            </Card>
          )}
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6 mt-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
            <h2 className="text-purple-900 mb-4">Notification Preferences</h2>
            
            <div className="space-y-3">
              {notificationSettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
                  <div className="flex items-center gap-3">
                    {setting.enabled ? (
                      <Bell className="w-5 h-5 text-purple-500" />
                    ) : (
                      <BellOff className="w-5 h-5 text-gray-400" />
                    )}
                    <span className="text-gray-900">{setting.name}</span>
                  </div>
                  <Badge className={`${setting.enabled ? 'bg-green-500' : 'bg-gray-400'} text-white border-0`}>
                    {setting.enabled ? 'Enabled' : 'Disabled'}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
            <h3 className="text-purple-900 mb-4">Delivery Methods</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-gray-900">Push Notifications</span>
                <Badge className="bg-green-500 text-white border-0">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-gray-900">Email Alerts</span>
                <Badge className="bg-green-500 text-white border-0">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-gray-900">SMS (Critical Only)</span>
                <Badge className="bg-green-500 text-white border-0">Enabled</Badge>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}