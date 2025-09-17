import { motion } from 'framer-motion';
import Hero from './components/Hero';
import WhyMe from './components/WhyMe';
import Audience from './components/Audience';
import Packages from './components/Packages';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PDFExport from './components/PDFExport';

function App() {
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
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
