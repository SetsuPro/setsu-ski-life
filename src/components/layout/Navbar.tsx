
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";
import InstructorNavbar from "./InstructorNavbar";
import AdminNavbar from "./AdminNavbar";

type UserRole = "student" | "instructor" | "admin" | null;

const Navbar: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const location = useLocation();

  // Check if user is on auth pages
  const isAuthPage = ["/", "/login", "/register"].includes(location.pathname);

  useEffect(() => {
    const storedRole = localStorage.getItem("setsu-user-role") as UserRole;
    setUserRole(storedRole);
  }, []);

  // Don't show navbar on auth pages
  if (isAuthPage) {
    return null;
  }

  // Show role-specific navbar
  switch(userRole) {
    case "student":
      return <StudentNavbar />;
    case "instructor":
      return <InstructorNavbar />;
    case "admin":
      return <AdminNavbar />;
    default:
      // Fallback if no role is set
      return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
          <div className="grid h-full grid-cols-3">
            <Link to="/" className="flex flex-col items-center justify-center">
              <span className="text-sm text-gray-500">Home</span>
            </Link>
          </div>
        </div>
      );
  }
};

export default Navbar;
