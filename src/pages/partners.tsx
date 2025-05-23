import { subtitle, title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { partnersData } from '@/types';
import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PartnerCard = ({ partner, isActive }: any) => {
  return (
    <motion.div
      variants={itemVariants}
      className={`bg-background rounded-xl p-6 h-full flex flex-col transition-all duration-300 ${
        isActive ? 'ring-2 ring-primary shadow-lg shadow-primary/10' : 'shadow-md hover:shadow-xl'
      }`}
      whileHover={{ y: -5 }}>
      <h3 className="text-xl font-semibold mb-3">{partner.title}</h3>
      <p className="text-default-600 mb-6 flex-grow text-sm">{partner.description}</p>
      <div className="mt-auto flex justify-center items-center h-24 border-t pt-4">
        <img
          src={partner.image}
          alt={partner.title}
          className="max-h-full object-contain transition-transform duration-300 hover:scale-110"
          width={partner.width}
          height={partner.height}
        />
      </div>
    </motion.div>
  );
};

const PartnersGrid = ({ partners, activePartner, setActivePartner }: any) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
      {partners.map((partner: any, index: any) => (
        <div key={index} onMouseEnter={() => setActivePartner(index)} onClick={() => setActivePartner(index)}>
          <PartnerCard partner={partner} index={index} isActive={activePartner === index} />
        </div>
      ))}
    </motion.div>
  );
};

const PartnersHero = () => {
  return (
    <motion.div
      className="mb-16 text-center flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Технологическая экосистема</div>
      <h1 className={title({ class: 'mb-4' })}>
        Наши <span className="text-primary">партнеры</span>
      </h1>
      <p className={subtitle({ class: 'mx-auto' })}>
        Мы сотрудничаем с ведущими российскими и международными компаниями, чтобы предоставлять нашим клиентам лучшие технологические решения.
      </p>
    </motion.div>
  );
};
const PartnerStats = () => {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      {[
        { value: '20+', label: 'Технологических партнеров' },
        { value: '50+', label: 'Совместных проектов' },
        { value: '5+', label: 'Лет сотрудничества' },
        { value: '100%', label: 'Довольных клиентов' },
      ].map((stat, index) => (
        <div key={index} className="bg-default-50 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
          <div className="text-default-600 text-sm">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
};

const PartnershipCTA = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 mt-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Станьте нашим партнером</h3>
          <p className="text-default-600 max-w-xl">
            Присоединяйтесь к нашей партнерской программе и получите доступ к новым возможностям для развития вашего бизнеса. Мы предлагаем выгодные условия
            сотрудничества и поддержку на всех этапах.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className={buttonStyles({
              color: 'primary',
              variant: 'shadow',
              size: 'lg',
            })}>
            Стать партнером
          </Link>
          <Link
            href="/partners/program"
            className={buttonStyles({
              color: 'default',
              variant: 'bordered',
              size: 'lg',
            })}>
            Узнать подробнее
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const PartnerCategories = () => {
  const categories = [
    { name: 'Технологические', icon: '🔧' },
    { name: 'Интеграционные', icon: '🔄' },
    { name: 'Дистрибьюторы', icon: '🚚' },
    { name: 'Консалтинговые', icon: '📊' },
  ];

  return (
    <motion.div className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <motion.h2 className="text-2xl font-bold mb-8 text-center" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Типы партнерства
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-default-50 rounded-xl p-6 text-center hover:bg-primary/5 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}>
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-default-600 text-sm">
              {category.name === 'Технологические' && 'Компании, чьи технологии и продукты мы интегрируем в наши решения'}
              {category.name === 'Интеграционные' && 'Партнеры, помогающие внедрять наши решения у клиентов'}
              {category.name === 'Дистрибьюторы' && 'Компании, распространяющие наши продукты на рынке'}
              {category.name === 'Консалтинговые' && 'Эксперты, предоставляющие консультации по нашим решениям'}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function PartnersPage() {
  const [activePartner, setActivePartner] = useState(null);

  // Group partners by type for display purposes
  // This is just a visual grouping since your data doesn't have categories
  const featuredPartners = partnersData.slice(0, 6); // First 6 partners for carousel
  const allPartners = partnersData; // All partners for grid

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PartnersHero />

        <PartnerStats />

        <motion.div className="mb-16">
          <motion.h2 className="text-2xl font-bold mb-8" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Все партнеры
          </motion.h2>

          <PartnersGrid partners={allPartners} activePartner={activePartner} setActivePartner={setActivePartner} />
        </motion.div>

        <PartnershipCTA />
      </div>
    </DefaultLayout>
  );
}
