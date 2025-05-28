import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Navigation } from 'lucide-react';

const GoogleMap: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // This would be the actual location coordinates
  const locationLatLng = "19.0760,72.8777"; // Mumbai coordinates as an example

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="card h-full flex flex-col"
    >
      <div className="relative w-full h-80 overflow-hidden rounded-t-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17320.395819943173!2d88.43089047886886!3d22.969923071367074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f895237d8c2c43%3A0xa617faf57fbd04d1!2sKalyani%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1748450082554!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Steam and Soul location"
          className="absolute inset-0"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-red-800 mb-4">Find Us</h3>
        <p className="text-gray-700 mb-6">
          We're conveniently located in the heart of the city. Use the map to find your way to our momo paradise!
        </p>
        
        <div className="mt-auto">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${locationLatLng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full flex items-center justify-center"
          >
            <Navigation className="mr-2" size={20} />
            Get Directions
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default GoogleMap;