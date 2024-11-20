import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import ServiceCategory from './services/ServiceCategory';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useNavigate } from "react-router-dom";
import { useLocationStore } from "../stores/locationStore";
import { toast } from "sonner";

const services = {
  facialThreadingWaxing: [
    {
      title: "Eyebrow Threading/Waxing",
      price: "from $12",
      description: "Precise shaping and hair removal",
      duration: "15 mins",
      locationPrices: {
        "location1": "from $12",
        "location2": "from $13",
        "location3": "from $14",
        "location4": "from $15",
        "location5": "from $16"
      }
    },
    {
      title: "Upper Lip",
      price: "from $10",
      description: "Gentle hair removal for a smooth finish",
      duration: "10 mins"
    },
    {
      title: "Forehead",
      price: "from $10",
      description: "Smooth forehead hair removal",
      duration: "10 mins"
    },
    {
      title: "Chin",
      price: "from $10",
      description: "Precise chin hair removal",
      duration: "10 mins"
    },
    {
      title: "Side Burns",
      price: "from $10",
      description: "Shape and define your sideburns",
      duration: "10 mins"
    },
    {
      title: "Neck",
      price: "from $10",
      description: "Clean and smooth neck hair removal",
      duration: "10 mins"
    },
    {
      title: "Full Face",
      price: "from $45",
      description: "Complete facial hair removal",
      duration: "45 mins"
    }
  ],
  bodyWaxing: [
    {
      title: "Under Arms",
      price: "from $12",
      description: "Smooth underarm hair removal",
      duration: "15 mins",
      locationPrices: {
        "location1": "from $12",
        "location2": "from $13",
        "location3": "from $14",
        "location4": "from $15",
        "location5": "from $16"
      }
    },
    {
      title: "Half Arm",
      price: "from $22",
      description: "Partial arm waxing service",
      duration: "20 mins"
    },
    {
      title: "Full Arm",
      price: "from $30",
      description: "Complete arm waxing treatment",
      duration: "30 mins"
    },
    {
      title: "Half Leg",
      price: "from $28",
      description: "Partial leg waxing service",
      duration: "25 mins"
    },
    {
      title: "Full Leg",
      price: "from $40",
      description: "Complete leg waxing treatment",
      duration: "45 mins"
    },
    {
      title: "Full Body",
      price: "from $220",
      description: "Complete body waxing package",
      duration: "120 mins"
    }
  ],
  beautyAddOns: [
    {
      title: "Eyebrow Tint",
      price: "from $15",
      description: "Enhanced color for fuller-looking brows",
      duration: "15 mins",
      locationPrices: {
        "location1": "from $15",
        "location2": "from $16",
        "location3": "from $17",
        "location4": "from $18",
        "location5": "from $19"
      }
    },
    {
      title: "Eyelash Tint",
      price: "from $20",
      description: "Darker, more defined lashes",
      duration: "20 mins"
    },
    {
      title: "Eyelash Lift with Tint",
      price: "from $50",
      description: "Lifted and tinted lashes for a dramatic look",
      duration: "45 mins"
    },
    {
      title: "Eyebrow Henna Tattoo",
      price: "from $40",
      description: "Semi-permanent brow enhancement",
      duration: "40 mins"
    },
    {
      title: "Eyebrow Lamination with Tint",
      price: "from $65",
      description: "Restructured and tinted brows for a fuller look",
      duration: "60 mins"
    }
  ],
  facial: [
    {
      title: "Mini Facial",
      price: "from $50",
      description: "Quick refreshing facial treatment",
      duration: "30 mins",
      locationPrices: {
        "location1": "from $50",
        "location2": "from $55",
        "location3": "from $60",
        "location4": "from $65",
        "location5": "from $70"
      }
    },
    {
      title: "Full Facial",
      price: "from $80",
      description: "Complete facial treatment for ultimate rejuvenation",
      duration: "60 mins"
    }
  ],
  comboOffers: [
    {
      title: "Eyebrow + Upper Lip",
      price: "from $20",
      description: "Popular combo for complete face framing",
      duration: "25 mins",
      locationPrices: {
        "location1": "from $20",
        "location2": "from $22",
        "location3": "from $24",
        "location4": "from $26",
        "location5": "from $28"
      }
    },
    {
      title: "Eyebrow Threading & Eyelash Tint",
      price: "from $28",
      description: "Perfect combination for defined eyes",
      duration: "35 mins"
    },
    {
      title: "Eyebrow Tint & Eyelash Tint",
      price: "from $30",
      description: "Complete eye enhancement package",
      duration: "35 mins"
    }
  ]
};

const locationNames = {
  location1: "Brandon Park Shopping Centre",
  location2: "Southland Shopping Centre",
  location3: "Pakenham Shopping Centre",
  location4: "Stud Park Shopping Centre",
  location5: "Heidelberg Shopping Centre"
};

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

  return (
    <>
      <Dialog open={showLocationDialog} onOpenChange={setShowLocationDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-secondary">Select Your Preferred Location</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Select onValueChange={handleLocationSelect}>
              <SelectTrigger className="bg-white border-2 border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary">
                <SelectValue placeholder="Choose a location" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {Object.entries(locationNames).map(([key, name]) => (
                  <SelectItem 
                    key={key} 
                    value={key}
                    className="hover:bg-primary/10 focus:bg-primary/10 cursor-pointer"
                  >
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button
              onClick={handleViewLocations}
              className="mt-4 text-primary hover:text-primary-dark hover:underline w-full text-center font-medium"
            >
              View All Locations
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our Services</h2>
            <p className="text-warmGray max-w-2xl mx-auto">
              Experience our comprehensive range of professional beauty services, tailored to enhance your natural beauty.
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
    </>
  );
};

export default Services;
