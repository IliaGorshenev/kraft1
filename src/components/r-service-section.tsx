import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';
import React from 'react';

const RServiceSection: React.FC = () => {
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

  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}>
          {/* <motion.div className="lg:w-1/2" variants={itemVariants}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Платформа управления сервисами</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              RVS — единая система <span className="text-primary">вместо хаоса</span>
            </h2>
            <p className="text-default-600 text-lg mb-8">
              RVS упорядочивает внутренние процессы и объединяет всё — от ИТ до HR — в единую, прозрачную систему. Вместо хаоса и ручной рутины вы получаете
              контроль, автоматизацию и рост эффективности с первых недель.
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
                  src="/rvs-dashboard.png"
                  alt="RVS интерфейс"
                  className="w-full"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x500?text=RVS+Dashboard';
                  }}
                />
              </div>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Key Benefits */}
        <motion.div className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.h3 className="text-3xl font-bold text-center mb-12" variants={itemVariants}>
            RVS наводит порядок в бизнес-процессах
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="bg-default-50 p-8 rounded-xl" variants={featureCardVariants}>
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <span className="text-primary font-bold text-xl">01</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Единая точка входа</h4>
              <p className="text-default-600">Сотрудники легко находят и получают нужные услуги через единый портал без лишних коммуникаций</p>
            </motion.div>

            <motion.div className="bg-default-50 p-8 rounded-xl" variants={featureCardVariants}>
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <span className="text-primary font-bold text-xl">02</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Контроль в реальном времени</h4>
              <p className="text-default-600">Руководители в реальном времени контролируют загрузку отделов и подрядчиков</p>
            </motion.div>

            <motion.div className="bg-default-50 p-8 rounded-xl" variants={featureCardVariants}>
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <span className="text-primary font-bold text-xl">03</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Прозрачные процессы</h4>
              <p className="text-default-600">Процессы идут оперативно и прозрачно благодаря автоматизации и четким правилам</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Choose RVS */}
        <motion.div className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">вместо классических ITSM-систем</div>
            <h3 className="text-3xl font-bold">8 причин выбрать RVS</h3>
            <p className="text-default-600 mt-4 max-w-2xl mx-auto">
              В отличие от классических ITSM-систем, RVS закрывает потребности бизнеса из коробки — без дорогих доработок, долгих внедрений и ограничений.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Лучшие практики ITIL v4',
                description: 'Все процессы уже настроены, не нужно тратить время на ручную конфигурацию.',
              },
              {
                title: 'Удобный интерфейс для всех',
                description: 'Интуитивно понятный интерфейс, подходящий не только для ИТ, но и для других подразделений.',
              },
              {
                title: 'Прозрачные SLA и отчеты',
                description: 'Все метрики и соглашения доступны сразу, без сложных настроек или сторонних инструментов.',
              },
              {
                title: 'Обновления без сбоев',
                description: 'Обновления проходят гладко и не ломают кастомизации, в отличие от других решений.',
              },
              {
                title: 'Запуск от 4 недель',
                description: 'RVS внедряется быстро — другие решения требуют от 6 до 18 месяцев.',
              },
              {
                title: 'Автоматизация без кода',
                description: 'Настройка процессов без привлечения разработчиков. В других системах нужна отдельная команда.',
              },
              {
                title: 'Единая платформа (ESM/ITSM)',
                description: 'В отличие от решений, охватывающих только ITSM, мы предлагаем комплексную платформу для всех сервисных процессов.',
              },
              {
                title: 'Управление внешними подрядчиками (SIAM)',
                description: 'Поддержка SIAM «из коробки», чего нет у большинства альтернативных решений.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="border border-default-200 p-6 rounded-xl hover:border-primary hover:shadow-md transition-all"
                variants={featureCardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                <p className="text-default-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries */}
        <motion.div className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.h3 className="text-3xl font-bold text-center mb-12" variants={itemVariants}>
            RVS — решение для реальных задач в вашей отрасли
          </motion.h3>

          <motion.p className="text-default-600 text-center max-w-3xl mx-auto mb-12" variants={itemVariants}>
            Благодаря гибкой архитектуре, RVS одинаково эффективно работает в десятках отраслей — от промышленности и нефтегаза до госструктур и финансового сектора.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {['Промышленность', 'Нефтегаз', 'Государственный сектор', 'Банки и финансы', 'Ретейл', 'Телеком'].map((industry, index) => (
              <motion.div
                key={index}
                className="bg-default-50 p-4 rounded-lg text-center hover:bg-primary/5 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>
                <p className="font-medium">{industry}</p>
              </motion.div>
            ))}
          </div>

          <motion.p className="text-default-600 text-center max-w-3xl mx-auto" variants={itemVariants}>
            Платформа разработана для enterprise-среды и ориентирована на крупные организации с развитой ИТ-инфраструктурой, распределённой структурой и высокими
            требованиями к надёжности, управляемости и безопасности.
          </motion.p>
        </motion.div>

        {/* Problems Solved */}
        <motion.div className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.h3 className="text-3xl font-bold text-center mb-12" variants={itemVariants}>
            Бизнес-проблемы, которые решает RVS
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="bg-default-50 p-8 rounded-xl" variants={featureCardVariants}>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-100 text-red-600 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Проблема</h4>
                  <p className="text-default-600">Руководители принимают решения вслепую — нет актуальной информации о загрузке команд и проблемных зонах в процессах.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Решение</h4>
                  <p className="text-default-600">
                    Аналитика в реальном времени показывает, где тормозится процесс, кто перегружен и где нарушаются SLA. Руководители видят полную картину и могут
                    принимать обоснованные решения.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-default-50 p-8 rounded-xl" variants={featureCardVariants}>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-100 text-red-600 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Проблема</h4>
                  <p className="text-default-600">Сотрудники тратят время на поиск нужных услуг и отслеживание статуса своих запросов через разные каналы.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Решение</h4>
                  <p className="text-default-600">
                    Единый портал самообслуживания с понятным каталогом услуг и прозрачным отслеживанием статуса запросов экономит время сотрудников.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h3 className="text-3xl font-bold mb-4">Оцените возможности RVS</h3>
          <p className="text-default-600 max-w-2xl mx-auto mb-8">
            Запросите демонстрацию и узнайте, как наша платформа может оптимизировать управление корпоративными сервисами, улучшить взаимодействие с поставщиками и
            повысить эффективность ваших бизнес-процессов.
          </p>
          <Link
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
              size: 'lg',
            })}
            href="/rvs/demo">
            Запросить демо
          </Link>
        </motion.div>

        {/* Certification */}
        <motion.div className="mt-20 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Официальный статус</div>
            <h3 className="text-2xl font-bold mb-4">RR Tech Service Management — цифровая платформа для управления сервисами (SIAM/ESM)</h3>
            <Link
              className={buttonStyles({
                color: 'default',
                variant: 'bordered',
                size: 'md',
              })}
              href="https://reestr.digital.gov.ru/"
              target="_blank"
              rel="noopener noreferrer">
              Посмотреть в Реестре
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RServiceSection;
