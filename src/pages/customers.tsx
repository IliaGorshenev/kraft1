import ContactForm from '@/components/contact-form';
import { subtitle, title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';

export default function CustomersPage() {
  // Animation variants
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Industry sectors data
  const industries = [
    { id: 'all', name: 'Все отрасли' },
    { id: 'finance', name: 'Финансы' },
    { id: 'retail', name: 'Ритейл' },
    { id: 'manufacturing', name: 'Производство' },
    { id: 'healthcare', name: 'Здравоохранение' },
    { id: 'it', name: 'IT и телеком' },
    { id: 'government', name: 'Госсектор' },
  ];

  // Customer case studies data
  const customers = [
    {
      id: 1,
      industry: 'finance',
      logo: '/images/finance-logo.png',
      imageSrc: '/customer-1.png',
      sector: 'Финансовый сектор',
      results: ['Сокращение времени реакции на 40%', 'Повышение удовлетворенности сотрудников на 35%', 'Снижение операционных затрат на 25%'],
    },
    {
      id: 2,
      industry: 'retail',
      logo: '/images/retail-logo.png',
      imageSrc: '/customer-2.png',
      sector: 'Розничная торговля',
      results: ['Единая система для всех подразделений', 'Автоматизация 85% рутинных запросов', 'Сокращение бюджета на поддержку на 30%'],
    },
    {
      id: 3,
      industry: 'manufacturing',
      logo: '/images/manufacturing-logo.png',
      imageSrc: '/customer-3.png',
      sector: 'Производство',
      results: ['Снижение простоев оборудования на 28%', 'Увеличение срока службы оборудования на 15%', 'Оптимизация складских запасов запчастей'],
    },
    {
      id: 4,
      industry: 'healthcare',
      logo: '/images/healthcare-logo.png',
      imageSrc: '/customer-1.png',
      sector: 'Здравоохранение',
      results: ['Повышение доступности медицинского оборудования на 32%', 'Сокращение времени обработки заявок на 45%', 'Улучшение координации между отделениями'],
    },
    {
      id: 5,
      industry: 'it',
      logo: '/images/it-logo.png',
      imageSrc: '/customer-2.png',
      sector: 'IT и телекоммуникации',
      results: ['Сокращение времени устранения неисправностей на 50%', 'Повышение уровня SLA до 99.9%', 'Автоматизация 70% типовых запросов'],
    },
    {
      id: 6,
      industry: 'government',
      logo: '/images/government-logo.png',
      imageSrc: '/customer-3.png',
      sector: 'Государственный сектор',
      results: ['Сокращение бумажного документооборота на 80%', 'Ускорение обработки обращений граждан в 3 раза', 'Повышение прозрачности процессов'],
    },
    {
      id: 7,
      industry: 'manufacturing',
      logo: '/images/energy-logo.png',
      imageSrc: '/customer-1.png',
      sector: 'Энергетика',
      results: ['Сокращение времени реагирования на аварии на 35%', 'Оптимизация распределения ресурсов', 'Повышение безопасности производства'],
    },
    {
      id: 8,
      industry: 'retail',
      logo: '/images/commercial-logo.png',
      imageSrc: '/customer-2.png',
      sector: 'Коммерческая недвижимость',
      results: ['Сокращение времени обработки заявок на 60%', 'Оптимизация работы службы эксплуатации', 'Повышение удовлетворенности клиентов на 40%'],
    },
  ];

  // Filter customers based on selected industry
  const filteredCustomers = customers;

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
            Наши <span className="text-primary">клиенты</span>
          </h1>
          <motion.p className={subtitle({ class: 'mt-6 mx-auto' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Мы интегрируем наши продукты для клиентов из различных отраслей, помогая им оптимизировать процессы и повышать эффективность бизнеса
          </motion.p>
        </motion.div>
      </section>
      {/* Industry Overview */}
      {/* <section className="py-12 bg-default-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Отрасли</div>
            <h2 className="text-3xl font-bold mb-6">Наши клиенты по отраслям</h2>
            <p className="text-default-600 max-w-2xl mx-auto">Выберите отрасль, чтобы увидеть примеры успешных внедрений наших решений</p>
          </motion.div> */}

      {/* <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 border-b border-default-200">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-4 py-3 text-default-600 hover:text-primary transition-colors border-b-2 ${
                    selectedIndustry === industry.id ? 'border-primary text-primary font-medium' : 'border-transparent'
                  }`}>
                  {industry.name}
                </button>
              ))}
            </div>
          </div> */}
      {/* </div>
      </section> */}

      {/* Customer       {/* Customer Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Внедрения</div>
            <h2 className="text-3xl font-bold mb-6">Успешные интеграции</h2>
            <p className="text-default-600 max-w-2xl mx-auto">Примеры внедрения наших решений в различных отраслях</p>
          </motion.div> */}

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}>
            {filteredCustomers.map((customer) => (
              <motion.div
                key={customer.id}
                className="bg-default-50 rounded-xl overflow-hidden shadow-sm"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={customer.imageSrc || `https://via.placeholder.com/600x400?text=${customer.sector}`}
                    alt={`${customer.sector} case study`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">{customer.sector}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    {/* <div className="h-12 w-24 bg-white rounded flex items-center justify-center p-2">
                      <img src={customer.logo || `https://via.placeholder.com/120x60?text=Logo`} alt="Company logo" className="max-h-10 max-w-full" />
                    </div> */}
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">{industries.find((i) => i.id === customer.industry)?.name}</span>
                  </div>

                  <h4 className="font-medium mb-3">Результаты:</h4>
                  <ul className="space-y-2 mb-6">
                    {customer.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-default-600">{result}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/case-studies/${customer.id}`}
                    className={buttonStyles({
                      color: 'primary',
                      variant: 'flat',
                      size: 'sm',
                      fullWidth: true,
                    })}>
                    Подробнее о внедрении
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredCustomers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-default-600">Нет примеров внедрений для выбранной отрасли.</p>
            </div>
          )}
        </div>
      </section>
      {/* Industry Stats */}
      <section className="py-16 bg-default-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Статистика</div>
            <h2 className="text-3xl font-bold mb-6">Наши достижения в цифрах</h2>
            <p className="text-default-600 max-w-2xl mx-auto">Результаты внедрения наших решений в различных отраслях</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '200+', label: 'Успешных внедрений' },
              { value: '15+', label: 'Отраслей' },
              { value: '40%', label: 'Среднее повышение эффективности' },
              { value: '30%', label: 'Среднее снижение затрат' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-default-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Процесс интеграции</div>
            <h2 className="text-3xl font-bold mb-6">Как мы внедряем наши решения</h2>
            <p className="text-default-600 max-w-2xl mx-auto">Наш подход к интеграции продуктов обеспечивает плавный переход и минимальные риски для бизнеса</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[21px] top-0 h-full w-[2px] bg-default-200 md:left-1/2 md:-ml-[1px]"></div>

              {/* Steps */}
              <div className="space-y-12">
                {[
                  {
                    title: 'Анализ потребностей',
                    description: 'Мы тщательно изучаем бизнес-процессы вашей компании, выявляем узкие места и определяем ключевые потребности.',
                  },
                  {
                    title: 'Разработка стратегии',
                    description: 'На основе анализа мы разрабатываем стратегию внедрения, адаптированную под специфику вашей отрасли и бизнеса.',
                  },
                  {
                    title: 'Настройка и интеграция',
                    description: 'Наши специалисты настраивают систему и интегрируют ее с существующими решениями, обеспечивая бесшовное взаимодействие.',
                  },
                  {
                    title: 'Обучение персонала',
                    description: 'Мы проводим комплексное обучение сотрудников, чтобы они могли максимально эффективно использовать новую систему.',
                  },
                  {
                    title: 'Запуск и поддержка',
                    description: 'После запуска мы обеспечиваем постоянную техническую поддержку и помогаем оптимизировать использование системы.',
                  },
                ].map((step, index, array) => (
                    <motion.div
                      key={index}
                      className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}>
                      {/* Connecting line to next step (except for last item) */}
                      {index < array.length - 1 && (
                        <div 
                          className={`
                            hidden md:block absolute z-0 border-2 border-dashed border-default-200
                            ${index % 2 === 0 
                              ? 'h-[40px] w-[calc(50%-24px)] top-[14px] left-1/2' 
                              : 'h-[40px] w-[calc(50%-24px)] top-[14px] right-1/2'
                            }
                          `}
                        />
                      )}
                      
                      <div
                        className={`
                        flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center z-10
                        ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} 
                        ${index === array.length - 1 ? 'bg-primary text-white' : 'bg-default-100 text-primary'}
                        border-4 border-white
                      `}>
                        {index + 1}
                      </div>
  
                      {/* Content */}
                      <div
                        className={`
                        mt-4 md:mt-0 md:w-5/12 
                        ${index % 2 === 0 ? 'md:text-right md:mr-8' : 'md:text-left md:ml-8'}
                        p-4 bg-white rounded-lg shadow-sm border border-default-100
                      `}>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-default-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </DefaultLayout>
  );
}
