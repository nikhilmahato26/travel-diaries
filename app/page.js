'use client'
import Navbar from '@/components/revamp/Navbar'
import Hero from '@/components/revamp/Hero'
import About from '@/components/revamp/About'
import Destinations from '@/components/revamp/Destinations'
import Packages from '@/components/revamp/Packages'
import Cruises from '@/components/revamp/Cruises'
import UpcomingTrips from '@/components/revamp/UpcomingTrips'
import TravelSolutions from '@/components/revamp/TravelSolutions'
import VideoTestimonials from '@/components/revamp/VideoTestimonials'
import Testimonials from '@/components/revamp/Testimonials'
import Contact from '@/components/revamp/Contact'
import Footer from '@/components/revamp/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Cruises />
      <Packages />
      <UpcomingTrips />
      <TravelSolutions />
      <Testimonials />
      <VideoTestimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
