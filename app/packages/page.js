'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PackageCard from '@/components/PackageCard'
import { usePackages } from '@/hooks/usePackages'
import { usePhone } from '@/hooks/useSettings'

export default function PackagesPage() {
  const [activeDest, setActiveDest] = useState('all')
  const [destinations, setDestinations] = useState([])
  const { packages, loaded: pkgsLoaded } = usePackages()
  const phone = usePhone()

  useEffect(() => {
    fetch('/api/destinations')
      .then(r => r.ok ? r.json() : [])
      .then(setDestinations)
      .catch(() => {})
  }, [])

  const shown = packages.filter(p => {
    return activeDest === 'all' || p.destination === activeDest
  })

  const destCounts = packages.reduce((acc, pkg) => {
    if (pkg.category !== 'cruise') {
      acc[pkg.destination] = (acc[pkg.destination] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <main style={{ minHeight: '100vh', background: '#fff', paddingTop: 80 }}>
      <Navbar />
      
{/* ── Packages ── */}
      <section id="packages" style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7e5233', marginBottom: 10 }}>
              Curated Experiences
            </p>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#111', marginBottom: 12 }}>
              Our <span style={{ color: '#7e5233' }}>Packages</span>
            </h2>
            <p style={{ color: '#9ca3af', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.6 }}>
              Every package includes a day-wise itinerary, accommodation & transfers.
            </p>

            {/* Category dropdown */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: 300 }}>
                <select
                  value={activeDest}
                  onChange={(e) => setActiveDest(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    borderRadius: 999,
                    border: '2px solid #f5f0e8',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#111',
                    background: '#fff',
                    cursor: 'pointer',
                    appearance: 'none',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#7e5233'}
                  onBlur={(e) => e.target.style.borderColor = '#f5f0e8'}
                >
                  <option value="all">All Destinations ({packages.filter(p => p.category !== 'cruise').length})</option>
                  {destinations.map(d => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({destCounts[d.name] || 0})
                    </option>
                  ))}
                </select>
                <div style={{
                  position: 'absolute',
                  right: 20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  color: '#7e5233'
                }}>
                  ▼
                </div>
              </div>
            </div>
          </div>

          {!pkgsLoaded ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#9ca3af' }}>
              <div style={{ width: 36, height: 36, border: '3px solid #fbf8f1', borderTop: '3px solid #7e5233', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 12px' }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
              <p style={{ fontSize: 14 }}>Loading packages...</p>
            </div>
          ) : shown.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#9ca3af' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🗺️</div>
              <p>No packages available for this selection.</p>
              <button onClick={() => { setActiveDest('all') }} style={{ marginTop: 12, padding: '8px 20px', borderRadius: 999, border: 'none', background: '#f5f0e8', color: '#555', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
              {shown.map(pkg => <PackageCard key={pkg.id} pkg={pkg} phone={phone} />)}
            </div>
          )}
        </div>
      </section>

      

      <Footer />
    </main>
  )
}
