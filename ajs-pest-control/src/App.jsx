import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}

export default App
