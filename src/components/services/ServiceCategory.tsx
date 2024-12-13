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
    const images: { [key: string]: string } = {
      "Eyebrow Threading/Waxing": "https://media.istockphoto.com/id/1219595426/photo/applying-gold-colored-wax-with-spatula-on-womans-face-stock-photo.jpg?s=612x612&w=0&k=20&c=5foFCtmRPF-SWRmcOn8MpNZCnEM4KIgvbyN6sRqtnKQ=",
      "Upper Lip": "https://media.istockphoto.com/id/1075627666/photo/therapist-waxing-womans-upper-lip.jpg?s=612x612&w=0&k=20&c=_HVVmbTzVMuhpOQD1ZpLteJQdX4Yf5fJL1oFn3mohXg=",
      "Forehead": "https://media.istockphoto.com/id/1083288278/photo/eyebrow-threading-epilation-procedure-for-brow-shape-correction.jpg?s=612x612&w=0&k=20&c=ql2jQHMHAYhUxEMcP0RLVujWbCnHgjoRqWSvkBmS_G4=",
      "Eyebrow Tint": "https://media.istockphoto.com/photos/closeup-photo-of-beautician-applying-dye-on-womans-eyebrows-stock-picture-id1219595404?k=20&m=1219595404&s=612x612&w=0&h=wcuXUOQKr1U_hxnSHeuXS-7eiQouwAc3raDogCMLGO8=",
      "Eyelash Lift": "https://media.istockphoto.com/photos/beauty-treatment-curling-eyelashes-by-using-a-curler-lash-lamination-picture-id1074129756?k=20&m=1074129756&s=612x612&w=0&h=ZhMKMFDf2QMWzfxgNXANoU2EfMQqD8oHYOThfzevwbA=",
      "Eyebrow Henna": "https://media.istockphoto.com/photos/when-words-cant-express-try-henna-picture-id1175414251?k=20&m=1175414251&s=612x612&w=0&h=OeS2QqzBtY1QkZ3eG4e4JTHi-SFkj3nW7De8R3-95Rg=",
      // Default images for other services
      "Chin": "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
      "Side Burns": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "Neck": "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
      "Full Face": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "Under Arms": "https://images.unsplash.com/photo-1598524374912-6b0b0bdd5e4e?auto=format&fit=crop&w=800&q=80",
      "Half Arm": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "Full Arm": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "Half Leg": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "Full Leg": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "Full Body": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "Mini Facial": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "Full Facial": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    };
    
    return images[service] || images["Eyebrow Threading/Waxing"];
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