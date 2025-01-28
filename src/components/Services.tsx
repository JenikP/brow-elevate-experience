import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import ServiceCategory from './services/ServiceCategory';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useNavigate } from "react-router-dom";
import { useLocationStore } from "../stores/locationStore";
import { toast } from "sonner";
import { services, locationNames } from "../data/servicesData";

const Services = () => {
  const [showLocationDialog, setShowLocationDialog] = useState(true);
  const { selectedLocation, setSelectedLocation, isLoading, error } = useLocationStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedLocation) {
      setShowLocationDialog(false);
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (error) {
      toast.error("Location Error", {
        description: error
      });
    }
  }, [error]);

  const handleLocationSelect = (location: string) => {
    try {
      if (!location) {
        throw new Error("Please select a valid location");
      }
      setSelectedLocation(location);
      setShowLocationDialog(false);
    } catch (error) {
      toast.error("Selection Error", {
        description: error instanceof Error ? error.message : "Failed to select location"
      });
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+61123456789";
  };

  const handleViewLocations = () => {
    navigate('/locations');
  };

  // If no location is selected, only show the dialog
  if (!selectedLocation) {
    return (
      <Dialog open={true} onOpenChange={() => {}}>
        <DialogContent 
          className="bg-pearl w-[95vw] max-w-[500px] p-8 shadow-lg" 
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-secondary text-center mb-6">
              Select Your Preferred Location
            </DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <Select onValueChange={handleLocationSelect}>
              <SelectTrigger className="bg-white border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary h-14 text-lg">
                <SelectValue placeholder="Choose a location" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {Object.entries(locationNames).map(([key, name]) => (
                  <SelectItem 
                    key={key} 
                    value={key}
                    className="hover:bg-primary/10 focus:bg-primary/10 cursor-pointer py-4 text-lg"
                  >
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button
              onClick={handleViewLocations}
              className="mt-6 text-primary hover:text-primary-dark hover:underline w-full text-center font-medium text-lg py-2"
            >
              View All Locations
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-warmGray max-w-2xl mx-auto">
            Experience our comprehensive range of professional beauty services, 
            tailored to enhance your natural beauty.
          </p>
          {selectedLocation && (
            <p className="mt-2 text-primary">
              Showing prices for: {locationNames[selectedLocation as keyof typeof locationNames]}
            </p>
          )}
        </div>

        {Object.entries(services).map(([category, items]) => (
          <ServiceCategory 
            key={category} 
            category={category} 
            items={items} 
            selectedLocation={selectedLocation}
          />
        ))}

        <div className="text-center mt-12">
          <button 
            onClick={handleCall}
            className="bg-primary hover:bg-primary-dark text-secondary px-8 py-3 rounded-full text-lg transition-colors flex items-center gap-2 mx-auto"
          >
            <Phone size={20} />
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;