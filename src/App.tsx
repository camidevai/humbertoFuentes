import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import WhyMe from './components/WhyMe';
import Audience from './components/Audience';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PDFExport from './components/PDFExport';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import UsageRights from './components/UsageRights';
import Login from './components/admin/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import { useAuth } from './contexts/AuthContext';

type PageType = 'main' | 'terms' | 'privacy' | 'usage' | 'admin';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('main');
  const { isAuthenticated } = useAuth();

  // Check for admin route in URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin' || path === '/admin/') {
      setCurrentPage('admin');
    }
  }, []);

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);

    // Update URL for admin page
    if (page === 'admin') {
      window.history.pushState({}, '', '/admin');
    } else if (page === 'main') {
      window.history.pushState({}, '', '/');
    }
  };

  // Admin page logic
  if (currentPage === 'admin') {
    if (!isAuthenticated) {
      return <Login />;
    }
    return <AdminDashboard />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => handlePageChange('main')} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => handlePageChange('main')} />;
  }

  if (currentPage === 'usage') {
    return <UsageRights onBack={() => handlePageChange('main')} />;
  }
  return (
    <div className="min-h-screen bg-primary-dark">
      <PDFExport />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <WhyMe />
        <Audience />
        <CaseStudies />
        <Process />
        <FAQ />
        <Contact />
        <Footer onPageChange={handlePageChange} />
      </motion.div>
    </div>
  );
}

export default App;
