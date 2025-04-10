
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RoleSelector from "@/components/layout/RoleSelector";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // If user already selected a role, navigate to home
    const userRole = localStorage.getItem("setsu-user-role");
    if (userRole && localStorage.getItem("setsu-user-logged-in")) {
      navigate("/home");
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-ski-light-blue/30 p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-ski-purple to-ski-blue bg-clip-text text-transparent mb-2">
          Setsu
        </h1>
        <p className="text-xl text-gray-600 mb-6">Your Premier Ski Experience</p>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          Book ski lessons, find instructors, and capture your skiing memories all in one place
        </p>
      </div>
      
      <RoleSelector />
      
      <div className="absolute bottom-8 text-center">
        <p className="text-xs text-muted-foreground mb-1">
          &copy; 2025 Setsu · All Rights Reserved
        </p>
        <div className="flex justify-center space-x-4 text-xs text-ski-purple">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
        </div>
      </div>
    </div>
  );
};

export default Index;
