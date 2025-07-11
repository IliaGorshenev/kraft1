import { Link } from '@heroui/link';
import DefaultLayout from '@/layouts/default';
import { motion } from 'framer-motion';
import { button as buttonStyles } from '@heroui/theme';
import ContactForm from '@/components/contact-form';
import { subtitle, title } from '@/components/primitives';

export default function ArchitecturePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-16">
        {/* Hero Section */}
        <motion.div
          className="inline-block max-w-4xl text-center justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className={title()}>
            <span>Архитектура </span>
            <span className="text-primary">RVS</span>
          </div>
          <motion.div className={subtitle({ class: 'mt-6 mx-auto' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Архитектура RVS охватывает все ключевые аспекты управления корпоративными сервисами (ESM). Данная комплексная система позволяет эффективно координировать и
            контролировать весь жизненный цикл сервисов.
          </motion.div>
        </motion.div>
      </section>

      {/* Architecture Overview Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-bold mb-4">Управление корпоративными сервисами</h2>
            <p className="text-lg text-default-600 max-w-3xl mx-auto">
              RVS — это специально разработанный программный продукт для управления корпоративными сервисами (ESM), учитывающий потребности крупных российских компаний и
              государственных организаций.
            </p>
          </motion.div>

          {/* Architecture Diagram */}
          <motion.div
            className="bg-content1 rounded-xl p-8 shadow-lg mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Архитектура RVS</h3>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* Business Units */}
                  <div className="text-center">
                    <div className="bg-primary/20 rounded-lg p-6 mb-4">
                      <svg className="w-12 h-12 mx-auto text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <h4 className="font-bold">Бизнес-подразделения</h4>
                    </div>
                    <p className="text-sm text-default-600">Потребители услуг</p>
                  </div>

                  {/* Service Integrator */}
                  <div className="text-center">
                    <div className="bg-secondary/20 rounded-lg p-6 mb-4">
                      <svg className="w-12 h-12 mx-auto text-secondary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                      <h4 className="font-bold">RVS</h4>
                    </div>
                    <p className="text-sm text-default-600">Сервисный интегратор</p>
                  </div>

                  {/* Suppliers */}
                  <div className="text-center">
                    <div className="bg-success/20 rounded-lg p-6 mb-4">
                      <svg className="w-12 h-12 mx-auto text-success mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <h4 className="font-bold">Поставщики</h4>
                    </div>
                    <p className="text-sm text-default-600">Внешние и внутренние</p>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="flex justify-center items-center mt-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-0.5 bg-primary"></div>
                    <span className="text-sm text-default-600">Интеграция</span>
                    <div className="w-8 h-0.5 bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 md:py-16 bg-default-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-bold mb-4">Ключевые компоненты архитектуры</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Общее пространство взаимодействия',
                description: 'RVS создает изолированные тенанты для организаций и департаментов, обеспечивая прозрачное взаимодействие поставщиков и потребителей.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                ),
              },
              {
                title: 'Многоуровневый каталог услуг',
                description: 'Платформа фиксирует сквозные SLA и показатели качества услуг независимо от числа участников.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                ),
              },
              {
                title: 'Быстрый старт',
                description: 'Глобальные справочники и конфигурации позволяют подключить нового поставщика за несколько часов.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Изоляция данных',
                description: 'Расширение модели данных без конфликтов с другими тенантами, с изоляцией до явного предоставления доступа.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Гибкость и масштабируемость',
                description: 'Решение разработано с учетом потребностей современных компаний и обладает высоким уровнем производительности.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                ),
              },
              {
                title: 'Интеграция с поставщиками',
                description: 'Гибкая интеграция для эффективной координации поставщиков и высокого уровня сервиса.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-content1 rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}>
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-default-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-bold mb-4">Преимущества архитектуры RVS</h2>
            <p className="text-lg text-default-600 max-w-3xl mx-auto">
              Платформа позволяет гибко выстраивать связи между поставщиками и потребителями, заключать SLA и отслеживать выполнение услуг в режиме реального времени.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Автоматизация процессов',
                description: 'Решение автоматизирует рутинные задачи, повышая производительность и снижая затраты.',
                benefits: ['Снижение ручного труда', 'Ускорение процессов', 'Минимизация ошибок'],
              },
              {
                title: 'Готовые отчеты и панели мониторинга',
                description: 'Предоставляем инструменты для мониторинга и анализа качества предоставляемых услуг.',
                benefits: ['Реальное время', 'Детальная аналитика', 'Настраиваемые дашборды'],
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-content1 rounded-xl p-8 shadow-md"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-default-600 mb-6">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.benefits.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-default-600">
                      <svg className="w-5 h-5 text-success mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-bold mb-4">Оцените возможности RVS</h2>
            <p className="text-lg text-default-600 mb-8 max-w-2xl mx-auto">
              Запросите демонстрацию и узнайте, как наша платформа может оптимизировать управление корпоративными сервисами, улучшить взаимодействие с поставщиками и
              повысить эффективность ваших бизнес-процессов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className={buttonStyles({
                  color: 'primary',
                  variant: 'shadow',
                  size: 'lg',
                })}
                href="/contact">
                Запросить демо
              </Link>
              <Link
                className={buttonStyles({
                  color: 'default',
                  variant: 'bordered',
                  size: 'lg',
                })}
                href="/rvs">
                Узнать больше о RVS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </DefaultLayout>
  );
}
