import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Procedure from './components/Procedure';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import FAQ from './components/FAQ';
import Checklist from './components/Checklist';
import WhyUs from './components/WhyUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Procedure />
        <Checklist />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer onShowPrivacy={() => setShowPrivacy(true)} onShowTerms={() => setShowTerms(true)} />
      <WhatsAppWidget />
      
      <PrivacyPolicy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsOfService isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </div>
  );
}

export default App;
