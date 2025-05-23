import { partnersData } from '@/types';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

// Styled components for the slider
const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px 0;
  margin: 20px 0;
  --background-color: #ffffff;

  html.dark & {
    --background-color: #171717;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, var(--background-color), rgba(255, 255, 255, 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, var(--background-color), rgba(255, 255, 255, 0));
  }

  html.dark &::before {
    background: linear-gradient(to right, var(--background-color), rgba(23, 23, 23, 0));
  }

  html.dark &::after {
    background: linear-gradient(to left, var(--background-color), rgba(23, 23, 23, 0));
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    margin: 10px 0;

    &::before,
    &::after {
      width: 50px;
    }
  }
`;
const SliderTrackForward = styled.div`
  display: flex;
  gap: 40px;
  animation: scrollForward 60s linear infinite;
  will-change: transform;
  margin-bottom: 30px;

  @keyframes scrollForward {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-150px * ${partnersData.length / 2} - 40px * ${partnersData.length / 2}));
    }
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 20px;

    @keyframes scrollForward {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-100px * ${partnersData.length / 2} - 20px * ${partnersData.length / 2}));
      }
    }
  }
`;

const SliderTrackBackward = styled.div`
  display: flex;
  gap: 40px;
  animation: scrollBackward 50s linear infinite; /* Slightly faster for variety */
  will-change: transform;

  @keyframes scrollBackward {
    0% {
      transform: translateX(calc(-150px * ${partnersData.length / 2} - 40px * ${partnersData.length / 2}));
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    gap: 20px;

    @keyframes scrollBackward {
      0% {
        transform: translateX(calc(-100px * ${partnersData.length / 2} - 20px * ${partnersData.length / 2}));
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;
const PartnerItem = styled(motion.div)`
  flex: 0 0 150px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;

  html.dark & {
    background: rgba(23, 23, 23, 0.3);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(255, 132, 97, 0.15);
    background: rgba(255, 132, 97, 0.05);
  }

  img {
    max-width: 100%;
    max-height: 70px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%);
    opacity: 1;
  }

  @media (max-width: 768px) {
    flex: 0 0 100px;
    height: 70px;
    padding: 10px;
    border-radius: 8px;

    img {
      max-height: 50px;
    }
  }

  @media (max-width: 480px) {
    flex: 0 0 80px;
    height: 60px;
    padding: 8px;

    img {
      max-height: 40px;
    }
  }
`;

const PartnersSlider: React.FC = () => {
  // Split partners into two groups for the two rows
  const firstHalf = partnersData.slice(0, Math.ceil(partnersData.length / 2));
  const secondHalf = partnersData.slice(Math.ceil(partnersData.length / 2));

  // Duplicate arrays to create seamless loops
  const duplicatedFirstHalf = [...firstHalf, ...firstHalf, ...firstHalf];
  const duplicatedSecondHalf = [...secondHalf, ...secondHalf, ...secondHalf];

  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-12  max-w-full overflow-hidden  md:py-8">
      <div className="container mx-autopx-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          Наши <span className="text-primary">партнеры</span>
        </motion.h2>

        <SliderWrapper>
          {/* First row - moving forward */}
          <SliderTrackForward>
            {duplicatedFirstHalf.map((partner, index) => (
              <PartnerItem
                key={`forward-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.03, 0.5), // Reduced delay cap
                }}>
                <img src={partner.image} alt={partner.title} width={partner.width} height={partner.height} />
              </PartnerItem>
            ))}
          </SliderTrackForward>

          {/* Second row - moving backward */}
          <SliderTrackBackward>
            {duplicatedSecondHalf.map((partner, index) => (
              <PartnerItem
                key={`backward-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.03, 0.5), // Reduced delay cap
                }}>
                <img src={partner.image} alt={partner.title} width={partner.width} height={partner.height} />
              </PartnerItem>
            ))}
          </SliderTrackBackward>
        </SliderWrapper>

        <div className="text-center mt-6 md:mt-8">
          <motion.a
            href="/partners"
            className="inline-flex items-center text-primary font-medium hover:underline text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
            <span>Все партнеры</span>
            <svg className="ml-1 md:ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default PartnersSlider;
