
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Globe, Languages, Award, LogOut, Pencil, Save, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "Whistler, BC, Canada",
    languages: "English, French",
    certifications: "CSIA Level 3, Freestyle Instructor"
  });
  const [tempData, setTempData] = useState({...profileData});

  const handleSignOut = () => {
    // Remove user role and logged-in status from localStorage
    localStorage.removeItem("setsu-user-role");
    localStorage.removeItem("setsu-user-logged-in");
    
    // Redirect to the index page
    navigate("/");
  };

  const handleEdit = () => {
    setTempData({...profileData});
    setEditing(true);
  };

  const handleSave = () => {
    setProfileData({...tempData});
    setEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleChange = (field: keyof typeof tempData, value: string) => {
    setTempData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="container pb-20 pt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
        {!editing ? (
          <Button variant="outline" size="sm" onClick={handleEdit}>
            <Pencil className="h-4 w-4 mr-2" />
            Edit
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCancel}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        )}
      </div>
      
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gray-200 mb-3 relative">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop&crop=face" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full"
          />
          {editing && (
            <div className="absolute bottom-0 right-0 bg-ski-blue rounded-full p-1">
              <Pencil className="h-4 w-4 text-white" />
            </div>
          )}
        </div>
        {!editing ? (
          <>
            <h2 className="text-xl font-bold">{profileData.name}</h2>
            <p className="text-muted-foreground">Ski Instructor</p>
          </>
        ) : (
          <Input 
            className="text-center mt-2 w-48"
            value={tempData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        )}
      </div>
      
      <div className="grid gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!editing ? (
              <>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p>{profileData.name}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>{profileData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>{profileData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>{profileData.location}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Name</p>
                  <Input
                    value={tempData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <Input
                    value={tempData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <Input
                    value={tempData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <Input
                    value={tempData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                  />
                </div>
              </>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Skills & Certifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!editing ? (
              <>
                <div className="flex items-center">
                  <Languages className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Languages</p>
                    <p>{profileData.languages}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Certifications</p>
                    <p>{profileData.certifications}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Languages</p>
                  <Input
                    value={tempData.languages}
                    onChange={(e) => handleChange('languages', e.target.value)}
                  />
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Certifications</p>
                  <Input
                    value={tempData.certifications}
                    onChange={(e) => handleChange('certifications', e.target.value)}
                  />
                </div>
              </>
            )}
          </CardContent>
        </Card>
        
        <Button 
          variant="destructive" 
          className="flex gap-2"
          onClick={handleSignOut}
        >
          <LogOut size={16} />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
