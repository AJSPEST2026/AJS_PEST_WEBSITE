import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import './App.css';

// Lazy load below-the-fold components
const WhyUs = lazy(() => import('./components/WhyUs'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CtaBand = lazy(() => import('./components/CtaBand'));
const Footer = lazy(() => import('./components/Footer'));

// Fallback loader component
const SectionLoader = () => (
  <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B7260' }}>
    <span className="loader-dot">Loading...</span>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Suspense fallback={<SectionLoader />}>
          <WhyUs />
          <Process />
          <Testimonials />
          <CtaBand />
          <Footer />
        </Suspense>
      </main>
    </>
  )
}

export default App;
