'use client'
import Navbar from '@/components/revamp/Navbar'
import Hero from '@/components/revamp/Hero'
import About from '@/components/revamp/About'
import Destinations from '@/components/revamp/Destinations'
import Packages from '@/components/revamp/Packages'
import Cruises from '@/components/revamp/Cruises'
import UpcomingTrips from '@/components/revamp/UpcomingTrips'
import VideoTestimonials from '@/components/revamp/VideoTestimonials'
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
      <VideoTestimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
