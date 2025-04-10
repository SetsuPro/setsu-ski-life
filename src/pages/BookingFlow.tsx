
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, Clock, ArrowLeft, CreditCard, Check } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const BookingFlow: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [lessonType, setLessonType] = useState("private");
  const [loading, setLoading] = useState(false);
  
  // This would be fetched from API based on instructor ID
  const instructorName = "Emily Parker";
  const basePrice = 85;
  const duration = 2; // hours
  
  const handleNextStep = () => {
    if (step === 1 && (!date || !timeSlot)) {
      toast({
        title: "Please select date and time",
        description: "You need to select both a date and time slot to continue.",
        variant: "destructive"
      });
      return;
    }
    
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const handlePreviousStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleConfirmBooking = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(3); // Success step
      window.scrollTo(0, 0);
    }, 1500);
  };
  
  const handleDone = () => {
    navigate("/my-courses");
  };
  
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-ski-blue p-4 text-white flex items-center">
        {step < 3 && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 text-white hover:bg-white/20"
            onClick={step === 1 ? () => navigate(-1) : handlePreviousStep}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <div>
          <h1 className="text-lg font-bold">
            {step === 1 && "Select Date & Time"}
            {step === 2 && "Review & Payment"}
            {step === 3 && "Booking Confirmed"}
          </h1>
          {step < 3 && (
            <p className="text-xs text-white/70">
              Step {step} of 2 • Booking with {instructorName}
            </p>
          )}
        </div>
      </div>
      
      <div className="p-4">
        {/* Step 1: Date and Time Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Select Date</CardTitle>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Select Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
                    <Button 
                      key={time}
                      variant={timeSlot === time ? "default" : "outline"}
                      className={timeSlot === time ? "bg-ski-blue text-white" : ""}
                      onClick={() => setTimeSlot(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Lesson Type</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  defaultValue="private"
                  onValueChange={setLessonType}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="private" id="private" />
                    <Label htmlFor="private" className="flex flex-1 justify-between">
                      <div>
                        <div className="font-medium">Private Lesson</div>
                        <div className="text-sm text-muted-foreground">1:1 instruction</div>
                      </div>
                      <div className="text-ski-blue font-medium">${basePrice}/hr</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="group" id="group" />
                    <Label htmlFor="group" className="flex flex-1 justify-between">
                      <div>
                        <div className="font-medium">Group Lesson</div>
                        <div className="text-sm text-muted-foreground">Small group (2-5 people)</div>
                      </div>
                      <div className="text-ski-blue font-medium">${basePrice * 0.6}/hr per person</div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
            
            <Button className="w-full" onClick={handleNextStep}>
              Continue to Review
            </Button>
          </div>
        )}
        
        {/* Step 2: Review & Payment */}
        {step === 2 && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1542841791-1925b02a2bbb?q=80&w=200&h=200&auto=format&fit=crop" 
                        alt="Instructor" 
                        className="w-full h-full object-cover rounded-full" 
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{instructorName}</h3>
                      <p className="text-xs text-muted-foreground">
                        {lessonType === "private" ? "Private Lesson" : "Group Lesson"}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm space-y-2 mt-2">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{date ? format(date, "EEEE, MMMM d, yyyy") : ""}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{timeSlot} ({duration} hours)</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Base price</span>
                    <span>${basePrice}/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span>{duration} hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lesson type</span>
                    <span>{lessonType === "private" ? "Private" : "Group"}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${lessonType === "private" ? basePrice * duration : basePrice * 0.6 * duration}/person</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-md p-3 flex items-start space-x-3">
                  <CreditCard className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div className="flex-1">
                    <div>
                      <div className="font-medium">Credit Card</div>
                      <div className="text-sm text-muted-foreground">Pay securely with your card</div>
                    </div>
                    <div className="mt-3 space-y-3">
                      <Input placeholder="Card Number" />
                      <div className="grid grid-cols-2 gap-3">
                        <Input placeholder="MM/YY" />
                        <Input placeholder="CVC" type="password" />
                      </div>
                      <Input placeholder="Name on Card" />
                    </div>
                  </div>
                </div>
                
                <div className="text-sm space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="saveCard" className="rounded border-gray-300" />
                    <label htmlFor="saveCard">Save card for future payments</label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your payment information is processed securely. We do not store your credit card details.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-3">
                <h3 className="font-medium mb-2">Cancellation Policy</h3>
                <p className="text-xs text-muted-foreground">
                  Free cancellation up to 24 hours before your lesson. 
                  Cancellations within 24 hours are subject to a 50% fee.
                  No-shows will be charged the full amount.
                </p>
              </CardContent>
            </Card>
            
            <Button 
              className="w-full" 
              onClick={handleConfirmBooking}
              disabled={loading}
            >
              {loading ? "Processing..." : "Confirm & Pay"}
            </Button>
          </div>
        )}
        
        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-6">
              Your lesson with {instructorName} has been booked for {date && format(date, "MMMM d")} at {timeSlot}
            </p>
            
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="text-left space-y-3">
                  <h3 className="font-medium">Booking Details</h3>
                  <div className="text-sm space-y-2 mt-2">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>{date ? format(date, "EEEE, MMMM d, yyyy") : ""}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>{timeSlot} ({duration} hours)</span>
                    </div>
                  </div>
                  <Separator />
                  <p className="text-sm">
                    We've sent a confirmation email with all the details to your registered email address.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Button onClick={handleDone} className="w-full">
              View My Courses
            </Button>
            
            <p className="text-xs text-muted-foreground mt-6">
              Need help? Contact our support team at support@setsu.com
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingFlow;
