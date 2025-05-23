import { Route, Routes } from 'react-router-dom';

import AboutPage from '@/pages/about';
import BlogPage from '@/pages/blog';
import DocsPage from '@/pages/docs';
import IndexPage from '@/pages/index';
import PricingPage from '@/pages/pricing';
import RServicePage from '@/pages/r-service';
import DemoRequestPage from './pages/demo';
import PartnersPage from './pages/partners';
import CustomersPage from './pages/customers';

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<PartnersPage />} path="/partners" />
      <Route element={<RServicePage />} path="/r-service" />
      <Route element={<DemoRequestPage />} path="/r-service/demo" />
      <Route element={<CustomersPage />} path="/customers" />
    </Routes>
  );
}

export default App;
