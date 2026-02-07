'use client'

import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ToolStack from './ToolStack'
import ValueProposition from './ValueProposition'
import ProblemsSolved from './ProblemsSolved'
import HowItWorks from './HowItWorks'
import TrustSignals from './TrustSignals'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import SecurityBadges from './SecurityBadges'
import ROICalculator from './ROICalculator'
import ContactForm from './ContactForm'
import Footer from './Footer'
import ScrollProgress from './animations/ScrollProgress'
import StickyCTABar from './StickyCTABar'
import ExitIntentPopup from './ExitIntentPopup'
import DemoBookingModal from './DemoBookingModal'

export default function HomePageClient() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  useEffect(() => {
    const handleOpenDemo = () => setIsDemoModalOpen(true)
    window.addEventListener('openDemoModal', handleOpenDemo)
    return () => window.removeEventListener('openDemoModal', handleOpenDemo)
  }, [])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <DemoBookingModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <ExitIntentPopup />
      <StickyCTABar />
      <Hero />
      <ToolStack />
      <ValueProposition />
      <ProblemsSolved />
      <HowItWorks />
      <Testimonials />
      <SecurityBadges showDescription={true} className="security-badges-section" />
      <TrustSignals />
      <ROICalculator />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  )
}

