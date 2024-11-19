import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  duration: string;
  image: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, price, description, duration, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-64 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300"/>
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
        <h4 className="text-xl font-semibold z-10">{title}</h4>
        
        <AnimatePresence>
          {isHovered ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-2"
            >
              <p className="text-sm">{description}</p>
              <p className="text-lg font-bold">{price}</p>
              <p className="text-sm">{duration}</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p className="text-lg">Hover to see details</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceCard;