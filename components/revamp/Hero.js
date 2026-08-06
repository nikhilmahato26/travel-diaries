'use client';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  
  const slides = [
    {
      id: 1,
      video: 'https://videos.pexels.com/video-files/34917340/14791039_3840_2160_30fps.mp4',
      poster: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      subtitle: 'BETTER HOLIDAYS ABROAD',
      title: 'Luxury\nCruises',
      description: 'Your perfect Planning for Unforgettable Travel',
      details: 'Experience the magic of the ocean with our curated cruise packages. From pristine waters to vibrant onboard life, discover true relaxation.',
      features: [
        { label: 'Days', value: '7 Nights' },
        { label: 'Price', value: '99,000 INR' },
        { label: 'Type', value: 'International' },
      ],
    },
    {
      id: 2,
      video: 'https://videos.pexels.com/video-files/29868481/12823956_3840_2160_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      subtitle: 'BETTER HOLIDAYS ABROAD',
      title: 'Enchanting\nThailand',
      description: 'Your perfect Planning for Unforgettable Travel',
      details: 'Experience the magic of Thailand with our curated packages. From pristine beaches to vibrant city life, discover the true essence of the Land of Smiles.',
      features: [
        { label: 'Days', value: '4 Nights' },
        { label: 'Price', value: '30,000 INR' },
        { label: 'Cities', value: '3 Cities' },
      ],
    },
    {
      id: 3,
      video: 'https://videos.pexels.com/video-files/17576161/17576161-uhd_3840_2160_30fps.mp4',
      poster: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1038&q=80',
      subtitle: 'BETTER HOLIDAYS ABROAD',
      title: 'Beautiful\nBali',
      description: 'Your perfect Planning for Unforgettable Travel',
      details: 'Experience the magic of Bali with our curated packages. From pristine beaches to vibrant city life, discover the true essence of the Island of Gods.',
      features: [
        { label: 'Days', value: '5 Nights' },
        { label: 'Price', value: '45,000 INR' },
        { label: 'Cities', value: '2 Cities' },
      ],
    },
  ];

  const handleSlideChange = (swiper) => {
    const activeSlide = swiper.el.querySelector('.swiper-slide-active');
    if (!activeSlide) return;
    const video = activeSlide.querySelector('video');
    
    if (video) {
      swiper.autoplay.stop();
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      swiper.autoplay.start();
    }
  };

  const handleVideoEnded = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
      swiperInstance.autoplay.start();
    }
  };

  return (
    <section id="home" className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          if (swiper.realIndex === 0) {
            swiper.autoplay.stop();
          }
        }}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        loop={true}
        className="w-full h-full hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background */}
              <div className="absolute inset-0 bg-gray-900">
                {slide.video ? (
                  <video
                    src={slide.video}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    poster={slide.poster}
                    onEnded={handleVideoEnded}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pt-20">
                <div className="max-w-2xl">
                  <h3 className="text-white font-bold tracking-widest text-sm md:text-base mb-4 uppercase flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-white inline-block"></span>
                    {slide.subtitle}
                  </h3>
                  
                  <h1 className="text-white font-heading font-bold text-6xl md:text-7xl lg:text-8xl leading-tight mb-6 whitespace-pre-line">
                    {slide.title}
                  </h1>
                  
                  <div className="mb-10">
                    <h4 className="text-white font-semibold text-xl md:text-2xl mb-3">
                      {slide.description}
                    </h4>
                    <p className="text-gray-200 text-sm md:text-base max-w-lg leading-relaxed">
                      {slide.details}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-8 items-center border-t border-white/20 pt-6 mb-8">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[#E34836] font-medium text-sm uppercase tracking-wider mb-1">
                          {feature.label}
                        </span>
                        <span className="text-white font-semibold text-lg">
                          {feature.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#packages"
                      className="bg-[#E34836] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg"
                    >
                      Explore Tours
                    </a>
                    <a
                      href="#contact"
                      className="bg-white/20 hover:bg-white text-white hover:text-navy border border-white/40 px-8 py-3.5 rounded-full font-semibold transition-all shadow-md"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/20 hover:bg-[#E34836] text-white hover:border-[#E34836] flex items-center justify-center transition-all duration-300 shadow-md group"
      >
        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/20 hover:bg-[#E34836] text-white hover:border-[#E34836] flex items-center justify-center transition-all duration-300 shadow-md group"
      >
        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
      </button>
      
      {/* Floating WhatsApp Button (bottom right) */}
      <a
        href="https://wa.me/917588626568"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
      
      {/* Custom Styles for Swiper Pagination */}
      <style>{`
        .hero-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: white;
          opacity: 0.5;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #E34836;
          width: 24px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Hero;
