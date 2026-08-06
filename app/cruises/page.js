'use client';
import Navbar from '@/components/revamp/Navbar';
import Footer from '@/components/revamp/Footer';
import { Ship, Clock, DollarSign, ArrowRight, MessageCircle } from 'lucide-react';

export default function CruisesPage() {
  const cruises = [
    {
      id: 1,
      title: 'Singapore & Malaysia Cruise',
      ship: 'Spectrum of the Seas (Royal Caribbean)',
      duration: '4 Nights / 5 Days',
      route: 'Singapore - Penang - Singapore',
      price: '38,500 INR',
      oldPrice: '45,000 INR',
      image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=800&q=80',
      highlights: ['FlowRider surf simulator', 'RipCord by iFly skydiving simulator', 'North Star viewing capsule', '20+ dining venues'],
    },
    {
      id: 2,
      title: 'Mediterranean Escape Voyage',
      ship: 'MSC World Europa (MSC Cruises)',
      duration: '7 Nights / 8 Days',
      route: 'Barcelona - Marseille - Genoa - Naples - Messina - Valletta - Barcelona',
      price: '78,999 INR',
      oldPrice: '90,000 INR',
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80',
      highlights: ['World Promenade with ocean views', 'Futuristic architecture', '13 dining venues', 'Massive aquapark'],
    },
    {
      id: 3,
      title: 'Alaskan Glacier Explorer',
      ship: 'Discovery Princess (Princess Cruises)',
      duration: '7 Nights / 8 Days',
      route: 'Seattle - Juneau - Skagway - Glacier Bay - Ketchikan - Victoria - Seattle',
      price: '92,000 INR',
      oldPrice: '1,05,000 INR',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Scenic glacier cruising in Glacier Bay', 'Sanctuary adults-only retreat', 'Princess Live! entertainment', 'Chef’s Table Lumiere'],
    },
    {
      id: 4,
      title: 'Bahamas & Perfect Day Getaway',
      ship: 'Utopia of the Seas (Royal Caribbean)',
      duration: '3 Nights / 4 Days',
      route: 'Port Canaveral - Nassau - Perfect Day at CocoCay - Port Canaveral',
      price: '48,000 INR',
      oldPrice: '55,000 INR',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
      highlights: ['Exclusive private island CocoCay access', 'Thrill Waterpark with 13 waterslides', '40+ restaurants & bars', 'Central Park neighborhood'],
    },
    {
      id: 5,
      title: 'Caribbean Island Paradise',
      ship: 'Norwegian Joy (Norwegian Cruise Line)',
      duration: '7 Nights / 8 Days',
      route: 'Miami - Roatan - Harvest Caye - Costa Maya - Cozumel - Miami',
      price: '65,999 INR',
      oldPrice: '75,000 INR',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
      highlights: ['Go-kart race track at sea', 'Galaxy Pavilion virtual reality arena', 'Broadway-style shows', 'Exclusive beach at Harvest Caye'],
    },
    {
      id: 6,
      title: 'Antarctica Polar Expedition',
      ship: 'MS Fridtjof Nansen (Hurtigruten)',
      duration: '10 Nights / 11 Days',
      route: 'Ushuaia - Drake Passage - Antarctic Peninsula - Ushuaia',
      price: '4,50,000 INR',
      oldPrice: '5,10,000 INR',
      image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=800&q=80',
      highlights: ['Polar explorer science center', 'Daily landings via rigid inflatable boats', 'Expert expedition lectures', 'Environmentally hybrid engines'],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-body">
      <Navbar />

      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=2070&q=80"
            alt="Cruises Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-[#E34836] font-heading italic text-xl md:text-2xl mb-4">
            Sail the Oceans
          </p>
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Luxury Cruise Packages
          </h1>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Experience the ultimate holiday with cruise liners that bring luxury, entertainment, and jaw-dropping ocean views directly to your vacation.
          </p>
        </div>
      </section>

      {/* Cruises Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#E34836] font-semibold text-sm tracking-widest uppercase mb-3">
            Set Sail
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900">
            Featured Cruises
          </h2>
          <div className="w-16 h-1 bg-[#E34836] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cruises.map((cruise) => (
            <div key={cruise.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-lg transition-all duration-300 h-full">
              <div>
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cruise.image}
                    alt={cruise.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {cruise.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[#E34836] text-[11px] font-bold uppercase tracking-wider block mb-1">
                    {cruise.ship}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#E34836] transition-colors">
                    {cruise.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-4">
                    <Clock size={14} className="shrink-0 text-gray-400" />
                    <span>{cruise.route}</span>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-1.5 border-t border-gray-100 pt-4 mb-2">
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block mb-2">Highlights</span>
                    {cruise.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-[#E34836] text-sm leading-none">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Block */}
              <div className="p-6 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] line-through">Was {cruise.oldPrice}</span>
                  <span className="text-gray-900 font-heading font-bold text-lg">{cruise.price}</span>
                </div>
                <a
                  href={`https://wa.me/916238418293?text=Hi%20Travel%20Diaries%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(cruise.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E34836] text-white hover:bg-red-700 font-semibold px-5 py-2.5 rounded-full text-xs transition-colors shadow-sm flex items-center gap-1"
                >
                  Book Now
                  <ArrowRight size={12} />
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Custom Integration */}
      <section className="bg-white border-t border-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-2xl text-[#E34836] mb-6">
            <Ship size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Looking for a Customized Cruise Itinerary?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Tell us about your holiday plans and ship preferences. Our team will design a custom itinerary with cabin bookings, shore excursions, and transfers.
          </p>
          <a
            href="https://wa.me/916238418293?text=Hi%20Travel%20Diaries%2C%20I%20want%20to%20plan%20a%20customized%20cruise%20holiday."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-md hover:shadow-lg text-sm"
          >
            <MessageCircle size={20} className="fill-current" />
            Plan Custom Cruise via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
