
import React, { useState } from "react";
import { Calendar, Clock, DollarSign, Users, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

const InstructorHome: React.FC = () => {
  const [upcomingLessonsDialog, setUpcomingLessonsDialog] = useState(false);
  const [earningsDialog, setEarningsDialog] = useState(false);
  const [lessonDetailsDialog, setLessonDetailsDialog] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<null | {
    time: string;
    title: string;
    students: number;
    location: string;
  }>(null);

  const lessons = [
    { time: "9:00 AM", period: "AM", title: "Beginner Group Lesson", students: 4, location: "Green Slope, Whistler" },
    { time: "1:00 PM", period: "PM", title: "Private Lesson - Sarah", students: 1, location: "Blue Run, Whistler" },
    { time: "4:00 PM", period: "PM", title: "Advanced Technique", students: 2, location: "Black Diamond, Whistler" },
  ];

  const handleViewLessonDetails = (lesson: typeof selectedLesson) => {
    setSelectedLesson(lesson);
    setLessonDetailsDialog(true);
  };

  const handleStartLesson = () => {
    toast.success("Lesson started successfully!");
    setLessonDetailsDialog(false);
  };

  const handleBookingAction = (id: string, action: 'accept' | 'decline') => {
    toast.success(`Booking ${action === 'accept' ? 'accepted' : 'declined'}!`);
  };

  return (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-sky-600 to-ski-blue p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Emily</h1>
        <p className="text-white/80">You have 3 lessons scheduled today</p>
      </div>

      <div className="p-4">
        {/* Stats section */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="cursor-pointer" onClick={() => setUpcomingLessonsDialog(true)}>
            <CardContent className="p-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-ski-light-blue flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-ski-blue" />
                </div>
                <p className="text-xl font-bold">12</p>
                <p className="text-xs text-muted-foreground">Upcoming Lessons</p>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer" onClick={() => setEarningsDialog(true)}>
            <CardContent className="p-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-xl font-bold">$1,240</p>
                <p className="text-xs text-muted-foreground">This Month</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today's schedule */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">Today's Schedule</h3>
          <Card>
            <CardContent className="p-4 space-y-4">
              {lessons.map((lesson, idx) => (
                <div className="flex items-start" key={idx}>
                  <div className="min-w-16 text-center">
                    <p className="text-sm font-medium">{lesson.time}</p>
                    <p className="text-xs text-muted-foreground">{lesson.period}</p>
                  </div>
                  <div className={`flex-1 border-l-2 border-ski-blue pl-4 ml-2 ${idx < lessons.length - 1 ? 'pb-4' : ''}`}>
                    <h4 className="font-medium">{lesson.title}</h4>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Users className="h-3 w-3 mr-1" />
                      <span>{lesson.students} student{lesson.students > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{lesson.location}</span>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewLessonDetails(lesson)}
                      >
                        Details
                      </Button>
                      <Button 
                        size="sm"
                        onClick={handleStartLesson}
                      >
                        Start Lesson
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Weekly earnings */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">Weekly Earnings</h3>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">$485.00</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground mb-2">
                80% of weekly goal
              </div>
              <Progress value={80} className="h-2" />
              
              <div className="mt-4 grid grid-cols-7 gap-1 text-center">
                <div className="space-y-1">
                  <div className="h-12 bg-ski-light-blue rounded relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-ski-blue"></div>
                  </div>
                  <span className="text-xs">Mon</span>
                </div>
                <div className="space-y-1">
                  <div className="h-12 bg-ski-light-blue rounded relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-ski-blue"></div>
                  </div>
                  <span className="text-xs">Tue</span>
                </div>
                <div className="space-y-1">
                  <div className="h-12 bg-ski-light-blue rounded relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-ski-blue"></div>
                  </div>
                  <span className="text-xs">Wed</span>
                </div>
                <div className="space-y-1">
                  <div className="h-12 bg-ski-light-blue rounded relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-ski-blue"></div>
                  </div>
                  <span className="text-xs">Thu</span>
                </div>
                <div className="space-y-1">
                  <div className="h-12 bg-ski-light-blue rounded relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-7 bg-ski-blue"></div>
                  </div>
                  <span className="text-xs">Fri</span>
                </div>
                <div className="space-y-1">
                  <div className="h-12 bg-ski-light-blue rounded relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-9 bg-ski-blue"></div>
                  </div>
                  <span className="text-xs">Sat</span>
                </div>
                <div className="space-y-1">
                  <div className="h-12 bg-ski-light-purple rounded relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-5 bg-ski-purple"></div>
                  </div>
                  <span className="text-xs">Sun</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Student requests */}
        <div>
          <h3 className="font-medium mb-3">Booking Requests</h3>
          <Card>
            <CardContent className="p-4 space-y-3">
              <Tabs defaultValue="pending">
                <TabsList className="w-full">
                  <TabsTrigger value="pending" className="flex-1">Pending (2)</TabsTrigger>
                  <TabsTrigger value="approved" className="flex-1">Approved</TabsTrigger>
                </TabsList>
                
                <TabsContent value="pending" className="mt-4 space-y-3">
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Alex Johnson</h4>
                        <p className="text-xs text-muted-foreground">Private Lesson · Intermediate</p>
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded">
                        Pending
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Tomorrow, 10:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleBookingAction("1", "decline")}
                      >
                        Decline
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleBookingAction("1", "accept")}
                      >
                        Accept
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Taylor Smith</h4>
                        <p className="text-xs text-muted-foreground">Group Lesson · Beginner</p>
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded">
                        Pending
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Dec 12, 9:00 AM - 11:00 AM</span>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleBookingAction("2", "decline")}
                      >
                        Decline
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleBookingAction("2", "accept")}
                      >
                        Accept
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="approved">
                  <p className="text-center text-muted-foreground py-8">No approved requests</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Lessons Dialog */}
      <Dialog open={upcomingLessonsDialog} onOpenChange={setUpcomingLessonsDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upcoming Lessons</DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-4">
            {[...Array(5)].map((_, idx) => (
              <Card key={idx}>
                <CardContent className="p-3">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">{idx % 2 === 0 ? "Private Lesson" : "Group Lesson"}</h3>
                    <span className="text-xs bg-ski-light-blue text-ski-blue px-2 py-0.5 rounded-full">
                      {idx % 3 === 0 ? "Beginner" : idx % 3 === 1 ? "Intermediate" : "Advanced"}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>Dec {10 + idx}, 2025 • {idx % 2 === 0 ? "9:00 AM" : "1:00 PM"} - {idx % 2 === 0 ? "11:00 AM" : "3:00 PM"}</span>
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{idx % 2 === 0 ? "Whistler" : "Blackcomb"} {idx % 3 === 0 ? "Green Slope" : idx % 3 === 1 ? "Blue Run" : "Black Diamond"}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Earnings Dialog */}
      <Dialog open={earningsDialog} onOpenChange={setEarningsDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Monthly Earnings</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">$1,240</h3>
              <p className="text-sm text-muted-foreground">December 2025</p>
            </div>
            
            <div className="space-y-3 mb-4">
              <div>
                <div className="flex justify-between text-sm">
                  <span>Private Lessons</span>
                  <span>$840</span>
                </div>
                <Progress value={67} className="h-2 mt-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span>Group Classes</span>
                  <span>$400</span>
                </div>
                <Progress value={33} className="h-2 mt-1" />
              </div>
            </div>
            
            <Card className="mb-4">
              <CardContent className="p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Total Lessons</p>
                    <p className="text-2xl font-bold">16</p>
                  </div>
                  <div>
                    <p className="font-medium">Avg. per Lesson</p>
                    <p className="text-2xl font-bold">$77.50</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button className="w-full">View Detailed Report</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lesson Details Dialog */}
      <Dialog open={lessonDetailsDialog} onOpenChange={setLessonDetailsDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedLesson?.title}</DialogTitle>
          </DialogHeader>
          {selectedLesson && (
            <div className="py-4 space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Time</p>
                  <p className="font-medium">{selectedLesson.time}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Students</p>
                  <p className="font-medium">{selectedLesson.students}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">{selectedLesson.location}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Student Info</h4>
                {selectedLesson.students > 1 ? (
                  <div className="space-y-2">
                    {[...Array(selectedLesson.students)].map((_, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-2">
                          <img 
                            src={`https://i.pravatar.cc/100?img=${20 + idx}`}
                            alt="Student" 
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <p className="text-sm">Student {idx + 1}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-2">
                      <img 
                        src="https://i.pravatar.cc/100?img=47"
                        alt="Student" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm">Sarah Williams</p>
                      <p className="text-xs text-muted-foreground">Intermediate level</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1" onClick={() => setLessonDetailsDialog(false)}>
                  Close
                </Button>
                <Button className="flex-1" onClick={handleStartLesson}>
                  Start Lesson
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InstructorHome;
