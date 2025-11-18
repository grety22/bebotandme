import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Bell, Users, Languages, Search } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
      <div className="px-8 py-4 flex items-center justify-between gap-6">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === "en" ? "Search for activities, milestones, photos..." : "Buscar actividades, hitos, fotos..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-purple-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button 
            onClick={toggleLanguage}
            variant="outline" 
            size="sm" 
            className="gap-2 border-purple-200 hover:bg-purple-50"
          >
            <Languages className="w-4 h-4" />
            <span>{language === "en" ? "English" : "Español"}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="gap-2">
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Caregivers</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-pink-500">
              2
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  );
}