'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => {
        setTestimonials(Array.isArray(data) ? data : []);
        setLoaded(true);
      })
      .catch(err => {
        console.error(err);
        setLoaded(true);
      });
  }, []);

  const scrollLeft = () => {
    const container = document.getElementById('testimonial-carousel');
    if (container) container.scrollBy({ left: -340, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('testimonial-carousel');
    if (container) container.scrollBy({ left: 340, behavior: 'smooth' });
  };

  if (loaded && testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-white font-body relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#1B61FF] font-cursive text-3xl mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            What our travelers say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Real stories from the people who trusted us with their journeys.
          </p>
        </div>

        {!loaded ? (
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3].map(i => (
              <div key={i} className="min-w-[300px] sm:min-w-[360px] h-56 bg-gray-100 animate-pulse rounded-[28px] shrink-0"></div>
            ))}
          </div>
        ) : (
          <div className="relative group">
            <button onClick={scrollLeft} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-gray-600 hover:text-[#1B61FF] transition-colors md:opacity-0 group-hover:opacity-100 hidden md:block">
              <ChevronLeft size={24} />
            </button>

            <div id="testimonial-carousel" className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {testimonials.map((t) => (
                <div key={t.id} className="min-w-[300px] sm:min-w-[360px] w-full max-w-[380px] snap-center shrink-0">
                  <div className="h-full bg-gray-50 border border-gray-100 rounded-[28px] p-8 shadow-sm flex flex-col">
                    <Quote className="text-[#1B61FF] mb-4" size={28} />
                    <p className="text-gray-700 text-base leading-relaxed flex-1 mb-6">
                      &quot;{t.text}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0 flex items-center justify-center text-gray-500 font-bold">
                        {t.image_url
                          ? <img src={t.image_url} alt={t.name} className="w-full h-full object-cover" />
                          : (t.name?.[0]?.toUpperCase() || '?')}
                      </div>
                      <span className="font-heading font-bold text-gray-900">{t.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={scrollRight} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-gray-600 hover:text-[#1B61FF] transition-colors md:opacity-0 group-hover:opacity-100 hidden md:block">
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
}
