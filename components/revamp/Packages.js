import { ArrowUpRight } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Gorgeous Georgia',
    location: 'Holiday Package',
    oldPrice: '45,000 INR',
    newPrice: '39,999 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    title: 'Awesome Azerbaijan',
    location: 'Holiday Package',
    oldPrice: '50,000 INR',
    newPrice: '42,999 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1527068596651-b5507e1e7e48?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    title: 'Crazy Thailand',
    location: 'Holiday Package',
    oldPrice: '35,000 INR',
    newPrice: '29,999 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1038&q=80',
  },
  {
    id: 4,
    title: 'Aspiring Almaty',
    location: 'Holiday Package',
    oldPrice: '40,000 INR',
    newPrice: '34,500 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 5,
    title: 'Unique Uzbek',
    location: 'Holiday Package',
    oldPrice: '48,000 INR',
    newPrice: '41,000 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1588693892795-15a0c0dbb7cc?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 6,
    title: 'Shining Srilanka',
    location: 'Holiday Package',
    oldPrice: '38,000 INR',
    newPrice: '32,500 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 7,
    title: 'Marvellous Malaysia',
    location: 'Holiday Package',
    oldPrice: '42,000 INR',
    newPrice: '36,000 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80',
  },
  {
    id: 8,
    title: 'Rising Russia',
    location: 'Holiday Package',
    oldPrice: '85,000 INR',
    newPrice: '75,999 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 9,
    title: 'Vibrant Vietnam',
    location: 'Holiday Package',
    oldPrice: '45,000 INR',
    newPrice: '38,500 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 10,
    title: 'Trending Turkey',
    location: 'Holiday Package',
    oldPrice: '75,000 INR',
    newPrice: '68,999 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 11,
    title: 'Tulips to Eiffel',
    location: 'Holiday Package',
    oldPrice: '120,000 INR',
    newPrice: '105,000 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 12,
    title: 'Jazzy Japan',
    location: 'Holiday Package',
    oldPrice: '110,000 INR',
    newPrice: '98,000 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 13,
    title: 'European Delights',
    location: 'Holiday Package',
    oldPrice: '150,000 INR',
    newPrice: '135,000 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 14,
    title: 'Kudos Kenya',
    location: 'Holiday Package',
    oldPrice: '95,000 INR',
    newPrice: '85,000 INR',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80',
  }
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 bg-gray-50 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#E34836] font-semibold text-sm tracking-widest uppercase mb-3">
            Explore the World
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Awesome Trip With Us
          </h2>
          <p className="text-gray-600 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  {pkg.type}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-[15px] font-heading font-bold text-gray-900 mb-1 leading-tight group-hover:text-[#E34836] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-4">
                    {pkg.location}
                  </p>
                  
                  <div className="flex flex-col gap-0.5 mb-5">
                    <div className="text-gray-400 text-xs line-through">
                      Was: {pkg.oldPrice}
                    </div>
                    <div className="text-gray-900 font-heading font-bold text-lg">
                      {pkg.newPrice}
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full bg-[#E34836] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  View Details
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Packages;
