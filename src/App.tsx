
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
            <Route path="/my-photos" element={<MyPhotos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Navbar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
