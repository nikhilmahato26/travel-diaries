'use client';
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-black">
        <video
          src="https://res.cloudinary.com/dynbpb9u0/video/upload/v1787150059/video_nxgptn.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Central Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
          Unforgettable Travel
        </h1>
        <p className="text-white/90 text-lg md:text-2xl font-medium mb-8 max-w-2xl">
          Discover the world's most amazing destinations with us.
        </p>
        <div className="flex gap-4">
          <a
            href="#packages"
            className="bg-[#E34836] text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg text-lg"
          >
            Explore Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
