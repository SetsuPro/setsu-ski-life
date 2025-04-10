
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentHome from "@/components/home/StudentHome";
import InstructorHome from "@/components/home/InstructorHome";
import AdminHome from "@/components/home/AdminHome";

type UserRole = "student" | "instructor" | "admin" | null;

const Home: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedRole = localStorage.getItem("setsu-user-role") as UserRole;
    const isLoggedIn = localStorage.getItem("setsu-user-logged-in");
    
    if (!storedRole || !isLoggedIn) {
      navigate("/");
      return;
    }
    
    setUserRole(storedRole);
  }, [navigate]);
  
  if (!userRole) {
    return <div>Loading...</div>;
  }
  
  switch(userRole) {
    case "student":
      return <StudentHome />;
    case "instructor":
      return <InstructorHome />;
    case "admin":
      return <AdminHome />;
    default:
      return <div>Unknown role</div>;
  }
};

export default Home;
