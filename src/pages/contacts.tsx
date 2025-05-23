import { subtitle, title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { Link } from '@heroui/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
  // Animation variants
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

  // Contact information
  const contactInfo = [
    {
      title: 'Адрес',
      details: 'Смирновская ул, д. 25 стр. 15, помещ. 12а',
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
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
    {
      title: 'Телефон',
      details: '+7 (495) 120 80 29',
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
    {
      title: 'Email',
      details: 'info@kraftlab.ru',
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
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      title: 'Режим работы',
      details: 'Пн-Пт: 9:00 - 18:00',
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
            Свяжитесь с <span className="text-primary">нами</span>
          </h1>
          <motion.p className={subtitle({ class: 'mt-6 mx-auto' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Мы готовы ответить на ваши вопросы и обсудить возможности сотрудничества
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div className="lg:col-span-1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="bg-content1 rounded-xl p-8 shadow-lg h-full">
                <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-default-600">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-default-200">
                  <h3 className="font-semibold text-lg mb-4">Мы в социальных сетях</h3>
                  <div className="flex space-x-4">
                    {[
                      {
                        name: 'Telegram',
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.133.43.166.646.085.215-.082.374-.253.413-.484.348-2.035 1.187-7.198 1.488-9.051.011-.067.012-.132-.004-.197-.023-.095-.091-.164-.191-.177-.142-.02-.278-.048-.42-.036-.2.019-.369.133-.498.287-.837.993-3.157 3.383-3.917 4.21-.14.151-.098.393.098.477.172.073.315.044.421-.068l1.053-1.12c.07-.074.179-.093.272-.044l2.182 1.15c.125.066.271.042.377-.047l4.805-3.168c.066-.046.146.046.12.118l-1.059 4.082c-.043.166-.201.286-.395.286h-1.75c-.107 0-.201.08-.201.194v1.498c0 .107.094.194.201.194h1.75c.194 0 .352.12.395.286l.916 3.536c.042.162-.04.336-.195.406-.153.07-.335.035-.448-.083l-2.676-2.772c-.08-.084-.201-.132-.326-.132h-4.707c-.107 0-.201-.08-.201-.194v-1.498c0-.107.094-.194.201-.194h4.707c.125 0 .246-.048.326-.132l2.676-2.772c.113-.118.295-.153.448-.083.155.07.237.244.195.406l-.916 3.536c-.043.166-.201.286-.395.286h-1.75c-.107 0-.201.08-.201.194v1.498c0 .107.094.194.201.194h1.75c.194 0 .352.12.395.286l1.059 4.082c.026.072-.054.164-.12.118l-4.805-3.168c-.106-.089-.252-.113-.377-.047l-2.182 1.15c-.093.049-.202.03-.272-.044l-1.053-1.12c-.106-.112-.249-.141-.421-.068-.196.084-.238.326-.098.477.76.827 3.08 3.217 3.917 4.21.129.154.298.268.498.287.142.012.278-.016.42-.036.1-.013.168-.082.191-.177.016-.065.015-.13.004-.197-.301-1.853-1.14-7.016-1.488-9.051-.039-.231-.198-.402-.413-.484-.216-.081-.458-.048-.646.085-1.4.991-4.609 3.264-5.54 3.919-.189.134-.436.134-.625 0-.931-.655-4.14-2.928-5.54-3.919z"></path>
                          </svg>
                        ),
                        href: 'https://t.me/kraftlab',
                      },
                      {
                        name: 'VK',
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.344 16.163h-1.867c-.467 0-.604-.308-1.01-.962-.383-.6-.521-.887-1.01-.887-.417 0-.522.291-.522.773v.773c0 .484-.104.676-1.01.676-1.979 0-3.833-1.104-5.195-3.128-1.856-2.918-2.238-4.581-2.238-5.245 0-.33.132-.676.676-.676h1.885c.52 0 .73.139.938.557.557 1.278 1.473 3.052 1.867 3.052.36 0 .443-.195.443-.773v-2.278c-.091-1.387-1.01-1.507-1.01-1.989 0-.218.173-.3.443-.3h2.89c.36 0 .52.139.52.557v3.128c0 .33.13.443.26.443.173 0 .34-.113.677-.443.937-1.137 1.611-2.691 1.611-2.691.087-.173.261-.33.608-.33h1.886c.443 0 .607.139.443.557-.173.917-1.924 3.128-1.924 3.128-.165.291-.217.405 0 .7.156.24.26.405.52.7.976 1.137 1.645 1.989 1.645 2.691.001.557-.129.813-.486.813z"></path>
                          </svg>
                        ),
                        href: 'https://vk.com/kraftlab',
                      },
                      {
                        name: 'YouTube',
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"></path>
                          </svg>
                        ),
                        href: 'https://youtube.com/@kraftlab',
                      },
                    ].map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        className="bg-default-100 hover:bg-primary/10 hover:text-primary text-default-600 p-3 rounded-full transition-colors"
                        target="_blank"
                        rel="noopener noreferrer">
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-content1 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Отправьте нам сообщение</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-default-700 mb-1">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-default-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Введите ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-default-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-default-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Введите ваш email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-default-700 mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-default-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-default-700 mb-1">
                      Тема *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-default-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Тема вашего сообщения"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-default-700 mb-1">
                      Сообщение *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-default-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Введите ваше сообщение"
                      required></textarea>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="privacy" className="mr-2" required />
                    <label htmlFor="privacy" className="text-sm text-default-600">
                      Я согласен с{' '}
                      <Link href="/privacy" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </Link>
                    </label>
                  </div>

                  <button type="submit" className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="aspect-[16/9] md:aspect-[21/9] w-full">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A123456789&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта офиса КрафтЛаб"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onError={(e) => {
                  // Fallback for map loading errors
                  e.currentTarget.style.background = '#f0f0f0';
                  e.currentTarget.innerHTML = '<div class="flex items-center justify-center h-full text-default-600">Карта временно недоступна</div>';
                }}></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-default-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold">Часто задаваемые вопросы</h2>
            <p className="text-default-600 mt-4 max-w-2xl mx-auto">Ответы на наиболее распространенные вопросы о нашей компании и услугах</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'Как начать сотрудничество с КрафтЛаб?',
                answer:
                  'Для начала сотрудничества вы можете связаться с нами через форму на этой странице, позвонить по указанному телефону или написать на электронную почту. Наши специалисты свяжутся с вами для обсуждения деталей вашего проекта и возможных вариантов сотрудничества.',
              },
              {
                question: 'Какие услуги предоставляет ваша компания?',
                answer:
                  'Мы предоставляем широкий спектр услуг в области информационных технологий, включая разработку программного обеспечения, внедрение и поддержку IT-систем, консалтинг, аутсорсинг IT-инфраструктуры и многое другое. Подробнее о наших услугах вы можете узнать в разделе "Услуги".',
              },
              {
                question: 'Сколько стоят ваши услуги?',
                answer:
                  'Стоимость наших услуг зависит от сложности и объема работ, требуемых для реализации вашего проекта. Мы предлагаем индивидуальный подход к ценообразованию и готовы обсудить оптимальные варианты сотрудничества в рамках вашего бюджета.',
              },
              {
                question: 'Работаете ли вы с клиентами из других городов и стран?',
                answer:
                  'Да, мы работаем с клиентами из разных городов России и зарубежных стран. Современные технологии позволяют нам эффективно взаимодействовать с заказчиками независимо от их географического расположения.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-white rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-default-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
