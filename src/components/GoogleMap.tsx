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
  const locationLatLng = "22.958242513019467, 88.49470807436799"; // Nadia coordinates as an example

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253.80951681234805!2d88.49448405364436!3d22.958185701394882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf74fcacb547%3A0xe321801f621d04d5!2sMa%20tara%20steel%20furniture%20RFL%2CR.R.K%20classic%20mattress%2CN.P.P.L%20%26%20NEXT%20%2CSPPL%2CNPC%20DISTIBUTOR%20IN%20NADIA%20.%40bajaj%20finace%20E.M.I%20AVILABLE!5e1!3m2!1sen!2sin!4v1749271655105!5m2!1sen!2sin"
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