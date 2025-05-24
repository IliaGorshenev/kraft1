import { Route, Routes } from 'react-router-dom';

import AboutPage from '@/pages/about';
import BlogPage from '@/pages/blog';
import DocsPage from '@/pages/docs';
import IndexPage from '@/pages/index';
import PricingPage from '@/pages/pricing';

import ScrollToTop from './components/scroll-to-top';
import AdvantagesPage from './pages/advantages';
import ContactPage from './pages/contacts';
import CustomersPage from './pages/customers';
import DemoRequestPage from './pages/demo';
import PartnersPage from './pages/partners';
import ServiceDetailPage from './pages/service-ind';
import ServicesPage from './pages/services';
import RServicePage from './pages/r-service';
import NotFoundPage from './pages/404';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<DocsPage />} path="/docs" />
        <Route element={<PricingPage />} path="/pricing" />
        <Route element={<AdvantagesPage />} path="/advantages" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<PartnersPage />} path="/partners" />
        <Route element={<RServicePage />} path="/rvs" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<DemoRequestPage />} path="/rvs/demo" />
        <Route element={<CustomersPage />} path="/customers" />
        <Route element={<ServicesPage />} path="/services" />
        <Route element={<ServiceDetailPage />} path="/services/:serviceId" />
        {/* 404 route - must be last to catch all unmatched paths */}
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
