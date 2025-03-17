
import { Phone } from "lucide-react";
import { useEffect, useState, lazy, Suspense } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useNavigate } from "react-router-dom";
import { useLocationStore } from "../stores/locationStore";
import { toast } from "sonner";
import { services, locationNames } from "../data/servicesData";
import LoadingSpinner from "./ui/loading-spinner";

// Lazy load the ServiceCategory component
const ServiceCategory = lazy(() => import('./services/ServiceCategory'));

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
          className="bg-gradient-to-b from-pearl to-white max-w-[95%] sm:max-w-[450px] p-4 sm:p-8 shadow-xl rounded-xl border border-primary/20" 
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-secondary text-center mb-4 sm:mb-6">
              Select Your Preferred Location
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 sm:py-6 space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {Object.entries(locationNames).map(([key, name]) => (
                <button
                  key={key}
                  onClick={() => handleLocationSelect(key)}
                  className="flex items-center justify-between p-3 sm:p-4 rounded-lg border-2 border-primary/20 bg-white hover:bg-primary/5 hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <span className="text-base sm:text-lg font-medium text-secondary">{name}</span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={handleViewLocations}
              className="mt-6 sm:mt-8 text-primary hover:text-primary-dark hover:underline w-full text-center font-medium text-base sm:text-lg py-3 border-t border-primary/10 pt-4"
            >
              View All Locations
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-warmGray text-sm sm:text-base max-w-2xl mx-auto">
            Experience our comprehensive range of professional beauty services, 
            tailored to enhance your natural beauty.
          </p>
          {selectedLocation && (
            <p className="mt-2 text-primary text-sm sm:text-base">
              Showing prices for: {locationNames[selectedLocation as keyof typeof locationNames]}
            </p>
          )}
        </div>

        <Suspense fallback={<div className="py-12 flex justify-center"><LoadingSpinner /></div>}>
          {Object.entries(services).map(([category, items]) => (
            <ServiceCategory 
              key={category} 
              category={category} 
              items={items} 
              selectedLocation={selectedLocation}
            />
          ))}
        </Suspense>

        <div className="text-center mt-10 sm:mt-12">
          <button 
            onClick={handleCall}
            className="bg-primary hover:bg-primary-dark text-secondary px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg transition-colors flex items-center gap-2 mx-auto"
          >
            <Phone size={18} />
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
