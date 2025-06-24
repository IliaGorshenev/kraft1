import { Route, Routes } from 'react-router-dom';

import AboutPage from '@/pages/about';

import IndexPage from '@/pages/index';
import PricingPage from '@/pages/pricing';

import ScrollToTop from './components/scroll-to-top';
import NotFoundPage from './pages/404';
import AdvantagesPage from './pages/advantages';
import ContactPage from './pages/contacts';
import CustomersPage from './pages/customers';
import DemoRequestPage from './pages/demo';
import PartnersPage from './pages/partners';
import RServicePage from './pages/r-service';
import ServiceDetailPage from './pages/service-ind';
import ServicesPage from './pages/services';
import DocumentationPage from './pages/documentation';
import DemoPage from './pages/demo-version';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<PricingPage />} path="/pricing" />
        <Route element={<AdvantagesPage />} path="/advantages" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<PartnersPage />} path="/partners" />
        <Route element={<RServicePage />} path="/rvs" />
        <Route element={<DocumentationPage />} path="/documentation" />
        <Route element={<DemoPage />} path="/demo" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<DemoRequestPage />} path="/rvs/price" />
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
