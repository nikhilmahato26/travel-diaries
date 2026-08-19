'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoTestimonials() {
  const [videos, setVideos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/video-testimonials')
      .then(res => res.json())
      .then(data => {
        setVideos(data || []);
        setLoaded(true);
      })
      .catch(err => {
        console.error(err);
        setLoaded(true);
      });
  }, []);

  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const scrollLeft = () => {
    const container = document.getElementById('video-carousel');
    if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('video-carousel');
    if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  if (loaded && videos.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50 font-body relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#E34836] font-cursive text-3xl mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Hear from our travelers
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Watch these incredible stories from people who chose us for their adventures.
          </p>
        </div>

        {!loaded ? (
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3].map(i => (
              <div key={i} className="min-w-[300px] sm:min-w-[400px] h-64 bg-gray-200 animate-pulse rounded-[28px] shrink-0"></div>
            ))}
          </div>
        ) : (
          <div className="relative group">
            <button onClick={scrollLeft} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-gray-600 hover:text-[#E34836] transition-colors md:opacity-0 group-hover:opacity-100 hidden md:block">
              <ChevronLeft size={24} />
            </button>
            
            <div id="video-carousel" className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {videos.map((vid) => {
                const videoId = getYouTubeId(vid.youtube_url);
                if (!videoId) return null;
                return (
                  <div key={vid.id} className="min-w-[300px] sm:min-w-[400px] w-full snap-center shrink-0">
                    <div className="relative w-full pb-[56.25%] rounded-[28px] overflow-hidden shadow-md border border-gray-100 bg-black">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                );
              })}
            </div>

            <button onClick={scrollRight} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-gray-600 hover:text-[#E34836] transition-colors md:opacity-0 group-hover:opacity-100 hidden md:block">
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
