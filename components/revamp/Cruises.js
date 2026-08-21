'use client'
import { Phone, Ship } from 'lucide-react';
import Link from 'next/link';
import { usePackages } from '@/hooks/usePackages';

const Cruises = () => {
  const { packages, loaded } = usePackages();

  const fmt = (n) => 'OMR ' + Number(n || 0).toLocaleString('en-IN');

  const cruisePackages = packages.filter(pkg => pkg.category === 'cruise').slice(0, 8);

  return (
    <section id="cruises" className="py-24 bg-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#1B61FF] font-cursive text-3xl mb-3">
            Set Sail
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 flex items-center justify-center gap-4">
            Luxury Cruises <Ship size={40} className="text-[#1B61FF]" />
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Experience the ocean like never before. Discover our premium cruise packages tailored for unforgettable memories.
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
                </div>
              </div>
            ))}
          </div>
        ) : cruisePackages.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No cruise packages available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cruisePackages.map((pkg) => {
              const saveAmount = Number(pkg.originalPrice || 0) - Number(pkg.salePrice || 0);

              return (
                <div key={pkg.id} className="h-full bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group">
                  <div className="relative h-60 w-full overflow-hidden rounded-t-[28px]">
                    <img 
                      src={pkg.heroImage || pkg.image || 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=700&q=80'} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 bg-[#E7F7FA] text-[#0E7A8E] text-[13px] font-bold px-4 py-1.5 rounded-full shadow-sm">
                      {pkg.destination || 'Cruise'}
                    </div>
                  </div>
                  
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
                          {pkg.subtitle || pkg.destination || 'Featured Cruise'}
                        </span>
                      </div>
                      
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

                    <div className="flex flex-col gap-2.5">
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
                          View Cruise Details
                        </Link>
                      </div>
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

export default Cruises;
