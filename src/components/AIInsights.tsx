import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Sparkles, Brain, TrendingUp, Lightbulb, MessageSquare } from "lucide-react";

export function AIInsights() {
  const insights = [
    {
      id: 1,
      type: "recommendation",
      icon: Lightbulb,
      title: "Activity Recommendation",
      description: "Based on Odaisa's progress, consider introducing simple counting games. She's showing advanced cognitive skills and is ready for numbers 1-10.",
      priority: "high",
      color: "yellow"
    },
    {
      id: 2,
      type: "achievement",
      icon: TrendingUp,
      title: "Language Development",
      description: "Odaisa's vocabulary has grown by 15 new words this week! She's now using 2-3 word combinations consistently, which is excellent for her age.",
      priority: "success",
      color: "green"
    },
    {
      id: 3,
      type: "pattern",
      icon: Brain,
      title: "Sleep Pattern Analysis",
      description: "AI detected consistent bedtime routine success. Odaisa falls asleep 15 minutes faster when story time is included. Consider maintaining this routine.",
      priority: "info",
      color: "blue"
    },
    {
      id: 4,
      type: "tip",
      icon: Sparkles,
      title: "Developmental Tip",
      description: "Encourage more outdoor activities. Studies show 30-60 minutes of outdoor play per day enhances motor skill development by up to 25%.",
      priority: "medium",
      color: "purple"
    }
  ];

  const suggestions = [
    "Introduce finger painting activities",
    "Practice colors with everyday objects",
    "Simple puzzle games (3-5 pieces)",
    "Music and rhythm activities",
    "Interactive reading sessions"
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      yellow: { 
        bg: "bg-yellow-50", 
        border: "border-yellow-200", 
        text: "text-yellow-900",
        icon: "text-yellow-500" 
      },
      green: { 
        bg: "bg-green-50", 
        border: "border-green-200", 
        text: "text-green-900",
        icon: "text-green-500" 
      },
      blue: { 
        bg: "bg-blue-50", 
        border: "border-blue-200", 
        text: "text-blue-900",
        icon: "text-blue-500" 
      },
      purple: { 
        bg: "bg-purple-50", 
        border: "border-purple-200", 
        text: "text-purple-900",
        icon: "text-purple-500" 
      }
    };
    return colors[color];
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main AI Insights */}
      <div className="lg:col-span-2">
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <div>
                <h2 className="text-purple-900">AI Insights & Recommendations</h2>
                <p className="text-gray-500 text-sm">Personalized tips powered by machine learning</p>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              4 New
            </Badge>
          </div>

          <div className="space-y-4">
            {insights.map((insight) => {
              const colors = getColorClasses(insight.color);
              const Icon = insight.icon;
              
              return (
                <div
                  key={insight.id}
                  className={`p-4 rounded-lg ${colors.bg} border ${colors.border}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg bg-white/80`}>
                      <Icon className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`${colors.text} mb-1`}>{insight.title}</h3>
                      <p className="text-gray-700 text-sm mb-3">{insight.description}</p>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                          Learn More
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 text-xs">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Chat Prompt */}
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5" />
              <h3>Ask the AI Assistant</h3>
            </div>
            <p className="text-white/90 text-sm mb-3">
              Have questions about Odaisa's development? Ask our AI for personalized advice.
            </p>
            <Button variant="secondary" className="bg-white text-purple-900 hover:bg-white/90">
              <MessageSquare className="w-4 h-4 mr-2" />
              Start Conversation
            </Button>
          </div>
        </Card>
      </div>

      {/* Activity Suggestions */}
      <div className="space-y-6">
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <h3 className="text-purple-900">Suggested Activities</h3>
          </div>

          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all cursor-pointer border border-purple-100"
              >
                <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-700 text-xs">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-sm">{suggestion}</p>
              </div>
            ))}
          </div>

          <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            Get More Suggestions
          </Button>
        </Card>

        {/* Daily Quote */}
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-lg">
          <h3 className="text-purple-900 mb-3">Parenting Insight of the Day</h3>
          <p className="text-gray-700 text-sm italic mb-3">
            "Children learn as they play. Most importantly, in play children learn how to learn."
          </p>
          <p className="text-xs text-gray-500">— O. Fred Donaldson</p>
        </Card>

        {/* Quick Stats */}
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
          <h3 className="text-purple-900 mb-4">Today's Highlights</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Active Time</span>
              <Badge className="bg-green-500 text-white border-0">4.5 hrs</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Learning Sessions</span>
              <Badge className="bg-blue-500 text-white border-0">3</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Mood Score</span>
              <Badge className="bg-yellow-500 text-white border-0">Excellent</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Robot Interactions</span>
              <Badge className="bg-purple-500 text-white border-0">12</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
