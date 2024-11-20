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
      className="relative h-auto min-h-[16rem] rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </div>
      
      <ServiceDetails
        title={title}
        price={price}
        description={description}
        duration={duration}
      />
    </motion.div>
  );
};

export default ServiceCard;