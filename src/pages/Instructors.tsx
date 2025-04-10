
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Star, ArrowUpDown } from "lucide-react";

const Instructors: React.FC = () => {
  return (
    <div className="container pb-20 pt-6">
      <h1 className="text-2xl font-bold mb-6">Instructors</h1>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search instructors..."
          className="pl-10"
        />
      </div>
      
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <Button variant="outline" size="sm" className="flex gap-1">
          <Filter size={14} />
          Filters
        </Button>
        <Button variant="outline" size="sm" className="flex gap-1 whitespace-nowrap">
          <ArrowUpDown size={14} />
          Sort By
        </Button>
        <Button variant="outline" size="sm">All</Button>
        <Button variant="outline" size="sm">Available</Button>
        <Button variant="outline" size="sm">Certified</Button>
        <Button variant="outline" size="sm">New</Button>
      </div>
      
      <div className="grid gap-4">
        <InstructorCard
          name="Sarah Williams"
          specialty="Freestyle Skiing"
          rating={4.9}
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
          status="Active"
        />
        
        <InstructorCard
          name="Michael Chen"
          specialty="Beginner Friendly"
          rating={4.7}
          image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
          status="Active"
        />
        
        <InstructorCard
          name="David Smith"
          specialty="Advanced Technique"
          rating={4.8}
          image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
          status="On Leave"
        />
        
        <InstructorCard
          name="Lisa Johnson"
          specialty="Children's Instructor"
          rating={4.9}
          image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop"
          status="Active"
        />
      </div>
    </div>
  );
};

interface InstructorCardProps {
  name: string;
  specialty: string;
  rating: number;
  image: string;
  status: "Active" | "On Leave";
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  name,
  specialty,
  rating,
  image,
  status
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex">
          <div className="w-20 h-20 bg-gray-200">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="p-3 flex-1">
            <div className="flex justify-between">
              <h4 className="font-medium text-sm">{name}</h4>
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs ml-1">{rating}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{specialty}</p>
            <div className="flex justify-between items-center mt-2">
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                status === "Active" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
              }`}>
                {status}
              </span>
              <Button size="sm" variant="outline">View</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Instructors;
