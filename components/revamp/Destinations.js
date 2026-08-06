const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    duration: '4 Days 3 Nights',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1038&q=80',
    gridClass: 'col-span-2 row-span-2 md:col-span-1 md:row-span-2', // Tall on desktop
  },
  {
    id: 2,
    name: 'Thailand',
    duration: '5 Days 4 Nights',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    gridClass: 'col-span-2 md:col-span-2', // Wide
  },
  {
    id: 3,
    name: 'Singapore',
    duration: '3 Days 2 Nights',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1952&q=80',
    gridClass: 'col-span-1 md:col-span-1',
  },
  {
    id: 4,
    name: 'Vietnam',
    duration: '6 Days 5 Nights',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    gridClass: 'col-span-1 md:col-span-1',
  },
  {
    id: 5,
    name: 'Hong Kong & Macau',
    duration: '4 Days 3 Nights',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    gridClass: 'col-span-1 md:col-span-1',
  },
  {
    id: 6,
    name: 'Dubai',
    duration: '5 Days 4 Nights',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    gridClass: 'col-span-1 md:col-span-1',
  },
  {
    id: 7,
    name: 'Sri Lanka',
    duration: '7 Days 6 Nights',
    image: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-4.0.3&auto=format&fit=crop&w=2161&q=80',
    gridClass: 'col-span-1 md:col-span-1',
  },
  {
    id: 8,
    name: 'Maldives',
    duration: '4 Days 3 Nights',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80',
    gridClass: 'col-span-1 md:col-span-1',
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-[#E34836] font-semibold text-sm tracking-widest uppercase mb-3">
              Top Destinations
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Where We Take You
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-gray-500 text-sm max-w-sm">
              Discover breathtaking destinations around the globe. Your next adventure is just a click away.
            </p>
          </div>
        </div>

        {/* Custom Grid for Masonry Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Tall Image (Left) */}
          <div className="col-span-2 md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group">
            <img src={destinations[0].image} alt={destinations[0].name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <h3 className="text-white font-heading font-bold text-xl mb-1">{destinations[0].name}</h3>
                <p className="text-gray-300 text-sm">{destinations[0].duration}</p>
              </div>
              <button className="bg-[#E34836]/90 hover:bg-[#E34836] text-white p-2 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          {/* Wide Image (Top Right Area) */}
          <div className="col-span-2 md:col-span-3 relative rounded-2xl overflow-hidden group">
            <img src={destinations[1].image} alt={destinations[1].name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <h3 className="text-white font-heading font-bold text-xl mb-1">{destinations[1].name}</h3>
                <p className="text-gray-300 text-sm">{destinations[1].duration}</p>
              </div>
              <button className="bg-[#E34836]/90 hover:bg-[#E34836] text-white p-2 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          {/* Small Image (Middle Right 1) */}
          <div className="col-span-1 md:col-span-1 relative rounded-2xl overflow-hidden group">
            <img src={destinations[2].image} alt={destinations[2].name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <h3 className="text-white font-heading font-bold text-lg mb-0.5">{destinations[2].name}</h3>
                <p className="text-gray-300 text-xs">{destinations[2].duration}</p>
              </div>
              <button className="bg-[#E34836]/90 hover:bg-[#E34836] text-white p-1.5 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          {/* Small Image (Middle Right 2) */}
          <div className="col-span-1 md:col-span-2 relative rounded-2xl overflow-hidden group">
            <img src={destinations[3].image} alt={destinations[3].name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <h3 className="text-white font-heading font-bold text-lg mb-0.5">{destinations[3].name}</h3>
                <p className="text-gray-300 text-xs">{destinations[3].duration}</p>
              </div>
              <button className="bg-[#E34836]/90 hover:bg-[#E34836] text-white p-1.5 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          {/* Bottom Row Images */}
          {destinations.slice(4).map((dest) => (
             <div key={dest.id} className="col-span-1 md:col-span-1 relative rounded-2xl overflow-hidden group">
               <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
               <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                 <div>
                   <h3 className="text-white font-heading font-bold text-lg mb-0.5">{dest.name}</h3>
                   <p className="text-gray-300 text-xs">{dest.duration}</p>
                 </div>
                 <button className="bg-[#E34836]/90 hover:bg-[#E34836] text-white p-1.5 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                 </button>
               </div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;
