
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, ChevronLeft, Calendar, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  level: string;
  participants: string;
  price: number;
  imageUrl: string;
}

const FindCourses: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterActive, setFilterActive] = useState("all");
  
  // Mock course data that would come from an API in a real app
  const courses: Course[] = [
    {
      id: "1",
      title: "Beginner Ski Group Class",
      description: "Perfect for first-timers. Learn the basics in a friendly group environment.",
      instructor: "Michael Chen",
      date: "Apr 15, 2025",
      time: "9:00 AM",
      duration: "2 hours",
      level: "Beginner",
      participants: "4-8",
      price: 65,
      imageUrl: "https://images.unsplash.com/photo-1605540436563-5bca5a6badb4?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "Intermediate Ski Techniques",
      description: "Improve your turns and gain confidence on blue runs.",
      instructor: "Sarah Williams",
      date: "Apr 16, 2025",
      time: "10:00 AM",
      duration: "3 hours",
      level: "Intermediate",
      participants: "4-6",
      price: 75,
      imageUrl: "https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "Advanced Powder Skills",
      description: "Master skiing in deep powder and challenging terrain.",
      instructor: "James Wilson",
      date: "Apr 18, 2025",
      time: "9:00 AM",
      duration: "4 hours",
      level: "Advanced",
      participants: "3-5",
      price: 95,
      imageUrl: "https://images.unsplash.com/photo-1579755209948-20d5b46be7be?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: "4",
      title: "Kids Ski Adventure (Ages 6-10)",
      description: "Fun-focused ski lesson designed specifically for children.",
      instructor: "Lisa Johnson",
      date: "Apr 15, 2025",
      time: "1:00 PM",
      duration: "2 hours",
      level: "Kids",
      participants: "5-8",
      price: 55,
      imageUrl: "https://images.unsplash.com/photo-1548278651-843b1c7a9dc4?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: "5",
      title: "Freestyle Introduction",
      description: "Learn the basics of freestyle skiing in the terrain park.",
      instructor: "David Smith",
      date: "Apr 17, 2025",
      time: "2:00 PM",
      duration: "3 hours",
      level: "Intermediate-Advanced",
      participants: "4-6",
      price: 85,
      imageUrl: "https://images.unsplash.com/photo-1499889808931-317a0255c0e9?q=80&w=300&auto=format&fit=crop"
    }
  ];
  
  // Filter courses based on search and filter values
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchValue.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchValue.toLowerCase());
    
    if (filterActive === "all") return matchesSearch;
    if (filterActive === "beginner") return matchesSearch && course.level.includes("Beginner");
    if (filterActive === "intermediate") return matchesSearch && course.level.includes("Intermediate");
    if (filterActive === "advanced") return matchesSearch && course.level.includes("Advanced");
    if (filterActive === "kids") return matchesSearch && course.level.includes("Kids");
    
    return matchesSearch;
  });

  return (
    <div className="container pb-20 pt-6">
      <div className="flex items-center mb-6">
        <Link to="/home" className="mr-2">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Find Courses</h1>
      </div>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search courses..."
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
          All Levels
        </Button>
        <Button 
          variant={filterActive === "beginner" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setFilterActive("beginner")}
        >
          Beginner
        </Button>
        <Button 
          variant={filterActive === "intermediate" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setFilterActive("intermediate")}
        >
          Intermediate
        </Button>
        <Button 
          variant={filterActive === "advanced" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setFilterActive("advanced")}
        >
          Advanced
        </Button>
        <Button 
          variant={filterActive === "kids" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setFilterActive("kids")}
        >
          Kids
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex gap-1 ml-auto"
        >
          <Filter size={14} />
          Filters
        </Button>
      </div>
      
      <div className="space-y-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="w-24 h-24 bg-gray-200">
                    <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{course.title}</h4>
                      <span className="bg-ski-light-blue text-ski-blue text-xs font-medium px-2 py-0.5 rounded">
                        {course.level}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{course.description}</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{course.date}</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{course.time} ({course.duration})</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Users className="h-3 w-3 mr-1" />
                        <span>{course.participants} people</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-ski-blue font-medium">${course.price}/person</span>
                      <Button size="sm" variant="outline" asChild>
                        <Link to={`/booking/${course.id}`}>Book</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center py-10 text-muted-foreground">No courses found. Try different search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default FindCourses;
