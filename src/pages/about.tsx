import ContactForm from '@/components/contact-form';
import FeatureSection from '@/components/features';
import PartnersSlider from '@/components/partners-slider';
import { subtitle, title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-16 md:py-20">
        <motion.div
          className="inline-block max-w-3xl text-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h1 className={title({ size: 'lg' })}>
            О <span className="text-primary">компании</span>
          </h1>
          <motion.p className={subtitle({ class: 'mt-6 mx-auto' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Мы создаем инновационные решения для бизнеса, помогая компаниям автоматизировать процессы и повышать эффективность работы
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <FeatureSection
        leftSlot={
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Наша миссия</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Трансформируем бизнес-процессы с помощью <span className="text-primary">современных технологий</span>
            </h2>
            <p className="text-default-600 text-lg mb-6">
              Мы стремимся помочь компаниям любого масштаба оптимизировать свои процессы, повысить производительность и обеспечить устойчивый рост через внедрение
              инновационных технологических решений.
            </p>
            <p className="text-default-600 text-lg">
              Наша команда экспертов работает над созданием продуктов, которые решают реальные бизнес-задачи и помогают нашим клиентам достигать новых высот.
            </p>
          </div>
        }
        rightSlot={
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/image-1.png"
                alt="Наша миссия"
                className="w-full"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x500?text=Наша+миссия';
                }}
              />
            </div>
          </div>
        }
      />

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-default-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Наши ценности</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Принципы, которыми мы руководствуемся</h2>
            <p className="text-default-600 text-lg max-w-3xl mx-auto">
              Наши ценности определяют то, как мы работаем, принимаем решения и взаимодействуем с клиентами и партнерами.
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
                title: 'Инновации',
                description: 'Мы постоянно ищем новые подходы и технологии, чтобы предлагать клиентам самые современные решения.',
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
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                ),
              },
              {
                title: 'Качество',
                description: 'Мы не идем на компромиссы в вопросах качества и стремимся к совершенству во всем, что делаем.',
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
                title: 'Клиентоориентированность',
                description: 'Успех наших клиентов — наш успех. Мы внимательно слушаем и предлагаем решения, отвечающие их потребностям.',
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
                title: 'Прозрачность',
                description: 'Мы строим отношения на основе честности и открытости, обеспечивая прозрачность во всех аспектах сотрудничества.',
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
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                  </svg>
                ),
              },
              {
                title: 'Командная работа',
                description: 'Мы верим в силу коллективного разума и создаем среду, где каждый может внести свой вклад и быть услышанным.',
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
                title: 'Ответственность',
                description: 'Мы берем на себя ответственность за результаты нашей работы и стремимся превзойти ожидания клиентов.',
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
            ].map((value, index) => (
              <motion.div key={index} className="bg-white p-8 rounded-xl shadow-sm" variants={itemVariants}>
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-6 text-primary">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-default-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Наша команда</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Профессионалы своего дела</h2>
            <p className="text-default-600 text-lg max-w-3xl mx-auto">
              Наша команда состоит из опытных специалистов, объединенных общей целью — создавать инновационные решения, которые меняют бизнес к лучшему.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}>
            {[
              {
                name: 'Александр Петров',
                position: 'Генеральный директор',
                photo: '/image-2.png',
              },
              {
                name: 'Екатерина Смирнова',
                position: 'Технический директор',
                photo: '/image-1.png',
              },
              {
                name: 'Михаил Иванов',
                position: 'Руководитель разработки',
                photo: '/image-2.png',
              },
              {
                name: 'Анна Козлова',
                position: 'Директор по маркетингу',
                photo: '/image-1.png',
              },
            ].map((member, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full transform translate-x-2 translate-y-2"></div>
                  <img src={member.photo} alt={member.name} className="w-full aspect-square object-cover rounded-full relative z-10" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-default-600">{member.position}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* History Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Наша история</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Путь к успеху</h2>
            <p className="text-default-600 text-lg max-w-3xl mx-auto">История нашей компании — это история постоянного роста, инноваций и преодоления вызовов.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div className="space-y-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              {[
                {
                  year: '2015',
                  title: 'Основание компании',
                  description: 'Компания была основана группой энтузиастов с целью создания инновационных решений для бизнеса.',
                },
                {
                  year: '2017',
                  title: 'Запуск первого продукта',
                  description: 'Мы выпустили наш первый продукт, который быстро завоевал признание на рынке.',
                },
                {
                  year: '2019',
                  title: 'Расширение команды',
                  description: 'Наша команда выросла до 50 специалистов, что позволило нам расширить портфель продуктов.',
                },
                {
                  year: '2021',
                  title: 'Международная экспансия',
                  description: 'Мы вышли на международный рынок и открыли офисы в нескольких странах.',
                },
                {
                  year: '2023',
                  title: 'Запуск RVS',
                  description: 'Мы представили нашу флагманскую платформу RVS, которая стала революционным решением в своей области.',
                },
              ].map((milestone, index) => (
                <motion.div key={index} className="flex flex-col md:flex-row gap-6" variants={itemVariants}>
                  <div className="md:w-1/4">
                    <div className="bg-primary text-white text-2xl font-bold py-3 px-6 rounded-lg inline-block">{milestone.year}</div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-default-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Partners Section */}
      <PartnersSlider />

      <ContactForm />
    </DefaultLayout>
  );
}
