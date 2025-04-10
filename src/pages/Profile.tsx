import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Globe, Languages, Award, LogOut } from "lucide-react";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove user role and logged-in status from localStorage
    localStorage.removeItem("setsu-user-role");
    localStorage.removeItem("setsu-user-logged-in");
    
    // Redirect to the index page
    navigate("/");
  };

  return (
    <div className="container pb-20 pt-6">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gray-200 mb-3">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop&crop=face" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="text-xl font-bold">Emily Johnson</h2>
        <p className="text-muted-foreground">Ski Instructor</p>
      </div>
      
      <div className="grid gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-3 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p>Emily Johnson</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p>emily.johnson@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-3 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p>Whistler, BC, Canada</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Skills & Certifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Languages className="h-4 w-4 mr-3 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Languages</p>
                <p>English, French</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-3 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Certifications</p>
                <p>CSIA Level 3, Freestyle Instructor</p>
              </div>
            </div>
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
