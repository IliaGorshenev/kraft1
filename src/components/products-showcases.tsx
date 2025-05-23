import { Link } from '@heroui/link';
import React from 'react';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageSrc: string;
  fallbackImageSrc: string;
  primaryLink: {
    text: string;
    href: string;
  };
  secondaryLink: {
    text: string;
    href: string;
  };
}

const ProductsShowcase: React.FC = () => {
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

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  // Product data
  const products: Product[] = [
    {
      id: 'r-service',
      name: 'R-Service',
      tagline: 'Платформа управления сервисами',
      description: 'R-Service упорядочивает внутренние процессы и объединяет всё — от ИТ до HR — в единую, прозрачную систему. Вместо хаоса и ручной рутины вы получаете контроль, автоматизацию и рост эффективности с первых недель.',
      imageSrc: '/к7.png',
      fallbackImageSrc: 'https://via.placeholder.com/800x500?text=R-Service+Dashboard',
      primaryLink: {
        text: 'Узнать подробнее',
        href: '/r-service',
      },
      secondaryLink: {
        text: 'Запросить демо',
        href: '/r-service/demo',
      },
    },
    // {
    //   id: 'k-monitor',
    //   name: 'K-Monitor',
    //   tagline: 'Система мониторинга инфраструктуры',
    //   description: 'K-Monitor обеспечивает полную видимость вашей ИТ-инфраструктуры в реальном времени. Предотвращайте сбои, оптимизируйте производительность и быстро реагируйте на инциденты с помощью интеллектуальной системы мониторинга.',
    //   imageSrc: '/k-monitor-dashboard.png',
    //   fallbackImageSrc: 'https://via.placeholder.com/800x500?text=K-Monitor+Dashboard',
    //   primaryLink: {
    //     text: 'Узнать подробнее',
    //     href: '/k-monitor',
    //   },
    //   secondaryLink: {
    //     text: 'Запросить демо',
    //     href: '/k-monitor/demo',
    //   },
    // },
    // {
    //   id: 'data-kraft',
    //   name: 'Data Kraft',
    //   tagline: 'Платформа аналитики данных',
    //   description: 'Data Kraft превращает большие данные в ценные бизнес-инсайты. Интуитивно понятные дашборды, продвинутая аналитика и машинное обучение помогают принимать обоснованные решения и находить новые возможности для роста.',
    //   imageSrc: '/data-kraft-dashboard.png',
    //   fallbackImageSrc: 'https://via.placeholder.com/800x500?text=Data+Kraft+Dashboard',
    //   primaryLink: {
    //     text: 'Узнать подробнее',
    //     href: '/data-kraft',
    //   },
    //   secondaryLink: {
    //     text: 'Запросить демо',
    //     href: '/data-kraft/demo',
    //   },
    // },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}>
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Наши продукты</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Инновационные решения <span className="text-primary">для вашего бизнеса</span>
          </h2>
          <p className="text-default-600 text-lg max-w-3xl mx-auto">
            Мы создаем передовые программные продукты, которые помогают компаниям оптимизировать процессы, 
            повышать эффективность и достигать новых высот в цифровой трансформации.
          </p>
        </motion.div> */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              variants={containerVariants}>
              <motion.div className="lg:w-1/2" variants={itemVariants}>
                <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">{product.tagline}</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {product.name} — <span className="text-primary">новый уровень</span>
                </h2>
                <p className="text-default-600 text-lg mb-8">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    className={buttonStyles({
                      color: 'primary',
                      variant: 'shadow',
                      size: 'lg',
                    })}
                    href={product.primaryLink.href}>
                    {product.primaryLink.text}
                  </Link>
                  <Link
                    className={buttonStyles({
                      color: 'default',
                      variant: 'bordered',
                      size: 'lg',
                    })}
                    href={product.secondaryLink.href}>
                    {product.secondaryLink.text}
                  </Link>
                </div>
              </motion.div>

              <motion.div className="lg:w-1/2" variants={itemVariants}>
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
                  <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={product.imageSrc}
                      alt={`${product.name} интерфейс`}
                      className="w-full"
                      onError={(e) => {
                        e.currentTarget.src = product.fallbackImageSrc;
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
