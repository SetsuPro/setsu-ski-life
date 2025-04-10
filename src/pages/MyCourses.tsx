
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, ChevronRight, Star, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import CourseDetailDialog from "@/components/course/CourseDetailDialog";

export interface CourseType {
  id: string;
  title: string;
  instructorName: string;
  instructorImage: string;
  date: string;
  time: string;
  resort: string;
  level: string;
  hasRated?: boolean;
  isStarted?: boolean;
}

const MyCourses: React.FC = () => {
  const [showRatingDialog, setShowRatingDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);
  const [rating, setRating] = useState(0);
  const [showDetailDialog, setShowDetailDialog] = useState(false);
  const userRole = localStorage.getItem("setsu-user-role");
  
  const handleRateCourse = (course: CourseType) => {
    setSelectedCourse(course);
    setShowRatingDialog(true);
  };
  
  const handleSubmitRating = () => {
    // Here you would submit the rating to your backend
    toast.success("Rating submitted successfully!");
    setShowRatingDialog(false);
  };

  const handleViewDetails = (course: CourseType) => {
    setSelectedCourse(course);
    setShowDetailDialog(true);
  };
  
  const pageTitle = userRole === "admin" ? "School Courses" : "My Courses";
  
  return (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-sky-600 to-ski-blue p-6 text-white">
        <h1 className="text-xl font-bold mb-1">{pageTitle}</h1>
        <p className="text-white/70">
          {userRole === "admin" ? "Manage school skiing lessons" : "Manage your ski lessons"}
        </p>
      </div>
      
      <div className="p-4">
        {userRole === "admin" && (
          <div className="mb-4">
            <Button className="w-full flex items-center gap-2">
              <Plus size={16} />
              Add New Course
            </Button>
          </div>
        )}
        
        <Tabs defaultValue="upcoming">
          <TabsList className="w-full">
            <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
            <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-4 space-y-4">
            {upcomingCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                showCheckIn={true}
                onViewDetails={() => handleViewDetails(course)}
              />
            ))}
            
            {upcomingCourses.length === 0 && (
              <EmptyState 
                message={userRole === "admin" ? "No upcoming courses" : "You don't have any upcoming courses"}
                action={userRole === "admin" ? "Add a course" : "Book a lesson"}
                actionLink={userRole === "admin" ? "/courses/new" : "/find-instructor"}
              />
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-4 space-y-4">
            {completedCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course}
                showRating={!course.hasRated && userRole === "student"}
                onRate={() => handleRateCourse(course)}
                onViewDetails={() => handleViewDetails(course)}
              />
            ))}
            
            {completedCourses.length === 0 && (
              <EmptyState 
                message={userRole === "admin" ? "No completed courses yet" : "You haven't completed any courses yet"}
                action={userRole === "admin" ? "Add your first course" : "Book your first lesson"}
                actionLink={userRole === "admin" ? "/courses/new" : "/find-instructor"}
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <RatingDialog 
        open={showRatingDialog}
        onClose={() => setShowRatingDialog(false)}
        onSubmit={handleSubmitRating}
        course={selectedCourse}
        rating={rating}
        setRating={setRating}
      />
      
      <CourseDetailDialog
        open={showDetailDialog}
        onClose={() => setShowDetailDialog(false)}
        course={selectedCourse}
        userRole={userRole || undefined}
      />
    </div>
  );
};

interface CourseCardProps {
  course: CourseType;
  showRating?: boolean;
  showCheckIn?: boolean;
  onRate?: () => void;
  onViewDetails: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  course, 
  showRating = false,
  showCheckIn = false,
  onRate,
  onViewDetails
}) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-medium">{course.title}</h3>
            <div className="flex items-center mt-0.5">
              <div className="w-5 h-5 rounded-full overflow-hidden mr-1">
                <img
                  src={course.instructorImage}
                  alt={course.instructorName}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs">{course.instructorName}</span>
            </div>
          </div>
          <span className="bg-ski-light-blue text-ski-blue text-xs px-2 py-0.5 rounded">
            {course.level}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-y-2 mb-3 text-xs">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
            <span>{course.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
            <span>{course.time}</span>
          </div>
          <div className="flex items-center col-span-2">
            <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
            <span>{course.resort}</span>
          </div>
        </div>
        
        <div className="flex justify-between">
          {showCheckIn && (
            course.isStarted ? (
              <Button size="sm" variant="default" onClick={onViewDetails}>
                Track Location
              </Button>
            ) : (
              <Button size="sm" variant="outline" onClick={onViewDetails}>
                View Details
              </Button>
            )
          )}
          
          {!showCheckIn && !showRating && (
            <Button size="sm" variant="outline" onClick={onViewDetails}>
              View Details
            </Button>
          )}
          
          {showRating && (
            <Button size="sm" variant="default" onClick={onRate}>
              Rate Lesson
            </Button>
          )}
          
          <Button size="sm" variant="ghost" className="px-2" onClick={onViewDetails}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface EmptyStateProps {
  message: string;
  action: string;
  actionLink: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message, action, actionLink }) => {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-ski-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
        <Calendar className="h-6 w-6 text-ski-blue" />
      </div>
      <h3 className="font-medium mb-2">{message}</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Find the perfect instructor for your needs
      </p>
      <Button asChild>
        <a href={actionLink}>{action}</a>
      </Button>
    </div>
  );
};

interface RatingDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  course: CourseType | null;
  rating: number;
  setRating: (rating: number) => void;
}

const RatingDialog: React.FC<RatingDialogProps> = ({
  open,
  onClose,
  onSubmit,
  course,
  rating,
  setRating
}) => {
  const [feedback, setFeedback] = useState("");
  
  if (!course) return null;
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rate Your Lesson</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <div className="flex items-center mb-1">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img
                src={course.instructorImage}
                alt={course.instructorName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{course.instructorName}</h3>
              <p className="text-xs text-muted-foreground">{course.title}</p>
            </div>
          </div>
          
          <div className="my-6 flex justify-center">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-8 w-8 cursor-pointer ${
                    star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          
          <textarea
            placeholder="Share your experience with this instructor..."
            className="w-full h-24 p-3 border rounded-md text-sm"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          
          <Button 
            className="w-full mt-4" 
            onClick={onSubmit}
            disabled={rating === 0}
          >
            Submit Rating
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Sample data
const upcomingCourses: CourseType[] = [
  {
    id: "1",
    title: "Beginner Ski Lesson",
    instructorName: "Mike Chen",
    instructorImage: "https://images.unsplash.com/photo-1618886614638-80e3c103d465?q=80&w=200&h=200&auto=format&fit=crop",
    date: "Tomorrow",
    time: "9:00 AM - 11:00 AM",
    resort: "Whistler Blackcomb, Green Slope",
    level: "Beginner",
    isStarted: false
  },
  {
    id: "2",
    title: "Intermediate Techniques",
    instructorName: "Sarah Johnson",
    instructorImage: "https://images.unsplash.com/photo-1542841791-1925b02a2bbb?q=80&w=200&h=200&auto=format&fit=crop",
    date: "Dec 15, 2025",
    time: "1:00 PM - 3:00 PM",
    resort: "Whistler Blackcomb, Blue Run",
    level: "Intermediate",
    isStarted: false
  }
];

const completedCourses: CourseType[] = [
  {
    id: "3",
    title: "Freestyle Basics",
    instructorName: "Alex Wong",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    date: "Dec 1, 2025",
    time: "10:00 AM - 12:00 PM",
    resort: "Whistler Blackcomb, Terrain Park",
    level: "Advanced",
    hasRated: false
  },
  {
    id: "4",
    title: "Advanced Carving",
    instructorName: "Emily Parker",
    instructorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
    date: "Nov 25, 2025",
    time: "9:00 AM - 11:00 AM",
    resort: "Blackcomb Mountain, Black Diamond",
    level: "Advanced",
    hasRated: true
  }
];

export default MyCourses;
