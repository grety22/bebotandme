import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { EditProfileDialog } from "../EditProfileDialog";
import { useState } from "react";
import { 
  Calendar, 
  Ruler, 
  Weight, 
  Heart, 
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Edit,
  User
} from "lucide-react";

export function ChildProfileScreen() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  
  const childData = {
    name: "Emma Johnson",
    age: "2 years 4 months",
    dateOfBirth: "July 15, 2022",
    height: "89 cm",
    weight: "12.5 kg",
    bloodType: "A+",
    photo: "https://images.unsplash.com/photo-1684971563816-5663a5347241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRvZGRsZXIlMjBwbGF5aW5nfGVufDF8fHx8MTc2MzQ4NDM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
  };

  const medicalInfo = {
    allergies: ["Peanuts", "Tree nuts"],
    medications: ["None"],
    conditions: ["None"],
    vaccinations: "Up to date",
    lastCheckup: "Oct 15, 2024",
    nextCheckup: "Dec 25, 2024",
    pediatrician: {
      name: "Dr. Sarah Chen",
      phone: "(555) 123-4567",
      email: "dr.chen@pediatrics.com"
    }
  };

  const emergencyContacts = [
    {
      name: "Jennifer Johnson",
      relation: "Mother",
      phone: "(555) 234-5678",
      email: "jennifer.j@email.com",
      primary: true
    },
    {
      name: "Michael Johnson",
      relation: "Father",
      phone: "(555) 345-6789",
      email: "michael.j@email.com",
      primary: true
    },
    {
      name: "Susan Thompson",
      relation: "Grandmother",
      phone: "(555) 456-7890",
      email: "susan.t@email.com",
      primary: false
    }
  ];

  const preferences = {
    favoriteActivities: ["Reading", "Dancing", "Outdoor play", "Painting"],
    favoriteFoods: ["Pasta", "Bananas", "Yogurt", "Carrots"],
    napPreferences: "Quiet room with soft music",
    comfortItems: "Pink teddy bear, blue blanket",
    temperament: "Generally cheerful, social, curious"
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-purple-900 mb-2">Child Profile</h1>
          <p className="text-gray-600">Detailed information and medical records</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" onClick={() => setEditDialogOpen(true)}>
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      {/* Main Profile Card */}
      <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
        <div className="flex items-start gap-8">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-pink-200 shadow-lg">
              <ImageWithFallback
                src={childData.photo}
                alt={childData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-400 to-purple-400 text-white border-0">
              Active Profile
            </Badge>
          </div>

          {/* Basic Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-purple-900 mb-2">{childData.name}</h2>
                <p className="text-gray-600 mb-4">{childData.age} old</p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-purple-300 text-purple-700">
                    Child ID: #2847
                  </Badge>
                  <Badge className="bg-green-500 text-white border-0">
                    Healthy
                  </Badge>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <Calendar className="w-6 h-6 text-blue-500 mb-2" />
                <p className="text-xs text-gray-500 mb-1">Date of Birth</p>
                <p className="text-gray-900">{childData.dateOfBirth}</p>
              </div>

              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <Ruler className="w-6 h-6 text-green-500 mb-2" />
                <p className="text-xs text-gray-500 mb-1">Height</p>
                <p className="text-gray-900">{childData.height}</p>
              </div>

              <div className="p-4 rounded-lg bg-pink-50 border border-pink-200">
                <Weight className="w-6 h-6 text-pink-500 mb-2" />
                <p className="text-xs text-gray-500 mb-1">Weight</p>
                <p className="text-gray-900">{childData.weight}</p>
              </div>

              <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                <Heart className="w-6 h-6 text-purple-500 mb-2" />
                <p className="text-xs text-gray-500 mb-1">Blood Type</p>
                <p className="text-gray-900">{childData.bloodType}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Tabbed Content */}
      <Tabs defaultValue="medical" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="medical">Medical Info</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Contacts</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="caregivers">Caregivers</TabsTrigger>
        </TabsList>

        {/* Medical Info Tab */}
        <TabsContent value="medical" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
              <h3 className="text-purple-900 mb-4">Allergies & Conditions</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Allergies</p>
                  <div className="flex gap-2">
                    {medicalInfo.allergies.map((allergy, index) => (
                      <Badge key={index} className="bg-red-100 text-red-700 border-red-300">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Medications</p>
                  <p className="text-gray-900">{medicalInfo.medications.join(", ")}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Medical Conditions</p>
                  <p className="text-gray-900">{medicalInfo.conditions.join(", ")}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Vaccinations</p>
                  <Badge className="bg-green-500 text-white border-0">
                    {medicalInfo.vaccinations}
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
              <h3 className="text-purple-900 mb-4">Healthcare Provider</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50">
                  <User className="w-10 h-10 text-purple-500" />
                  <div>
                    <h4 className="text-purple-900">{medicalInfo.pediatrician.name}</h4>
                    <p className="text-sm text-gray-600">Pediatrician</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-900">{medicalInfo.pediatrician.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-900">{medicalInfo.pediatrician.email}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Last Checkup</p>
                      <p className="text-gray-900">{medicalInfo.lastCheckup}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Next Checkup</p>
                      <p className="text-purple-700">{medicalInfo.nextCheckup}</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white mt-4">
                  Schedule Appointment
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Emergency Contacts Tab */}
        <TabsContent value="emergency" className="space-y-4 mt-6">
          {emergencyContacts.map((contact, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-purple-900">{contact.name}</h3>
                      {contact.primary && (
                        <Badge className="bg-yellow-500 text-white border-0 text-xs">
                          Primary
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{contact.relation}</p>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-900">{contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-900">{contact.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-purple-200">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}

          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            Add Emergency Contact
          </Button>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
              <h3 className="text-purple-900 mb-4">Activities & Interests</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Favorite Activities</p>
                  <div className="flex flex-wrap gap-2">
                    {preferences.favoriteActivities.map((activity, index) => (
                      <Badge key={index} variant="outline" className="border-purple-300 text-purple-700">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Favorite Foods</p>
                  <div className="flex flex-wrap gap-2">
                    {preferences.favoriteFoods.map((food, index) => (
                      <Badge key={index} variant="outline" className="border-green-300 text-green-700">
                        {food}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
              <h3 className="text-purple-900 mb-4">Care Preferences</h3>
              
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-blue-50">
                  <p className="text-sm text-gray-600 mb-1">Nap Preferences</p>
                  <p className="text-gray-900">{preferences.napPreferences}</p>
                </div>

                <div className="p-3 rounded-lg bg-pink-50">
                  <p className="text-sm text-gray-600 mb-1">Comfort Items</p>
                  <p className="text-gray-900">{preferences.comfortItems}</p>
                </div>

                <div className="p-3 rounded-lg bg-purple-50">
                  <p className="text-sm text-gray-600 mb-1">Temperament</p>
                  <p className="text-gray-900">{preferences.temperament}</p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Caregivers Tab */}
        <TabsContent value="caregivers" className="mt-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg">
            <h3 className="text-purple-900 mb-4">Authorized Caregivers</h3>
            <p className="text-gray-600 mb-6">Manage who has access to Emma's dashboard and information</p>

            <div className="space-y-3">
              {emergencyContacts.filter(c => c.primary).map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-purple-900">{contact.name}</h4>
                      <p className="text-sm text-gray-600">{contact.relation} · Full Access</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white border-0">Active</Badge>
                </div>
              ))}
            </div>

            <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              Invite Caregiver
            </Button>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Edit Profile Dialog */}
      <EditProfileDialog open={editDialogOpen} onOpenChange={setEditDialogOpen} />
    </div>
  );
}