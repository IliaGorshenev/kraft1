import { useState } from 'react';
import { motion } from 'framer-motion';
import { subtitle, title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { Input } from '@heroui/input';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import { Switch } from '@heroui/switch';
import { button as buttonStyles } from '@heroui/theme';
import { sendTelegramNotification } from '@/utils/telegram';
import { Laptop, Server, Database, Shield, Clock, Users } from 'lucide-react';

export default function DemoPage() {
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

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    employees: 'Выберите количество сотрудников',
    message: '',
    demoType: 'cloud', // cloud or onpremise
    consent: false,
    loading: false,
    success: false,
    error: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmployeesSelect = (key: string) => {
    setFormData((prev) => ({ ...prev, employees: key }));
  };

  const handleDemoTypeChange = (type: 'cloud' | 'onpremise') => {
    setFormData((prev) => ({ ...prev, demoType: type }));
  };

  const handleConsentChange = () => {
    setFormData((prev) => ({ ...prev, consent: !prev.consent }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('Пожалуйста, подтвердите согласие на обработку персональных данных');
      return;
    }

    setFormData((prev) => ({ ...prev, loading: true, error: false }));

    try {
      // Prepare notification message for Telegram
      const message = `
<b>Новый запрос на демо-версию</b>
<b>Имя:</b> ${formData.name}
<b>Email:</b> ${formData.email}
<b>Телефон:</b> ${formData.phone || 'Не указан'}
<b>Компания:</b> ${formData.company}
<b>Должность:</b> ${formData.position || 'Не указана'}
<b>Количество сотрудников:</b> ${formData.employees}
<b>Тип демо:</b> ${formData.demoType === 'cloud' ? 'Облачная версия' : 'Локальная установка'}
<b>Сообщение:</b> ${formData.message || 'Не указано'}
      `.trim();

      // Send notification to Telegram
      await sendTelegramNotification(message);

      // For demonstration purposes, we'll just log the data
      console.log('Form submitted:', formData);

      setFormData((prev) => ({
        ...prev,
        loading: false,
        success: true,
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        employees: 'Выберите количество сотрудников',
        message: '',
        consent: false,
      }));

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormData((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormData((prev) => ({ ...prev, loading: false, error: true }));
    }
  };

  // Demo features
  const demoFeatures = [
    {
      title: 'Полный функционал',
      description: 'Доступ ко всем модулям и функциям системы без ограничений',
      icon: <Laptop size={24} />,
    },
    {
      title: 'Тестовые данные',
      description: 'Предзаполненные данные для демонстрации работы системы',
      icon: <Database size={24} />,
    },
    {
      title: 'Техническая поддержка',
      description: 'Помощь специалистов на всех этапах тестирования',
      icon: <Users size={24} />,
    },
    {
      title: 'Безопасность',
      description: 'Защищенный доступ и конфиденциальность ваших данных',
      icon: <Shield size={24} />,
    },
    {
      title: 'Быстрый старт',
      description: 'Доступ к демо-версии в течение 24 часов после запроса',
      icon: <Clock size={24} />,
    },
    {
      title: 'Гибкая настройка',
      description: 'Возможность настройки под ваши бизнес-процессы',
      icon: <Server size={24} />,
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
            Получите <span className="text-primary">демо-версию</span> RVS-Service
          </h1>
          <motion.p className={subtitle({ class: 'mt-6 mx-auto' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Оцените все возможности платформы RVS-Service на практике. Заполните форму ниже, и мы предоставим вам доступ к демо-версии.
          </motion.p>
        </motion.div>
      </section>

      {/* Demo Features */}
      <section className="py-12 bg-default-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Преимущества</div>
            <h2 className="text-3xl font-bold mb-6">Что включает демо-версия</h2>
            <p className="text-default-600 max-w-2xl mx-auto">
              Демо-версия RVS-Service предоставляет полный доступ ко всем функциям системы, чтобы вы могли оценить ее возможности в реальных условиях
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}>
            {demoFeatures.map((feature, index) => (
              <motion.div key={index} className="bg-background p-6 rounded-xl shadow-sm" variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <div className="bg-primary/10 p-3 rounded-full text-primary inline-block mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-default-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-16" id="demo-form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Запрос демо-версии</div>
              <h2 className="text-3xl font-bold mb-6">Заполните форму для получения доступа</h2>
              <p className="text-default-600 max-w-2xl mx-auto">
                После отправки заявки наш специалист свяжется с вами в течение 24 часов для предоставления доступа к демо-версии RVS-Service
              </p>
            </motion.div>

            <motion.div
              className="bg-background rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}>
              {formData.success ? (
                <div className="p-8 md:p-12 text-center">
                  <div className="bg-success/10 text-success p-4 rounded-xl mb-6 inline-flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Спасибо за ваш запрос!</h3>
                  <p className="text-default-600 mb-6">
                    Мы получили вашу заявку на демо-версию RVS-Service. Наш специалист свяжется с вами в ближайшее время для предоставления доступа.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Имя и фамилия <span className="text-danger">*</span>
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Введите ваше имя" required className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-danger">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@company.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Телефон
                      </label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+7 (___) ___-__-__" className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Компания <span className="text-danger">*</span>
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Название вашей компании"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="position" className="block text-sm font-medium mb-2">
                        Должность
                      </label>
                      <Input id="position" name="position" value={formData.position} onChange={handleInputChange} placeholder="Ваша должность" className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="employees" className="block text-sm font-medium mb-2">
                        Количество сотрудников <span className="text-danger">*</span>
                      </label>
                      <Dropdown>
                        <DropdownTrigger>
                          <button className="w-full flex items-center justify-between px-4 py-2 border rounded-lg bg-background" type="button">
                            <span>{formData.employees}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Количество сотрудников" onAction={(key) => handleEmployeesSelect(key as string)}>
                          <DropdownItem key="До 50 сотрудников">До 50 сотрудников</DropdownItem>
                          <DropdownItem key="50-200 сотрудников">50-200 сотрудников</DropdownItem>
                          <DropdownItem key="200-500 сотрудников">200-500 сотрудников</DropdownItem>
                          <DropdownItem key="500-1000 сотрудников">500-1000 сотрудников</DropdownItem>
                          <DropdownItem key="Более 1000 сотрудников">Более 1000 сотрудников</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Дополнительная информация
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Опишите ваши потребности или задайте вопросы"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg bg-background resize-none"
                    />
                  </div>

                  <div className="mb-8">
                    <p className="text-lg font-medium mb-4">Выберите тип демо-версии:</p>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div
                        className={`flex-1 p-6 border rounded-xl cursor-pointer transition-all ${
                          formData.demoType === 'cloud' ? 'border-primary bg-primary/5' : 'border-default-200'
                        }`}
                        onClick={() => handleDemoTypeChange('cloud')}>
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              formData.demoType === 'cloud' ? 'border-primary' : 'border-default-300'
                            }`}>
                            {formData.demoType === 'cloud' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                          </div>
                          <h4 className="font-semibold">Облачная версия</h4>
                        </div>
                        <p className="text-default-600 text-sm">
                          Быстрый доступ через браузер без необходимости установки. Идеально для быстрого ознакомления с системой.
                        </p>
                      </div>

                      <div
                        className={`flex-1 p-6 border rounded-xl cursor-pointer transition-all ${
                          formData.demoType === 'onpremise' ? 'border-primary bg-primary/5' : 'border-default-200'
                        }`}
                        onClick={() => handleDemoTypeChange('onpremise')}>
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              formData.demoType === 'onpremise' ? 'border-primary' : 'border-default-300'
                            }`}>
                            {formData.demoType === 'onpremise' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                          </div>
                          <h4 className="font-semibold">Локальная установка</h4>
                        </div>
                        <p className="text-default-600 text-sm">Установка на ваши серверы для максимального контроля и безопасности. Требует технической подготовки.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-3">
                      <Switch checked={formData.consent} onChange={handleConsentChange} id="consent" />
                      <label htmlFor="consent" className="text-sm text-default-600">
                        Я согласен на обработку персональных данных и принимаю{' '}
                        <a href="/privacy" className="text-primary hover:underline">
                          политику конфиденциальности
                        </a>
                      </label>
                    </div>
                  </div>

                  {formData.error && (
                    <div className="mb-6 p-4 bg-danger/10 text-danger rounded-lg">
                      Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.
                    </div>
                  )}
                  <button
                    type="submit"
                    className={buttonStyles({
                      color: 'primary',
                      variant: 'shadow',
                      size: 'lg',
                      className: 'w-full',
                    })}
                    disabled={formData.loading}>
                    {formData.loading ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Отправка...</span>
                      </div>
                    ) : (
                      'Получить демо-версию'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Готовы начать?</h3>
                <p className="text-default-600 max-w-xl">
                  Запросите демо-версию RVS-Service сегодня и оцените все преимущества платформы для управления сервисами вашей компании.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#demo-form"
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'shadow',
                    size: 'lg',
                  })}>
                  Получить демо-версию
                </a>
                <a
                  href="/contact"
                  className={buttonStyles({
                    color: 'default',
                    variant: 'bordered',
                    size: 'lg',
                  })}>
                  Связаться с нами
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
}
