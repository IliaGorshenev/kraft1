import { subtitle, title } from '@/components/primitives';
import RServiceSection from '@/components/r-service-section';
import DefaultLayout from '@/layouts/default';
import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';

export default function RServicePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-16">
        {/* Hero Section */}
        <motion.div
          className="inline-block max-w-3xl text-center justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className={title()}>
            <span>R-Service — </span>
            <span className="text-primary">платформа управления сервисами</span>
          </div>
          <motion.div className={subtitle({ class: 'mt-6 mx-auto' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Единая система для управления всеми внутренними сервисами компании — от ИТ до HR
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <Link
              className={buttonStyles({
                color: 'primary',
                variant: 'shadow',
                size: 'lg',
              })}
              href="#features">
              Возможности платформы
            </Link>
            <Link
              className={buttonStyles({
                color: 'default',
                variant: 'bordered',
                size: 'lg',
              })}
              href="/r-service/demo">
              Запросить демо
            </Link>
          </motion.div>
        </motion.div>

        {/* Navigation Tabs */}
        {/* <div className="w-full max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 border-b border-default-200">
            {[
              { label: 'Платформа', href: '#platform' },
              { label: 'Материалы', href: '#materials' },
              { label: 'Ресурсы', href: '#resources' },
            ].map((tab, index) => (
              <Link
                key={index}
                href={tab.href}
                className="px-4 py-3 text-default-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary">
                {tab.label}
              </Link>
            ))}
          </div>
        </div> */}

        {/* Main Content */}
        <RServiceSection />

        {/* Additional Sections */}
        <section id="platform" className="w-full py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Платформа</div>
              <h2 className="text-3xl font-bold">Техническая информация</h2>
              <p className="text-default-600 mt-4 max-w-2xl mx-auto">R-Service — это современная платформа, разработанная с использованием передовых технологий</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-default-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                <h3 className="text-xl font-semibold mb-4">Архитектура</h3>
                <p className="text-default-600">Микросервисная архитектура обеспечивает высокую производительность, масштабируемость и отказоустойчивость системы.</p>
              </motion.div>

              <motion.div
                className="bg-default-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <h3 className="text-xl font-semibold mb-4">Интеграции</h3>
                <p className="text-default-600">Открытый API позволяет легко интегрировать R-Service с существующими системами и сервисами компании.</p>
              </motion.div>

              <motion.div
                className="bg-default-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                <h3 className="text-xl font-semibold mb-4">Безопасность</h3>
                <p className="text-default-600">Многоуровневая система безопасности и соответствие требованиям регуляторов обеспечивают защиту данных.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="materials" className="w-full py-16 bg-default-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Материалы</div>
              <h2 className="text-3xl font-bold">Полезные материалы</h2>
              <p className="text-default-600 mt-4 max-w-2xl mx-auto">Ознакомьтесь с документацией и обучающими материалами по платформе R-Service</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-background p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="text-primary text-4xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Техническая документация</h3>
                <p className="text-default-600 mb-4">Подробная документация по установке, настройке и использованию платформы R-Service.</p>
                <Link
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'light',
                    size: 'sm',
                  })}
                  href="/r-service/docs">
                  Перейти к документации
                </Link>
              </motion.div>

              <motion.div
                className="bg-background p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="text-primary text-4xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Обучающие видео</h3>
                <p className="text-default-600 mb-4">Серия обучающих видеороликов по работе с платформой для администраторов и пользователей.</p>
                <Link
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'light',
                    size: 'sm',
                  })}
                  href="/r-service/videos">
                  Смотреть видео
                </Link>
              </motion.div>

              <motion.div
                className="bg-background p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                <div className="text-primary text-4xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Примеры внедрения</h3>
                <p className="text-default-600 mb-4">Кейсы успешного внедрения R-Service в компаниях различных отраслей.</p>
                <Link
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'light',
                    size: 'sm',
                  })}
                  href="/r-service/cases">
                  Изучить кейсы
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="resources" className="w-full py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Ресурсы</div>
              <h2 className="text-3xl font-bold">Дополнительные ресурсы</h2>
              <p className="text-default-600 mt-4 max-w-2xl mx-auto">Получите дополнительную информацию о платформе R-Service</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-default-50 p-8 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <h3 className="text-2xl font-semibold mb-4">Часто задаваемые вопросы</h3>
                <div className="space-y-4">
                  {[
                    {
                      question: 'Как быстро можно внедрить R-Service?',
                      answer: 'Базовое внедрение R-Service занимает от 4 недель. Точные сроки зависят от масштаба организации и требуемой кастомизации.',
                    },
                    {
                      question: 'Какие отделы могут использовать R-Service?',
                      answer: 'R-Service может использоваться всеми подразделениями компании: ИТ, HR, административный отдел, финансы, юридический отдел и другие.',
                    },
                    {
                      question: 'Можно ли интегрировать R-Service с другими системами?',
                      answer: 'Да, R-Service имеет открытый API и готовые коннекторы для интеграции с популярными корпоративными системами.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="border-b border-default-200 pb-4">
                      <h4 className="text-lg font-medium mb-2">{item.question}</h4>
                      <p className="text-default-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    className={buttonStyles({
                      color: 'primary',
                      variant: 'flat',
                      size: 'md',
                    })}
                    href="/r-service/faq">
                    Все вопросы и ответы
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="bg-default-50 p-8 rounded-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <h3 className="text-2xl font-semibold mb-4">Свяжитесь с нами</h3>
                <p className="text-default-600 mb-6">
                  Наши специалисты готовы ответить на ваши вопросы о платформе R-Service и помочь с выбором оптимального решения для вашей компании.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span className="text-default-600">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <span className="text-default-600">info@r-service.com</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    className={buttonStyles({
                      color: 'primary',
                      variant: 'shadow',
                      size: 'md',
                    })}
                    href="/r-service/demo">
                    Запросить демо
                  </Link>
                  <Link
                    className={buttonStyles({
                      color: 'default',
                      variant: 'bordered',
                      size: 'md',
                    })}
                    href="/contact">
                    Связаться с нами
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <motion.div className="w-full py-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary/80 to-primary rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы упорядочить бизнес-процессы?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                Запросите демонстрацию R-Service и узнайте, как наша платформа может трансформировать управление сервисами в вашей компании.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  className={buttonStyles({
                    color: 'default',
                    variant: 'solid',
                    size: 'lg',
                  })}
                  href="/r-service/demo">
                  Запросить демо
                </Link>
                <Link
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'bordered',
                    size: 'lg',
                  })}
                  href="/r-service/pricing">
                  Узнать стоимость
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
