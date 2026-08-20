'use client'
import { useEffect, useState, use } from 'react'
import Navbar from '@/components/revamp/Navbar'
import Footer from '@/components/revamp/Footer'
import HomestayDetail from '@/components/HomestayDetail'
import { usePhone, useWhatsapp } from '@/hooks/useSettings'
import { MapPin, User, ChevronDown, ChevronUp, Share2, Download } from 'lucide-react'
import Link from 'next/link'

function fmt(n) {
  return Number(n).toLocaleString('en-IN')
}

const INPUT = {
  width: '100%', padding: '14px 16px', borderRadius: 12,
  border: '1px solid #e5e7eb', fontSize: 14, color: '#111',
  background: '#f9fafb', outline: 'none', boxSizing: 'border-box',
  fontFamily: 'inherit',
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function PackagePage({ params }) {
  const { id } = use(params)
  const [pkg, setPkg] = useState(null)
  const [openDay, setOpenDay] = useState(0)
  const [activeTab, setActiveTab] = useState('itinerary')
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  
  const phone = usePhone()
  const whatsapp = useWhatsapp()

  const [enquiry, setEnquiry] = useState({ name: '', phone: '', email: '', date: '', message: '' })
  const [enquiryStatus, setEnquiryStatus] = useState(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    fetch(`/api/packages/${encodeURIComponent(id)}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => setPkg(data && !data.error ? data : null))
      .catch(() => setPkg(null))
      .finally(() => setLoading(false))
  }, [id])

  const submitEnquiry = async (e) => {
    e.preventDefault()
    if (!enquiry.name.trim() || !enquiry.phone.trim()) return
    setEnquiryStatus('sending')
    const msgWithId = [
      enquiry.date ? `Travel Date: ${enquiry.date}` : '',
      enquiry.message.trim(),
      `Package ID: ${pkg.id}`
    ].filter(Boolean).join('\n\n')
    
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          package_id: pkg.id,
          package_title: pkg.title,
          ...enquiry,
          message: msgWithId,
        }),
      })
      if (res.ok) {
        setEnquiryStatus('sent')
        setEnquiry({ name: '', phone: '', email: '', date: '', message: '' })
        setTimeout(() => setEnquiryStatus(null), 3000)
      } else {
        setEnquiryStatus('error')
      }
    } catch {
      setEnquiryStatus('error')
    }
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 40, height: 40, border: '3px solid #fbf8f1', borderTop: '3px solid #1B61FF', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 12px' }} />
        <p style={{ color: '#9ca3af' }}>Loading package...</p>
      </div>
    </div>
  )

  if (!pkg) return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f9fafb' }}>
      <Navbar />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🗺️</div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#374151', marginBottom: 8 }}>Package not found</h2>
          <Link href="/" style={{ color: '#1B61FF', textDecoration: 'underline' }}>← Back to home</Link>
        </div>
      </div>
      <Footer />
    </main>
  )

  if (pkg.category === 'homestay' || pkg.category === 'houseboat') return (
    <main style={{ minHeight: '100vh', background: '#fff' }}>
      <Navbar />
      <HomestayDetail pkg={pkg} phone={phone} whatsapp={whatsapp} isMobile={isMobile} />
      <Footer />
    </main>
  )

  const travelers = (Number(pkg.adults) || 0) + (Number(pkg.children) || 0)
  const travelerText = travelers > 0 ? `${travelers} Pax` : '2 Pax'

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: pkg.title,
        url: window.location.href
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard')
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: '#fafafa', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero Section */}
      <div style={{ position: 'relative', height: '40vh', minHeight: 320, overflow: 'hidden' }}>
        <img
          src={pkg.heroImage || pkg.image}
          alt={pkg.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: (pkg.heroImage ? pkg.heroImagePos : pkg.imagePos) || 'center' }}
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1400&q=85' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: isMobile ? 40 : 64, color: '#fff', marginBottom: 12, textAlign: 'center' }}>
            Tour Details
          </h1>
          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, display: 'flex', gap: 8, alignItems: 'center' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <span>Tour Details</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '30px 16px 80px' : '50px 24px 100px' }}>
        
        {/* Title & Info Section */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20, marginBottom: 30 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: isMobile ? 28 : 42, color: '#111827', margin: 0, lineHeight: 1.2 }}>
              {pkg.title}
            </h2>
            <button onClick={handleShare} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: 999, border: '1px solid #3b82f6', color: '#3b82f6', background: 'transparent', cursor: 'pointer', fontWeight: 600, fontSize: 14, flexShrink: 0 }}>
              Share <Share2 size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: isMobile ? 16 : 40, borderBottom: '1px solid #e5e7eb', paddingBottom: 30 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={20} style={{ color: '#3b82f6' }} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Location</div>
                <div style={{ fontSize: 13, color: '#6b7280' }}>{pkg.destination || 'Multiple'}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={20} style={{ color: '#3b82f6' }} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Traveler</div>
                <div style={{ fontSize: 13, color: '#6b7280' }}>{travelerText}</div>
              </div>
            </div>

            <div style={{ marginLeft: isMobile ? 0 : 'auto', width: isMobile ? '100%' : 'auto' }}>
              <div style={{ padding: '14px 28px', borderRadius: 999, background: '#3b82f6', color: '#fff', fontWeight: 700, fontSize: 16, textAlign: 'center' }}>
                ₹ Starting from {fmt(pkg.salePrice)} / Per Person
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', gap: isMobile ? 40 : 40 }}>
          
          {/* Left Column */}
          <div>
            {/* Top Inclusions & Exclusions */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 30, marginBottom: 40 }}>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 28, color: '#111827', margin: '0 0 20px' }}>Inclusion</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {pkg.inclusions?.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: '#4b5563', fontWeight: 500 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b', flexShrink: 0, marginTop: 8 }} />
                      {item}
                    </li>
                  ))}
                  {!pkg.inclusions?.length && <li style={{ fontSize: 14, color: '#9ca3af' }}>No inclusions specified</li>}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 28, color: '#111827', margin: '0 0 20px' }}>Exclusion</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {pkg.exclusions?.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: '#4b5563', fontWeight: 500 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3b82f6', flexShrink: 0, marginTop: 8 }} />
                      {item}
                    </li>
                  ))}
                  {!pkg.exclusions?.length && <li style={{ fontSize: 14, color: '#9ca3af' }}>No exclusions specified</li>}
                </ul>
              </div>
            </div>

            {/* Tabbed Card */}
            <div style={{ background: '#fff', borderRadius: 24, padding: isMobile ? 24 : 40, boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}>
              
              {/* Tabs */}
              <div style={{ display: 'flex', gap: 40, borderBottom: '1px solid #f3f4f6', marginBottom: 30, overflowX: 'auto', paddingBottom: 16 }}>
                {['itinerary', 'inclusion', 'exclusion'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      background: 'none', border: 'none', padding: 0, position: 'relative',
                      fontSize: 13, fontWeight: activeTab === tab ? 600 : 500,
                      color: activeTab === tab ? '#3b82f6' : '#6b7280',
                      cursor: 'pointer', textTransform: 'capitalize', whiteSpace: 'nowrap'
                    }}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div style={{ position: 'absolute', bottom: -17, left: 0, right: 0, height: 2, background: '#3b82f6' }} />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'itinerary' && (
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 28, color: '#111827', margin: '0 0 24px' }}>Itinerary</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {pkg.itinerary?.map((day, i) => {
                      const acts = (day.activities || []).map(a => typeof a === 'string' ? a : a.title)
                      const isOpen = openDay === i
                      
                      return (
                        <div key={i} style={{ borderRadius: 16, overflow: 'hidden', border: isOpen ? 'none' : '1px solid #f3f4f6', background: isOpen ? '#3b82f6' : '#f9fafb', transition: 'all 0.2s' }}>
                          <button
                            onClick={() => setOpenDay(isOpen ? -1 : i)}
                            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', color: isOpen ? '#fff' : '#111827' }}
                          >
                            <span style={{ fontWeight: 700, fontSize: 15 }}>Day {day.day} : {day.title}</span>
                            <div style={{ width: 32, height: 32, borderRadius: '50%', background: isOpen ? 'rgba(255,255,255,0.2)' : '#fff', border: isOpen ? 'none' : '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              {isOpen ? <ChevronUp size={18} color="#fff" /> : <ChevronDown size={18} color="#9ca3af" />}
                            </div>
                          </button>
                          
                          {isOpen && (
                            <div style={{ padding: '0 24px 24px', color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 1.6 }}>
                              <div style={{ background: '#f9fafb', borderRadius: 12, padding: 20, color: '#4b5563' }}>
                                <p style={{ margin: '0 0 16px' }}>{day.description}</p>
                                
                                {acts.length > 0 && (
                                  <ul style={{ margin: 0, padding: '0 0 0 20px' }}>
                                    {acts.map((act, ai) => <li key={ai} style={{ marginBottom: 4 }}>{act}</li>)}
                                  </ul>
                                )}
                                
                                {day.hotel && (
                                  <div style={{ marginTop: 16, padding: '12px 16px', background: '#fff', borderRadius: 8, border: '1px solid #f3f4f6', display: 'flex', gap: 10, alignItems: 'center' }}>
                                    <span style={{ fontSize: 18 }}>🛏</span>
                                    <span>Overnight at {day.hotel}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                    {!pkg.itinerary?.length && <p style={{ color: '#6b7280' }}>No itinerary available.</p>}
                  </div>
                </div>
              )}

              {activeTab === 'inclusion' && (
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 28, color: '#111827', margin: '0 0 24px' }}>Inclusions</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {pkg.inclusions?.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#4b5563' }}>
                        <span style={{ color: '#22c55e', fontWeight: 700 }}>✓</span> {item}
                      </li>
                    ))}
                    {!pkg.inclusions?.length && <li style={{ fontSize: 15, color: '#9ca3af' }}>No inclusions specified</li>}
                  </ul>
                </div>
              )}

              {activeTab === 'exclusion' && (
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 28, color: '#111827', margin: '0 0 24px' }}>Exclusions</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {pkg.exclusions?.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#4b5563' }}>
                        <span style={{ color: '#3b82f6', fontWeight: 700 }}>✕</span> {item}
                      </li>
                    ))}
                    {!pkg.exclusions?.length && <li style={{ fontSize: 15, color: '#9ca3af' }}>No exclusions specified</li>}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div>
            <div style={{ position: 'sticky', top: 100, background: '#fff', borderRadius: 24, padding: 32, boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid #f3f4f6' }}>
              {pkg.itineraryPdf && (
                <a
                  href={pkg.itineraryPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '14px 0', borderRadius: 12, background: '#f8fafc', color: '#334155', fontWeight: 700, fontSize: 15, textDecoration: 'none', marginBottom: 24, border: '1px solid #e2e8f0', transition: 'all 0.2s' }}
                >
                  <Download size={18} /> Download Itinerary PDF
                </a>
              )}
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 24, color: '#111827', margin: '0 0 24px' }}>Tour Booking</h3>
              
              <form onSubmit={submitEnquiry}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <input
                    required
                    value={enquiry.name}
                    onChange={e => setEnquiry(q => ({ ...q, name: e.target.value }))}
                    placeholder="Name"
                    style={INPUT}
                  />
                  
                  <input
                    type="email"
                    value={enquiry.email}
                    onChange={e => setEnquiry(q => ({ ...q, email: e.target.value }))}
                    placeholder="Email"
                    style={INPUT}
                  />
                  
                  <input
                    required
                    type="tel"
                    value={enquiry.phone}
                    onChange={e => setEnquiry(q => ({ ...q, phone: e.target.value }))}
                    placeholder="Phone"
                    style={INPUT}
                  />
                  
                  <div style={{ position: 'relative' }}>
                    <input
                      type="date"
                      value={enquiry.date}
                      onChange={e => setEnquiry(q => ({ ...q, date: e.target.value }))}
                      style={{ ...INPUT, color: enquiry.date ? '#111' : 'transparent' }}
                    />
                    {!enquiry.date && (
                      <span style={{ position: 'absolute', left: 16, top: 15, color: '#9ca3af', fontSize: 14, pointerEvents: 'none' }}>dd/mm/yyyy</span>
                    )}
                    {!enquiry.date && (
                      <svg style={{ position: 'absolute', right: 16, top: 15, color: '#9ca3af', pointerEvents: 'none' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    )}
                  </div>
                  
                  <textarea
                    rows={4}
                    value={enquiry.message}
                    onChange={e => setEnquiry(q => ({ ...q, message: e.target.value }))}
                    placeholder="Additional information"
                    style={{ ...INPUT, resize: 'vertical' }}
                  />
                  
                  <button
                    type="submit"
                    disabled={enquiryStatus === 'sending'}
                    style={{
                      marginTop: 8, width: '100%', padding: '16px 0', borderRadius: 12, border: 'none',
                      background: enquiryStatus === 'sending' ? '#93c5fd' : '#3b82f6',
                      color: '#fff', fontWeight: 700, fontSize: 16, cursor: enquiryStatus === 'sending' ? 'not-allowed' : 'pointer',
                      transition: 'background 0.2s'
                    }}
                  >
                    {enquiryStatus === 'sending' ? 'Sending...' : enquiryStatus === 'sent' ? 'Sent Successfully!' : 'Book Now'}
                  </button>
                  
                  {enquiryStatus === 'error' && (
                    <p style={{ color: '#3b82f6', fontSize: 13, textAlign: 'center', margin: '4px 0 0' }}>Something went wrong. Please try again.</p>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in ${pkg?.title}`)}`} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: 30, right: 30, width: 60, height: 60, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(37,211,102,0.4)', zIndex: 50, transition: 'transform 0.2s' }}>
        <WhatsAppIcon />
      </a>
    </main>
  )
}
