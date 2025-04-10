
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  instructorName: string;
  instructorImage: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  price: number;
  spotsLeft: number;
  level: string;
  isSpecialOffer?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  instructorName,
  instructorImage,
  date,
  time,
  duration,
  location,
  price,
  spotsLeft,
  level,
  isSpecialOffer = false
}) => {
  return (
    <Card className={`overflow-hidden ${isSpecialOffer ? 'border-ski-orange border-2' : ''}`}>
      <CardContent className="p-0">
        <div className="p-3">
          {isSpecialOffer && (
            <div className="bg-ski-orange text-white text-xs font-medium px-2 py-0.5 rounded mb-2 inline-block">
              Special Offer
            </div>
          )}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{title}</h3>
              <div className="flex items-center mt-1">
                <div className="w-5 h-5 rounded-full overflow-hidden mr-1">
                  <img
                    src={instructorImage}
                    alt={instructorName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs">{instructorName}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className={`font-medium ${isSpecialOffer ? 'text-ski-orange' : 'text-ski-blue'}`}>${price}</span>
              <span className="text-xs text-muted-foreground">per person</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-xs">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
              <span>{time} ({duration})</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1 text-muted-foreground" />
              <span>{spotsLeft} spots left</span>
            </div>
          </div>
          
          <div className="mt-3 flex justify-between items-center">
            <div className="text-xs bg-ski-light-purple text-ski-purple px-2 py-0.5 rounded">
              {level}
            </div>
            <Button asChild size="sm">
              <Link to={`/booking/${id}`}>Book Now</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
