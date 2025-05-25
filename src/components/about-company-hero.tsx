import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import type { ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Create a styled component for the full-width section
const FullWidthSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  min-height: 100vh;
  overflow: hidden;
`;

export default function AboutCompanyHero() {
  const [init, setInit] = useState(false);

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions: ISourceOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 280,
          links: {
            opacity: 0.7,
            color: '#ffffff',
          },
        },
      },
    },
    particles: {
      color: {
        value: ['#55529E', '#ffffff', '#f8f8f8'],
      },
      links: {
        color: '#ffffff',
        distance: 190,
        enable: true,
        opacity: 0.6,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 1.4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 120,
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <FullWidthSection>
      {/* Particles Background */}
      <div style={{ minHeight: '100vh', height: 'auto' }} className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-black to-gray-900">
        {init && <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0 w-full min-h-full" />}
        <div className="absolute inset-0 bg-black/40 z-[2]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen container mx-auto px-4">
        <motion.div
          className="max-w-3xl text-center px-6 py-8 sm:px-8 rounded-xl bg-black/30 backdrop-blur-sm my-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            О компании <span className="text-primary">Крафт Лаб</span>
          </motion.h2>

          <motion.p className="text-lg md:text-xl text-white/90 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Компания «Крафт Лаб» специализируется на разработке программного обеспечения и IT-консалтинге. Мы предлагаем полный цикл услуг от проектирования до внедрения
            и поддержки IT-решений.
          </motion.p>

          <motion.p className="text-lg md:text-xl text-white/90 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
            Наша команда состоит из опытных разработчиков, аналитиков и проектных менеджеров, которые обеспечивают высокое качество и своевременную реализацию проектов.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
                class: 'w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20',
              })}
              href="/services">
              Наши услуги
            </Link>
          </motion.div>
        </motion.div>
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
