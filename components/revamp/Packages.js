import { Phone } from 'lucide-react';

const packages = [
  {
    id: 1,
    country: 'Georgia',
    duration: '5 Days & 4 Nights',
    title: 'Georgia: Tbilisi · Mtskheta · Ananuri',
    subBadge: '3N Tbilisi · 1N Gudauri',
    oldPrice: '₹45,000',
    saveAmount: 'SAVE ₹5,001',
    newPrice: '₹39,999',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    country: 'Azerbaijan',
    duration: '5 Days & 4 Nights',
    title: 'Azerbaijan: Baku · Gobustan · Gabala',
    subBadge: '3N Baku · 1N Gabala',
    oldPrice: '₹52,000',
    saveAmount: 'SAVE ₹12,000',
    newPrice: '₹40,000',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    country: 'Thailand',
    duration: '5 Days & 4 Nights',
    title: 'Thailand: Bangkok · Pattaya Escape',
    subBadge: '2N Pattaya · 2N Bangkok',
    oldPrice: '₹35,000',
    saveAmount: 'SAVE ₹5,001',
    newPrice: '₹29,999',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1038&q=80',
  },
  {
    id: 4,
    country: 'Kazakhstan',
    duration: '5 Days & 4 Nights',
    title: 'Almaty: Charyn Canyon · Shymbulak',
    subBadge: '4N Almaty',
    oldPrice: '₹40,000',
    saveAmount: 'SAVE ₹5,500',
    newPrice: '₹34,500',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 5,
    country: 'Uzbekistan',
    duration: '6 Days & 5 Nights',
    title: 'Uzbekistan: Tashkent · Samarkand',
    subBadge: '3N Tashkent · 2N Samarkand',
    oldPrice: '₹48,000',
    saveAmount: 'SAVE ₹7,000',
    newPrice: '₹41,000',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 6,
    country: 'Sri Lanka',
    duration: '6 Days & 5 Nights',
    title: 'Sri Lanka: Colombo · Kandy · Bentota',
    subBadge: '2N Kandy · 2N Bentota · 1N Colombo',
    oldPrice: '₹38,000',
    saveAmount: 'SAVE ₹5,500',
    newPrice: '₹32,500',
    image: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 7,
    country: 'Malaysia',
    duration: '5 Days & 4 Nights',
    title: 'Malaysia: Kuala Lumpur · Genting Highlands',
    subBadge: '3N Kuala Lumpur · 1N Genting',
    oldPrice: '₹42,000',
    saveAmount: 'SAVE ₹6,000',
    newPrice: '₹36,000',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80',
  },
  {
    id: 8,
    country: 'Russia',
    duration: '7 Days & 6 Nights',
    title: 'Russia: Moscow · St. Petersburg Explorer',
    subBadge: '3N Moscow · 3N St. Petersburg',
    oldPrice: '₹85,000',
    saveAmount: 'SAVE ₹9,001',
    newPrice: '₹75,999',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 9,
    country: 'Vietnam',
    duration: '6 Days & 5 Nights',
    title: 'Vietnam: Hanoi · Halong Bay · Ninh Binh',
    subBadge: '3N Hanoi · 1N Halong Cruise · 1N Ninh Binh',
    oldPrice: '₹45,000',
    saveAmount: 'SAVE ₹6,500',
    newPrice: '₹38,500',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 10,
    country: 'Turkey',
    duration: '7 Days & 6 Nights',
    title: 'Turkey: Istanbul · Cappadocia Magic',
    subBadge: '3N Istanbul · 3N Cappadocia',
    oldPrice: '₹75,000',
    saveAmount: 'SAVE ₹6,001',
    newPrice: '₹68,999',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 11,
    country: 'Europe',
    duration: '8 Days & 7 Nights',
    title: 'Europe: Paris · Brussels · Amsterdam',
    subBadge: '3N Paris · 1N Brussels · 3N Amsterdam',
    oldPrice: '₹1,20,000',
    saveAmount: 'SAVE ₹15,000',
    newPrice: '₹1,05,000',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 12,
    country: 'Japan',
    duration: '7 Days & 6 Nights',
    title: 'Japan: Tokyo · Kyoto · Osaka Highlights',
    subBadge: '3N Tokyo · 1N Kyoto · 2N Osaka',
    oldPrice: '₹1,10,000',
    saveAmount: 'SAVE ₹12,000',
    newPrice: '₹98,000',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 13,
    country: 'Europe',
    duration: '9 Days & 8 Nights',
    title: 'Europe: Rome · Florence · Venice Tour',
    subBadge: '3N Rome · 2N Florence · 3N Venice',
    oldPrice: '₹1,50,000',
    saveAmount: 'SAVE ₹15,000',
    newPrice: '₹1,35,000',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 14,
    country: 'Kenya',
    duration: '6 Days & 5 Nights',
    title: 'Kenya: Masai Mara Safari Expedition',
    subBadge: '3N Masai Mara · 1N Nakuru · 1N Nairobi',
    oldPrice: '₹95,000',
    saveAmount: 'SAVE ₹10,000',
    newPrice: '₹85,000',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80',
  }
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 bg-gray-50 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#E34836] font-cursive text-3xl mb-3">
            Explore the World
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Awesome Trip With Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Explore our handpicked international holiday packages designed to give you the ultimate travel experience. Book your next adventure today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="h-full bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group">
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden rounded-t-[28px]">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-[#E7F7FA] text-[#0E7A8E] text-[13px] font-bold px-4 py-1.5 rounded-full shadow-sm">
                  {pkg.country}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-gray-500 text-sm font-medium mb-1 block">
                    {pkg.duration}
                  </span>
                  
                  <h3 className="text-[17px] font-heading font-bold text-[#0B1E30] leading-snug tracking-tight mb-2.5 min-h-[48px] line-clamp-2 group-hover:text-[#E34836] transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="mb-4">
                    <span className="bg-[#F1F3F5] text-[#5A6E7F] text-xs font-semibold px-3 py-1.5 rounded-full inline-block">
                      {pkg.subBadge}
                    </span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex flex-col mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#8C9BA5] text-sm line-through font-medium">
                        {pkg.oldPrice}
                      </span>
                      <span className="bg-[#E7F6EC] text-[#22C55E] text-[11px] font-bold px-2 py-0.5 rounded-md">
                        {pkg.saveAmount}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#8C9BA5] text-xs">Starting from</span>
                      <span className="text-[#0B1E30] font-heading font-bold text-2xl">
                        {pkg.newPrice}
                      </span>
                      <span className="text-[#8C9BA5] text-[10px] font-medium">/Person</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a 
                    href="tel:+916238418293" 
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 shrink-0"
                  >
                    <Phone size={18} />
                  </a>
                  <a
                    href={`https://wa.me/916238418293?text=Hi%20Travel%20Diaries%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow bg-[#E34836] text-white hover:bg-red-700 font-bold py-3.5 rounded-full text-[15px] text-center transition-all duration-300 shadow-md shadow-red-500/10 hover:shadow-red-500/20"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Packages;
