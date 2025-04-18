
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import InstructorDetail from "./pages/InstructorDetail";
import BookingFlow from "./pages/BookingFlow";
import MyCourses from "./pages/MyCourses";
import MyPhotos from "./pages/MyPhotos";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import Earnings from "./pages/Earnings";
import Profile from "./pages/Profile";
import Instructors from "./pages/Instructors";
import Finances from "./pages/Finances";
import Settings from "./pages/Settings";
import FindInstructor from "./pages/FindInstructor";
import FindCourses from "./pages/FindCourses";
import Payments from "./pages/Payments";
import SchoolSettings from "./pages/SchoolSettings";
import Statistics from "./pages/Statistics";
import SchoolCourses from "./pages/SchoolCourses";
import StatusEarnings from "./pages/StatusEarnings";
import CourseAssets from "./pages/CourseAssets";

// Layout
import Navbar from "./components/layout/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background pb-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/instructor/:id" element={<InstructorDetail />} />
            <Route path="/booking/:id" element={<BookingFlow />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/school-courses" element={<SchoolCourses />} />
            <Route path="/my-photos" element={<MyPhotos />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/finances" element={<Finances />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/find-instructor" element={<FindInstructor />} />
            <Route path="/find-courses" element={<FindCourses />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/school-settings" element={<SchoolSettings />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/status-earnings" element={<StatusEarnings />} />
            <Route path="/course-assets" element={<CourseAssets />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Navbar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
