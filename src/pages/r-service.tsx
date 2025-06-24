import ContactForm from '@/components/contact-form';
import { subtitle, title } from '@/components/primitives';

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
            <span>RVS — </span>
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
              href="/documentation">
              Документация
            </Link>
            <Link
              className={buttonStyles({
                color: 'default',
                variant: 'bordered',
                size: 'lg',
              })}
              href="/rvs/price">
              Узнать цену
            </Link>
          </motion.div>
        </motion.div>

        {/* Resources Section with Two Blocks */}
        <motion.div
          className="w-full max-w-7xl mx-auto py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}>
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}>
            Начните работу с RVS уже сегодня
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Block - Pricing and Documentation */}
            <motion.div
              className="bg-content1 rounded-xl p-8 shadow-lg h-full"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
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
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Узнайте стоимость решения</h3>
                </div>

                <p className="text-default-600 mb-8">
                  Получите индивидуальное коммерческое предложение с учетом масштаба вашей компании, необходимых модулей и особенностей внедрения. Мы предлагаем гибкие
                  условия лицензирования и прозрачное ценообразование.
                </p>

                <div className="mt-auto flex flex-col gap-4">
                  <Link
                    className={buttonStyles({
                      color: 'primary',
                      variant: 'shadow',
                      size: 'lg',
                      className: 'w-full justify-center',
                    })}
                    href="/rvs/price">
                    Запросить стоимость
                  </Link>

                  <Link
                    className={buttonStyles({
                      color: 'default',
                      variant: 'bordered',
                      size: 'lg',
                      className: 'w-full justify-center',
                    })}
                    href="/documentation">
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
                      className="mr-2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    Документация
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Second Block - Demo Request */}
            <motion.div
              className="bg-content1 rounded-xl p-8 shadow-lg h-full"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.1 },
                },
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
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
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Запросите демонстрацию</h3>
              </div>

              <p className="text-default-600 mb-6">
                Наши эксперты проведут для вас персональную демонстрацию платформы RVS, покажут ключевые возможности и ответят на все вопросы. Вы увидите, как система
                работает на реальных примерах и сценариях.
              </p>

              <div className="flex flex-col gap-4">
                <Link
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'shadow',
                    size: 'lg',
                    className: 'w-full justify-center',
                  })}
                  href="/demo">
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
                    className="mr-2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  Запросить демо
                </Link>

                <motion.div
                  className="mt-4 text-center text-sm text-default-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}>
                  Также доступен пробный период для тестирования системы
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <ContactForm />
      </section>
    </DefaultLayout>
  );
}
