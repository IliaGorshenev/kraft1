import { Service, servicesContent } from '@/types';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

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
          <div className="inline-flex items-center text-primary font-medium">
            <span>Узнать подробнее</span>
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const AnimatedServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesContent[0].id);
  const activeService = servicesContent.find((s) => s.id === activeServiceId) || servicesContent[0];
  const [direction, setDirection] = useState(0);

  console.log('Current activeServiceId:', activeServiceId); // <-- ADD THIS
  console.log('Current activeService title:', activeService.title); // <-- AND THIS

  // Enhanced animation variants with more dramatic effects
  const imageVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      rotateY: direction > 0 ? 15 : -15,
    }),
    animate: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      rotateY: direction > 0 ? -15 : 15,
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  const numberVariants = {
    initial: {
      opacity: 0,
      scale: 0.7,
      y: 30,
    },
    animate: {
      opacity: 0.6,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.7,
      y: -30,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  };

  const handleSetActiveService = (serviceId: string) => {
    if (serviceId === activeServiceId) return;

    const currentIndex = servicesContent.findIndex((s) => s.id === activeServiceId);
    const newIndex = servicesContent.findIndex((s) => s.id === serviceId);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveServiceId(serviceId);
  };

  // Progress indicator for visual feedback
  const progress = (servicesContent.findIndex((s) => s.id === activeServiceId) / (servicesContent.length - 1)) * 100;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 md:mb-24">
          Наши <span className="text-primary">услуги</span>
        </h2>

        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full mb-12 relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative">
          {/* Sticky Visual Pane */}
          <div className="lg:w-1/2 lg:sticky lg:top-[25vh] h-[60vh] flex items-center justify-center p-4 order-1 lg:order-1">
            <div className="relative w-full h-full max-w-lg flex items-center justify-center">
              {/* Background gradient for visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />

              {/* Animated Number */}
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={activeService.id + '-number'}
                  variants={numberVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute -bottom-16 -right-22 md:-bottom-12 md:-right-16 text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-primary select-none z-50"
                  style={{ lineHeight: '1', opacity: '0.5' }}>
                  {activeService.displayNumber}
                </motion.div>
              </AnimatePresence>

              {/* Animated Image with enhanced effects */}
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={activeService.id + '-image'}
                  custom={direction}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative z-2 w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-xl overflow-hidden"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}>
                  <img
                    src={activeService.imageSrc}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback for missing images
                      e.currentTarget.src = 'https://via.placeholder.com/600x800?text=Service+Image';
                    }}
                  />

                  {/* Overlay gradient for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Service number badge - Force update with key */}
                  {/* <motion.div
                    key={`badge-${activeService.id}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 bg-primary text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center"> */}
                  {/* {activeService.displayNumber} */}
                  {/* </motion.div> */}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Scrollable Text Pane */}
          <div className="lg:w-1/2 space-y-8 order-2 lg:order-2">
            {servicesContent.map((service) => (
              <ServiceTextItem key={service.id} service={service} onInView={() => handleSetActiveService(service.id)} isActive={service.id === activeServiceId} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedServicesSection;
