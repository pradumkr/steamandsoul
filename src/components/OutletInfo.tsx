import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle
} from 'lucide-react';

const operatingHours = [
  { day: 'Monday - Friday', hours: '11:00 AM - 10:00 PM' },
  { day: 'Saturday - Sunday', hours: '10:00 AM - 11:00 PM' },
];

const OutletInfo: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="card p-8 h-full"
    >
      <motion.h3 
        variants={itemVariants} 
        className="text-2xl font-bold text-red-800 mb-6 flex items-center"
      >
        <Clock className="mr-2 text-red-600" size={24} />
        Opening Hours
      </motion.h3>
      
      <motion.div variants={itemVariants} className="mb-8">
        {operatingHours.map((schedule, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="font-medium text-gray-800">{schedule.day}</div>
            <div className="text-red-600 font-bold">{schedule.hours}</div>
          </div>
        ))}
      </motion.div>
      
      <motion.div variants={itemVariants} className="mb-6">
        <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
          <MapPin className="mr-2 text-red-600" size={24} />
          Address
        </h3>
        <p className="text-gray-700">
          Gayeshpur Golbazar, Nadia, WB - 741234
        </p>
      </motion.div>
      
      <motion.div variants={itemVariants} className="mb-6">
        <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
          <Phone className="mr-2 text-red-600" size={24} />
          Contact
        </h3>
        <a 
          href="tel:+917044314801" 
          className="text-gray-700 hover:text-red-600 transition-colors block mb-2"
        >
          +91 7044314801
        </a>
        <a 
          href="mailto:steamandsoul09@gmail.com" 
          className="text-gray-700 hover:text-red-600 transition-colors block"
        >
          steamandsoul09@gmail.com
        </a>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <a 
          href="https://wa.me/917044314801" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary w-full flex items-center justify-center"
        >
          <MessageCircle className="mr-2" size={20} />
          Order via WhatsApp (Upto 3 KM)
        </a>
      </motion.div>
    </motion.div>
  );
};

export default OutletInfo;