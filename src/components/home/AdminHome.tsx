import React, { useState } from "react";
import { Users, DollarSign, Calendar, TrendingUp, TrendingDown, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

const AdminHome: React.FC = () => {
  const [revenueDialogOpen, setRevenueDialogOpen] = useState(false);
  const [bookingsDialogOpen, setBookingsDialogOpen] = useState(false);
  const [instructorDialogOpen, setInstructorDialogOpen] = useState(false);
  const [selectedInstructorId, setSelectedInstructorId] = useState<string | null>(null);

  const handleInstructorClick = (id: string) => {
    setSelectedInstructorId(id);
    setInstructorDialogOpen(true);
  };

  const handleActionClick = (action: string) => {
    toast.success(`${action} action initiated!`);
  };

  return (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-emerald-600 to-green-500 p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Whistler Ski School</h1>
        <p className="text-white/80">Admin Dashboard</p>
      </div>

      <div className="p-4">
        {/* Stats overview */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card 
            className="border-l-4 border-l-green-500 cursor-pointer" 
            onClick={() => setRevenueDialogOpen(true)}
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="text-2xl font-bold">$15,240</p>
                  <div className="flex items-center text-green-500 text-xs mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+15% this week</span>
                  </div>
                </div>
                <div className="bg-green-100 p-2 rounded-full">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="border-l-4 border-l-blue-500 cursor-pointer"
            onClick={() => setBookingsDialogOpen(true)}
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">Bookings</p>
                  <p className="text-2xl font-bold">94</p>
                  <div className="flex items-center text-blue-500 text-xs mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+8% this week</span>
                  </div>
                </div>
                <div className="bg-blue-100 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue chart */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <div className="h-60 flex items-end justify-between space-x-2">
              <ChartBar value={45} label="Jan" />
              <ChartBar value={30} label="Feb" />
              <ChartBar value={58} label="Mar" />
              <ChartBar value={40} label="Apr" />
              <ChartBar value={35} label="May" />
              <ChartBar value={25} label="Jun" />
              <ChartBar value={18} label="Jul" />
              <ChartBar value={22} label="Aug" />
              <ChartBar value={38} label="Sep" />
              <ChartBar value={52} label="Oct" />
              <ChartBar value={75} label="Nov" />
              <ChartBar value={90} label="Dec" isActive={true} />
            </div>
          </CardContent>
        </Card>

        {/* Instructors section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Instructors</h3>
            <Button variant="outline" size="sm" onClick={() => toast.success("Viewing all instructors")}>View All</Button>
          </div>
          
          <div className="space-y-3">
            <Card className="cursor-pointer" onClick={() => handleInstructorClick("1")}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop" 
                        alt="Instructor" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Emily Parker</h4>
                      <p className="text-xs text-muted-foreground">Advanced Instructor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">12 lessons</p>
                    <p className="text-xs text-green-600">$2,160 revenue</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer" onClick={() => handleInstructorClick("2")}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop" 
                        alt="Instructor" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Michael Torres</h4>
                      <p className="text-xs text-muted-foreground">Intermediate Instructor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">9 lessons</p>
                    <p className="text-xs text-green-600">$1,485 revenue</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer" onClick={() => handleInstructorClick("3")}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop" 
                        alt="Instructor" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Sarah Johnson</h4>
                      <p className="text-xs text-muted-foreground">Beginner Instructor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">8 lessons</p>
                    <p className="text-xs text-green-600">$1,240 revenue</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="h-16 flex flex-col items-center justify-center"
            onClick={() => handleActionClick("Add Instructor")}
          >
            <Users className="h-5 w-5 mb-1" />
            <span className="text-xs">Add Instructor</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 flex flex-col items-center justify-center"
            onClick={() => handleActionClick("Create Schedule")}
          >
            <Calendar className="h-5 w-5 mb-1" />
            <span className="text-xs">Create Schedule</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 flex flex-col items-center justify-center"
            onClick={() => handleActionClick("View Reports")}
          >
            <BarChart className="h-5 w-5 mb-1" />
            <span className="text-xs">View Reports</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 flex flex-col items-center justify-center"
            onClick={() => handleActionClick("Manage Payments")}
          >
            <DollarSign className="h-5 w-5 mb-1" />
            <span className="text-xs">Manage Payments</span>
          </Button>
        </div>
      </div>

      {/* Revenue Dialog */}
      <Dialog open={revenueDialogOpen} onOpenChange={setRevenueDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Revenue Details</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Current Month Revenue</h3>
                <p className="text-2xl font-bold">$15,240</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  15% increase from last month
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Private Lessons</p>
                  <p className="font-medium">$8,450</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Group Classes</p>
                  <p className="font-medium">$6,790</p>
                </div>
              </div>
              
              <Button className="w-full" onClick={() => setRevenueDialogOpen(false)}>
                View Complete Report
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Bookings Dialog */}
      <Dialog open={bookingsDialogOpen} onOpenChange={setBookingsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Booking Details</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Bookings</p>
                  <p className="text-2xl font-bold">94</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Booking Breakdown</h4>
                <div className="flex justify-between text-sm">
                  <span>Private Lessons</span>
                  <span className="font-medium">42</span>
                </div>
                <Progress value={45} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span>Group Classes</span>
                  <span className="font-medium">52</span>
                </div>
                <Progress value={55} className="h-2" />
              </div>
              
              <Button className="w-full" onClick={() => setBookingsDialogOpen(false)}>
                View All Bookings
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Instructor Dialog */}
      <Dialog open={instructorDialogOpen} onOpenChange={setInstructorDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Instructor Details</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 mr-4">
                <img 
                  src={selectedInstructorId === "1" 
                    ? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" 
                    : selectedInstructorId === "2" 
                      ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                      : "https://images.unsplash.com/photo-1544005313-94ddf0286df2"}
                  alt="Instructor" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold">
                  {selectedInstructorId === "1" 
                    ? "Emily Parker" 
                    : selectedInstructorId === "2"
                      ? "Michael Torres" 
                      : "Sarah Johnson"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedInstructorId === "1" 
                    ? "Advanced Instructor" 
                    : selectedInstructorId === "2"
                      ? "Intermediate Instructor" 
                      : "Beginner Instructor"}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Lessons</p>
                <p className="font-medium">
                  {selectedInstructorId === "1" ? "12" : selectedInstructorId === "2" ? "9" : "8"}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="font-medium">
                  ${selectedInstructorId === "1" ? "2,160" : selectedInstructorId === "2" ? "1,485" : "1,240"}
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button className="w-full">View Schedule</Button>
              <Button variant="outline" className="w-full">Edit Profile</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

interface ChartBarProps {
  value: number;
  label: string;
  isActive?: boolean;
}

const ChartBar: React.FC<ChartBarProps> = ({ value, label, isActive = false }) => {
  const height = `${value}%`;
  const bgColor = isActive ? "bg-green-500" : "bg-green-200";
  
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="w-full h-full relative flex items-end">
        <div className={`w-full ${bgColor} rounded-t-sm`} style={{ height }}></div>
      </div>
      <span className="text-xs text-muted-foreground mt-2">{label}</span>
    </div>
  );
};

export default AdminHome;
