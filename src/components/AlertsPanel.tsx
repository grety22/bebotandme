import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AlertCircle, CheckCircle, Info, TrendingUp } from "lucide-react";

export function AlertsPanel() {
  const alerts = [
    {
      id: 1,
      type: "milestone",
      icon: TrendingUp,
      color: "green",
      title: "New Milestone Achieved!",
      message: "Emma took 5 consecutive steps independently",
      time: "15 minutes ago",
      unread: true
    },
    {
      id: 2,
      type: "alert",
      icon: AlertCircle,
      color: "yellow",
      title: "Naptime Delayed",
      message: "Emma's naptime is 20 minutes past scheduled time",
      time: "32 minutes ago",
      unread: true
    },
    {
      id: 3,
      type: "success",
      icon: CheckCircle,
      color: "blue",
      title: "Feeding Complete",
      message: "Lunch completed - consumed 85% of meal",
      time: "1 hour ago",
      unread: false
    },
    {
      id: 4,
      type: "info",
      icon: Info,
      color: "purple",
      title: "Health Tip",
      message: "Time for outdoor play! Vitamin D is important for development",
      time: "2 hours ago",
      unread: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; icon: string }> = {
      green: { bg: "bg-green-50", text: "text-green-700", icon: "text-green-500" },
      yellow: { bg: "bg-yellow-50", text: "text-yellow-700", icon: "text-yellow-500" },
      blue: { bg: "bg-blue-50", text: "text-blue-700", icon: "text-blue-500" },
      purple: { bg: "bg-purple-50", text: "text-purple-700", icon: "text-purple-500" }
    };
    return colors[color];
  };

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-purple-900">Alerts & Notifications</h2>
        <Button variant="ghost" size="sm">
          Mark all as read
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {alerts.map((alert) => {
          const colors = getColorClasses(alert.color);
          const Icon = alert.icon;
          
          return (
            <div
              key={alert.id}
              className={`relative p-4 rounded-lg ${colors.bg} border border-transparent hover:border-purple-200 transition-all cursor-pointer`}
            >
              {alert.unread && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full"></div>
              )}
              
              <Icon className={`w-6 h-6 ${colors.icon} mb-2`} />
              
              <h3 className={`${colors.text} mb-1`}>{alert.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{alert.message}</p>
              
              <p className="text-xs text-gray-500">{alert.time}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
