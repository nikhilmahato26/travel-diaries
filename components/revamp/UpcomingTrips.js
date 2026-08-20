'use client'
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { usePackages } from '@/hooks/usePackages';

const UpcomingTrips = () => {
  const { packages, loaded } = usePackages();

  const fmt = (n) => 'OMR ' + Number(n || 0).toLocaleString('en-IN');

  const displayPackages = packages.filter(p => p.category === 'upcoming').slice(0, 4);

  return (
    <section id="upcoming-trips" className="py-24 bg-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#1B61FF] font-cursive text-3xl mb-3">
            Plan Ahead
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Upcoming Trips
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Join our upcoming group departures and explore the world with like-minded travelers.
          </p>
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
        ) : displayPackages.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No packages available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayPackages.map((pkg) => {
              const saveAmount = Number(pkg.originalPrice || 0) - Number(pkg.salePrice || 0);

              return (
                <div key={pkg.id} className="h-full bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group">
                  {/* Image Container */}
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
                    <div className="flex items-center gap-3">
                      <a 
                        href="tel:+96895950141" 
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 shrink-0"
                      >
                        <Phone size={18} />
                      </a>
                      <Link
                        href={`/packages/${pkg.id}`}
                        className="flex-grow bg-[#1B61FF] text-white hover:bg-blue-700 font-bold py-3.5 rounded-full text-[15px] text-center transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        


      </div>
    </section>
  );
};

export default UpcomingTrips;
