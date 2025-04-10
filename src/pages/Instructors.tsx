
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Star, ArrowUpDown, UserPlus, UserMinus, X, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useLocation, useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Instructors: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const defaultTab = queryParams.get('tab') === 'add' ? 'add' : 'view';

  const [selectedInstructor, setSelectedInstructor] = useState<InstructorCardProps | null>(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  
  const handleViewDetails = (instructor: InstructorCardProps) => {
    setSelectedInstructor(instructor);
    setDetailDialogOpen(true);
  };
  
  const handleDeleteInstructor = () => {
    toast.success(`Instructor ${selectedInstructor?.name} removed successfully`);
    setConfirmDeleteDialogOpen(false);
    setDetailDialogOpen(false);
  };
  
  const handleAddInstructor = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("New instructor added successfully!");
    navigate("/instructors");
  };
  
  return (
    <div className="container pb-20 pt-6">
      <h1 className="text-2xl font-bold mb-6">Instructors</h1>
      
      <Tabs defaultValue={defaultTab} className="mb-6">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="view">View Instructors</TabsTrigger>
          <TabsTrigger value="add">Add Instructor</TabsTrigger>
        </TabsList>
        
        <TabsContent value="view">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search instructors..."
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            <Button variant="outline" size="sm" className="flex gap-1">
              <Filter size={14} />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="flex gap-1 whitespace-nowrap">
              <ArrowUpDown size={14} />
              Sort By
            </Button>
            <Button variant="outline" size="sm">All</Button>
            <Button variant="outline" size="sm">Available</Button>
            <Button variant="outline" size="sm">Certified</Button>
            <Button variant="outline" size="sm">New</Button>
          </div>
          
          <div className="grid gap-4">
            <InstructorCard
              name="Sarah Williams"
              specialty="Freestyle Skiing"
              rating={4.9}
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
              status="Active"
              tier="Senior"
              onView={handleViewDetails}
            />
            
            <InstructorCard
              name="Michael Chen"
              specialty="Beginner Friendly"
              rating={4.7}
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
              status="Active"
              tier="Standard"
              onView={handleViewDetails}
            />
            
            <InstructorCard
              name="David Smith"
              specialty="Advanced Technique"
              rating={4.8}
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
              status="On Leave"
              tier="Senior"
              onView={handleViewDetails}
            />
            
            <InstructorCard
              name="Lisa Johnson"
              specialty="Children's Instructor"
              rating={4.9}
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop"
              status="Active"
              tier="Junior"
              onView={handleViewDetails}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="add">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleAddInstructor}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="First name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Last name" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email address" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Phone number" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Specialty</Label>
                    <Input id="specialty" placeholder="e.g. Freestyle Skiing, Children's Instruction" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tier">Instructor Tier</Label>
                    <Select defaultValue="standard">
                      <SelectTrigger>
                        <SelectValue placeholder="Select tier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="junior">Junior ($30-45/hr)</SelectItem>
                        <SelectItem value="standard">Standard ($50-65/hr)</SelectItem>
                        <SelectItem value="senior">Senior ($70-90/hr)</SelectItem>
                        <SelectItem value="expert">Expert ($100+/hr)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio/Description</Label>
                    <Textarea id="bio" placeholder="Brief description about the instructor" rows={3} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="certifications">Certifications</Label>
                    <Input id="certifications" placeholder="PSIA Level 3, CSIA Level 2, etc." />
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full">Add Instructor</Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Instructor Detail Dialog */}
      <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Instructor Details</DialogTitle>
          </DialogHeader>
          
          {selectedInstructor && (
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <img 
                    src={selectedInstructor.image} 
                    alt={selectedInstructor.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{selectedInstructor.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedInstructor.specialty}</p>
                  <div className="flex items-center mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedInstructor.status === "Active" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
                    }`}>
                      {selectedInstructor.status}
                    </span>
                    <span className="text-xs ml-2 px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">
                      {selectedInstructor.tier} Tier
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 font-medium">{selectedInstructor.rating}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">5 years</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Bio</p>
                <p className="text-sm">Experienced instructor specializing in {selectedInstructor.specialty.toLowerCase()}. Certified with PSIA Level 2 and passionate about helping students progress their skills.</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Certifications</p>
                <p className="text-sm">PSIA Level 2, First Aid, CPR</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => toast.success(`Viewing schedule for ${selectedInstructor.name}`)}
                >
                  View Schedule
                </Button>
                <Button 
                  variant="destructive" 
                  className="flex items-center"
                  onClick={() => {
                    setConfirmDeleteDialogOpen(true);
                  }}
                >
                  <UserMinus className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Confirm Delete Dialog */}
      <Dialog open={confirmDeleteDialogOpen} onOpenChange={setConfirmDeleteDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Remove Instructor</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to remove {selectedInstructor?.name}? This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDeleteDialogOpen(false)}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteInstructor}>
              <Check className="h-4 w-4 mr-2" />
              Remove
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

interface InstructorCardProps {
  name: string;
  specialty: string;
  rating: number;
  image: string;
  status: "Active" | "On Leave";
  tier: "Junior" | "Standard" | "Senior" | "Expert";
  onView?: (instructor: InstructorCardProps) => void;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  name,
  specialty,
  rating,
  image,
  status,
  tier,
  onView
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex">
          <div className="w-20 h-20 bg-gray-200">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="p-3 flex-1">
            <div className="flex justify-between">
              <h4 className="font-medium text-sm">{name}</h4>
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs ml-1">{rating}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{specialty}</p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-1">
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  status === "Active" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
                }`}>
                  {status}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">
                  {tier}
                </span>
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => onView && onView({name, specialty, rating, image, status, tier})}
              >
                View
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Instructors;
