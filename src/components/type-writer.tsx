import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
  cursorColor?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = '',
  cursorColor = 'bg-primary',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Ensure we have valid texts to work with
  const validTexts = texts && texts.length > 0 ? texts : [''];
  
  // Find the longest text to calculate minimum height
  const longestText = validTexts.reduce((longest, current) => 
    current.length > longest.length ? current : longest, '');

  useEffect(() => {
    // Clear any existing timeout when component unmounts
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const currentFullText = validTexts[textIndex];
    
    // Handle typing and deleting
    const handleTyping = () => {
      // If typing speed is 0, instantly show the full text
      if (typingSpeed === 0 && !isDeleting && currentText === '') {
        setCurrentText(currentFullText);
        setIsBlinking(true);
        timeoutRef.current = setTimeout(() => {
          setIsBlinking(false);
          setIsDeleting(true);
        }, delayBetweenTexts);
        return;
      }
      
      // Current speed based on whether we're typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      
      if (!isDeleting && currentText === currentFullText) {
        // Finished typing, wait before deleting
        setIsBlinking(true);
        timeoutRef.current = setTimeout(() => {
          setIsBlinking(false);
          setIsDeleting(true);
        }, delayBetweenTexts);
      } else if (isDeleting && currentText === '') {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % validTexts.length);
      } else {
        // Continue typing or deleting
        setCurrentText(prevText => {
          if (isDeleting) {
            return prevText.substring(0, prevText.length - 1);
          } else {
            return currentFullText.substring(0, prevText.length + 1);
          }
        });
        
        timeoutRef.current = setTimeout(handleTyping, speed);
      }
    };

    // Start the typing/deleting process
    timeoutRef.current = setTimeout(handleTyping, 100);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, isDeleting, textIndex, validTexts, typingSpeed, deletingSpeed, delayBetweenTexts]);
  
  return (
    <div className={`inline-flex items-center ${className}`} style={{ minHeight: '1em' }}>
      {/* Use a non-breaking space when empty to maintain height */}
      <span style={{ minHeight: '1em', display: 'inline-block' }}>
        {currentText || '\u00A0'}
      </span>
      <motion.span
        animate={{ opacity: isBlinking ? 0 : 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className={`inline-block w-[3px] h-[1em] ${cursorColor} ml-1`}
      />
    </div>
  );
};

export default TypeWriter;
