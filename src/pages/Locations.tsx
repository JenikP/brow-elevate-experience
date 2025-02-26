import { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import LocationMap from "../components/locations/LocationMap";
import LocationCard from "../components/locations/LocationCard";
import Navbar from "../components/Navbar";

const locations = [
  {
    id: 1,
    storeId: "location1",
    name: "Brandon Park",
    address: "Brandon Park Shopping Center (opposite The Reject Shop)",
    description: "Our friendly shop is designed to maintain your privacy, ensuring a comfortable experience.",
    coordinates: { lat: -37.9007, lng: 145.1618 },
    phone: "+61415469594",
    image: "/lovable-uploads/4a6d259e-2c69-4327-9302-2fd3265a87cc.png",
    hours: {
      "Monday – Wednesday": "9:00 am – 5:30 pm",
      "Thursday – Friday": "9:00 am – 7:00 pm",
      "Saturday": "9:00 am – 5:00 pm",
      "Sunday/Public Holidays": "10:00 am – 5:00 pm"
    }
  },
  {
    id: 2,
    storeId: "location2",
    name: "Southland",
    address: "Located conveniently at Southland Shopping Center",
    coordinates: { lat: -37.9594, lng: 145.0544 },
    phone: "+61497719761",
    image: "/lovable-uploads/7a21f579-60ff-4e22-8b2f-842740b8344c.png",
    hours: {
      "Monday – Wednesday": "9:00 am – 5:30 pm",
      "Thursday – Friday": "9:00 am – 7:00 pm",
      "Saturday": "9:00 am – 5:00 pm",
      "Sunday/Public Holidays": "10:00 am – 5:00 pm"
    }
  },
  {
    id: 3,
    storeId: "location3",
    name: "Pakenham",
    address: "Pakenham Shopping Centre",
    description: "Our kiosk ensures both privacy and quick access to all services.",
    coordinates: { lat: -38.0755, lng: 145.4845 },
    phone: "+61415469594",
    image: "/lovable-uploads/b00dd5a9-7c39-4752-aea4-ca3ebb458783.png",
    hours: {
      "Monday – Wednesday": "9:00 am – 5:30 pm",
      "Thursday – Friday": "9:00 am – 7:00 pm",
      "Saturday": "9:00 am – 5:00 pm",
      "Sunday/Public Holidays": "10:00 am – 5:00 pm"
    }
  },
  {
    id: 4,
    storeId: "location4",
    name: "Stud Park",
    address: "StudPark Shopping Centre (opposite Coles)",
    coordinates: { lat: -37.9082, lng: 145.2305 },
    phone: "+61415469594",
    image: "/lovable-uploads/dc9795c0-3c3a-4a66-99fc-7aa4e2490b74.png",
    hours: {
      "Monday – Wednesday": "9:00 am – 5:30 pm",
      "Thursday – Friday": "9:00 am – 7:00 pm",
      "Saturday": "9:00 am – 5:00 pm",
      "Sunday/Public Holidays": "10:00 am – 5:00 pm"
    }
  },
  {
    id: 5,
    storeId: "location5",
    name: "Heidelberg",
    address: "Heidelberg Shopping Centre (near TK Maxx)",
    coordinates: { lat: -37.7566, lng: 145.0695 },
    phone: "+61415469594",
    image: "/lovable-uploads/warringal.png",
    hours: {
      "Monday – Wednesday": "9:00 am – 5:30 pm",
      "Thursday – Friday": "9:00 am – 7:00 pm",
      "Saturday": "9:00 am – 5:00 pm",
      "Sunday/Public Holidays": "10:00 am – 5:00 pm"
    }
  }
];

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCqm_04Dum-ER0Tk9zgm2cTfmZzEmAet-8",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-pearl">
      <Navbar />
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Visit Us at One of Our Five Convenient Locations
          </h1>
          <p className="text-warmGray text-lg max-w-2xl mx-auto">
            Each location is designed to provide privacy and comfort while delivering exceptional beauty services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
            <LocationMap 
              locations={locations}
              selectedLocation={selectedLocation}
              onLocationSelect={setSelectedLocation}
            />
          </div>
          <div className="space-y-6">
            {locations.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                isSelected={selectedLocation === location.id}
                onClick={() => setSelectedLocation(location.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
