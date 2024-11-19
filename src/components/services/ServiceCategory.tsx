import { FC } from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  title: string;
  price: string;
  description: string;
  duration: string;
}

interface ServiceCategoryProps {
  category: string;
  items: Service[];
}

const ServiceCategory: FC<ServiceCategoryProps> = ({ category, items }) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-primary mb-8 text-center capitalize">
        {category.replace(/([A-Z])/g, ' $1').trim()}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;