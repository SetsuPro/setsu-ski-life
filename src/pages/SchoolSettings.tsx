import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  School, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Users, 
  Image, 
  Settings, 
  FileText, 
  Save,
  CreditCard,
  LogOut
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const SchoolSettings: React.FC = () => {
  const [schoolInfo, setSchoolInfo] = useState({
    name: "虾滑 ShredHub Snow School",
    address: "4545 Blackcomb Way, Whistler, BC V8E 0X7, Canada",
    email: "info@whistlerskischool.com",
    phone: "+1 (555) 123-4567",
    website: "whistlerskischool.com",
    description: "Premier ski school located in Whistler Blackcomb, offering world-class instruction for all skill levels from beginners to advanced skiers. Our certified instructors provide both private and group lessons year-round."
  });

  const handleChange = (field: keyof typeof schoolInfo, value: string) => {
    setSchoolInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveGeneral = () => {
    toast.success("School information updated successfully!");
  };

  const handleSavePayment = () => {
    toast.success("Payment settings updated successfully!");
  };

  const handleSaveNotifications = () => {
    toast.success("Notification preferences updated!");
  };

  const handleSignOut = () => {
    localStorage.removeItem("setsu-user-logged-in");
    localStorage.removeItem("setsu-user-role");
    window.location.href = "/";
  };

  return (
    <div className="container pb-20 pt-6">
      <h1 className="text-2xl font-bold mb-6">School Settings</h1>
      
      <Tabs defaultValue="general">
        <TabsList className="w-full">
          <TabsTrigger value="general" className="flex-1">General</TabsTrigger>
          <TabsTrigger value="payment" className="flex-1">Payments</TabsTrigger>
          <TabsTrigger value="notifications" className="flex-1">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="mt-4 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">School Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center relative">
                  <School className="h-10 w-10 text-green-600" />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                    <Image className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">School Name</label>
                <Input
                  value={schoolInfo.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Address</label>
                <div className="flex">
                  <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    className="rounded-l-none"
                    value={schoolInfo.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    value={schoolInfo.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Phone</label>
                  <Input
                    value={schoolInfo.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Website</label>
                <Input
                  value={schoolInfo.website}
                  onChange={(e) => handleChange('website', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Description</label>
                <Textarea
                  value={schoolInfo.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  rows={4}
                />
              </div>
              
              <Button onClick={handleSaveGeneral} className="w-full">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">School Branding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-dashed rounded-md p-4 flex flex-col items-center justify-center">
                  <Image className="h-6 w-6 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium">Logo</p>
                  <p className="text-xs text-muted-foreground mb-2">Upload your school logo</p>
                  <Button variant="outline" size="sm">Choose File</Button>
                </div>
                <div className="border border-dashed rounded-md p-4 flex flex-col items-center justify-center">
                  <Image className="h-6 w-6 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium">Cover Photo</p>
                  <p className="text-xs text-muted-foreground mb-2">Upload a cover image</p>
                  <Button variant="outline" size="sm">Choose File</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Staff Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Administrators</h3>
                  <p className="text-xs text-muted-foreground">Manage admin accounts</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => toast.success("Admin management page opened!")}>
                  <Users className="h-4 w-4 mr-2" />
                  Manage
                </Button>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Instructors</h3>
                  <p className="text-xs text-muted-foreground">Manage instructor accounts</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => toast.success("Instructor management page opened!")}>
                  <Users className="h-4 w-4 mr-2" />
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment" className="mt-4 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Payment Methods</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Credit/Debit Cards</p>
                    <p className="text-xs text-muted-foreground">Accept Visa, Mastercard, Amex</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => toast.success("Card settings updated!")}>
                  Configure
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">PayPal</p>
                    <p className="text-xs text-muted-foreground">Accept PayPal payments</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => toast.success("PayPal settings updated!")}>
                  Configure
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Bank Transfer</p>
                    <p className="text-xs text-muted-foreground">Accept bank transfers</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => toast.success("Bank transfer settings updated!")}>
                  Configure
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Pricing Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Default Currency</label>
                <Input defaultValue="CAD - Canadian Dollar" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Tax Rate (%)</label>
                <Input type="number" defaultValue="5" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Instructor Commission Rate (%)</label>
                <Input type="number" defaultValue="70" />
              </div>
              
              <Button onClick={handleSavePayment} className="w-full">Save Payment Settings</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Invoice Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Invoice Prefix</label>
                <Input defaultValue="WSS-" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Next Invoice Number</label>
                <Input type="number" defaultValue="10045" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Invoice Notes (Default)</label>
                <Textarea 
                  defaultValue="Thank you for choosing Whistler Ski School. Payment is due within 30 days." 
                  rows={2}
                />
              </div>
              
              <Button onClick={() => toast.success("Invoice settings saved!")} className="w-full">
                Save Invoice Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-4 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Email Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-2">
                <div>
                  <p className="font-medium">New Bookings</p>
                  <p className="text-xs text-muted-foreground">Receive notifications for new bookings</p>
                </div>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-2">
                <div>
                  <p className="font-medium">Booking Cancellations</p>
                  <p className="text-xs text-muted-foreground">Receive notifications when bookings are canceled</p>
                </div>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-2">
                <div>
                  <p className="font-medium">Payment Received</p>
                  <p className="text-xs text-muted-foreground">Receive notifications for payments</p>
                </div>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-2">
                <div>
                  <p className="font-medium">Instructor Applications</p>
                  <p className="text-xs text-muted-foreground">Receive notifications for new instructor applications</p>
                </div>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Notification Email</label>
                <Input defaultValue="admin@whistlerskischool.com" />
              </div>
              
              <Button onClick={handleSaveNotifications} className="w-full">Save Notification Settings</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">SMS Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-2">
                <div>
                  <p className="font-medium">Enable SMS Notifications</p>
                  <p className="text-xs text-muted-foreground">Send SMS notifications to instructors and students</p>
                </div>
                <input type="checkbox" className="toggle" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">SMS Provider API Key</label>
                <Input type="password" defaultValue="••••••••••••••••" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Admin Phone Number</label>
                <Input defaultValue="+1 (555) 987-6543" />
              </div>
              
              <Button onClick={() => toast.success("SMS settings saved!")} className="w-full">Save SMS Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card className="mt-6">
        <CardContent className="p-4">
          <Button 
            variant="destructive" 
            className="w-full flex items-center justify-center"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolSettings;
