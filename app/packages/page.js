'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/revamp/Navbar'
import Footer from '@/components/revamp/Footer'
import { Phone, Download } from 'lucide-react'
import { usePackages } from '@/hooks/usePackages'

function fmt(n) { return 'OMR ' + Number(n || 0).toLocaleString('en-IN') }

export default function PackagesPage() {
  const [activeDest, setActiveDest] = useState('all')
  const [destinations, setDestinations] = useState([])
  const { packages, loaded } = usePackages()

  useEffect(() => {
    fetch('/api/destinations')
      .then(r => r.ok ? r.json() : [])
      .then(setDestinations)
      .catch(() => {})
  }, [])

  const nonCruisePackages = packages.filter(p => p.category !== 'cruise')
  const destCounts = nonCruisePackages.reduce((acc, pkg) => {
    acc[pkg.destination] = (acc[pkg.destination] || 0) + 1
    return acc
  }, {})

  const shown = activeDest === 'all'
    ? nonCruisePackages
    : nonCruisePackages.filter(p => p.destination === activeDest)

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-body">
      <Navbar />

      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[360px] w-full flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Travel Packages Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-[#1B61FF] font-cursive text-3xl md:text-4xl mb-4">
            Curated Experiences
          </p>
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Our Packages
          </h1>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Every package includes a day-wise itinerary, accommodation and transfers, handcrafted for a hassle-free holiday.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-center mb-14">
          <div className="relative w-full max-w-[300px]">
            <select
              value={activeDest}
              onChange={(e) => setActiveDest(e.target.value)}
              className="w-full px-5 py-3 rounded-full border-2 border-gray-200 text-[15px] font-semibold text-gray-900 bg-white cursor-pointer appearance-none outline-none focus:border-[#1B61FF] transition-colors"
            >
              <option value="all">All Destinations ({nonCruisePackages.length})</option>
              {destinations.map(d => (
                <option key={d.id} value={d.name}>
                  {d.name} ({destCounts[d.name] || 0})
                </option>
              ))}
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#1B61FF]">
              ▼
            </div>
          </div>
        </div>

        {!loaded ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[420px] bg-white rounded-[28px] overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                <div className="h-60 bg-gray-200 animate-pulse w-full"></div>
                <div className="p-6 flex-grow flex flex-col gap-3">
                  <div className="h-4 bg-gray-200 animate-pulse w-1/3 rounded"></div>
                  <div className="h-6 bg-gray-200 animate-pulse w-full rounded"></div>
                  <div className="h-6 bg-gray-200 animate-pulse w-2/3 rounded"></div>
                  <div className="mt-auto flex gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse shrink-0"></div>
                    <div className="flex-grow h-12 bg-gray-200 animate-pulse rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : shown.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">No packages available for this selection.</p>
            <button
              onClick={() => setActiveDest('all')}
              className="px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shown.map((pkg) => {
              const saveAmount = Number(pkg.originalPrice || 0) - Number(pkg.salePrice || 0)

              return (
                <div key={pkg.id} className="h-full bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group">
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden rounded-t-[28px]">
                    <img
                      src={pkg.heroImage || pkg.image || 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=700&q=80'}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 bg-[#E7F7FA] text-[#0E7A8E] text-[13px] font-bold px-4 py-1.5 rounded-full shadow-sm">
                      {pkg.destination || 'Package'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-gray-500 text-sm font-medium mb-1 block">
                        {pkg.duration || 'Flexible Duration'}
                      </span>

                      <h3 className="text-[17px] font-heading font-bold text-[#0B1E30] leading-snug tracking-tight mb-2.5 min-h-[48px] line-clamp-2 group-hover:text-[#1B61FF] transition-colors">
                        {pkg.title}
                      </h3>

                      <div className="mb-4">
                        <span className="bg-[#F1F3F5] text-[#5A6E7F] text-xs font-semibold px-3 py-1.5 rounded-full inline-block line-clamp-1">
                          {pkg.subtitle || pkg.destination || 'Featured'}
                        </span>
                      </div>

                      {/* Pricing */}
                      <div className="flex flex-col mb-6">
                        <div className="flex items-center gap-2 mb-1">
                          {saveAmount > 0 && (
                            <>
                              <span className="text-[#8C9BA5] text-sm line-through font-medium">
                                {fmt(pkg.originalPrice)}
                              </span>
                              <span className="bg-[#E7F6EC] text-[#22C55E] text-[11px] font-bold px-2 py-0.5 rounded-md">
                                SAVE {fmt(saveAmount)}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[#8C9BA5] text-xs">Starting from</span>
                          <span className="text-[#0B1E30] font-heading font-bold text-2xl">
                            {fmt(pkg.salePrice)}
                          </span>
                          <span className="text-[#8C9BA5] text-[10px] font-medium">/Person</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2.5">
                      {pkg.itineraryPdf && (
                        <a
                          href={pkg.itineraryPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#F3F4F6] text-gray-700 hover:bg-gray-200 hover:text-gray-900 font-bold py-2.5 rounded-full text-[14px] flex items-center justify-center gap-2 transition-all duration-300 border border-gray-200"
                        >
                          <Download size={16} /> Download Itinerary
                        </a>
                      )}
                      <div className="flex items-center gap-3">
                        <a
                          href="tel:+96895950141"
                          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 shrink-0"
                        >
                          <Phone size={18} />
                        </a>
                        <Link
                          href={`/packages/${pkg.id}`}
                          className="flex-grow bg-[#1B61FF] text-white hover:bg-blue-700 font-bold py-3 rounded-full text-[15px] text-center transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
