import ContactForm from '@/components/contact-form';
import { subtitle, title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';
import React from 'react';

interface DocumentItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function DocumentationPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const documents: DocumentItem[] = [
    {
      id: 'руководство_администратора',
      title: 'Руководство администратора',
      description: 'Полное руководство по установке, настройке, тестированию и обслуживанию системы RVS Service Management.',
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
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
          <path d="M22 22v-4h-6"></path>
          <path d="M18 16l-2 2 2 2"></path>
        </svg>
      ),
    },
    // {
    //   id: 'user-guide',
    //   title: 'Руководство пользователя',
    //   description: 'Пользовательская документация по работе с RVS Service Management.',
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round">
    //       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    //       <circle cx="9" cy="7" r="4"></circle>
    //       <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    //       <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    //     </svg>
    //   ),
    // },
    {
      id: 'функциональные_возможности_ПО',
      title: 'Функциональные возможности ПО',
      description: 'Функции, интерфейсы и технологии системы RVS Service Management.',
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
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
          <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
          <line x1="12" y1="2" x2="12" y2="8.5"></line>
        </svg>
      ),
    },
    {
      id: 'saas_документация',
      title: 'Регламент поддержки SaaS',
      description: 'Стандарты и порядок оказания поддержки продуктов RR Tech в облаке.',
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
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
    },
    {
      id: 'onprem_документация',
      title: 'Регламент поддержки On-Premise',
      description: 'Правила технической поддержки решений RR Tech в инфраструктуре заказчика.',
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
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
    {
      id: 'лицензионное_соглашение',
      title: 'Лицензионное соглашение',
      description: 'Правила использования программного обеспечения и права конечного пользователя.',
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
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
  ];

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
            <span>Документация по продукту </span>
            <span className="text-primary">RVS Service Management (RVS-Service)</span>
          </div>
          <motion.div className={subtitle({ class: 'mt-6 mx-auto' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Здесь вы найдете подробные инструкции и технические руководства RVS-Service. Наша документация поможет вам легко интегрировать, настраивать и использовать
            функционал платформы.
          </motion.div>
        </motion.div>

        {/* Documentation Grid */}
        <motion.div className="w-full max-w-7xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc) => (
              <motion.div
                key={doc.id}
                className="bg-content1 rounded-xl p-8 shadow-lg h-full flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">{doc.icon}</div>
                  <h3 className="text-xl font-bold">{doc.title}</h3>
                </div>

                <p className="text-default-600 mb-8 flex-grow">{doc.description}</p>

                <a
                  href={`/documents/${doc.id}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'flat',
                    className: 'mt-auto flex items-center justify-center gap-2',
                  })}>
                  <span>Изучить</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <ContactForm />
      </section>
    </DefaultLayout>
  );
}
