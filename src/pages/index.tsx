import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';

import FeatureSection from '@/components/features';
import { subtitle, title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { motion } from 'framer-motion';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-16">
        <motion.div
          className="inline-block max-w-2xl text-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <span className={title()}>Разработка </span>
          <span className={title()}>IT-решений </span>
          <br />
          <span className={title()}>для бизнеса любой сложности</span>
          <motion.div className={subtitle({ class: 'mt-6 mx-auto' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Мы создаем современные веб-приложения, мобильные решения и корпоративные системы, которые помогают бизнесу расти и развиваться
          </motion.div>
        </motion.div>

        <FeatureSection
          leftSlot={
            <div>
              <h2 className="text-3xl font-bold mb-4">О компании</h2>
              <p className="text-default-600 mb-6">
                Компания «Крафт Лаб» специализируется на разработке программного обеспечения и IT-консалтинге. Мы предлагаем полный цикл услуг от проектирования до
                внедрения и поддержки IT-решений.
              </p>
              <p className="text-default-600 mb-6">
                Наша команда состоит из опытных разработчиков, аналитиков и проектных менеджеров, которые обеспечивают высокое качество и своевременную реализацию
                проектов.
              </p>
              <Link
                className={buttonStyles({
                  color: 'primary',
                  variant: 'flat',
                })}
                href="/services">
                Узнать больше о наших услугах
              </Link>
            </div>
          }
          rightSlot={
            <div className="bg-default-100 rounded-xl p-8 h-80 flex items-center justify-center">
              <img src="/image-1.png" alt="О компании Крафт Лаб" className="w-full h-full object-cover" />
            </div>
          }
        />
        <FeatureSection
          reverseOnMobile={true}
          leftSlot={
            <div className="bg-default-100 rounded-xl p-8 h-80 flex items-center justify-center">
              <img src="/image-2.png" alt="Услуги компании Крафт Лаб" className="w-full h-full object-cover" />
            </div>
          }
          rightSlot={
            <div>
              <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Разработка программного обеспечения</h3>
                    <p className="text-default-600">Создание веб-приложений, мобильных приложений и корпоративных систем</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">IT-консалтинг</h3>
                    <p className="text-default-600">Анализ бизнес-процессов и разработка IT-стратегии</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Техническая поддержка</h3>
                    <p className="text-default-600">Сопровождение и развитие IT-систем</p>
                  </div>
                </li>
              </ul>
            </div>
          }
        />
        <FeatureSection
          leftSlot={
            <div>
              <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
              <p className="text-default-600 mb-6">Мы стремимся предоставлять нашим клиентам лучшие решения, которые отвечают их бизнес-потребностям.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-default-200 rounded-lg">
                  <h3 className="font-semibold mb-2">Опыт</h3>
                  <p className="text-default-600 text-sm">Более 7 лет на рынке IT-услуг</p>
                </div>
                <div className="p-4 border border-default-200 rounded-lg">
                  <h3 className="font-semibold mb-2">Качество</h3>
                  <p className="text-default-600 text-sm">Современные технологии и методологии разработки</p>
                </div>
                <div className="p-4 border border-default-200 rounded-lg">
                  <h3 className="font-semibold mb-2">Надежность</h3>
                  <p className="text-default-600 text-sm">Соблюдение сроков и бюджета проектов</p>
                </div>
                <div className="p-4 border border-default-200 rounded-lg">
                  <h3 className="font-semibold mb-2">Поддержка</h3>
                  <p className="text-default-600 text-sm">Оперативная техническая поддержка</p>
                </div>
              </div>
            </div>
          }
          rightSlot={
            <div className="bg-default-100 rounded-xl p-8 h-80 flex items-center justify-center">
              <img src="/image-2.png" alt="Услуги компании Крафт Лаб" className="w-full h-full object-cover" />
            </div>
          }
        />
        <motion.section
          className="bg-primary/5 rounded-2xl p-8 my-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h2 className="text-3xl font-bold mb-4">Готовы обсудить ваш проект?</h2>
          <p className="text-default-600 max-w-2xl mx-auto mb-6">Свяжитесь с нами, чтобы получить консультацию и узнать, как мы можем помочь вашему бизнесу.</p>
          <Link
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
              size: 'lg',
            })}
            href="/contacts">
            Связаться с нами
          </Link>
        </motion.section>
      </section>
    </DefaultLayout>
  );
}
