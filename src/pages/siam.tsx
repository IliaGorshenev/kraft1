import { Link } from '@heroui/link';
import DefaultLayout from '@/layouts/default';
import { motion } from 'framer-motion';
import { button as buttonStyles } from '@heroui/theme';
import ContactForm from '@/components/contact-form';
import { subtitle, title } from '@/components/primitives';

export default function SiamPage() {
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
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-16">
        <motion.div
          className="inline-block max-w-4xl text-center justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className={title()}>
            <span>SIAM в </span>
            <span className="text-primary">RVS</span>
          </div>
          <motion.div className={subtitle({ class: 'mt-6 mx-auto' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Service Integration and Management (SIAM) — комплексный подход к управлению множественными поставщиками услуг в рамках единой экосистемы RVS.
          </motion.div>
        </motion.div>
      </section>

      {/* What is SIAM Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Что такое SIAM</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Управление экосистемой <span className="text-primary">поставщиков</span>
              </h2>
              <p className="text-default-600 text-lg mb-6">
                SIAM (Service Integration and Management) — это методология управления услугами, которая позволяет организациям эффективно координировать работу
                множественных поставщиков через единую интегрированную платформу.
              </p>
              <p className="text-default-600 text-lg mb-8">
                В RVS SIAM реализован как встроенная функциональность, обеспечивающая бесшовную интеграцию внутренних и внешних поставщиков услуг.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'shadow',
                    size: 'lg',
                  })}
                  href="/demo">
                  Запросить демо
                </Link>
                <Link
                  className={buttonStyles({
                    color: 'default',
                    variant: 'bordered',
                    size: 'lg',
                  })}
                  href="/architecture">
                  Архитектура решения
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/siam-diagram.png"
                    alt="SIAM в RVS"
                    className="w-full"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/800x500?text=SIAM+Ecosystem';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 md:py-16 bg-default-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-bold mb-4">Ключевые преимущества SIAM</h2>
            <p className="text-lg text-default-600 max-w-3xl mx-auto">
              SIAM в RVS обеспечивает централизованное управление всеми поставщиками и гарантирует высокое качество предоставляемых услуг.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}>
            {[
              {
                title: 'Единая точка управления',
                description: 'Централизованное управление всеми поставщиками через единый интерфейс RVS.',
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
                title: 'Прозрачность SLA',
                description: 'Мониторинг выполнения SLA всех поставщиков в режиме реального времени.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4"
                    />
                  </svg>
                ),
              },
              {
                title: 'Автоматизация процессов',
                description: 'Автоматическое распределение запросов между поставщиками на основе правил и загрузки.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Управление рисками',
                description: 'Снижение рисков за счет диверсификации поставщиков и контроля качества услуг.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003.382 6c-.16.975.016 1.948.394 2.854M9 12l2 2 4-4m6.364-4A11.955 11.955 0 0112 2.944"
                    />
                  </svg>
                ),
              },
              {
                title: 'Оптимизация затрат',
                description: 'Снижение операционных расходов за счет эффективного распределения нагрузки.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Масштабируемость',
                description: 'Легкое подключение новых поставщиков и расширение функциональности системы.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <motion.div key={index} className="bg-content1 rounded-xl p-6 shadow-md" variants={itemVariants}>
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4 text-primary">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-default-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SIAM Process Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-bold mb-4">Как работает SIAM в RVS</h2>
            <p className="text-lg text-default-600 max-w-3xl mx-auto">Пошаговый процесс интеграции и управления поставщиками услуг</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Регистрация поставщиков',
                description: 'Подключение внутренних и внешних поставщиков к платформе RVS',
              },
              {
                step: '02',
                title: 'Настройка SLA',
                description: 'Определение соглашений об уровне обслуживания для каждого поставщика',
              },
              {
                step: '03',
                title: 'Автоматизация маршрутизации',
                description: 'Настройка правил распределения запросов между поставщиками',
              },
              {
                step: '04',
                title: 'Мониторинг и контроль',
                description: 'Отслеживание качества услуг и соблюдения SLA в реальном времени',
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}>
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-default-600">{process.description}</p>
                {index < 3 && <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 transform translate-x-4"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities Section */}
      <section className="py-12 md:py-16 bg-default-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl font-bold mb-6">
                Возможности <span className="text-primary">интеграции</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'API-интеграция',
                    description: 'Подключение поставщиков через REST API и веб-сервисы',
                  },
                  {
                    title: 'Единый каталог услуг',
                    description: 'Централизованный каталог всех доступных услуг от всех поставщиков',
                  },
                  {
                    title: 'Автоматическая эскалация',
                    description: 'Автоматическое перенаправление запросов при недоступности поставщика',
                  },
                  {
                    title: 'Финансовая отчетность',
                    description: 'Консолидированная отчетность по затратам на услуги всех поставщиков',
                  },
                ].map((capability, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}>
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                      <p className="text-default-600">{capability.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-content1 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Типы поставщиков</h3>
                <div className="space-y-4">
                  {[
                    { type: 'Внутренние команды', count: 'Неограниченно', color: 'bg-primary' },
                    { type: 'Внешние подрядчики', count: 'Любое количество', color: 'bg-secondary' },
                    { type: 'Облачные сервисы', count: 'Российские облачные сервисы', color: 'bg-success' },
                    { type: 'Специализированные провайдеры', count: 'По потребности', color: 'bg-warning' },
                  ].map((provider, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-default-100 rounded-lg">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${provider.color} mr-3`}></div>
                        <span className="font-medium">{provider.type}</span>
                      </div>
                      <span className="text-sm text-default-600">{provider.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы внедрить SIAM?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Начните управлять экосистемой поставщиков эффективно с RVS</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                className={buttonStyles({
                  color: 'default',
                  variant: 'solid',
                  size: 'lg',
                  className: 'bg-white text-primary hover:bg-white/90',
                })}
                href="/contact">
                Связаться с нами
              </Link>
              <Link
                className={buttonStyles({
                  color: 'default',
                  variant: 'bordered',
                  size: 'lg',
                  className: 'border-white text-white hover:bg-white/10',
                })}
                href="/demo">
                Запросить демо
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 bg-default-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Обсудим внедрение SIAM</h2>
              <p className="text-lg text-default-600 max-w-2xl mx-auto">
                Оставьте заявку, и наши эксперты проконсультируют вас по вопросам интеграции и управления поставщиками в RVS
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
}
