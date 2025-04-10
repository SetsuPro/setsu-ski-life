
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Users, Calendar, TrendingUp } from "lucide-react";

const Finances: React.FC = () => {
  return (
    <div className="container pb-20 pt-6">
      <h1 className="text-2xl font-bold mb-6">Finances</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xl font-bold">$15,240</p>
              <p className="text-xs text-muted-foreground">Total Revenue (YTD)</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-ski-light-blue flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-ski-blue" />
              </div>
              <p className="text-xl font-bold">245</p>
              <p className="text-xs text-muted-foreground">Total Students (YTD)</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Monthly Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-32 flex items-end justify-between gap-1">
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[20%] w-full bg-ski-blue rounded-t"></div>
              <span className="text-xs mt-1">Jan</span>
            </div>
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[35%] w-full bg-ski-blue rounded-t"></div>
              <span className="text-xs mt-1">Feb</span>
            </div>
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[50%] w-full bg-ski-blue rounded-t"></div>
              <span className="text-xs mt-1">Mar</span>
            </div>
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[70%] w-full bg-ski-purple rounded-t"></div>
              <span className="text-xs mt-1">Apr</span>
            </div>
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[45%] w-full bg-ski-blue rounded-t"></div>
              <span className="text-xs mt-1">May</span>
            </div>
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[30%] w-full bg-ski-blue rounded-t"></div>
              <span className="text-xs mt-1">Jun</span>
            </div>
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[20%] w-full bg-ski-blue rounded-t"></div>
              <span className="text-xs mt-1">Jul</span>
            </div>
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[15%] w-full bg-ski-blue rounded-t"></div>
              <span className="text-xs mt-1">Aug</span>
            </div>
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[25%] w-full bg-ski-blue rounded-t"></div>
              <span className="text-xs mt-1">Sep</span>
            </div>
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[40%] w-full bg-ski-blue rounded-t"></div>
              <span className="text-xs mt-1">Oct</span>
            </div>
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[60%] w-full bg-ski-blue rounded-t"></div>
              <span className="text-xs mt-1">Nov</span>
            </div>
            <div className="relative h-full flex flex-col items-center justify-end flex-1">
              <div className="h-[80%] w-full bg-ski-blue rounded-t"></div>
              <span className="text-xs mt-1">Dec</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="revenue">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>
        
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Group Lessons</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">$8,450</span>
                  <TrendingUp className="h-3 w-3 ml-1 text-green-600" />
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Private Lessons</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">$5,320</span>
                  <TrendingUp className="h-3 w-3 ml-1 text-green-600" />
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Photo Sales</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">$1,470</span>
                  <TrendingUp className="h-3 w-3 ml-1 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Instructor Payments</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">$6,240</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Equipment</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">$2,180</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Software & Services</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">$750</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Finances;
