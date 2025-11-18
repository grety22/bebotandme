import { useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Overview } from "./components/screens/Overview";
import { ChildProfileScreen } from "./components/screens/ChildProfileScreen";
import { DevelopmentScreen } from "./components/screens/DevelopmentScreen";
import { RoutinesScreen } from "./components/screens/RoutinesScreen";
import { RobotScreen } from "./components/screens/RobotScreen";
import { GalleryScreen } from "./components/screens/GalleryScreen";
import { AlertsScreen } from "./components/screens/AlertsScreen";
import { InsightsScreen } from "./components/screens/InsightsScreen";

export type Screen = 
  | "overview" 
  | "profile" 
  | "development" 
  | "routines" 
  | "robot" 
  | "gallery" 
  | "alerts" 
  | "insights";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderScreen = () => {
    switch (activeScreen) {
      case "overview":
        return <Overview />;
      case "profile":
        return <ChildProfileScreen />;
      case "development":
        return <DevelopmentScreen />;
      case "routines":
        return <RoutinesScreen />;
      case "robot":
        return <RobotScreen />;
      case "gallery":
        return <GalleryScreen />;
      case "alerts":
        return <AlertsScreen />;
      case "insights":
        return <InsightsScreen />;
      default:
        return <Overview />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 flex">
        <Sidebar 
          activeScreen={activeScreen} 
          onNavigate={(screen) => {
            setActiveScreen(screen);
            setSidebarOpen(false);
          }}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 lg:ml-64 w-full">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <div className="p-4 sm:p-6 lg:p-8">
            {renderScreen()}
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
}