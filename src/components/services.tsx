import { Service, servicesContent } from '@/types';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Enhanced ServiceTextItem component with better scroll detection
const ServiceTextItem: React.FC<{
  service: Service;
  onInView: () => void;
  isActive: boolean;
}> = ({ service, onInView, isActive }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '0px', // Tighter activation area - only when fully in view
    amount: 0.6, // Require at least 60% of the element to be visible
    once: false,
  });
  useEffect(() => {
    if (isInView) {
      console.log('Service in view:', service.id);
      onInView();
    }
  }, [isInView, onInView, service.id]);
  return (
    <motion.div
      ref={ref}
      id={`service-${service.id}`}
      className="min-h-[70vh] md:min-h-[60vh] lg:min-h-[80vh] py-16 md:py-20 flex flex-col justify-center"
      initial={{ opacity: 0.4 }}
      animate={{
        opacity: isActive ? 1 : 0.4,
        y: isActive ? 0 : 10,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}>
      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">{service.title}</h3>
      <p className="text-default-600 text-lg leading-relaxed max-w-xl">{service.description}</p>

      {isActive && (
        <motion.div className="mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <div className="inline-flex items-center text-primary font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <Link to={`/services/${service.id}`} className="flex items-center">Узнать подробнее
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};


// Mobile service card component for grid layout
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.imageSrc}
          alt={service.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Service+Image';
          }}
        />
        <div className="absolute top-4 right-4 bg-primary/90 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">{service.displayNumber}</div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
        <p className="text-default-600 flex-grow">{service.description}</p>
        <div className="mt-4 inline-flex items-center text-primary font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          <Link to={`/services/${service.id}`} className="flex items-center">Узнать подробнее
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
