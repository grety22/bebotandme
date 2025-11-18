import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Ruler, Weight } from "lucide-react";

export function ChildProfile() {
  const childData = {
    name: "Emma Johnson",
    age: "2 years 4 months",
    dateOfBirth: "July 15, 2022",
    height: "89 cm",
    weight: "12.5 kg",
    bloodType: "A+",
    photo: "https://images.unsplash.com/photo-1684971563816-5663a5347241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRvZGRsZXIlMjBwbGF5aW5nfGVufDF8fHx8MTc2MzQ4NDM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
  };

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
      <div className="flex items-start gap-6">
        {/* Child Photo */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-200 shadow-md">
            <ImageWithFallback
              src={childData.photo}
              alt={childData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-400 to-purple-400 text-white border-0">
            Active
          </Badge>
        </div>

        {/* Child Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-purple-900 mb-1">{childData.name}</h2>
              <p className="text-gray-600">{childData.age} old</p>
            </div>
            <Badge variant="outline" className="border-purple-300 text-purple-700">
              Child ID: #2847
            </Badge>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
              <Calendar className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <p className="text-xs text-gray-500">Date of Birth</p>
                <p className="text-gray-900">{childData.dateOfBirth}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50">
              <Ruler className="w-5 h-5 text-green-500 mt-1" />
              <div>
                <p className="text-xs text-gray-500">Height</p>
                <p className="text-gray-900">{childData.height}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-pink-50">
              <Weight className="w-5 h-5 text-pink-500 mt-1" />
              <div>
                <p className="text-xs text-gray-500">Weight</p>
                <p className="text-gray-900">{childData.weight}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50">
              <div className="w-5 h-5 text-purple-500 mt-1 flex items-center justify-center">
                <span>🩸</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">Blood Type</p>
                <p className="text-gray-900">{childData.bloodType}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-6 mt-6 pt-4 border-t border-purple-100">
            <div>
              <p className="text-xs text-gray-500">Next Checkup</p>
              <p className="text-purple-700">Dec 25, 2024</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Pediatrician</p>
              <p className="text-purple-700">Dr. Sarah Chen</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Allergies</p>
              <p className="text-purple-700">Peanuts</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
