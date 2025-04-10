
import React, { useState } from "react";
import PhotoGrid from "@/components/photo/PhotoGrid";
import PhotoDetail from "@/components/photo/PhotoDetail";

const MyPhotos: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  
  // This would normally be fetched from an API
  const photoData = {
    id: selectedPhoto || "",
    date: "December 5, 2025",
    location: "Whistler Resort",
    outfitColor: "Blue Jacket",
    imageUrl: `https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=800&auto=format&fit=crop`,
    isLocked: selectedPhoto === "2" || selectedPhoto === "4" || selectedPhoto === "5"
  };
  
  const handlePhotoClick = (id: string) => {
    setSelectedPhoto(id);
  };
  
  const handleBackToGrid = () => {
    setSelectedPhoto(null);
  };
  
  if (selectedPhoto) {
    return <PhotoDetail {...photoData} onBack={handleBackToGrid} />;
  }
  
  return <PhotoGrid onPhotoClick={handlePhotoClick} />;
};

export default MyPhotos;
