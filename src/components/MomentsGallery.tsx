import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Camera, Video, Heart, Download, Share2, Calendar } from "lucide-react";

export function MomentsGallery() {
  const moments = [
    {
      id: 1,
      type: "photo",
      title: "First Steps!",
      date: "Nov 16, 2024",
      category: "Milestone",
      image: "https://images.unsplash.com/photo-1696596160153-607445545300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwZmlyc3QlMjBzdGVwc3xlbnwxfHx8fDE3NjM0NTMxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      favorite: true
    },
    {
      id: 2,
      type: "photo",
      title: "Reading Time",
      date: "Nov 15, 2024",
      category: "Learning",
      image: "https://images.unsplash.com/photo-1549737221-bef65e2604a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBib29rfGVufDF8fHx8MTc2MzQ4NDM4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      favorite: false
    },
    {
      id: 3,
      type: "photo",
      title: "Happy Playtime",
      date: "Nov 14, 2024",
      category: "Daily",
      image: "https://images.unsplash.com/photo-1608365151231-7dbed3034787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc21pbGluZ3xlbnwxfHx8fDE3NjM0NDE2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      favorite: true
    },
    {
      id: 4,
      type: "video",
      title: "Lunch Time",
      date: "Nov 14, 2024",
      category: "Daily",
      image: "https://images.unsplash.com/photo-1582568469591-329655b4c24c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2RkbGVyJTIwZWF0aW5nJTIwaGVhbHRoeXxlbnwxfHx8fDE3NjM0ODQzODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      favorite: false
    },
    {
      id: 5,
      type: "photo",
      title: "Birthday Party",
      date: "Nov 10, 2024",
      category: "Special Event",
      image: "https://images.unsplash.com/photo-1762912913371-ccc0a5fca0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGJpcnRoZGF5JTIwcGFydHl8ZW58MXx8fHwxNzYzNDg0Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      favorite: true
    },
    {
      id: 6,
      type: "photo",
      title: "Playing with Toys",
      date: "Nov 9, 2024",
      category: "Daily",
      image: "https://images.unsplash.com/photo-1684971563816-5663a5347241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRvZGRsZXIlMjBwbGF5aW5nfGVufDF8fHx8MTc2MzQ4NDM4NXww&ixlib=rb-4.1.0&q=80&w=1080",
      favorite: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Milestone": "bg-purple-500",
      "Learning": "bg-blue-500",
      "Daily": "bg-green-500",
      "Special Event": "bg-pink-500"
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-purple-900 mb-1">Moments & Memories Gallery</h2>
          <p className="text-gray-500">AI-captured special moments and milestones</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-purple-200">
            <Calendar className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" size="sm">
            <Camera className="w-4 h-4 mr-2" />
            Capture Moment
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="p-3 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
          <p className="text-xs text-gray-600 mb-1">Total Moments</p>
          <p className="text-purple-900">248</p>
        </div>
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
          <p className="text-xs text-gray-600 mb-1">This Month</p>
          <p className="text-blue-900">42</p>
        </div>
        <div className="p-3 rounded-lg bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100">
          <p className="text-xs text-gray-600 mb-1">Milestones</p>
          <p className="text-pink-900">18</p>
        </div>
        <div className="p-3 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
          <p className="text-xs text-gray-600 mb-1">Favorites</p>
          <p className="text-green-900">67</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {moments.map((moment) => (
          <div 
            key={moment.id} 
            className="group relative aspect-square rounded-lg overflow-hidden border-2 border-purple-100 hover:border-purple-300 transition-all cursor-pointer hover:scale-105 hover:shadow-lg"
          >
            <ImageWithFallback
              src={moment.image}
              alt={moment.title}
              className="w-full h-full object-cover"
            />
            
            {/* Type Badge */}
            <div className="absolute top-2 right-2">
              {moment.type === "video" ? (
                <Badge className="bg-black/70 text-white border-0">
                  <Video className="w-3 h-3" />
                </Badge>
              ) : (
                <Badge className="bg-black/70 text-white border-0">
                  <Camera className="w-3 h-3" />
                </Badge>
              )}
            </div>

            {/* Favorite Badge */}
            {moment.favorite && (
              <div className="absolute top-2 left-2">
                <Heart className="w-5 h-5 fill-pink-500 text-pink-500" />
              </div>
            )}

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <Badge className={`${getCategoryColor(moment.category)} text-white border-0 text-xs mb-2`}>
                  {moment.category}
                </Badge>
                <h4 className="text-white text-sm mb-1">{moment.title}</h4>
                <p className="text-white/80 text-xs">{moment.date}</p>
                
                {/* Action Buttons */}
                <div className="flex gap-1 mt-2">
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-white hover:bg-white/20">
                    <Download className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-white hover:bg-white/20">
                    <Share2 className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-white hover:bg-white/20">
                    <Heart className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-6 text-center">
        <Button variant="outline" className="border-purple-200 hover:bg-purple-50">
          Load More Moments
        </Button>
      </div>
    </Card>
  );
}
