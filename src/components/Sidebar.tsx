import { Screen } from "../App";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  LayoutDashboard, 
  User, 
  TrendingUp, 
  Calendar, 
  Bot, 
  Camera, 
  Bell, 
  Sparkles,
  Settings,
  LogOut,
  Users,
  X
} from "lucide-react";

interface SidebarProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ activeScreen, onNavigate, isOpen, onClose }: SidebarProps) {
  const { t } = useLanguage();
  
  const menuItems = [
    { id: "overview" as Screen, label: t("nav.overview"), icon: LayoutDashboard },
    { id: "profile" as Screen, label: t("nav.profile"), icon: User },
    { id: "development" as Screen, label: t("nav.development"), icon: TrendingUp },
    { id: "routines" as Screen, label: t("nav.routines"), icon: Calendar },
    { id: "robot" as Screen, label: t("nav.robot"), icon: Bot },
    { id: "gallery" as Screen, label: t("nav.gallery"), icon: Camera },
    { id: "alerts" as Screen, label: t("nav.alerts"), icon: Bell, badge: 2 },
    { id: "insights" as Screen, label: t("nav.insights"), icon: Sparkles, badge: 4 }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen w-64 bg-white/95 backdrop-blur-sm border-r border-purple-100 flex flex-col z-50 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}>
        {/* Logo/Header */}
        <div className="p-2 border-b border-purple-100">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="flex items-center justify-center flex-shrink-0" style={{ width: 100, height: 100 }}>
                <img src="/logo.jpeg" alt="logo" />
              </div>
              {/* <div> */}
                {/* <h1 className="text-purple-900">Bebot & Me</h1> */}
                {/* <p className="text-gray-500 text-xs">Smart Childcare</p> */}
              {/* </div> */}
            </div>
            {/* Close Button - only visible on mobile */}
            <button
              onClick={onClose}
              className="lg:hidden text-gray-500 hover:text-gray-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Child Quick Info */}
        <div className="px-6 py-4 border-b border-purple-100">
          <button 
            onClick={() => onNavigate("profile")}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
              <span className="text-lg">👧</span>
            </div>
            <div className="text-left">
              <p className="text-purple-900">Odaisa Alfonso</p>
              <p className="text-xs text-gray-500">2 years 4 months</p>
            </div>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeScreen === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-purple-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <Badge className={`${
                      isActive ? "bg-white text-purple-600" : "bg-pink-500 text-white"
                    } border-0`}>
                      {item.badge}
                    </Badge>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-purple-100 space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700 hover:bg-purple-50">
            <Users className="w-5 h-5" />
            {t("nav.caregivers")}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700 hover:bg-purple-50">
            <Settings className="w-5 h-5" />
            {t("nav.settings")}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700 hover:bg-purple-50">
            <LogOut className="w-5 h-5" />
            {t("nav.logout")}
          </Button>
        </div>
      </aside>
    </>
  );
}