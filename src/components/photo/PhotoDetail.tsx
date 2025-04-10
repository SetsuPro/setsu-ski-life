
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Map, ArrowLeft, Shirt, Download, Share2, Lock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PhotoDetailProps {
  id: string;
  date: string;
  location: string;
  outfitColor: string;
  imageUrl: string;
  isLocked: boolean;
  onBack: () => void;
}

const PhotoDetail: React.FC<PhotoDetailProps> = ({
  id,
  date,
  location,
  outfitColor,
  imageUrl,
  isLocked,
  onBack
}) => {
  const [showPurchaseDialog, setShowPurchaseDialog] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const handlePurchase = () => {
    setIsPurchased(true);
    setShowPurchaseDialog(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center p-4 border-b">
        <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-medium">Photo Details</h1>
      </div>
      
      <div className="flex-1 p-4">
        <div className="relative rounded-md overflow-hidden mb-4">
          <img 
            src={imageUrl} 
            alt="Skiing photo" 
            className={`w-full h-auto ${isLocked && !isPurchased ? 'blur-md' : ''}`}
          />
          {isLocked && !isPurchased && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="bg-black/50 rounded-full p-4 mb-2">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <p className="text-white font-medium text-center bg-black/50 px-4 py-2 rounded-md">
                Unlock this photo
              </p>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-ski-light-blue p-2 rounded-md flex flex-col items-center">
            <Calendar className="h-5 w-5 text-ski-blue mb-1" />
            <span className="text-xs text-center">{date}</span>
          </div>
          <div className="bg-ski-light-purple p-2 rounded-md flex flex-col items-center">
            <Map className="h-5 w-5 text-ski-purple mb-1" />
            <span className="text-xs text-center">{location}</span>
          </div>
          <div className="bg-ski-light-green p-2 rounded-md flex flex-col items-center">
            <Shirt className="h-5 w-5 text-green-600 mb-1" />
            <span className="text-xs text-center">{outfitColor}</span>
          </div>
        </div>
        
        {isLocked && !isPurchased ? (
          <Button 
            className="w-full mb-3" 
            onClick={() => setShowPurchaseDialog(true)}
          >
            Unlock for $5.99
          </Button>
        ) : (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Button variant="outline" className="flex items-center justify-center">
              <Download className="h-5 w-5 mr-1" />
              Download
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <Share2 className="h-5 w-5 mr-1" />
              Share
            </Button>
          </div>
        )}
        
        <div className="mt-4">
          <h2 className="text-lg font-medium mb-3">Similar Photos</h2>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-164646652${i + 1000}0-5836xbz48f3?w=200&h=200&auto=format&fit=crop&q=60`}
                  alt={`Similar photo ${i}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&auto=format&fit=crop";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <PurchaseDialog 
        open={showPurchaseDialog}
        onClose={() => setShowPurchaseDialog(false)}
        onPurchase={handlePurchase}
      />
    </div>
  );
};

interface PurchaseDialogProps {
  open: boolean;
  onClose: () => void;
  onPurchase: () => void;
}

const PurchaseDialog: React.FC<PurchaseDialogProps> = ({ open, onClose, onPurchase }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Purchase Photo</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="bg-ski-light-purple rounded-md p-4 mb-4">
            <div className="flex justify-between mb-2">
              <span>Photo Price</span>
              <span className="font-medium">$5.99</span>
            </div>
            <hr className="my-2 border-purple-200" />
            <div className="flex justify-between text-ski-purple font-medium">
              <span>Total</span>
              <span>$5.99 USD</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Button 
              className="w-full bg-ski-purple hover:bg-ski-purple/90"
              onClick={onPurchase}
            >
              Pay with Credit Card
            </Button>
            <Button variant="outline" className="w-full">
              Pay with ApplePay
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            By purchasing, you agree to our terms and conditions.
            Your purchase gives you rights to use this photo for personal use only.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoDetail;
