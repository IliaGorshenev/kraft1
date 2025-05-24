import ContactForm from '@/components/contact-form';
import CornerBorderedBox from '@/components/corner-bordered-box';
import FeatureSection from '@/components/features';
import PartnersSlider from '@/components/partners-slider';
import ProductsShowcase from '@/components/products-showcases';
import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { Award, Clock, HeadphonesIcon, Shield } from 'lucide-react';

import AboutCompanyHero from '@/components/about-company-hero';
import AnimatedServicesSection from '@/components/services';
import DefaultLayout from '@/layouts/default';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <AboutCompanyHero />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-16">
        {/* ... existing commented code ... */}

        <FeatureSection
          rightSlot={
            <CornerBorderedBox className="p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Наши преимущества</h2>
              <p className="text-default-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Мы стремимся предоставлять нашим клиентам лучшие решения, которые отвечают их бизнес-потребностям.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 border border-default-200 rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-primary">
                      <Clock size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Опыт</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Более 7 лет на рынке IT-услуг</p>
                </div>
                <div className="p-3 sm:p-4 border border-default-200 rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-primary">
                      <Award size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Качество</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Современные технологии и методологии разработки</p>
                </div>
                <div className="p-3 sm:p-4 border border-default-200 rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-primary">
                      <Shield size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Надежность</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Соблюдение сроков и бюджета проектов</p>
                </div>
                <div className="p-3 sm:p-4 border border-default-200 rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-primary">
                      <HeadphonesIcon size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Поддержка</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Оперативная техническая поддержка</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <Link
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'flat',
                    size: 'sm',
                    class: 'sm:text-base sm:py-2',
                  })}
                  href="/advantages">
                  Про наши преимущества
                </Link>
              </div>
            </CornerBorderedBox>
          }
          leftSlot={
            <CornerBorderedBox className="bg-default-200 rounded-2xl p-3  h-100 flex items-center justify-center">
              <img src="/brain.jpg" alt="Услуги компании Крафт Лаб" className="w-full rounded-2xl h-full object-cover" />
            </CornerBorderedBox>
          }
        />

        <ProductsShowcase />

        <PartnersSlider />
        <AnimatedServicesSection />
        {/* <RServiceTeaser /> */}

        <ContactForm />
      </section>
    </DefaultLayout>
  );
}
