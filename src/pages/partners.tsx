import DefaultLayout from '@/layouts/default';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/partners.module.css';
import { partnersData } from '@/types';


const AnimatedPartnersSection = () => {
  // Clone the partners data to create a seamless infinite scroll effect
  const duplicatedPartners = [...partnersData, ...partnersData];

  // State for active partner (for potential highlighting)
  const [activePartner, setActivePartner] = useState(0);
  
  // Refs for the sliders
  const infiniteSliderRef = useRef<HTMLDivElement>(null);
  const featuredSliderRef = useRef<HTMLDivElement>(null);
  
  // State to track if user is dragging the slider
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // State for featured partners section
  const [featuredScrollPosition, setFeaturedScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Auto-advance the active partner every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartner((prev) => (prev + 1) % partnersData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  // Check if scroll arrows should be visible
  useEffect(() => {
    const checkScroll = () => {
      if (featuredSliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = featuredSliderRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        setFeaturedScrollPosition(scrollLeft);
      }
    };
    
    checkScroll();
    
    const slider = featuredSliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScroll);
      return () => slider.removeEventListener('scroll', checkScroll);
    }
  }, []);

  // Mouse event handlers for dragging
  const handleMouseDown = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
    
    // Change cursor style
    if (ref.current) ref.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = (ref: React.RefObject<HTMLDivElement>) => {
    setIsDragging(false);
    
    // Reset cursor style
    if (ref.current) ref.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement>) => {
    if (!isDragging || !ref.current) return;
    
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    ref.current.scrollLeft = scrollLeft - walk;
  };
  
  // Button scroll handlers
  const scrollFeatured = (direction: 'left' | 'right') => {
    if (!featuredSliderRef.current) return;
    
    const scrollAmount = 300; // Adjust as needed
    const newScrollLeft = direction === 'left' 
      ? featuredSliderRef.current.scrollLeft - scrollAmount 
      : featuredSliderRef.current.scrollLeft + scrollAmount;
      
    featuredSliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Наши <span className="text-primary">партнеры</span>
        </motion.h2>

        <motion.div className="mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <p className="text-default-600 text-center max-w-2xl mx-auto">
            Мы сотрудничаем с ведущими российскими и международными компаниями, чтобы предоставлять нашим клиентам лучшие технологические решения.
          </p>
        </motion.div>

        {/* Infinite scroll partners carousel */}
        <div className={styles.wrapper}>
          <div 
            ref={infiniteSliderRef}
            className={`${styles.slider} cursor-grab`}
            onMouseDown={(e) => handleMouseDown(e, infiniteSliderRef)}
            onMouseUp={() => handleMouseUp(infiniteSliderRef)}
            onMouseLeave={() => handleMouseUp(infiniteSliderRef)}
            onMouseMove={(e) => handleMouseMove(e, infiniteSliderRef)}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={index}
                className={styles.sliderCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  boxShadow: index % partnersData.length === activePartner ? '0 8px 30px rgba(255, 132, 97, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
                }}
                transition={{
                  duration: 0.5,
                  delay: (index * 0.05) % 1, // Stagger the initial animation
                }}>
                <h3 className={styles.title}>{partner.title}</h3>
                <p className={styles.text}>{partner.description}</p>
                <div className="mt-auto flex justify-center">
                  <img src={partner.image} alt={partner.title} className={styles.image} width={partner.width} height={partner.height} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional section with featured partners */}
        <motion.div className="mt-24 relative" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <h3 className="text-2xl font-bold text-center mb-8">Ключевые партнеры</h3>

          {/* Navigation arrows */}
          {showLeftArrow && (
            <button 
              onClick={() => scrollFeatured('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
          
          {showRightArrow && (
            <button 
              onClick={() => scrollFeatured('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          <div 
            ref={featuredSliderRef}
            className="flex overflow-x-auto pb-4 hide-scrollbar cursor-grab"
            style={{ scrollBehavior: 'smooth' }}
            onMouseDown={(e) => handleMouseDown(e, featuredSliderRef)}
            onMouseUp={() => handleMouseUp(featuredSliderRef)}
            onMouseLeave={() => handleMouseUp(featuredSliderRef)}
            onMouseMove={(e) => handleMouseMove(e, featuredSliderRef)}
          >
            {partnersData.slice(0, 5).map((partner, index) => (
              <motion.div
                key={`featured-${index}`}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-default-50 transition-colors flex-shrink-0 w-[200px] mx-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>
                <img src={partner.image} alt={partner.title} width={partner.width * 1.2} height={partner.height * 1.2} className="mb-4" />
                <p className="text-center font-medium">{partner.title}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll indicator dots */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(partnersData.length / 3) }).map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  featuredScrollPosition > i * 600 && featuredScrollPosition < (i + 1) * 600
                    ? 'bg-primary'
                    : 'bg-gray-300'
                }`}
                onClick={() => {
                  if (featuredSliderRef.current) {
                    featuredSliderRef.current.scrollTo({
                      left: i * 600,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function PartnersPage() {
  return (
    <DefaultLayout>
      <AnimatedPartnersSection />
    </DefaultLayout>
  );
}

// Export the component for use in other files if needed
export { AnimatedPartnersSection };
