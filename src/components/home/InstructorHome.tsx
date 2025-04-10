
import React from "react";
import { Calendar, Clock, DollarSign, Users, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InstructorHome: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-sky-600 to-ski-blue p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Emily</h1>
        <p className="text-white/80">You have 3 lessons scheduled today</p>
      </div>

      <div className="p-4">
        {/* Stats section */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card>
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

          <Card>
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
              <div className="flex items-start">
                <div className="min-w-16 text-center">
                  <p className="text-sm font-medium">9:00</p>
                  <p className="text-xs text-muted-foreground">AM</p>
                </div>
                <div className="flex-1 border-l-2 border-ski-blue pl-4 ml-2 pb-4">
                  <h4 className="font-medium">Beginner Group Lesson</h4>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Users className="h-3 w-3 mr-1" />
                    <span>4 students</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Green Slope, Whistler</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline" size="sm">Details</Button>
                    <Button size="sm">Start Lesson</Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="min-w-16 text-center">
                  <p className="text-sm font-medium">1:00</p>
                  <p className="text-xs text-muted-foreground">PM</p>
                </div>
                <div className="flex-1 border-l-2 border-ski-purple pl-4 ml-2 pb-4">
                  <h4 className="font-medium">Private Lesson - Sarah</h4>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>2 hours</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Blue Run, Whistler</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="min-w-16 text-center">
                  <p className="text-sm font-medium">4:00</p>
                  <p className="text-xs text-muted-foreground">PM</p>
                </div>
                <div className="flex-1 border-l-2 border-ski-orange pl-4 ml-2">
                  <h4 className="font-medium">Advanced Technique</h4>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Users className="h-3 w-3 mr-1" />
                    <span>2 students</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Black Diamond, Whistler</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                </div>
              </div>
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
                      <Button variant="outline" size="sm" className="flex-1">Decline</Button>
                      <Button size="sm" className="flex-1">Accept</Button>
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
                      <Button variant="outline" size="sm" className="flex-1">Decline</Button>
                      <Button size="sm" className="flex-1">Accept</Button>
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
    </div>
  );
};

export default InstructorHome;
