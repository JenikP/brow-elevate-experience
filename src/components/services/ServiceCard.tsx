import { FC } from 'react';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  duration: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, price, description, duration }) => {
  return (
    <div className="bg-pearl p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="text-center">
        <h4 className="text-xl font-semibold text-secondary mb-2">{title}</h4>
        <p className="text-2xl font-bold text-primary-dark mb-4">{price}</p>
        <p className="text-warmGray mb-4">{description}</p>
        <p className="text-sm text-secondary">{duration}</p>
      </div>
    </div>
  );
};

export default ServiceCard;