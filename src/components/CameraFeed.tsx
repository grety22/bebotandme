import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Video, Maximize2, Volume2 } from "lucide-react";

export function CameraFeed() {
  return (
    <Card className="p-4 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Video className="w-5 h-5 text-purple-600" />
          <h3 className="text-purple-900">Live Camera</h3>
        </div>
        <Badge className="bg-red-500 text-white animate-pulse">
          <span className="inline-block w-2 h-2 bg-white rounded-full mr-1"></span>
          LIVE
        </Badge>
      </div>

      {/* Camera Feed */}
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-3">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1608365151231-7dbed3034787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc21pbGluZ3xlbnwxfHx8fDE3NjM0NDE2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Camera feed"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Info */}
        <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm rounded px-2 py-1 text-white text-xs">
          Playroom · 2:34 PM
        </div>

        {/* Motion Detection Badge */}
        <div className="absolute top-2 right-2">
          <Badge className="bg-green-500 text-white border-0">
            Motion Detected
          </Badge>
        </div>

        {/* Activity Status */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
          <p className="text-gray-600">Current Activity:</p>
          <p className="text-purple-700">Playing with toys</p>
        </div>
      </div>

      {/* Camera Controls */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 border-purple-200 hover:bg-purple-50">
          <Volume2 className="w-4 h-4 mr-1" />
          Audio
        </Button>
        <Button variant="outline" size="sm" className="flex-1 border-purple-200 hover:bg-purple-50">
          <Maximize2 className="w-4 h-4 mr-1" />
          Fullscreen
        </Button>
      </div>
    </Card>
  );
}
