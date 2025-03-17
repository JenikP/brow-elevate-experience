
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
import { LocationData } from "../../types/location";

interface LocationMapProps {
  locations: LocationData[];
  selectedLocation: number | null;
  onLocationSelect: (id: number) => void;
}

const LocationMap = ({ locations, selectedLocation, onLocationSelect }: LocationMapProps) => {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  // Calculate center based on all location coordinates
  const mapCenter = {
    lat: -37.9082,
    lng: 145.2305,
  };

  return (
    <GoogleMap
      zoom={10}
      center={mapCenter}
      mapContainerClassName="w-full h-full"
      options={{
        styles: [
          {
            featureType: "all",
            elementType: "all",
            stylers: [{ saturation: -100 }],
          },
        ],
      }}
    >
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.coordinates}
          onClick={() => onLocationSelect(location.id)}
          onMouseOver={() => setHoveredLocation(location.id)}
          onMouseOut={() => setHoveredLocation(null)}
          animation={selectedLocation === location.id ? google.maps.Animation.BOUNCE : undefined}
        >
          {(hoveredLocation === location.id || selectedLocation === location.id) && (
            <InfoWindow onCloseClick={() => setHoveredLocation(null)}>
              <div>
                <h3 className="font-semibold">{location.name}</h3>
                <p className="text-sm">{location.address}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
};

export default LocationMap;
