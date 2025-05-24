import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';
import React from 'react';

const RServiceTeaser: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}>
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Платформа управления сервисами</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              RVS — единая система <span className="text-primary">вместо хаоса</span>
            </h2>
            <p className="text-default-600 text-lg mb-8">
              RVS упорядочивает внутренние процессы и объединяет всё — от ИТ до HR — в единую, прозрачную систему. Вместо хаоса и ручной рутины вы получаете контроль,
              автоматизацию и рост эффективности с первых недель.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className={buttonStyles({
                  color: 'primary',
                  variant: 'shadow',
                  size: 'lg',
                })}
                href="/rvs">
                Узнать подробнее
              </Link>
              <Link
                className={buttonStyles({
                  color: 'default',
                  variant: 'bordered',
                  size: 'lg',
                })}
                href="/rvs/demo">
                Запросить демо
              </Link>
            </div>
          </motion.div>

          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/rvs.jpeg"
                  alt="RVS интерфейс"
                  className="w-full"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x500?text=RVS+Dashboard';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RServiceTeaser;
