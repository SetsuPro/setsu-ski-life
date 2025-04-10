
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const Schedule: React.FC = () => {
  return (
    <div className="container pb-20 pt-6">
      <h1 className="text-2xl font-bold mb-6">My Schedule</h1>
      
      <div className="grid gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="min-w-16 text-center">
                  <p className="text-sm font-medium">Apr 11</p>
                  <p className="text-xs text-muted-foreground">Thu</p>
                </div>
                <div className="flex-1 border-l-2 border-ski-blue pl-4 ml-2 pb-4">
                  <h4 className="font-medium">Beginner Group Lesson</h4>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>9:00 AM - 11:00 AM</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Green Slope, Whistler</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="min-w-16 text-center">
                  <p className="text-sm font-medium">Apr 12</p>
                  <p className="text-xs text-muted-foreground">Fri</p>
                </div>
                <div className="flex-1 border-l-2 border-ski-purple pl-4 ml-2 pb-4">
                  <h4 className="font-medium">Private Lesson - Sarah</h4>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>1:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Blue Run, Whistler</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="min-w-16 text-center">
                  <p className="text-sm font-medium">Apr 14</p>
                  <p className="text-xs text-muted-foreground">Sun</p>
                </div>
                <div className="flex-1 border-l-2 border-ski-orange pl-4 ml-2">
                  <h4 className="font-medium">Advanced Technique</h4>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Black Diamond, Whistler</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;
