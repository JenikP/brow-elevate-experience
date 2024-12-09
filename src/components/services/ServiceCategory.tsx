import { FC } from 'react';
import ServiceCard from './ServiceCard';
import { useLocation } from 'react-router-dom';

interface Service {
  title: string;
  price: string;
  description: string;
  duration: string;
  locationPrices?: {
    [key: string]: string;
  };
}

interface ServiceCategoryProps {
  category: string;
  items: Service[];
  selectedLocation: string | null;
}

const ServiceCategory: FC<ServiceCategoryProps> = ({ category, items, selectedLocation }) => {
  const getServiceImage = (service: string) => {
    const baseUrl = "https://images.unsplash.com/photo-";
    const images: { [key: string]: string } = {
      "Eyebrow Threading/Waxing": "1522337360788-8b13dee7a37e",
      "Upper Lip": "1522337360788-8b13dee7a37e",
      "Forehead": "1522337360788-8b13dee7a37e",
      "Chin": "1522337360788-8b13dee7a37e",
      "Side Burns": "1522337360788-8b13dee7a37e",
      "Neck": "1522337360788-8b13dee7a37e",
      "Full Face": "1522337360788-8b13dee7a37e",
      "Under Arms": "1522337360788-8b13dee7a37e",
      "Half Arm": "1522337360788-8b13dee7a37e",
      "Full Arm": "1522337360788-8b13dee7a37e",
      "Half Leg": "1522337360788-8b13dee7a37e",
      "Full Leg": "1522337360788-8b13dee7a37e",
      "Full Body": "1522337360788-8b13dee7a37e",
      "Mini Facial": "1522337360788-8b13dee7a37e",
      "Full Facial": "1522337360788-8b13dee7a37e",
    };
    
    return `${baseUrl}${images[service] || images["Eyebrow Threading/Waxing"]}?auto=format&fit=crop&w=800&q=80`;
  };

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-primary mb-8 text-center capitalize">
        {category.replace(/([A-Z])/g, ' $1').trim()}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            price={selectedLocation && service.locationPrices?.[selectedLocation] 
              ? service.locationPrices[selectedLocation]
              : service.price}
            image={getServiceImage(service.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;