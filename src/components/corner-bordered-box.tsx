import React from 'react';
import { motion } from 'framer-motion';

interface CornerBorderedBoxProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}

const CornerBorderedBox: React.FC<CornerBorderedBoxProps> = ({
  children,
  className = '',
  borderColor = 'border-primary',
}) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0">
        {/* Top left corner */}
        <div className={`absolute top-0 left-0 w-[24px] h-[2px] ${borderColor}`}></div>
        <div className={`absolute top-0 left-0 w-[2px] h-[24px] ${borderColor}`}></div>
        
        {/* Top right corner */}
        <div className={`absolute top-0 right-0 w-[24px] h-[2px] ${borderColor}`}></div>
        <div className={`absolute top-0 right-0 w-[2px] h-[24px] ${borderColor}`}></div>
        
        {/* Bottom left corner */}
        <div className={`absolute bottom-0 left-0 w-[24px] h-[2px] ${borderColor}`}></div>
        <div className={`absolute bottom-0 left-0 w-[2px] h-[24px] ${borderColor}`}></div>
        
        {/* Bottom right corner */}
        <div className={`absolute bottom-0 right-0 w-[24px] h-[2px] ${borderColor}`}></div>
        <div className={`absolute bottom-0 right-0 w-[2px] h-[24px] ${borderColor}`}></div>
      </div>
      
      {children}
    </motion.div>
  );
};

export default CornerBorderedBox;
