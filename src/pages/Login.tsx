
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userRole = localStorage.getItem("setsu-user-role");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login (replace with actual authentication)
    setTimeout(() => {
      localStorage.setItem("setsu-user-logged-in", "true");
      navigate("/home");
      setIsLoading(false);
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration (replace with actual authentication)
    setTimeout(() => {
      localStorage.setItem("setsu-user-logged-in", "true");
      navigate("/home");
      setIsLoading(false);
    }, 1000);
  };

  const handleBackToRoleSelect = () => {
    localStorage.removeItem("setsu-user-role");
    navigate("/");
  };

  let roleName = "Student";
  let bgColorClass = "bg-ski-light-blue";
  let gradientClass = "from-sky-600 to-ski-blue";
  
  switch(userRole) {
    case "instructor":
      roleName = "Instructor";
      bgColorClass = "bg-ski-light-purple";
      gradientClass = "from-indigo-600 to-ski-purple";
      break;
    case "admin":
      roleName = "Ski School Admin";
      bgColorClass = "bg-ski-light-green";
      gradientClass = "from-emerald-600 to-green-500";
      break;
  }

  return (
    <div className={`min-h-screen ${bgColorClass}`}>
      <div className={`bg-gradient-to-r ${gradientClass} p-6 text-white relative`}>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute left-4 top-4 text-white hover:bg-white/20"
          onClick={handleBackToRoleSelect}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold text-center mt-6">Welcome to Setsu</h1>
        <p className="text-center text-white/70">{roleName} Account</p>
      </div>

      <div className="p-4">
        <Card className="mx-auto max-w-md mt-8">
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <CardHeader>
                <CardTitle className="text-center">Login to your account</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-xs text-ski-purple">
                        Forgot password?
                      </a>
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </form>
              </CardContent>
            </TabsContent>
            
            <TabsContent value="register">
              <CardHeader>
                <CardTitle className="text-center">Create your account</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="register-email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="register-password" type="password" required />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    By registering, you agree to our{" "}
                    <a href="#" className="text-ski-purple hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-ski-purple hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Login;
