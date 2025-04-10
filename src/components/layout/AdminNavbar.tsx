
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, DollarSign, Settings, BookOpen } from "lucide-react";

const AdminNavbar: React.FC = () => {
  const location = useLocation();

  const getActiveClass = (path: string) => {
    return location.pathname === path 
      ? "text-green-600" 
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
          to="/school-courses" 
          icon={<BookOpen size={20} />} 
          label="Courses" 
          isActive={getActiveClass("/school-courses")} 
        />
        <NavItem 
          to="/instructors" 
          icon={<Users size={20} />} 
          label="Instructors" 
          isActive={getActiveClass("/instructors")} 
        />
        <NavItem 
          to="/payments" 
          icon={<DollarSign size={20} />} 
          label="Payments" 
          isActive={getActiveClass("/payments")} 
        />
        <NavItem 
          to="/school-settings" 
          icon={<Settings size={20} />} 
          label="Settings" 
          isActive={getActiveClass("/school-settings")} 
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

export default AdminNavbar;
