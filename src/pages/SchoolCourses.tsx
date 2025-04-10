
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const SchoolCourses: React.FC = () => {
  return (
    <div className="container pb-20 pt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">School Courses</h1>
        <Button onClick={() => toast.success("Add course form opened!")}>
          <Plus className="h-4 w-4 mr-2" />
          Add Course
        </Button>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search courses..."
            className="pl-10"
          />
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="all" className="flex-1">All Courses</TabsTrigger>
          <TabsTrigger value="active" className="flex-1">Active</TabsTrigger>
          <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
          <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <CourseCard 
            title="Beginner Skiing Group Lesson"
            instructor="Emily Parker"
            students={6}
            date="Jan 15, 2026 - Jan 18, 2026"
            status="active"
            revenue={1140}
          />
          
          <CourseCard 
            title="Intermediate Snowboarding"
            instructor="Michael Torres"
            students={4}
            date="Jan 20, 2026 - Jan 22, 2026"
            status="upcoming"
            revenue={760}
          />
          
          <CourseCard 
            title="Advanced Skiing Techniques"
            instructor="Sarah Johnson"
            students={3}
            date="Dec 10, 2025 - Dec 12, 2025"
            status="completed"
            revenue={1050}
          />
          
          <CourseCard 
            title="Children's Ski Introduction"
            instructor="David Wilson"
            students={8}
            date="Jan 5, 2026 - Jan 10, 2026"
            status="active"
            revenue={1600}
          />
        </TabsContent>
        
        <TabsContent value="active" className="space-y-4">
          <CourseCard 
            title="Beginner Skiing Group Lesson"
            instructor="Emily Parker"
            students={6}
            date="Jan 15, 2026 - Jan 18, 2026"
            status="active"
            revenue={1140}
          />
          
          <CourseCard 
            title="Children's Ski Introduction"
            instructor="David Wilson"
            students={8}
            date="Jan 5, 2026 - Jan 10, 2026"
            status="active"
            revenue={1600}
          />
        </TabsContent>
        
        <TabsContent value="upcoming" className="space-y-4">
          <CourseCard 
            title="Intermediate Snowboarding"
            instructor="Michael Torres"
            students={4}
            date="Jan 20, 2026 - Jan 22, 2026"
            status="upcoming"
            revenue={760}
          />
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          <CourseCard 
            title="Advanced Skiing Techniques"
            instructor="Sarah Johnson"
            students={3}
            date="Dec 10, 2025 - Dec 12, 2025"
            status="completed"
            revenue={1050}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface CourseCardProps {
  title: string;
  instructor: string;
  students: number;
  date: string;
  status: "upcoming" | "active" | "completed";
  revenue: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  instructor, 
  students, 
  date, 
  status,
  revenue
}) => {
  const statusColors = {
    upcoming: "bg-yellow-100 text-yellow-800",
    active: "bg-green-100 text-green-800",
    completed: "bg-gray-100 text-gray-800"
  };
  
  const handleViewDetails = () => {
    toast.success(`Viewing details for ${title}`);
  };
  
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">Instructor: {instructor}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-muted-foreground">{students} Students</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">${revenue}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
          </div>
          <div className="flex flex-col xs:flex-row gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            <Button size="sm" variant="outline" onClick={handleViewDetails}>
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchoolCourses;
