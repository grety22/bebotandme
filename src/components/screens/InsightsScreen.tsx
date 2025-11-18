import { AIInsights } from "../AIInsights";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { MessageSquare, Sparkles, Download, TrendingUp } from "lucide-react";

export function InsightsScreen() {
  const aiMetrics = [
    { label: "Insights Generated", value: "127", change: "+15 this week" },
    { label: "Recommendations Followed", value: "85%", change: "Above average" },
    { label: "Development Score", value: "92/100", change: "+5 points" },
    { label: "AI Accuracy", value: "96%", change: "Excellent" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-purple-900 mb-2">AI Insights & Recommendations</h1>
          <p className="text-gray-600">Personalized tips powered by machine learning</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-purple-200">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            <MessageSquare className="w-4 h-4 mr-2" />
            Ask AI Assistant
          </Button>
        </div>
      </div>

      {/* AI Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {aiMetrics.map((metric, index) => (
          <Card key={index} className="p-4 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <Sparkles className="w-6 h-6 text-purple-500" />
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
            <p className="text-purple-900 mb-1">{metric.value}</p>
            <p className="text-xs text-green-600">{metric.change}</p>
          </Card>
        ))}
      </div>

      {/* AI Chat Interface */}
      <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-white mb-2">AI Parenting Assistant</h2>
            <p className="text-white/90 mb-4">
              Ask me anything about Emma's development, routines, or get personalized parenting advice based on her data.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                "What activities should Emma try?"
              </Button>
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                "How is her sleep pattern?"
              </Button>
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                "Suggest healthy meals"
              </Button>
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                "Development milestones"
              </Button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your question here..."
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
              />
              <Button className="bg-white text-purple-600 hover:bg-white/90">
                Send
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Main AI Insights Component */}
      <AIInsights />

      {/* Learning History */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
        <h2 className="text-purple-900 mb-4">AI Learning Progress</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-green-900">Sleep Pattern Recognition</h3>
              <Badge className="bg-green-500 text-white border-0">Mastered</Badge>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              AI has successfully learned Emma's sleep patterns and can predict optimal bedtime with 96% accuracy.
            </p>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: '96%' }}></div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-blue-900">Activity Preferences</h3>
              <Badge className="bg-blue-500 text-white border-0">Learning</Badge>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Currently analyzing Emma's engagement patterns across different activities to optimize recommendations.
            </p>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: '78%' }}></div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-purple-900">Developmental Predictions</h3>
              <Badge className="bg-purple-500 text-white border-0">Active</Badge>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Predicting upcoming milestones based on Emma's current progress and historical data from similar age groups.
            </p>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div className="h-full bg-purple-500" style={{ width: '88%' }}></div>
            </div>
          </div>
        </div>
      </Card>

      {/* Data Privacy */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🔒</span>
          </div>
          <div className="flex-1">
            <h3 className="text-purple-900 mb-2">Privacy & Data Security</h3>
            <p className="text-gray-700 mb-3">
              All AI analysis is performed using encrypted data. Emma's information is never shared with third parties and you maintain full control over data usage.
            </p>
            <Button variant="outline" className="border-purple-200">
              View Privacy Settings
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
