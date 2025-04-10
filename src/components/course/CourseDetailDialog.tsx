
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { toast } from "sonner";

interface CourseType {
  id: string;
  title: string;
  instructorName: string;
  instructorImage: string;
  date: string;
  time: string;
  resort: string;
  level: string;
  description?: string;
  hasRated?: boolean;
  isStarted?: boolean;
}

interface CourseDetailDialogProps {
  open: boolean;
  onClose: () => void;
  course: CourseType | null;
  userRole?: string;
}

const CourseDetailDialog: React.FC<CourseDetailDialogProps> = ({
  open,
  onClose,
  course,
  userRole = "student"
}) => {
  if (!course) return null;

  const handleCheckIn = () => {
    toast.success("Successfully checked in to your lesson!");
    onClose();
  };

  const handleStartLesson = () => {
    toast.success("Lesson started! You can now track student locations.");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{course.title}</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img
                src={course.instructorImage || "https://images.unsplash.com/photo-1618886614638-80e3c103d465"}
                alt={course.instructorName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{course.instructorName}</h3>
              <span className="text-xs bg-ski-light-blue text-ski-blue px-2 py-0.5 rounded">
                {course.level}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-2 mb-4 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{course.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{course.time}</span>
            </div>
            <div className="flex items-center col-span-2">
              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{course.resort}</span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-2">Description</h4>
            <p className="text-sm text-muted-foreground">
              {course.description || "This course focuses on building essential skiing skills in a supportive environment. Participants will learn proper techniques for balance, control, and confidence on the slopes."}
            </p>
          </div>

          {userRole === "student" && (
            <div className="flex gap-2">
              {course.isStarted ? (
                <Button className="flex-1" onClick={handleCheckIn}>
                  Check In
                </Button>
              ) : (
                <Button className="flex-1" onClick={handleCheckIn}>
                  Check In
                </Button>
              )}
            </div>
          )}

          {userRole === "instructor" && (
            <div className="flex gap-2">
              <Button className="flex-1" onClick={handleStartLesson}>
                Start Lesson
              </Button>
            </div>
          )}

          {userRole === "admin" && (
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">Edit Course</Button>
              <Button variant="destructive" className="flex-1">Cancel Course</Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailDialog;
