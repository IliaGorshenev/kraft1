import { servicesContent } from '@/types';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

const AnimatedServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 md:mb-24">
          Наши <span className="text-primary">услуги</span>
        </h2>

        <div className="mb-16">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
            style={{ padding: '50px 0' }}>
            {servicesContent.map((service) => (
              <SwiperSlide key={service.id} style={{ width: '350px', height: '500px' }}>
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/600x800?text=Service+Image';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {service.displayNumber}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm mb-4 opacity-90 line-clamp-3">{service.description}</p>
                    <Link to={`/services/${service.id}`} className="inline-flex items-center text-white hover:text-primary-200 font-medium">
                      Узнать подробнее
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* View all services button */}
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300">
              Все услуги
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedServicesSection;
