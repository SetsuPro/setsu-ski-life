import React from "react";
import { Calendar, Clock, Star, Globe, Award, MapPin, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface InstructorDetailProps {
  id: string;
  name: string;
  bio: string;
  specialty: string[];
  rating: number;
  reviews: number;
  experience: number;
  price: number;
  imageUrl: string;
  languages: string[];
  resorts: string[];
}

const InstructorDetail: React.FC<InstructorDetailProps> = ({
  id,
  name,
  bio,
  specialty,
  rating,
  reviews,
  experience,
  price,
  imageUrl,
  languages,
  resorts
}) => {
  return (
    <div className="pb-20">
      {/* Header image and profile */}
      <div className="relative">
        <div className="h-40 bg-ski-light-blue w-full"></div>
        <div className="absolute -bottom-16 w-full px-4">
          <div className="flex">
            <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden">
              <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="ml-4 mt-10">
              <h1 className="text-xl font-bold">{name}</h1>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="font-medium">{rating.toFixed(1)}</span>
                <span className="text-muted-foreground text-sm ml-1">({reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content with top padding to account for profile picture */}
      <div className="pt-20 p-4">
        {/* Book now card */}
        <Card className="mb-6 bg-ski-light-purple">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">${price}/hour</p>
                <p className="text-xs text-muted-foreground">Typically responds within 1 hour</p>
              </div>
              <Button asChild>
                <Link to={`/booking/${id}`}>
                  Book Now
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Instructor info */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">About</h2>
          <p className="text-sm text-muted-foreground">{bio}</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-ski-light-blue flex items-center justify-center mr-3">
                <Award className="h-4 w-4 text-ski-blue" />
              </div>
              <div>
                <p className="text-sm font-medium">{experience} Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-ski-light-purple flex items-center justify-center mr-3">
                <Globe className="h-4 w-4 text-ski-purple" />
              </div>
              <div>
                <p className="text-sm font-medium">{languages.join(", ")}</p>
                <p className="text-xs text-muted-foreground">Languages</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <MapPin className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{resorts.join(", ")}</p>
                <p className="text-xs text-muted-foreground">Resorts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Specialties</h2>
          <div className="flex flex-wrap gap-2">
            {specialty.map((item, index) => (
              <span 
                key={index}
                className="text-sm bg-ski-light-blue text-ski-blue px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Tabs for schedule, reviews, etc. */}
        <Tabs defaultValue="schedule">
          <TabsList className="w-full">
            <TabsTrigger value="schedule" className="flex-1">Schedule</TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
            <TabsTrigger value="gallery" className="flex-1">Gallery</TabsTrigger>
          </TabsList>
          
          <TabsContent value="schedule" className="mt-4">
            {/* Available days */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <div 
                  key={i} 
                  className={`h-10 flex items-center justify-center rounded-full text-sm font-medium ${
                    [1, 2, 3, 4, 5].includes(i) 
                      ? "bg-ski-purple text-white" 
                      : "bg-gray-100 text-muted-foreground"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
            
            {/* Available time slots */}
            <h3 className="text-sm font-medium mb-2">Available Times</h3>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time, i) => (
                <Button variant="outline" key={i} size="sm" className="text-xs h-9">
                  {time}
                </Button>
              ))}
            </div>
            
            <Button className="w-full">Check Full Availability</Button>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-4 space-y-4">
            <ReviewItem 
              name="Alex Johnson"
              date="Nov 15, 2025"
              rating={5}
              comment="Emily is an amazing instructor! She helped me improve my technique significantly in just two lessons. Highly recommend for intermediate skiers looking to advance."
            />
            
            <ReviewItem 
              name="Sarah Miller"
              date="Nov 10, 2025"
              rating={4}
              comment="Great instructor, very patient with beginners. I was nervous about my first time skiing but Emily made it enjoyable and stress-free."
            />
            
            <ReviewItem 
              name="David Williams"
              date="Oct 28, 2025"
              rating={5}
              comment="My kids loved their lesson with Emily. She's great with children and makes learning fun. We'll definitely book again!"
            />
            
            <div className="text-center pt-2">
              <Button variant="outline" size="sm" className="text-xs">
                View All Reviews
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="gallery" className="mt-4">
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-164646652${i + 1000}0-5836xbz48f3?w=500&h=500&auto=format&fit=crop&q=60`}
                    alt={`Instructor gallery ${i}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&auto=format&fit=crop";
                    }}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface ReviewItemProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ name, date, rating, comment }) => {
  return (
    <div className="border-b pb-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium">{name}</h4>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`h-3 w-3 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">{comment}</p>
    </div>
  );
};

export default InstructorDetail;
