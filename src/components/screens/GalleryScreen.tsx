import { MomentsGallery } from "../MomentsGallery";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Calendar, Download, Share2, Folder, Star } from "lucide-react";

export function GalleryScreen() {
  const collections = [
    { name: "Milestones", count: 18, icon: Star, color: "purple" },
    { name: "November 2024", count: 42, icon: Calendar, color: "blue" },
    { name: "Favorites", count: 67, icon: Star, color: "pink" },
    { name: "Special Events", count: 12, icon: Folder, color: "green" }
  ];

  const recentCaptures = [
    { date: "Today", count: 8 },
    { date: "Yesterday", count: 12 },
    { date: "This Week", count: 42 },
    { date: "This Month", count: 156 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-purple-900 mb-2">Moments Gallery</h1>
          <p className="text-gray-600">AI-captured memories and special moments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-purple-200">
            <Download className="w-4 h-4 mr-2" />
            Download Selected
          </Button>
          <Button variant="outline" className="border-purple-200">
            <Share2 className="w-4 h-4 mr-2" />
            Share Album
          </Button>
        </div>
      </div>

      {/* Collections Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {collections.map((collection, index) => {
          const Icon = collection.icon;
          const colorClasses = {
            purple: 'from-purple-500 to-pink-500',
            blue: 'from-blue-500 to-purple-500',
            pink: 'from-pink-500 to-purple-500',
            green: 'from-green-500 to-blue-500'
          }[collection.color];

          return (
            <Card key={index} className="p-4 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses} rounded-xl flex items-center justify-center mb-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-purple-900 mb-1">{collection.name}</h3>
              <p className="text-gray-600 text-sm">{collection.count} items</p>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
        <h2 className="text-purple-900 mb-4">Recent Captures</h2>
        <div className="grid grid-cols-4 gap-4">
          {recentCaptures.map((item, index) => (
            <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 text-center">
              <p className="text-gray-600 text-sm mb-1">{item.date}</p>
              <p className="text-purple-900">{item.count}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Main Gallery Component */}
      <MomentsGallery />

      {/* Storage Info */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-purple-900 mb-2">Storage Usage</h3>
            <p className="text-gray-600 text-sm">2.4 GB of 50 GB used</p>
            <div className="w-full max-w-md h-2 bg-white rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: '4.8%' }}></div>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-green-500 text-white border-0 mb-2">95% Available</Badge>
            <p className="text-sm text-gray-600">Auto-backup enabled</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
