
import React from "react";
import { useParams } from "react-router-dom";
import InstructorDetailComponent from "@/components/instructor/InstructorDetail";

const InstructorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would normally be fetched from an API
  const instructorData = {
    id: id || "1",
    name: "Emily Parker",
    bio: "Certified ski instructor with over 10 years of experience teaching all skill levels. Specialized in helping intermediate skiers improve their technique and gain confidence on more challenging terrain. I speak English and French and offer lessons at multiple resorts in the area.",
    specialty: ["Intermediate", "Advanced", "Freestyle", "Alpine"],
    rating: 4.9,
    reviews: 124,
    experience: 10,
    price: 85,
    imageUrl: "https://images.unsplash.com/photo-1542841791-1925b02a2bbb?q=80&w=200&h=200&auto=format&fit=crop",
    languages: ["English", "French"],
    resorts: ["Whistler", "Blackcomb"]
  };
  
  return <InstructorDetailComponent {...instructorData} />;
};

export default InstructorDetail;
