
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { SkiIcon, Users, School } from "lucide-react";

type Role = "student" | "instructor" | "admin";

const RoleSelector: React.FC = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: Role) => {
    localStorage.setItem("setsu-user-role", role);
    navigate("/login");
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center mb-8">Welcome to Setsu</h1>
      <p className="text-center text-muted-foreground mb-6">Please select your role to continue</p>
      
      <div className="grid gap-4">
        <RoleCard 
          title="Student" 
          description="Book lessons and discover instructors"
          icon={<SkiIcon size={32} />}
          onClick={() => handleRoleSelect("student")}
          color="bg-ski-light-blue"
          textColor="text-ski-blue"
        />
        
        <RoleCard 
          title="Instructor" 
          description="Manage your schedule and students"
          icon={<Users size={32} />}
          onClick={() => handleRoleSelect("instructor")}
          color="bg-ski-light-purple"
          textColor="text-ski-purple"
        />
        
        <RoleCard 
          title="Ski School Admin" 
          description="Manage your school and instructors"
          icon={<School size={32} />}
          onClick={() => handleRoleSelect("admin")}
          color="bg-ski-light-green"
          textColor="text-green-600"
        />
      </div>
    </div>
  );
};

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  color: string;
  textColor: string;
}

const RoleCard: React.FC<RoleCardProps> = ({
  title,
  description,
  icon,
  onClick,
  color,
  textColor
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer" onClick={onClick}>
      <CardContent className="p-6 flex items-center">
        <div className={`${color} p-3 rounded-full mr-4 ${textColor}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoleSelector;
