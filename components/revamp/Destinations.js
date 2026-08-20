'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch('/api/destinations');
        if (res.ok) {
          const data = await res.json();
          setDestinations(data);
        }
      } catch (error) {
        console.error('Failed to fetch destinations', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <section id="destinations" className="py-24 bg-white font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-10 h-10 border-4 border-red-200 border-t-[#1B61FF] rounded-full animate-spin mx-auto"></div>
        </div>
      </section>
    );
  }

  if (destinations.length === 0) return null;

  return (
    <section id="destinations" className="py-24 bg-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-[#1B61FF] font-cursive text-3xl mb-3">
              Top Destinations
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Where We Take You
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-gray-500 text-sm max-w-sm">
              Discover breathtaking experiences around the globe. Your next adventure is just a click away.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {destinations.map((dest, index) => {
            // Apply different grid classes based on index to create a masonry-like layout
            let gridClass = 'col-span-1 md:col-span-1';
            if (index === 0) gridClass = 'col-span-2 md:col-span-2 md:row-span-2';
            else if (index === 1) gridClass = 'col-span-2 md:col-span-2';
            else if (index === 2) gridClass = 'col-span-1 md:col-span-1';

            return (
              <Link 
                href={`/packages?category=${encodeURIComponent(dest.name)}`} 
                key={dest.id} 
                className={`${gridClass} relative rounded-2xl overflow-hidden group block`}
              >
                <img 
                  src={dest.image_url || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800'} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-heading font-bold text-2xl mb-1 flex items-center gap-2">
                      {dest.name} {dest.emoji}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{dest.description}</p>
                  </div>
                  <div className="bg-[#1B61FF]/90 hover:bg-[#1B61FF] text-white p-2 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shrink-0 ml-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Destinations;
