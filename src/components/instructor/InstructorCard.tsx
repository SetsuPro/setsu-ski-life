
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface InstructorCardProps {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  price: number;
  imageUrl: string;
  language?: string[];
  resort?: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  id,
  name,
  specialty,
  rating,
  price,
  imageUrl,
  language,
  resort
}) => {
  return (
    <Link to={`/instructor/${id}`}>
      <Card className="overflow-hidden h-full transition-shadow hover:shadow-md">
        <CardContent className="p-0">
          <div className="relative">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-40 object-cover" 
            />
            <div className="absolute bottom-0 right-0 bg-white/90 px-2 py-1 m-2 rounded-md flex items-center">
              <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="text-xs font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="p-3">
            <h3 className="font-medium">{name}</h3>
            <div className="flex justify-between items-center mt-1">
              <p className="text-xs text-muted-foreground">{specialty}</p>
              <p className="text-ski-blue font-medium">${price}/hr</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {language?.map((lang, index) => (
                <span 
                  key={index}
                  className="text-xs bg-ski-light-purple text-ski-purple px-2 py-0.5 rounded-full"
                >
                  {lang}
                </span>
              ))}
              {resort && (
                <span className="text-xs bg-ski-light-blue text-ski-blue px-2 py-0.5 rounded-full">
                  {resort}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default InstructorCard;
