
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Book, FileText, Download, ExternalLink } from "lucide-react";

type SystemType = "CASI" | "BASI" | "AASI" | "CSIA";

interface SystemInfo {
  name: string;
  description: string;
  referenceGuide: string;
  logo?: string;
}

const CourseAssets: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<SystemType>("CASI");
  const [userProfile, setUserProfile] = useState({
    discipline: "snowboard", // "snowboard" or "ski"
    system: "CASI" as SystemType
  });
  
  useEffect(() => {
    // Set default system based on user profile
    setSelectedSystem(userProfile.system);
  }, [userProfile]);

  const systems: Record<SystemType, SystemInfo> = {
    CASI: {
      name: "Canadian Association of Snowboard Instructors",
      description: "The official snowboard teaching system recognized across Canada, offering multiple certification levels.",
      referenceGuide: "https://members.casi-acms.com/documents/Ref_Guide.pdf",
      logo: "https://www.skicanada.org/wp-content/uploads/2014/11/CASI-Logo.jpg"
    },
    BASI: {
      name: "British Association of Snowsport Instructors",
      description: "UK-based snowsport teaching qualification recognized worldwide, covering multiple disciplines.",
      referenceGuide: "https://www.basi.org.uk/content/documents/snowboard-technical-manual.pdf",
    },
    AASI: {
      name: "American Association of Snowboard Instructors",
      description: "The US standard for snowboard instruction, part of PSIA-AASI (Professional Ski Instructors of America and American Association of Snowboard Instructors).",
      referenceGuide: "https://www.thesnowpros.org/download/AASI_manual_sample.pdf",
    },
    CSIA: {
      name: "Canadian Ski Instructors' Alliance",
      description: "Canada's professional ski teaching body, offering internationally recognized certification programs.",
      referenceGuide: "https://www.snowpro.com/en/resources/reference-guide",
    }
  };
  
  const handleSystemChange = (system: SystemType) => {
    setSelectedSystem(system);
  };
  
  const currentSystem = systems[selectedSystem];
  
  return (
    <div className="container pb-20 pt-6">
      <h1 className="text-2xl font-bold mb-6">Course Assets</h1>
      
      <Tabs 
        defaultValue={userProfile.discipline} 
        className="mb-6"
      >
        <TabsList className="w-full">
          <TabsTrigger value="snowboard" className="flex-1">Snowboard</TabsTrigger>
          <TabsTrigger value="ski" className="flex-1">Ski</TabsTrigger>
        </TabsList>
        
        <TabsContent value="snowboard" className="mt-4">
          <div className="grid gap-4 grid-cols-3">
            <SystemButton 
              system="CASI" 
              isSelected={selectedSystem === "CASI"} 
              onClick={() => handleSystemChange("CASI")}
            />
            <SystemButton 
              system="BASI" 
              isSelected={selectedSystem === "BASI"} 
              onClick={() => handleSystemChange("BASI")}
            />
            <SystemButton 
              system="AASI" 
              isSelected={selectedSystem === "AASI"} 
              onClick={() => handleSystemChange("AASI")}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="ski" className="mt-4">
          <div className="grid gap-4 grid-cols-1">
            <SystemButton 
              system="CSIA" 
              isSelected={selectedSystem === "CSIA"} 
              onClick={() => handleSystemChange("CSIA")}
            />
          </div>
        </TabsContent>
      </Tabs>
      
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            {selectedSystem} Reference Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            {currentSystem.logo ? (
              <img 
                src={currentSystem.logo} 
                alt={`${selectedSystem} logo`} 
                className="h-16 w-16 object-contain mr-4"
              />
            ) : (
              <div className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center mr-4">
                <FileText className="h-8 w-8 text-gray-500" />
              </div>
            )}
            <div>
              <h3 className="font-medium">{currentSystem.name}</h3>
              <p className="text-sm text-muted-foreground">{currentSystem.description}</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Download Guide
            </Button>
            <Button variant="outline" className="flex items-center" asChild>
              <a 
                href={currentSystem.referenceGuide} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Online
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Teaching Resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ResourceItem 
            title="Level 1 Teaching Methodology" 
            type="PDF"
          />
          
          <ResourceItem 
            title="Progression Planning Templates" 
            type="PDF"
          />
          
          <ResourceItem 
            title="Technical Demonstrations Video" 
            type="Video"
          />
          
          <ResourceItem 
            title="Lesson Planning Workshop" 
            type="Interactive"
          />
        </CardContent>
      </Card>
    </div>
  );
};

interface SystemButtonProps {
  system: SystemType;
  isSelected: boolean;
  onClick: () => void;
}

const SystemButton: React.FC<SystemButtonProps> = ({ system, isSelected, onClick }) => {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      className="h-auto py-4 w-full flex flex-col items-center justify-center"
      onClick={onClick}
    >
      <Book className={`h-8 w-8 mb-2 ${isSelected ? "text-white" : "text-gray-500"}`} />
      <span>{system}</span>
    </Button>
  );
};

interface ResourceItemProps {
  title: string;
  type: "PDF" | "Video" | "Interactive";
}

const ResourceItem: React.FC<ResourceItemProps> = ({ title, type }) => {
  const getIcon = () => {
    switch (type) {
      case "PDF":
        return <FileText className="h-5 w-5 text-red-500" />;
      case "Video":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "Interactive":
        return <FileText className="h-5 w-5 text-green-500" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {getIcon()}
        <span className="ml-2">{title}</span>
      </div>
      <Button variant="ghost" size="sm" className="flex items-center">
        <Download className="h-4 w-4 mr-2" />
        Download
      </Button>
    </div>
  );
};

export default CourseAssets;
