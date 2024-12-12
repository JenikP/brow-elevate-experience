import { motion } from "framer-motion";

interface ServiceDetailsProps {
  title: string;
  price: string;
  description: string;
  duration: string;
}

const ServiceDetails = ({ title, price, description, duration }: ServiceDetailsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-full space-y-2 p-6 bg-white/95"
    >
      <h4 className="text-xl font-semibold text-secondary">{title}</h4>
      <p className="text-sm text-warmGray">{description}</p>
      <p className="text-lg font-bold text-secondary">{price}</p>
      <p className="text-sm text-warmGray">{duration}</p>
    </motion.div>
  );
};

export default ServiceDetails;