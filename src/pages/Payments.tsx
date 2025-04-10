
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, CreditCard, ArrowDown, ArrowUp, Filter } from "lucide-react";
import { toast } from "sonner";

const Payments: React.FC = () => {
  const userRole = localStorage.getItem("setsu-user-role");
  
  const handleAction = (action: string) => {
    toast.success(`${action} initiated!`);
  };

  return (
    <div className="container pb-20 pt-6">
      <h1 className="text-2xl font-bold mb-6">Payments</h1>
      
      {userRole === 'admin' ? (
        <AdminPaymentsView />
      ) : (
        <InstructorPaymentsView />
      )}
    </div>
  );
};

const InstructorPaymentsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Payment Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Available Balance</p>
                <p className="text-sm text-muted-foreground">Ready to withdraw</p>
              </div>
            </div>
            <p className="text-xl font-bold">$1,240.00</p>
          </div>
          
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Pending</p>
                <p className="text-sm text-muted-foreground">Processing payments</p>
              </div>
            </div>
            <p className="text-xl font-bold">$320.00</p>
          </div>
        </CardContent>
      </Card>
      
      <Button 
        className="w-full flex items-center gap-2 justify-center"
        onClick={() => toast.success("Withdrawal initiated! Funds will be transferred within 1-2 business days.")}
      >
        Withdraw Funds
        <ArrowDown className="h-4 w-4" />
      </Button>
      
      <Tabs defaultValue="recent">
        <TabsList className="w-full">
          <TabsTrigger value="recent" className="flex-1">Recent</TabsTrigger>
          <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent" className="mt-4 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Transaction History</h3>
            <Button variant="outline" size="sm" className="flex gap-1">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
          
          <TransactionCard 
            type="income"
            amount={95}
            description="Private Lesson - Sarah Williams"
            date="Dec 5, 2025"
          />
          
          <TransactionCard 
            type="income"
            amount={85}
            description="Private Lesson - John Taylor"
            date="Dec 3, 2025"
          />
          
          <TransactionCard 
            type="withdrawal"
            amount={320}
            description="Withdrawal to Bank ****1234"
            date="Dec 1, 2025"
          />
          
          <TransactionCard 
            type="income"
            amount={180}
            description="Group Lesson - Beginner"
            date="Nov 28, 2025"
          />
        </TabsContent>
        
        <TabsContent value="upcoming" className="mt-4 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Upcoming Payments</h3>
          </div>
          
          <TransactionCard 
            type="pending"
            amount={95}
            description="Private Lesson - Mike Chen"
            date="Dec 10, 2025"
          />
          
          <TransactionCard 
            type="pending"
            amount={190}
            description="Group Lesson - Intermediate"
            date="Dec 12, 2025"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const AdminPaymentsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <ArrowDown className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xl font-bold">$8,450</p>
              <p className="text-xs text-muted-foreground">Income This Month</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-2">
                <ArrowUp className="h-6 w-6 text-red-600" />
              </div>
              <p className="text-xl font-bold">$5,320</p>
              <p className="text-xs text-muted-foreground">Expenses This Month</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Payment Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3">
          <Button onClick={() => toast.success("Processing instructor payments!")}>
            Process Instructor Payments
          </Button>
          <Button onClick={() => toast.success("Invoice generator opened!")}>
            Generate Invoices
          </Button>
          <Button onClick={() => toast.success("Tax report generator opened!")}>
            Generate Tax Reports
          </Button>
          <Button onClick={() => toast.success("Financial statement generator opened!")}>
            Financial Statements
          </Button>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="instructors">
        <TabsList className="w-full">
          <TabsTrigger value="instructors" className="flex-1">Instructor Payments</TabsTrigger>
          <TabsTrigger value="students" className="flex-1">Student Payments</TabsTrigger>
          <TabsTrigger value="expenses" className="flex-1">Expenses</TabsTrigger>
        </TabsList>
        
        <TabsContent value="instructors" className="mt-4 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Pending Instructor Payments</h3>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => toast.success("All instructor payments processed!")}
            >
              Pay All
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" 
                      alt="Instructor" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Emily Parker</h4>
                    <p className="text-xs text-muted-foreground">12 lessons this month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium">$2,160</p>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => toast.success("Payment to Emily Parker processed!")}
                  >
                    Pay Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                      alt="Instructor" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Michael Torres</h4>
                    <p className="text-xs text-muted-foreground">9 lessons this month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium">$1,485</p>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => toast.success("Payment to Michael Torres processed!")}
                  >
                    Pay Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="students" className="mt-4 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Recent Student Payments</h3>
          </div>
          
          <TransactionCard 
            type="income"
            amount={95}
            description="Private Lesson - Alex Johnson"
            date="Dec 5, 2025"
          />
          
          <TransactionCard 
            type="income"
            amount={85}
            description="Private Lesson - Taylor Smith"
            date="Dec 3, 2025"
          />
          
          <TransactionCard 
            type="income"
            amount={270}
            description="Group Lesson - Beginner (3 students)"
            date="Dec 1, 2025"
          />
        </TabsContent>
        
        <TabsContent value="expenses" className="mt-4 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Recent Expenses</h3>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => toast.success("Add expense form opened!")}
            >
              Add Expense
            </Button>
          </div>
          
          <TransactionCard 
            type="expense"
            amount={1200}
            description="Equipment Purchase - Safety Gear"
            date="Dec 2, 2025"
          />
          
          <TransactionCard 
            type="expense"
            amount={450}
            description="Facility Rental - Training Room"
            date="Nov 28, 2025"
          />
          
          <TransactionCard 
            type="expense"
            amount={320}
            description="Marketing - Social Media Ads"
            date="Nov 25, 2025"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface TransactionCardProps {
  type: 'income' | 'withdrawal' | 'expense' | 'pending';
  amount: number;
  description: string;
  date: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  type,
  amount,
  description,
  date
}) => {
  const getTypeColor = () => {
    switch(type) {
      case 'income':
        return 'text-green-600 bg-green-100';
      case 'withdrawal':
        return 'text-blue-600 bg-blue-100';
      case 'expense':
        return 'text-red-600 bg-red-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };
  
  const getTypeIcon = () => {
    switch(type) {
      case 'income':
        return <ArrowDown className="h-4 w-4" />;
      case 'withdrawal':
        return <ArrowUp className="h-4 w-4" />;
      case 'expense':
        return <ArrowUp className="h-4 w-4" />;
      case 'pending':
        return <CreditCard className="h-4 w-4" />;
      default:
        return <DollarSign className="h-4 w-4" />;
    }
  };
  
  const getTypeLabel = () => {
    switch(type) {
      case 'income':
        return 'Payment';
      case 'withdrawal':
        return 'Withdrawal';
      case 'expense':
        return 'Expense';
      case 'pending':
        return 'Pending';
      default:
        return 'Transaction';
    }
  };
  
  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex items-center">
          <div className={`rounded-full p-2 mr-3 ${getTypeColor()}`}>
            {getTypeIcon()}
          </div>
          <div className="flex-1">
            <p className="font-medium">{description}</p>
            <div className="flex justify-between">
              <p className="text-xs text-muted-foreground">{date} • {getTypeLabel()}</p>
              <p className={type === 'expense' ? 'text-red-600 font-medium' : 'text-green-600 font-medium'}>
                {type === 'expense' ? '-' : type !== 'withdrawal' ? '+' : ''} ${amount}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Payments;
