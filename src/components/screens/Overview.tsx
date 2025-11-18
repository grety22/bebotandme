import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../../contexts/LanguageContext";
import { 
  TrendingUp, 
  Moon, 
  Utensils, 
  Activity, 
  AlertCircle,
  Video,
  Heart,
  Award
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function Overview() {
  const { t } = useLanguage();
  
  const quickStats = [
    { label: t("overview.sleep"), value: "10.5 hrs", icon: Moon, color: "bg-blue-500", change: "+0.3 hrs" },
    { label: t("overview.meals"), value: "4/5", icon: Utensils, color: "bg-green-500", change: "On track" },
    { label: t("overview.active"), value: "4.5 hrs", icon: Activity, color: "bg-pink-500", change: "+12%" },
    { label: t("overview.development"), value: "92%", icon: TrendingUp, color: "bg-purple-500", change: "+5%" }
  ];

  const recentAlerts = [
    { type: "milestone", message: "Odaisa took 5 consecutive steps!", time: "15 min ago", color: "green" },
    { type: "alert", message: "Naptime delayed by 20 minutes", time: "32 min ago", color: "yellow" },
    { type: "success", message: "Lunch completed - 85% consumed", time: "1 hour ago", color: "blue" }
  ];

  const weekActivity = [
    { day: "Mon", hours: 4.2 },
    { day: "Tue", hours: 4.5 },
    { day: "Wed", hours: 4.0 },
    { day: "Thu", hours: 5.2 },
    { day: "Fri", hours: 4.5 },
    { day: "Sat", hours: 5.8 },
    { day: "Sun", hours: 5.0 }
  ];

  const sleepPattern = [
    { day: "Mon", hours: 10.2 },
    { day: "Tue", hours: 10.5 },
    { day: "Wed", hours: 10.0 },
    { day: "Thu", hours: 10.8 },
    { day: "Fri", hours: 10.5 },
    { day: "Sat", hours: 10.3 },
    { day: "Sun", hours: 10.5 }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-purple-900 mb-2">{t("overview.title")}</h1>
        <p className="text-gray-600 text-sm sm:text-base">{t("overview.subtitle")}</p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <Badge variant="outline" className="border-green-500 text-green-700 text-xs">
                  {stat.change}
                </Badge>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mb-1">{stat.label}</p>
              <p className="text-purple-900 text-lg sm:text-xl">{stat.value}</p>
            </Card>
          );
        })}
      </div>

      {/* Live Feed & Current Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Live Camera */}
        <Card className="lg:col-span-2 p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-purple-600" />
              <h2 className="text-purple-900">{t("overview.liveFeed")}</h2>
            </div>
            <Badge className="bg-red-500 text-white animate-pulse">
              <span className="inline-block w-2 h-2 bg-white rounded-full mr-1"></span>
              {t("common.live")}
            </Badge>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1608365151231-7dbed3034787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc21pbGluZ3xlbnwxfHx8fDE3NjM0NDE2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Camera feed"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm rounded px-3 py-1 text-white text-sm">
              Playroom · 2:34 PM
            </div>
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-gray-600 text-sm">{t("overview.currentActivity")}</p>
              <p className="text-purple-700">{t("overview.playingWithToys")}</p>
            </div>
          </div>
        </Card>

        {/* Recent Milestones */}
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-purple-600" />
            <h2 className="text-purple-900">{t("overview.milestones")}</h2>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 border border-green-200">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🎉</span>
                </div>
                <h3 className="text-green-900">{t("overview.firstSteps")}</h3>
              </div>
              <p className="text-gray-600 text-sm">{t("overview.tookSteps")}</p>
              <p className="text-xs text-gray-500 mt-1">2 {t("overview.daysAgo")}</p>
            </div>

            <div className="p-3 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🗣️</span>
                </div>
                <h3 className="text-purple-900">{t("overview.newWords")}</h3>
              </div>
              <p className="text-gray-600 text-sm">{t("overview.wordsThisWeek")}</p>
              <p className="text-xs text-gray-500 mt-1">{t("overview.ongoing")}</p>
            </div>

            <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🎨</span>
                </div>
                <h3 className="text-yellow-900">{t("overview.drawing")}</h3>
              </div>
              <p className="text-gray-600 text-sm">{t("overview.firstCircle")}</p>
              <p className="text-xs text-gray-500 mt-1">5 {t("overview.daysAgo")}</p>
            </div>
          </div>

          <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            {t("overview.viewAllMilestones")}
          </Button>
        </Card>
      </div>

      {/* Activity & Sleep Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <h2 className="text-purple-900 mb-4">Weekly Activity Hours</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weekActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#ec4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <h2 className="text-purple-900 mb-4">Weekly Sleep Pattern</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sleepPattern}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
                <XAxis dataKey="day" />
                <YAxis domain={[9, 12]} />
                <Tooltip />
                <Line type="monotone" dataKey="hours" stroke="#a78bfa" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Recent Alerts */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-purple-900">Recent Alerts & Updates</h2>
          <Button variant="ghost" size="sm">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentAlerts.map((alert, index) => (
            <div key={index} className={`p-4 rounded-lg ${
              alert.color === 'green' ? 'bg-green-50 border border-green-200' :
              alert.color === 'yellow' ? 'bg-yellow-50 border border-yellow-200' :
              'bg-blue-50 border border-blue-200'
            }`}>
              <div className="flex items-start gap-2">
                <AlertCircle className={`w-5 h-5 ${
                  alert.color === 'green' ? 'text-green-500' :
                  alert.color === 'yellow' ? 'text-yellow-500' :
                  'text-blue-500'
                }`} />
                <div>
                  <p className="text-gray-900 text-sm mb-1">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}