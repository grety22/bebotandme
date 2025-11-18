import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";
import { Camera, Upload } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface EditProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditProfileDialog({ open, onOpenChange }: EditProfileDialogProps) {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "Odaisa Alfonso",
    dateOfBirth: "2022-07-15",
    height: "89",
    weight: "12.5",
    bloodType: "A+",
    allergies: "Peanuts, Tree nuts",
    medications: "None",
    conditions: "None",
    napPreferences: "Quiet room with soft music",
    comfortItems: "Pink teddy bear, blue blanket",
    temperament: "Generally cheerful, social, curious",
    favoriteActivities: "Reading, Dancing, Outdoor play, Painting",
    favoriteFoods: "Pasta, Bananas, Yogurt, Carrots"
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Here you would normally save to a backend
    console.log("Saving profile data:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] w-[95vw] sm:w-full p-0 gap-0 overflow-hidden flex flex-col">
        <DialogHeader className="p-4 sm:p-6 border-b border-purple-100 flex-shrink-0">
          <DialogTitle className="text-purple-900">{t("profile.edit")}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6 py-4 px-4 sm:px-6 overflow-y-auto modal-scrollbar flex-1">
          {/* Profile Photo */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1684971563816-5663a5347241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRvZGRsZXIlMjBwbGF5aW5nfGVufDF8fHx8MTc2MzQ4NDM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div>
              <Button variant="outline" className="gap-2 border-purple-200">
                <Upload className="w-4 h-4" />
                Upload New Photo
              </Button>
              <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF. Max size 5MB.</p>
            </div>
          </div>

          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-purple-900">Basic Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="border-purple-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                  className="border-purple-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={formData.height}
                  onChange={(e) => handleChange("height", e.target.value)}
                  className="border-purple-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  value={formData.weight}
                  onChange={(e) => handleChange("weight", e.target.value)}
                  className="border-purple-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Input
                  id="bloodType"
                  value={formData.bloodType}
                  onChange={(e) => handleChange("bloodType", e.target.value)}
                  className="border-purple-200"
                />
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div className="space-y-4">
            <h3 className="text-purple-900">Medical Information</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="allergies">Allergies (comma separated)</Label>
                <Input
                  id="allergies"
                  value={formData.allergies}
                  onChange={(e) => handleChange("allergies", e.target.value)}
                  placeholder="e.g., Peanuts, Tree nuts"
                  className="border-purple-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medications">Current Medications</Label>
                <Input
                  id="medications"
                  value={formData.medications}
                  onChange={(e) => handleChange("medications", e.target.value)}
                  placeholder="e.g., None"
                  className="border-purple-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="conditions">Medical Conditions</Label>
                <Input
                  id="conditions"
                  value={formData.conditions}
                  onChange={(e) => handleChange("conditions", e.target.value)}
                  placeholder="e.g., None"
                  className="border-purple-200"
                />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="space-y-4">
            <h3 className="text-purple-900">Care Preferences</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="napPrefs">Nap Preferences</Label>
                <Textarea
                  id="napPrefs"
                  value={formData.napPreferences}
                  onChange={(e) => handleChange("napPreferences", e.target.value)}
                  className="border-purple-200"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comfortItems">Comfort Items</Label>
                <Input
                  id="comfortItems"
                  value={formData.comfortItems}
                  onChange={(e) => handleChange("comfortItems", e.target.value)}
                  className="border-purple-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="temperament">Temperament Description</Label>
                <Textarea
                  id="temperament"
                  value={formData.temperament}
                  onChange={(e) => handleChange("temperament", e.target.value)}
                  className="border-purple-200"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="activities">Favorite Activities (comma separated)</Label>
                <Input
                  id="activities"
                  value={formData.favoriteActivities}
                  onChange={(e) => handleChange("favoriteActivities", e.target.value)}
                  className="border-purple-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="foods">Favorite Foods (comma separated)</Label>
                <Input
                  id="foods"
                  value={formData.favoriteFoods}
                  onChange={(e) => handleChange("favoriteFoods", e.target.value)}
                  className="border-purple-200"
                />
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="p-6 border-t border-purple-100 flex-shrink-0">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="border-purple-200">
            {t("common.cancel")}
          </Button>
          <Button 
            onClick={handleSave}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            {t("common.save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}