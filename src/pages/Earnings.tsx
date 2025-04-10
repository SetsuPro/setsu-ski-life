
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, ArrowUpRight, Calendar } from "lucide-react";

const Earnings: React.FC = () => {
  return (
    <div className="container pb-20 pt-6">
      <h1 className="text-2xl font-bold mb-6">My Earnings</h1>
      
      <div className="grid gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">This Month</CardTitle>
              <span className="text-sm text-muted-foreground">April 2025</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">$1,240</p>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span className="mr-1">+15%</span>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Apr 10, 2025</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">$120</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 text-green-600" />
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Apr 8, 2025</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">$95</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 text-green-600" />
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Apr 5, 2025</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">$250</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 text-green-600" />
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Apr 2, 2025</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">$180</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 text-green-600" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Earnings;
