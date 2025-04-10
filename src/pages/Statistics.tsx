
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Calendar, PieChart, TrendingUp, Trophy, Users } from "lucide-react";

const Statistics: React.FC = () => {
  return (
    <div className="container pb-20 pt-6">
      <h1 className="text-2xl font-bold mb-6">Instructor Statistics</h1>
      
      <Tabs defaultValue="performance">
        <TabsList className="w-full">
          <TabsTrigger value="performance" className="flex-1">Performance</TabsTrigger>
          <TabsTrigger value="students" className="flex-1">Students</TabsTrigger>
          <TabsTrigger value="lessons" className="flex-1">Lessons</TabsTrigger>
        </TabsList>
        
        <TabsContent value="performance" className="mt-4 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Teaching Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Student Rating</p>
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-1 text-yellow-500" />
                    <p className="text-xl font-bold">4.8/5.0</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Reviews</p>
                  <p className="text-xl font-bold">42</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Teaching Quality</span>
                  <span>4.9/5.0</span>
                </div>
                <Progress value={98} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span>Friendliness</span>
                  <span>4.8/5.0</span>
                </div>
                <Progress value={96} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span>Knowledge</span>
                  <span>4.7/5.0</span>
                </div>
                <Progress value={94} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span>Punctuality</span>
                  <span>4.6/5.0</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Monthly Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-60 flex items-end justify-between space-x-2">
                <ChartBar value={45} label="Jul" />
                <ChartBar value={58} label="Aug" />
                <ChartBar value={62} label="Sep" />
                <ChartBar value={70} label="Oct" />
                <ChartBar value={85} label="Nov" />
                <ChartBar value={95} label="Dec" isActive={true} />
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-xl font-bold">89%</p>
                  <p className="text-xs text-muted-foreground text-center">Student Improvement Rate</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-xl font-bold">78%</p>
                  <p className="text-xs text-muted-foreground text-center">Student Return Rate</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="students" className="mt-4 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Student Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <div className="w-48 h-48 relative">
                  <PieChartComponent />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-sky-500 rounded-full mr-2"></div>
                  <div>
                    <p className="text-sm">Beginners</p>
                    <p className="text-xs text-muted-foreground">40%</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <div>
                    <p className="text-sm">Intermediate</p>
                    <p className="text-xs text-muted-foreground">35%</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  <div>
                    <p className="text-sm">Advanced</p>
                    <p className="text-xs text-muted-foreground">15%</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <div>
                    <p className="text-sm">Expert</p>
                    <p className="text-xs text-muted-foreground">10%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Student Age Groups</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm">
                  <span>Children (5-12)</span>
                  <span>25%</span>
                </div>
                <Progress value={25} className="h-2 mt-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span>Teens (13-17)</span>
                  <span>20%</span>
                </div>
                <Progress value={20} className="h-2 mt-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span>Young Adults (18-30)</span>
                  <span>30%</span>
                </div>
                <Progress value={30} className="h-2 mt-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span>Adults (31-50)</span>
                  <span>15%</span>
                </div>
                <Progress value={15} className="h-2 mt-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span>Seniors (51+)</span>
                  <span>10%</span>
                </div>
                <Progress value={10} className="h-2 mt-1" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="lessons" className="mt-4 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-xl font-bold">75%</p>
                  <p className="text-xs text-muted-foreground text-center">Private Lessons</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <p className="text-xl font-bold">25%</p>
                  <p className="text-xs text-muted-foreground text-center">Group Lessons</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Lesson History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">This Month</h4>
                      <span className="text-lg font-bold">16</span>
                    </div>
                    <Progress value={80} className="h-2 mt-1" />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Last Month</h4>
                      <span className="text-lg font-bold">14</span>
                    </div>
                    <Progress value={70} className="h-2 mt-1" />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Year to Date</h4>
                      <span className="text-lg font-bold">124</span>
                    </div>
                    <Progress value={90} className="h-2 mt-1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Popular Teaching Locations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm">
                  <span>Whistler Green Slopes</span>
                  <span>40%</span>
                </div>
                <Progress value={40} className="h-2 mt-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span>Blackcomb Blue Runs</span>
                  <span>25%</span>
                </div>
                <Progress value={25} className="h-2 mt-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span>Whistler Blue Runs</span>
                  <span>20%</span>
                </div>
                <Progress value={20} className="h-2 mt-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span>Black Diamond</span>
                  <span>15%</span>
                </div>
                <Progress value={15} className="h-2 mt-1" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Chart bar component for the monthly earnings chart
interface ChartBarProps {
  value: number;
  label: string;
  isActive?: boolean;
}

const ChartBar: React.FC<ChartBarProps> = ({ value, label, isActive = false }) => {
  const height = `${value}%`;
  const bgColor = isActive ? "bg-ski-blue" : "bg-ski-light-blue";
  
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="w-full h-full relative flex items-end">
        <div className={`w-full ${bgColor} rounded-t-sm`} style={{ height }}></div>
      </div>
      <span className="text-xs text-muted-foreground mt-2">{label}</span>
    </div>
  );
};

// Simple pie chart component for student demographics
const PieChartComponent: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Circle segments for the pie chart */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        stroke="#0ea5e9"
        strokeWidth="20"
        strokeDasharray="251.2 251.2"
        strokeDashoffset="0"
        transform="rotate(-90 50 50)"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        stroke="#3b82f6"
        strokeWidth="20"
        strokeDasharray="251.2 251.2"
        strokeDashoffset="100.48"
        transform="rotate(-90 50 50)"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        stroke="#6366f1"
        strokeWidth="20"
        strokeDasharray="251.2 251.2"
        strokeDashoffset="188.4"
        transform="rotate(-90 50 50)"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        stroke="#8b5cf6"
        strokeWidth="20"
        strokeDasharray="251.2 251.2"
        strokeDashoffset="226.08"
        transform="rotate(-90 50 50)"
      />
      <circle cx="50" cy="50" r="20" fill="white" />
    </svg>
  );
};

export default Statistics;
