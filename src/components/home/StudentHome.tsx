
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Star, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import CourseDetailDialog from "@/components/course/CourseDetailDialog";
import { CourseType } from "@/pages/MyCourses";

const StudentHome: React.FC = () => {
  const [showCourseDetail, setShowCourseDetail] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);

  const upcomingCourse: CourseType = {
    id: "1",
    title: "Beginner Ski Lesson",
    instructorName: "Mike Chen",
    instructorImage: "https://images.unsplash.com/photo-1618886614638-80e3c103d465?q=80&w=200&h=200&auto=format&fit=crop",
    date: "Tomorrow",
    time: "9:00 AM - 11:00 AM",
    resort: "Whistler Blackcomb, Green Slope",
    level: "Beginner",
    isStarted: false
  };

  const handleBookSpecialDeal = () => {
    toast.success("Special deal booked! Check your email for confirmation.");
  };

  const handleViewCourseDetails = () => {
    setSelectedCourse(upcomingCourse);
    setShowCourseDetail(true);
  };

  const handleCheckIn = () => {
    toast.success("Successfully checked in to your lesson!");
  };

  return (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-ski-purple to-ski-blue p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Alex</h1>
        <p className="text-white/80">Ready for your next skiing adventure?</p>
      </div>

      <div className="p-4">
        {/* Search section */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search instructors, resorts..."
            className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-full text-sm"
          />
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button
            variant="outline"
            className="flex flex-col h-24 border-2 border-sky-blue/20 bg-ski-light-blue"
            asChild
          >
            <Link to="/find-instructor">
              <div className="rounded-full bg-white p-2 mb-2">
                <Users className="h-5 w-5 text-ski-blue" />
              </div>
              <span className="text-ski-blue font-medium">Find Instructor</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col h-24 border-2 border-ski-purple/20 bg-ski-light-purple"
            asChild
          >
            <Link to="/find-courses">
              <div className="rounded-full bg-white p-2 mb-2">
                <Calendar className="h-5 w-5 text-ski-purple" />
              </div>
              <span className="text-ski-purple font-medium">Find Courses</span>
            </Link>
          </Button>
        </div>

        {/* Browse tabs */}
        <Tabs defaultValue="featured" className="mb-6">
          <TabsList className="w-full">
            <TabsTrigger value="featured" className="flex-1">Featured</TabsTrigger>
            <TabsTrigger value="nearby" className="flex-1">Nearby</TabsTrigger>
            <TabsTrigger value="popular" className="flex-1">Popular</TabsTrigger>
          </TabsList>
          <TabsContent value="featured" className="mt-4">
            {/* Featured instructors */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Top Instructors</h3>
                <Link to="/instructors" className="text-sm text-ski-purple">View all</Link>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <InstructorCard
                  name="Sarah Johnson"
                  specialty="Freestyle Skiing"
                  rating={4.9}
                  price={95}
                  image="https://images.unsplash.com/photo-1542841791-1925b02a2bbb?q=80&w=200&h=200&auto=format&fit=crop"
                />
                <InstructorCard
                  name="Mike Chen"
                  specialty="Beginner Friendly"
                  rating={4.7}
                  price={75}
                  image="https://images.unsplash.com/photo-1618886614638-80e3c103d465?q=80&w=200&h=200&auto=format&fit=crop"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="nearby">
            <p className="text-center text-muted-foreground py-8">Nearby instructors will appear here</p>
          </TabsContent>
          <TabsContent value="popular">
            <p className="text-center text-muted-foreground py-8">Popular instructors will appear here</p>
          </TabsContent>
        </Tabs>

        {/* Special deals */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Special Deals</h3>
            <Link to="/deals" className="text-sm text-ski-purple">View all</Link>
          </div>
          
          <Card className="bg-gradient-to-r from-ski-orange/90 to-ski-orange text-white overflow-hidden">
            <CardContent className="p-4 flex">
              <div className="flex-1 pr-2">
                <div className="flex items-center mb-1">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">LIMITED OFFER</span>
                </div>
                <h3 className="text-lg font-bold mb-1">20% Off Group Classes</h3>
                <p className="text-xs text-white/80 mb-2">Valid until Dec 15, 2025</p>
                <Button 
                  size="sm" 
                  className="bg-white text-ski-orange hover:bg-white/90 mt-1"
                  onClick={handleBookSpecialDeal}
                >
                  Book Now
                </Button>
              </div>
              <div className="w-24 h-24 bg-white/20 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=200&h=200&auto=format&fit=crop')] bg-cover bg-center rounded-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming class reminder */}
        <div className="space-y-3">
          <h3 className="font-medium">Upcoming Class</h3>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">Beginner Ski Lesson</h4>
                  <p className="text-sm text-muted-foreground">with Mike Chen</p>
                </div>
                <div className="bg-ski-light-blue text-ski-blue text-xs font-medium px-2 py-1 rounded">
                  Tomorrow
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Dec 10, 9:00 AM - 11:00 AM</span>
              </div>
              <div className="mt-3 flex justify-between">
                <Button variant="outline" size="sm" onClick={handleViewCourseDetails}>View Details</Button>
                <Button size="sm" onClick={handleCheckIn}>Check In</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <CourseDetailDialog
        open={showCourseDetail}
        onClose={() => setShowCourseDetail(false)}
        course={selectedCourse}
        userRole="student"
      />
    </div>
  );
};

// Helper component for instructor cards
interface InstructorCardProps {
  name: string;
  specialty: string;
  rating: number;
  price: number;
  image: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  name,
  specialty,
  rating,
  price,
  image
}) => {
  return (
    <Link to="/instructor/1">
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
              <p className="text-ski-blue font-medium text-sm mt-2">${price}/hr</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export const Users = (props: any) => {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
};

export default StudentHome;
