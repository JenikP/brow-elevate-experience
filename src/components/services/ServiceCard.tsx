import { FC } from 'react';
import { motion } from 'framer-motion';
import ServiceDetails from './ServiceDetails';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  duration: string;
  image: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, price, description, duration, image }) => {
  return (
    <motion.div 
      className="h-full flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <ServiceDetails
          title={title}
          price={price}
          description={description}
          duration={duration}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;