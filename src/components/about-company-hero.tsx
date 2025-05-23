import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Create a styled component for the full-width section
const FullWidthSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 85vh;
  overflow: hidden;
`;

export default function AboutCompanyHero() {
  return (
    <FullWidthSection>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/image-1.png"
          alt="О компании Крафт Лаб"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/1920x1080?text=Крафт+Лаб';
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 rounded-xl bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              О компании <span className="text-primary">Крафт Лаб</span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              Компания «Крафт Лаб» специализируется на разработке программного обеспечения и IT-консалтинге. Мы предлагаем полный цикл услуг от проектирования до
              внедрения и поддержки IT-решений.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 hidden sm:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}>
              Наша команда состоит из опытных разработчиков, аналитиков и проектных менеджеров, которые обеспечивают высокое качество и своевременную реализацию проектов.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}>
              <Link
                className={buttonStyles({
                  color: 'primary',
                  variant: 'shadow',
                  size: 'lg',
                  class: 'w-full sm:w-auto',
                })}
                href="/about">
                Подробнее о нас
              </Link>
              <Link
                className={buttonStyles({
                  color: 'default',
                  variant: 'bordered',
                  size: 'lg',
                  class: 'w-full sm:w-auto sm:ml-4 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20',
                })}
                href="/services">
                Наши услуги
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}>
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-white/80 rounded-full mt-2"
            animate={{
              y: [0, 8, 0],
              opacity: [0.8, 0.2, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          />
        </div>
      </motion.div>
    </FullWidthSection>
  );
}
