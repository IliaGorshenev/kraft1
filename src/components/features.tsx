import React from 'react';
import { motion } from 'framer-motion';

interface FeatureSectionProps {
  leftSlot: React.ReactNode;
  rightSlot: React.ReactNode;
  leftColumnWeight?: string;  // Tailwind класс для ширины левой колонки (e.g., "lg:w-2/5")
  rightColumnWeight?: string; // Tailwind класс для ширины правой колонки (e.g., "lg:w-3/5")
  reverseOnMobile?: boolean;   // Если true, правый слот будет над левым на мобильных
  className?: string;          // Дополнительные классы для контейнера секции
  containerClassName?: string; // Классы для внешнего контейнера, если нужен (например, для общего отступа)
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  leftSlot,
  rightSlot,
  leftColumnWeight = 'lg:w-1/2',  // По умолчанию 50% для левой колонки на lg экранах
  rightColumnWeight = 'lg:w-1/2', // По умолчанию 50% для правой колонки на lg экранах
  reverseOnMobile = false,
  className = '',
  containerClassName = 'py-12 md:py-16 px-4 sm:px-6 lg:px-8', // Общие отступы для секции
}) => {
  const mobileOrderClasses = reverseOnMobile ? 'flex-col-reverse' : 'flex-col';

  return (
    <div className={containerClassName}>
      <div
        className={`flex ${mobileOrderClasses} lg:flex-row gap-8 xl:gap-12 items-center ${className}`}
      >
        <motion.div 
          className={`w-full ${leftColumnWeight}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {leftSlot}
        </motion.div>
        <motion.div 
          className={`w-full ${rightColumnWeight}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {rightSlot}
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureSection;
