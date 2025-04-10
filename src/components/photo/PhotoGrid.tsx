
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Filter, Calendar, Map, Search, Shirt } from "lucide-react";

interface PhotoGridProps {
  onPhotoClick: (id: string) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ onPhotoClick }) => {
  return (
    <div className="pb-20">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Ski Photos</h1>
        
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-4 overflow-x-auto pb-2">
          <Button variant="outline" size="sm" className="flex items-center text-xs whitespace-nowrap">
            <Filter className="h-3 w-3 mr-1" />
            All Filters
          </Button>
          <Button variant="outline" size="sm" className="flex items-center text-xs whitespace-nowrap ml-2">
            <Calendar className="h-3 w-3 mr-1" />
            Date
          </Button>
          <Button variant="outline" size="sm" className="flex items-center text-xs whitespace-nowrap ml-2">
            <Map className="h-3 w-3 mr-1" />
            Resort
          </Button>
          <Button variant="outline" size="sm" className="flex items-center text-xs whitespace-nowrap ml-2">
            <Shirt className="h-3 w-3 mr-1" />
            Outfit Color
          </Button>
        </div>
        
        {/* Search bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search photos by date, location..."
            className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-full text-sm"
          />
        </div>
        
        {/* Photo grid */}
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <PhotoItem 
              key={id} 
              id={id.toString()} 
              onClick={() => onPhotoClick(id.toString())}
              isLocked={id % 3 !== 0}
            />
          ))}
        </div>
        
        {/* Load more button */}
        <Button variant="outline" className="w-full mt-4">
          Load More
        </Button>
      </div>
    </div>
  );
};

interface PhotoItemProps {
  id: string;
  onClick: () => void;
  isLocked: boolean;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ id, onClick, isLocked }) => {
  return (
    <Card className="overflow-hidden cursor-pointer" onClick={onClick}>
      <CardContent className="p-0 relative">
        <div className={`aspect-square relative ${isLocked ? 'blur-sm' : ''}`}>
          <img 
            src={`https://images.unsplash.com/photo-164646652${parseInt(id) + 1000}0-5836xbz48f3?w=500&h=500&auto=format&fit=crop&q=60`} 
            alt={`Ski photo ${id}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&auto=format&fit=crop";
            }}
          />
        </div>
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 rounded-full p-2">
              <Lock className="h-5 w-5 text-white" />
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent text-white text-xs">
          <p className="font-medium">Whistler Resort</p>
          <p>Dec 5, 2025</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Lock = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
};

export default PhotoGrid;
