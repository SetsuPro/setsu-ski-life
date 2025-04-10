
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Star, ArrowUpDown, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import InstructorCard from "@/components/instructor/InstructorCard";

const FindInstructor: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterActive, setFilterActive] = useState("all");

  // Mock instructor data that would come from an API in a real app
  const instructors = [
    {
      id: "1",
      name: "Sarah Williams",
      specialty: "Freestyle Skiing",
      rating: 4.9,
      price: 95,
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
      language: ["English", "French"],
      resort: "Whistler"
    },
    {
      id: "2",
      name: "Michael Chen",
      specialty: "Beginner Friendly",
      rating: 4.7,
      price: 75,
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
      language: ["English", "Chinese"],
      resort: "Blackcomb"
    },
    {
      id: "3",
      name: "David Smith",
      specialty: "Advanced Technique",
      rating: 4.8,
      price: 90,
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
      language: ["English"],
      resort: "Whistler"
    },
    {
      id: "4",
      name: "Lisa Johnson",
      specialty: "Children's Instructor",
      rating: 4.9,
      price: 80,
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
      language: ["English", "Spanish"],
      resort: "Blackcomb"
    },
    {
      id: "5",
      name: "James Wilson",
      specialty: "Powder Skiing",
      rating: 4.7,
      price: 100,
      imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200&h=200&auto=format&fit=crop",
      language: ["English"],
      resort: "Whistler"
    }
  ];

  // Filter instructors based on search and filter values
  const filteredInstructors = instructors.filter(instructor => {
    const matchesSearch = instructor.name.toLowerCase().includes(searchValue.toLowerCase()) || 
                         instructor.specialty.toLowerCase().includes(searchValue.toLowerCase());
    
    if (filterActive === "all") return matchesSearch;
    if (filterActive === "whistler") return matchesSearch && instructor.resort === "Whistler";
    if (filterActive === "blackcomb") return matchesSearch && instructor.resort === "Blackcomb";
    if (filterActive === "top-rated") return matchesSearch && instructor.rating >= 4.8;
    
    return matchesSearch;
  });

  return (
    <div className="container pb-20 pt-6">
      <div className="flex items-center mb-6">
        <Link to="/home" className="mr-2">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Find Instructor</h1>
      </div>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by name, specialty..."
          className="pl-10"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <Button 
          variant={filterActive === "all" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setFilterActive("all")}
        >
          All
        </Button>
        <Button 
          variant={filterActive === "whistler" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setFilterActive("whistler")}
        >
          Whistler
        </Button>
        <Button 
          variant={filterActive === "blackcomb" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setFilterActive("blackcomb")}
        >
          Blackcomb
        </Button>
        <Button 
          variant={filterActive === "top-rated" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setFilterActive("top-rated")}
        >
          Top Rated
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex gap-1 ml-auto"
        >
          <Filter size={14} />
          More Filters
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex gap-1"
        >
          <ArrowUpDown size={14} />
          Sort
        </Button>
      </div>
      
      <div className="grid gap-4">
        {filteredInstructors.length > 0 ? (
          filteredInstructors.map((instructor) => (
            <Card key={instructor.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="w-20 h-20 bg-gray-200">
                    <img src={instructor.imageUrl} alt={instructor.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-sm">{instructor.name}</h4>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs ml-1">{instructor.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{instructor.specialty}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-ski-blue font-medium text-sm">${instructor.price}/hr</span>
                      <Button size="sm" variant="outline" asChild>
                        <Link to={`/instructor/${instructor.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center py-10 text-muted-foreground">No instructors found. Try different search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default FindInstructor;
