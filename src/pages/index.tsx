import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';

import ContactForm from '@/components/contact-form';
import CornerBorderedBox from '@/components/corner-bordered-box';
import FeatureSection from '@/components/features';
import PartnersSlider from '@/components/partners-slider';
import ProductsShowcase from '@/components/products-showcases';

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
            <CornerBorderedBox className="p-6">
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
              <div className="mt-6 text-center">
                <Link
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'flat',
                  })}
                  href="/advantages">
                  Про наши преимущества
                </Link>
              </div>
            </CornerBorderedBox>
          }
          leftSlot={
            <CornerBorderedBox className="bg-default-100 rounded-xl p-8 h-80 flex items-center justify-center">
              <img src="/image-2.png" alt="Услуги компании Крафт Лаб" className="w-full h-full object-cover" />
            </CornerBorderedBox>
          }
        />

        <ProductsShowcase />

        <PartnersSlider />
        <AnimatedServicesSection />
        {/* <RServiceTeaser /> */}
        <Link
          className={buttonStyles({
            color: 'primary',
            variant: 'flat',
          })}
          href="/services">
          Все услуги
        </Link>
        <ContactForm />
      </section>
    </DefaultLayout>
  );
}
