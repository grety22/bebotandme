import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Bell, Users, Languages, Search, Menu } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-6">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="lg:hidden p-2"
        >
          <Menu className="w-5 h-5" />
        </Button>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === "en" ? "Search..." : "Buscar..."}
              className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-purple-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-3">
          <Button 
            onClick={toggleLanguage}
            variant="outline" 
            size="sm" 
            className="gap-1 sm:gap-2 border-purple-200 hover:bg-purple-50 px-2 sm:px-3"
          >
            <Languages className="w-4 h-4" />
            <span className="hidden md:inline">{language === "en" ? "English" : "Español"}</span>
            <span className="md:hidden">{language.toUpperCase()}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="gap-2 hidden sm:flex">
            <Users className="w-4 h-4" />
            <span className="hidden lg:inline">Caregivers</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative p-2">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 bg-pink-500 text-xs">
              2
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  );
}