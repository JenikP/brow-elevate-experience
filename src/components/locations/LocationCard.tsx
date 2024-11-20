import { Phone, MapPin, Check } from "lucide-react";
import { useLocationStore } from "../../stores/locationStore";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface LocationHours {
  [key: string]: string;
}

interface Location {
  id: number;
  name: string;
  address: string;
  description?: string;
  phone: string;
  hours: LocationHours;
  image: string;
  storeId: string;
}

interface LocationCardProps {
  location: Location;
  isSelected: boolean;
  onClick: () => void;
}

const LocationCard = ({ location, isSelected, onClick }: LocationCardProps) => {
  const { setSelectedLocation } = useLocationStore();

  const handleDirectionsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${location.name} ${location.address}`
        )}`,
        "_blank"
      );
    } catch (error) {
      toast.error("Navigation Error", {
        description: "Failed to open directions. Please try again."
      });
    }
  };

  const handleCallClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      window.location.href = `tel:${location.phone}`;
    } catch (error) {
      toast.error("Call Error", {
        description: "Failed to initiate call. Please try again."
      });
    }
  };

  const handleSelectLocation = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setSelectedLocation(location.storeId);
      toast.success("Location Selected", {
        description: `You've selected ${location.name} as your preferred location.`
      });
    } catch (error) {
      toast.error("Selection Error", {
        description: "Failed to select location. Please try again."
      });
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all cursor-pointer relative
        ${isSelected ? "ring-2 ring-primary scale-[1.02]" : "hover:scale-[1.01]"}`}
      onClick={onClick}
    >
      {isSelected && (
        <div className="absolute top-4 right-4 bg-primary text-secondary p-2 rounded-full z-10">
          <Check size={20} />
        </div>
      )}
      
      <div className="h-48 w-full">
        <img 
          src={location.image} 
          alt={location.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">{location.name}</h3>
            <p
              className="text-warmGray hover:text-secondary underline cursor-pointer"
              onClick={handleDirectionsClick}
            >
              {location.address}
            </p>
          </div>
          <button
            onClick={handleCallClick}
            className="bg-primary hover:bg-primary-dark text-secondary px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">Call Now</span>
          </button>
        </div>

        {location.description && (
          <p className="text-warmGray mb-4">{location.description}</p>
        )}

        <div className="mt-4">
          <h4 className="font-semibold text-secondary mb-2">Opening Hours:</h4>
          <div className="grid grid-cols-1 gap-1">
            {Object.entries(location.hours).map(([day, hours]) => (
              <div key={day} className="flex justify-between text-sm">
                <span className="text-warmGray">{day}</span>
                <span className="text-charcoal">{hours}</span>
              </div>
            ))}
          </div>
        </div>

        <Button 
          onClick={handleSelectLocation}
          className={`w-full mt-4 ${isSelected ? 'bg-primary text-secondary hover:bg-primary-dark' : ''}`}
          variant={isSelected ? "default" : "outline"}
        >
          {isSelected ? 'Selected Location' : 'Select This Location'}
        </Button>
      </div>
    </div>
  );
};

export default LocationCard;
