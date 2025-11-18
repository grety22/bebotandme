import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  Settings, 
  Shield, 
  Bell,
  Calendar,
  Smile,
  BookOpen,
  Music,
  Zap,
  Lock,
  AlertTriangle,
  Eye,
  Activity,
  Languages,
  Moon,
  Sun,
  Clock,
  X
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

interface RobotSettingsScreenProps {
  onClose: () => void;
}

export function RobotSettingsScreen({ onClose }: RobotSettingsScreenProps) {
  const { t } = useLanguage();
  const [isListening, setIsListening] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState("");
  
  // Settings state
  const [settings, setSettings] = useState({
    // Voice Settings
    voiceCommandsEnabled: true,
    voiceActivation: true,
    voiceVolume: 75,
    voiceSpeed: 50,
    voiceTone: "friendly",
    wakeWord: "Hey Robot",
    
    // Behavior Settings
    playfulMode: true,
    educationalMode: true,
    quietHours: true,
    quietStart: "20:00",
    quietEnd: "07:00",
    autonomousMode: false,
    
    // Activity Preferences
    storytelling: true,
    musicPlayback: true,
    games: true,
    exercise: true,
    artActivities: true,
    
    // Safety Settings
    boundaryAlerts: true,
    strangerDetection: true,
    fallDetection: true,
    temperatureMonitoring: true,
    allergyAlerts: true,
    
    // Notification Settings
    activityUpdates: true,
    milestoneAlerts: true,
    safetyAlerts: true,
    lowBattery: true,
    offlineAlerts: true
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const updateSlider = (key: keyof typeof settings, value: number[]) => {
    setSettings(prev => ({ ...prev, [key]: value[0] }));
  };

  const startVoiceCommand = () => {
    setIsListening(true);
    setVoiceCommand("");
    
    // Simulate voice recognition
    setTimeout(() => {
      const commands = [
        "Set quiet hours from 8 PM to 7 AM",
        "Enable playful mode",
        "Increase volume to 80",
        "Turn on storytelling mode",
        "Disable games during naptime"
      ];
      setVoiceCommand(commands[Math.floor(Math.random() * commands.length)]);
      setIsListening(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-purple-900 mb-2">Robot Settings</h1>
          <p className="text-gray-600">Configure your AI childcare assistant</p>
        </div>
        <Badge className="bg-green-500 text-white border-0 px-4 py-2">
          <Activity className="w-4 h-4 mr-2" />
          Robot Online
        </Badge>
      </div>

      {/* Voice Command Card */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Mic className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-purple-900 mb-1">Voice Command Control</h3>
            <p className="text-sm text-gray-600">Use your voice to configure robot settings</p>
          </div>
          <Switch
            checked={settings.voiceCommandsEnabled}
            onCheckedChange={() => toggleSetting("voiceCommandsEnabled")}
          />
        </div>

        {settings.voiceCommandsEnabled && (
          <div className="space-y-4">
            {/* Voice Command Button */}
            <div className="flex items-center gap-3">
              <Button
                onClick={startVoiceCommand}
                disabled={isListening || !settings.voiceCommandsEnabled}
                className={`flex-1 h-16 ${
                  isListening 
                    ? "bg-red-500 hover:bg-red-600 animate-pulse" 
                    : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                } text-white`}
              >
                {isListening ? (
                  <>
                    <MicOff className="w-5 h-5 mr-2" />
                    Listening...
                  </>
                ) : (
                  <>
                    <Mic className="w-5 h-5 mr-2" />
                    Press to Speak
                  </>
                )}
              </Button>
            </div>

            {/* Voice Command Display */}
            {voiceCommand && (
              <div className="p-4 bg-white rounded-lg border border-purple-200">
                <p className="text-sm text-gray-500 mb-1">You said:</p>
                <p className="text-purple-900">"{voiceCommand}"</p>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                    Apply Command
                  </Button>
                  <Button size="sm" variant="outline" className="border-purple-200">
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {/* Wake Word Settings */}
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <Label>Voice Activation</Label>
                <Switch
                  checked={settings.voiceActivation}
                  onCheckedChange={() => toggleSetting("voiceActivation")}
                />
              </div>
              {settings.voiceActivation && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-2">Wake word: <span className="text-purple-700">{settings.wakeWord}</span></p>
                  <Button size="sm" variant="outline" className="border-purple-200">
                    Change Wake Word
                  </Button>
                </div>
              )}
            </div>

            {/* Example Commands */}
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <p className="text-sm text-gray-600 mb-3">Example voice commands:</p>
              <div className="space-y-2">
                {[
                  "Enable quiet hours",
                  "Turn on storytelling mode",
                  "Set volume to 50 percent",
                  "Start playtime activities",
                  "Activate educational mode"
                ].map((command, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    {command}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Settings Tabs */}
      <Tabs defaultValue="voice" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="voice">Voice</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
          <TabsTrigger value="notifications">Alerts</TabsTrigger>
        </TabsList>

        {/* Voice Settings Tab */}
        <TabsContent value="voice" className="space-y-4 mt-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
            <h3 className="text-purple-900 mb-4 flex items-center gap-2">
              <Volume2 className="w-5 h-5" />
              Voice Configuration
            </h3>

            <div className="space-y-6">
              {/* Volume Control */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Voice Volume</Label>
                  <Badge variant="outline" className="border-purple-300 text-purple-700">
                    {settings.voiceVolume}%
                  </Badge>
                </div>
                <Slider
                  value={[settings.voiceVolume]}
                  onValueChange={(value) => updateSlider("voiceVolume", value)}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Speech Speed */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Speech Speed</Label>
                  <Badge variant="outline" className="border-purple-300 text-purple-700">
                    {settings.voiceSpeed < 40 ? "Slow" : settings.voiceSpeed < 60 ? "Normal" : "Fast"}
                  </Badge>
                </div>
                <Slider
                  value={[settings.voiceSpeed]}
                  onValueChange={(value) => updateSlider("voiceSpeed", value)}
                  max={100}
                  step={10}
                  className="w-full"
                />
              </div>

              {/* Voice Tone */}
              <div className="space-y-3">
                <Label>Voice Tone</Label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {["friendly", "cheerful", "calm"].map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSettings(prev => ({ ...prev, voiceTone: tone }))}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        settings.voiceTone === tone
                          ? "border-purple-500 bg-purple-50"
                          : "border-purple-200 hover:border-purple-300"
                      }`}
                    >
                      <p className="text-sm capitalize text-purple-900">{tone}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Selection */}
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Languages className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="text-purple-900">Robot Language</p>
                    <p className="text-sm text-gray-600">English (US)</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="border-purple-200">
                  Change
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Behavior Settings Tab */}
        <TabsContent value="behavior" className="space-y-4 mt-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
            <h3 className="text-purple-900 mb-4 flex items-center gap-2">
              <Smile className="w-5 h-5" />
              Behavior Modes
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Smile className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-purple-900">Playful Mode</p>
                    <p className="text-sm text-gray-600">Engaging and fun interactions</p>
                  </div>
                </div>
                <Switch
                  checked={settings.playfulMode}
                  onCheckedChange={() => toggleSetting("playfulMode")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-purple-900">Educational Mode</p>
                    <p className="text-sm text-gray-600">Learning-focused activities</p>
                  </div>
                </div>
                <Switch
                  checked={settings.educationalMode}
                  onCheckedChange={() => toggleSetting("educationalMode")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="text-purple-900">Autonomous Mode</p>
                    <p className="text-sm text-gray-600">Robot makes activity decisions</p>
                  </div>
                </div>
                <Switch
                  checked={settings.autonomousMode}
                  onCheckedChange={() => toggleSetting("autonomousMode")}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
            <h3 className="text-purple-900 mb-4 flex items-center gap-2">
              <Moon className="w-5 h-5" />
              Quiet Hours
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-900">Enable Quiet Hours</p>
                  <p className="text-sm text-gray-600">Reduced volume and calm activities</p>
                </div>
                <Switch
                  checked={settings.quietHours}
                  onCheckedChange={() => toggleSetting("quietHours")}
                />
              </div>

              {settings.quietHours && (
                <div className="grid grid-cols-2 gap-4 p-4 bg-purple-50 rounded-lg">
                  <div>
                    <Label className="text-sm mb-2 block">Start Time</Label>
                    <div className="flex items-center gap-2 p-2 bg-white rounded border border-purple-200">
                      <Clock className="w-4 h-4 text-purple-500" />
                      <span className="text-purple-900">{settings.quietStart}</span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm mb-2 block">End Time</Label>
                    <div className="flex items-center gap-2 p-2 bg-white rounded border border-purple-200">
                      <Sun className="w-4 h-4 text-yellow-500" />
                      <span className="text-purple-900">{settings.quietEnd}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>

        {/* Activities Tab */}
        <TabsContent value="activities" className="space-y-4 mt-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
            <h3 className="text-purple-900 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Activity Preferences
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-purple-500" />
                  <p className="text-purple-900">Storytelling</p>
                </div>
                <Switch
                  checked={settings.storytelling}
                  onCheckedChange={() => toggleSetting("storytelling")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Music className="w-5 h-5 text-pink-500" />
                  <p className="text-purple-900">Music Playback</p>
                </div>
                <Switch
                  checked={settings.musicPlayback}
                  onCheckedChange={() => toggleSetting("musicPlayback")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Smile className="w-5 h-5 text-blue-500" />
                  <p className="text-purple-900">Interactive Games</p>
                </div>
                <Switch
                  checked={settings.games}
                  onCheckedChange={() => toggleSetting("games")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-green-500" />
                  <p className="text-purple-900">Physical Exercise</p>
                </div>
                <Switch
                  checked={settings.exercise}
                  onCheckedChange={() => toggleSetting("exercise")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎨</span>
                  <p className="text-purple-900">Art Activities</p>
                </div>
                <Switch
                  checked={settings.artActivities}
                  onCheckedChange={() => toggleSetting("artActivities")}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Safety Tab */}
        <TabsContent value="safety" className="space-y-4 mt-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
            <h3 className="text-purple-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Safety Monitoring
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="text-purple-900">Boundary Alerts</p>
                    <p className="text-sm text-gray-600">Alert when child leaves safe zone</p>
                  </div>
                </div>
                <Switch
                  checked={settings.boundaryAlerts}
                  onCheckedChange={() => toggleSetting("boundaryAlerts")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="text-purple-900">Stranger Detection</p>
                    <p className="text-sm text-gray-600">Alert on unrecognized faces</p>
                  </div>
                </div>
                <Switch
                  checked={settings.strangerDetection}
                  onCheckedChange={() => toggleSetting("strangerDetection")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="text-purple-900">Fall Detection</p>
                    <p className="text-sm text-gray-600">Detect and alert on falls</p>
                  </div>
                </div>
                <Switch
                  checked={settings.fallDetection}
                  onCheckedChange={() => toggleSetting("fallDetection")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🌡️</span>
                  <div>
                    <p className="text-purple-900">Temperature Monitoring</p>
                    <p className="text-sm text-gray-600">Monitor room temperature</p>
                  </div>
                </div>
                <Switch
                  checked={settings.temperatureMonitoring}
                  onCheckedChange={() => toggleSetting("temperatureMonitoring")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="text-purple-900">Allergy Alerts</p>
                    <p className="text-sm text-gray-600">Alert on allergen detection</p>
                  </div>
                </div>
                <Switch
                  checked={settings.allergyAlerts}
                  onCheckedChange={() => toggleSetting("allergyAlerts")}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4 mt-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
            <h3 className="text-purple-900 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notification Preferences
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-blue-500" />
                  <p className="text-purple-900">Activity Updates</p>
                </div>
                <Switch
                  checked={settings.activityUpdates}
                  onCheckedChange={() => toggleSetting("activityUpdates")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎯</span>
                  <p className="text-purple-900">Milestone Alerts</p>
                </div>
                <Switch
                  checked={settings.milestoneAlerts}
                  onCheckedChange={() => toggleSetting("milestoneAlerts")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <p className="text-purple-900">Safety Alerts</p>
                </div>
                <Switch
                  checked={settings.safetyAlerts}
                  onCheckedChange={() => toggleSetting("safetyAlerts")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🔋</span>
                  <p className="text-purple-900">Low Battery Alerts</p>
                </div>
                <Switch
                  checked={settings.lowBattery}
                  onCheckedChange={() => toggleSetting("lowBattery")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-purple-500" />
                  <p className="text-purple-900">Offline Alerts</p>
                </div>
                <Switch
                  checked={settings.offlineAlerts}
                  onCheckedChange={() => toggleSetting("offlineAlerts")}
                />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Save Settings Button */}
      <div className="flex gap-3">
        <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white h-12">
          <Settings className="w-5 h-5 mr-2" />
          Save All Settings
        </Button>
        <Button variant="outline" className="border-purple-200 h-12" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}