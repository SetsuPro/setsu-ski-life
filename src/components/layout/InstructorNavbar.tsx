
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, DollarSign, FileText, User } from "lucide-react";

const InstructorNavbar: React.FC = () => {
  const location = useLocation();

  const getActiveClass = (path: string) => {
    return location.pathname === path 
      ? "text-ski-blue" 
      : "text-gray-500";
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full grid-cols-5">
        <NavItem 
          to="/home" 
          icon={<Home size={20} />} 
          label="Dashboard" 
          isActive={getActiveClass("/home")} 
        />
        <NavItem 
          to="/schedule" 
          icon={<Calendar size={20} />} 
          label="Schedule" 
          isActive={getActiveClass("/schedule")} 
        />
        <NavItem 
          to="/earnings" 
          icon={<DollarSign size={20} />} 
          label="Earnings" 
          isActive={getActiveClass("/earnings")} 
        />
        <NavItem 
          to="/statistics" 
          icon={<FileText size={20} />} 
          label="Stats" 
          isActive={getActiveClass("/statistics")} 
        />
        <NavItem 
          to="/profile" 
          icon={<User size={20} />} 
          label="Profile" 
          isActive={getActiveClass("/profile")} 
        />
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive }) => (
  <Link to={to} className="flex flex-col items-center justify-center">
    <div className={isActive}>{icon}</div>
    <span className={`text-xs ${isActive}`}>{label}</span>
  </Link>
);

export default InstructorNavbar;
