import ContactForm from '@/components/contact-form';
import FeatureSection from '@/components/features';
import { subtitle, title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { motion } from 'framer-motion';

export default function AdvantagesPage() {
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

  // Advantages data
  const advantages = [
    {
      title: 'Экспертиза',
      description: 'Наша команда состоит из опытных специалистов с глубокими знаниями в различных областях IT и бизнеса.',
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
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
    },
    {
      title: 'Индивидуальный подход',
      description: 'Мы разрабатываем решения, учитывая специфику вашего бизнеса и уникальные потребности.',
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: 'Современные технологии',
      description: 'Мы используем передовые технологии и методологии разработки для создания эффективных решений.',
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
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      ),
    },
    {
      title: 'Гарантия качества',
      description: 'Мы обеспечиваем высокое качество наших решений благодаря тщательному тестированию и контролю на всех этапах разработки.',
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
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
    {
      title: 'Соблюдение сроков',
      description: 'Мы ценим ваше время и строго придерживаемся установленных сроков реализации проектов.',
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
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: 'Техническая поддержка',
      description: 'Мы обеспечиваем оперативную техническую поддержку и сопровождение наших решений после внедрения.',
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
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
    },
  ];

  // Key metrics
  const metrics = [
    { value: '7+', label: 'лет опыта' },
    { value: '50+', label: 'успешных проектов' },
    { value: '98%', label: 'довольных клиентов' },
    { value: '24/7', label: 'техническая поддержка' },
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-16 md:py-20">
        <motion.div
          className="inline-block max-w-3xl text-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h1 className={title({ size: 'lg' })}>
            Наши <span className="text-primary">преимущества</span>
          </h1>
          <motion.p className={subtitle({ class: 'mt-6 mx-auto' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Почему клиенты выбирают КрафтЛаб для реализации своих IT-проектов
          </motion.p>
        </motion.div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-12 bg-primary/5 rounded-3xl mx-4 md:mx-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-default-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Advantages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Почему мы?</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ключевые преимущества сотрудничества с нами</h2>
            <p className="text-default-600 text-lg max-w-3xl mx-auto">
              Мы стремимся предоставлять нашим клиентам лучшие решения, которые отвечают их бизнес-потребностям и помогают достигать поставленных целей.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}>
            {advantages.map((advantage, index) => (
              <motion.div key={index} className="bg-white dark:bg-dark-700 p-8 rounded-xl shadow-sm dark:shadow-dark-900/20" variants={itemVariants}>
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-6 text-primary">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{advantage.title}</h3>
                <p className="text-default-600">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <FeatureSection
        leftSlot={
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Наш подход</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Комплексный подход к <span className="text-primary">решению задач</span>
            </h2>
            <p className="text-default-600 text-lg mb-6">
              Мы не просто разрабатываем программное обеспечение, мы создаем комплексные решения, которые учитывают все аспекты вашего бизнеса и помогают достигать
              поставленных целей.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Анализ бизнес-процессов</h3>
                  <p className="text-default-600">Тщательное изучение ваших бизнес-процессов для создания оптимального решения</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Гибкая методология разработки</h3>
                  <p className="text-default-600">Адаптивный подход к разработке, позволяющий быстро реагировать на изменения требований</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Постоянная коммуникация</h3>
                  <p className="text-default-600">Регулярное взаимодействие с клиентом на всех этапах проекта</p>
                </div>
              </li>
            </ul>
          </div>
        }
        rightSlot={
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/image-1.png"
                alt="Наш подход"
                className="w-full"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x500?text=Комплексный+подход';
                }}
              />
            </div>
          </div>
        }
      />
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-default-50 dark:bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Отзывы клиентов</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Что говорят о нас клиенты</h2>
            <p className="text-default-600 text-lg max-w-3xl mx-auto">Мнение наших клиентов — лучшее подтверждение качества нашей работы и профессионализма команды.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Сотрудничество с КрафтЛаб превзошло все наши ожидания. Команда профессионалов быстро вникла в специфику нашего бизнеса и предложила оптимальное решение.',
                author: 'Александр Иванов',
                position: 'Генеральный директор, ТехноПром',
              },
              {
                quote:
                  'Благодаря внедрению системы автоматизации от КрафтЛаб мы смогли сократить время обработки заказов на 40% и значительно повысить эффективность работы.',
                author: 'Елена Смирнова',
                position: 'Руководитель отдела логистики, ЛогистикПлюс',
              },
              {
                quote:
                  'Отличительная черта КрафтЛаб — это внимание к деталям и индивидуальный подход к каждому клиенту. Рекомендую их как надежного партнера в сфере IT.',
                author: 'Дмитрий Петров',
                position: 'IT-директор, ФинансГрупп',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-700 p-8 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="text-primary mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-default-600 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-default-500 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </DefaultLayout>
  );
}
