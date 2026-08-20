'use client';
import { use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/revamp/Navbar';
import Footer from '@/components/revamp/Footer';
import { tours } from '@/data/tours';
import { Clock, MapPin, ArrowLeft } from 'lucide-react';

export default function TourPage({ params }) {
  const { id } = use(params);
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <Link href="/#packages" className="text-[#1B61FF] font-semibold hover:underline">
            Go back to packages
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={16} /> Back to Packages
            </Link>
            <div className="flex gap-4 mb-4 flex-wrap">
              <span className="bg-[#1B61FF] text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
                <MapPin size={14} /> {tour.country}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
                <Clock size={14} /> {tour.duration}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              {tour.title}
            </h1>
            <p className="text-xl text-white/90 font-medium">
              {tour.subBadge}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Itinerary */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Day-wise Itinerary</h2>
            
            <div className="space-y-6">
              {tour.itinerary?.map((day) => (
                <div key={day.day} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E7F7FA] text-[#0E7A8E] flex items-center justify-center font-bold text-lg shrink-0">
                      D{day.day}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pricing & Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
              <div className="p-8 bg-gradient-to-br from-[#1B61FF] to-blue-700 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white/70 line-through text-lg">{tour.oldPrice}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {tour.saveAmount}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-heading font-bold">{tour.newPrice}</span>
                  <span className="text-white/80 text-sm">/person</span>
                </div>
              </div>
              
              <div className="p-8">
                <a
                  href={`https://wa.me/96895950141?text=Hi%20Travel%20Diaries%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(tour.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] text-white text-center font-bold text-lg py-4 rounded-xl hover:bg-[#128C7E] transition-colors mb-4"
                >
                  Book via WhatsApp
                </a>
                <a
                  href="tel:+96895950141"
                  className="block w-full bg-gray-50 text-gray-900 text-center font-bold text-lg py-4 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
