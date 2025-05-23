import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';

export default function AboutCompanyHero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute rounded-2xl inset-0 z-0">
        <img
          src="/image-1.png"
          alt="О компании Крафт Лаб"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/1920x1080?text=Крафт+Лаб';
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div className="max-w-3xl text-center px-4 sm:px-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
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

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <Link
              className={buttonStyles({
                color: 'primary',
                variant: 'shadow',
                size: 'lg',
              })}
              href="/about">
              Подробнее о нас
            </Link>
            <Link
              className={buttonStyles({
                color: 'default',
                variant: 'bordered',
                size: 'lg',
                class: 'ml-4 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20',
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
    </section>
  );
}
