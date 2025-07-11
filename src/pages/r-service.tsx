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

        {/* Key Features Section */}
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
                staggerChildren: 0.1,
              },
            },
          }}>
          <motion.h2
            className="text-3xl font-bold text-center mb-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}>
            RVS — единая система вместо хаоса
          </motion.h2>

          <motion.p
            className="text-lg text-default-600 text-center mb-12 max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.1 },
              },
            }}>
            RVS наводит порядок и стандартизирует работу всех подразделений — без десятков писем, звонков, таблиц и постоянного уточнения «кто за что отвечает»
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Сотрудники легко находят и получают нужные услуги',
                description: 'Одна точка входа: понятная система заявок, шаблоны, инструкции и автоматическое назначение исполнителей',
                icon: (
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                number: '02',
                title: 'Руководители в реальном времени контролируют загрузку отделов',
                description: 'Аналитика в реальном времени показывает, где тормозится процесс, кто перегружен и где нарушаются SLA',
                icon: (
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
                    <path d="M3 3v18h18" />
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                  </svg>
                ),
              },
              {
                number: '03',
                title: 'Процессы идут оперативно и прозрачно',
                description: 'Благодаря автоматизации и четким правилам. У каждого запроса есть сроки, приоритет, статус и ответственный',
                icon: (
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
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-content1 rounded-xl p-8 shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">{feature.icon}</div>
                  <span className="text-4xl font-bold text-primary/20">{feature.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-default-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose RVS Section */}
        <motion.div
          className="w-full max-w-7xl mx-auto py-16 bg-default-50 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}>
          <div className="px-8">
            <motion.h2
              className="text-3xl font-bold text-center mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}>
              8 причин выбрать RVS
            </motion.h2>

            <motion.p
              className="text-lg text-default-600 text-center mb-12 max-w-4xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 },
                },
              }}>
              В отличие от классических ITSM-систем, RVS закрывает потребности бизнеса из коробки — без дорогих доработок, долгих внедрений и ограничений
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Лучшие практики ITIL v4 «из коробки»',
                  description: 'Все процессы уже настроены, не нужно тратить время на ручную конфигурацию',
                  icon: '⚙️',
                },
                {
                  title: 'Удобный интерфейс для всех',
                  description: 'Интуитивно понятный интерфейс, подходящий не только для ИТ, но и для других подразделений',
                  icon: '👥',
                },
                {
                  title: 'Прозрачные SLA и отчеты',
                  description: 'Все метрики и соглашения доступны сразу, без сложных настроек или сторонних инструментов',
                  icon: '📊',
                },
                {
                  title: 'Обновления без сбоев',
                  description: 'Обновления проходят гладко и не ломают кастомизации, в отличие от других решений',
                  icon: '🔄',
                },
                {
                  title: 'Запуск от 4 недель',
                  description: 'RVS внедряется быстро — другие решения требуют от 6 до 18 месяцев',
                  icon: '⚡',
                },
                {
                  title: 'Автоматизация без кода',
                  description: 'Настройка процессов без привлечения разработчиков. В других системах нужна отдельная команда',
                  icon: '🤖',
                },
                {
                  title: 'Единая платформа (ESM/ITSM)',
                  description: 'В отличие от решений, охватывающих только ITSM, мы предлагаем комплексную платформу для всех сервисных процессов',
                  icon: '🏢',
                },
                {
                  title: 'Управление внешними подрядчиками (SIAM)',
                  description: 'Поддержка SIAM «из коробки», чего нет у большинства альтернативных решений',
                  icon: '🤝',
                },
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.05 },
                    },
                  }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}>
                  <div className="text-3xl mb-4">{reason.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
                  <p className="text-default-600 text-sm">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Business Problems Section */}
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
                staggerChildren: 0.1,
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
            Бизнес-проблемы, которые решает RVS
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                problem: 'Сотрудники не знают, куда обращаться за поддержкой — теряют время и отвлекают коллег',
                solution: 'Одна точка входа: понятная система заявок, шаблоны, инструкции и автоматическое назначение исполнителей',
                icon: (
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
                    <path d="M9 12l2 2 4-4" />
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.35 0 4.48.9 6.08 2.38" />
                  </svg>
                ),
              },
              {
                problem: 'Руководители принимают решения вслепую — нет актуальной информации о загрузке команд и проблемных зонах',
                solution:
                  'Аналитика в реальном времени показывает, где тормозится процесс, кто перегружен и где нарушаются SLA. Руководители видят полную картину и могут принимать обоснованные решения',
                icon: (
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
                    <path d="M3 3v18h18" />
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                  </svg>
                ),
              },
              {
                problem: 'Запросы теряются, дублируются или выполняются с нарушением сроков',
                solution:
                  'Каждый запрос автоматически отслеживается, имеет четкие сроки, приоритет и ответственного. Система контролирует выполнение и предупреждает о нарушениях',
                icon: (
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
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                ),
              },
              {
                problem: 'Отсутствует единый каталог услуг — сотрудники не знают, что доступно и как получить',
                solution: 'Структурированный каталог услуг с описаниями, инструкциями и автоматическими формами заказа. Все услуги в одном месте',
                icon: (
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-content1 rounded-xl p-8 shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-red-100 text-red-600 p-3 rounded-full flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-red-600">Проблема</h4>
                    <p className="text-default-600">{item.problem}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-green-600">Решение</h4>
                    <p className="text-default-600">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Functional Capabilities Section */}
        <motion.div
          className="w-full max-w-7xl mx-auto py-16 bg-default-50 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}>
          <div className="px-8">
            <motion.h2
              className="text-3xl font-bold text-center mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}>
              Функциональные возможности RVS
            </motion.h2>

            <motion.p
              className="text-lg text-default-600 text-center mb-12 max-w-4xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 },
                },
              }}>
              Комплексная ITSM/ESM-система для автоматизации процессов технической поддержки и управления ИТ-инфраструктурой в соответствии с лучшими практиками ITIL
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Управление заявками (Service Desk)',
                  features: [
                    'Регистрация, классификация и маршрутизация пользовательских запросов',
                    'Мониторинг статуса и сроков выполнения заявок',
                    'Портал самообслуживания для пользователей',
                  ],
                  icon: (
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
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10,9 9,9 8,9" />
                    </svg>
                  ),
                },
                {
                  title: 'Управление инцидентами и проблемами',
                  features: [
                    'Оперативное реагирование на сбои в ИТ-системах',
                    'Анализ причин инцидентов с целью предотвращения их повторения',
                    'Эскалация и приоритизация критических инцидентов',
                  ],
                  icon: (
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
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  ),
                },
                {
                  title: 'Управление ИТ-активами (ITAM)',
                  features: [
                    'Учет аппаратного и программного обеспечения, а также лицензий',
                    'Управление жизненным циклом активов',
                    'Контроль соответствия лицензионным требованиям',
                  ],
                  icon: (
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
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  ),
                },
                {
                  title: 'Каталог услуг',
                  features: ['Структурированный каталог всех доступных ИТ-услуг', 'Описания услуг с SLA и стоимостью', 'Автоматизированное оформление заказов'],
                  icon: (
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
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  ),
                },
                {
                  title: 'Управление изменениями',
                  features: [
                    'Контролируемое внесение изменений в ИТ-инфраструктуру',
                    'Оценка рисков и планирование изменений',
                    'Координация между различными командами и подразделениями',
                  ],
                  icon: (
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
                {
                  title: 'Управление конфигурациями (CMDB)',
                  features: ['База данных конфигурационных единиц (CI)', 'Отслеживание связей между компонентами инфраструктуры', 'Контроль изменений в конфигурации'],
                  icon: (
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
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  ),
                },
                {
                  title: 'Аналитика и отчетность',
                  features: ['Дашборды с ключевыми метриками производительности', 'Отчеты по SLA и качеству обслуживания', 'Анализ трендов и прогнозирование нагрузки'],
                  icon: (
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
                      <path d="M3 3v18h18" />
                      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                    </svg>
                  ),
                },
                {
                  title: 'Управление знаниями',
                  features: ['База знаний с решениями типовых проблем', 'Документооборот и управление процедурами', 'Система поиска и категоризации информации'],
                  icon: (
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
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  ),
                },
                {
                  title: 'Автоматизация процессов',
                  features: ['Workflow-движок для автоматизации бизнес-процессов', 'Интеграция с внешними системами через API', 'Настраиваемые уведомления и эскалации'],
                  icon: (
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
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                      <path d="M8.5 8.5v.01" />
                      <path d="M16 15.5v.01" />
                      <path d="M12 12v.01" />
                    </svg>
                  ),
                },
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.05 },
                    },
                  }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">{capability.icon}</div>
                    <h3 className="text-lg font-bold">{capability.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-default-600 text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industries Section */}
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
                staggerChildren: 0.1,
              },
            },
          }}>
          <motion.h2
            className="text-3xl font-bold text-center mb-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}>
            RVS — решение для реальных задач в вашей отрасли
          </motion.h2>

          <motion.p
            className="text-lg text-default-600 text-center mb-12 max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.1 },
              },
            }}>
            Благодаря гибкой архитектуре, RVS одинаково эффективно работает в десятках отраслей — от промышленности и нефтегаза до госструктур и финансового сектора
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              { name: 'Промышленность', icon: '🏭' },
              { name: 'Нефтегаз', icon: '⛽' },
              { name: 'Государственный сектор', icon: '🏛️' },
              { name: 'Банки и финансы', icon: '🏦' },
              { name: 'Ретейл', icon: '🛒' },
              { name: 'Телеком', icon: '📡' },
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="bg-default-50 p-4 rounded-lg text-center hover:bg-primary/5 transition-colors"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.05 },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>
                <div className="text-2xl mb-2">{industry.icon}</div>
                <p className="font-medium text-sm">{industry.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-default-600 text-center max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}>
            Платформа разработана для enterprise-среды и ориентирована на крупные организации с развитой ИТ-инфраструктурой, распределённой структурой и высокими
            требованиями к надёжности, управляемости и безопасности
          </motion.p>
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
      </section>

      <ContactForm />
    </DefaultLayout>
  );
}
