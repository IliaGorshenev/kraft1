import { subtitle, title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { sendTelegramNotification } from '@/utils/telegram';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import { Input } from '@heroui/input';
import { Link } from '@heroui/link';
import { Switch } from '@heroui/switch';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  // Animation variants
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    employees: 'Выберите количество сотрудников',
    message: '',
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
  <b>Новый запрос на расчет стоимости</b>
  <b>Имя:</b> ${formData.name}
  <b>Email:</b> ${formData.email}
  <b>Телефон:</b> ${formData.phone || 'Не указан'}
  <b>Компания:</b> ${formData.company}
  <b>Должность:</b> ${formData.position || 'Не указана'}
  <b>Количество сотрудников:</b> ${formData.employees}
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
      details: '+7 (909) 157-99-57',
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
            Запросить <span className="text-primary">стоимость</span>
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
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-content1 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Узнать стоимость</h2>

                {formData.success ? (
                  <motion.div
                    className="bg-success-100 border border-success-200 text-success-700 p-6 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">Заявка успешно отправлена!</h3>
                    <p>Спасибо за интерес к нашим услугам. Наши специалисты свяжутся с вами в ближайшее время для обсуждения стоимости.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        label="Имя"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Введите ваше имя"
                        variant="bordered"
                        radius="sm"
                        isRequired
                      />

                      <Input
                        type="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@company.com"
                        variant="bordered"
                        radius="sm"
                        isRequired
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        label="Телефон"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (___) ___-__-__"
                        variant="bordered"
                        radius="sm"
                      />

                      <Input
                        type="text"
                        label="Компания"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Название вашей компании"
                        variant="bordered"
                        radius="sm"
                        isRequired
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        label="Должность"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        placeholder="Ваша должность"
                        variant="bordered"
                        radius="sm"
                      />

                      <Dropdown>
                        <DropdownTrigger>
                          <div className="w-full">
                            <Input
                              type="text"
                              label="Количество сотрудников"
                              value={formData.employees}
                              readOnly
                              variant="bordered"
                              radius="sm"
                              className="cursor-pointer"
                            />
                          </div>
                        </DropdownTrigger>
                        <DropdownMenu
                          aria-label="Количество сотрудников"
                          onAction={(key) => handleEmployeesSelect(key as string)}
                          className="w-full min-w-[260px]"
                          itemClasses={{
                            base: 'text-default-700 data-[hover=true]:bg-default-100 data-[hover=true]:text-default-900',
                            description: 'text-default-500',
                            shortcut: 'text-default-500',
                          }}>
                          <DropdownItem key="До 50">До 50</DropdownItem>
                          <DropdownItem key="50-200">50-200</DropdownItem>
                          <DropdownItem key="200-500">200-500</DropdownItem>
                          <DropdownItem key="500-1000">500-1000</DropdownItem>
                          <DropdownItem key="1000-5000">1000-5000</DropdownItem>
                          <DropdownItem key="Более 5000">Более 5000</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>

                    <div>
                      <Input
                        type="text"
                        label="Сообщение"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Опишите ваши потребности для расчета стоимости"
                        variant="bordered"
                        radius="sm"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch isSelected={formData.consent} onValueChange={handleConsentChange} size="sm" />
                      <label className="text-sm text-default-600">
                        Я согласен на обработку персональных данных в соответствии с{' '}
                        <Link href="/privacy" className="text-primary hover:underline">
                          политикой конфиденциальности
                        </Link>
                      </label>
                    </div>

                    {formData.error && (
                      <div className="bg-danger-100 border border-danger-200 text-danger-700 p-3 rounded-lg text-sm">
                        Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.
                      </div>
                    )}

                    <button
                      type="submit"
                      className={buttonStyles({
                        color: 'primary',
                        variant: 'shadow',
                        size: 'lg',
                        radius: 'md',
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
                        'Узнать стоимость'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-bold">Наш офис</h2>
          </motion.div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A123456789&amp;source=constructor"
              width="100%"
              height="450"
              frameBorder="0"
              title="Карта офиса"
              className="w-full"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen></iframe>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
