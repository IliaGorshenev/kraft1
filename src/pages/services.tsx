import { motion } from 'framer-motion';
import React from 'react';

import { title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { Service2, servicesContent2 } from '@/types';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className={title({ size: 'lg' })}>
            Наши <span className="text-primary">услуги</span>
          </h1>
          <p className="mt-4 text-lg text-default-600 max-w-2xl mx-auto">
            Мы предлагаем полный спектр ИТ-услуг для бизнеса любого масштаба, от консультаций до внедрения и поддержки комплексных решений.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesContent2.map((service) => (
            <ServiceDetailCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

const ServiceDetailCard: React.FC<{ service: Service2 }> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-content1 rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.imageSrc}
          alt={service.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Service+Image';
          }}
        />
        <div className="absolute top-4 right-4 bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
          {service.displayNumber}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
        <p className="text-default-600 flex-grow mb-6">{service.description}</p>

        <Link to={`/services/${service.id}`} className="mt-auto inline-flex items-center text-primary font-medium hover:underline">
          <span>Подробнее об услуге</span>
          <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};
