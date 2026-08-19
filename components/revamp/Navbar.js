'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#services' },
    { name: 'Destination', href: '/#destinations' },
    { name: 'Packages', href: '/#packages' },
    { name: 'Cruises', href: '/cruises' },
    { name: 'Upcoming Trips', href: '/#upcoming-trips' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-body ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[#E34836] p-2 rounded-xl text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`font-body font-bold text-sm tracking-[0.25em] uppercase leading-none group-hover:text-[#E34836] transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>Travel</span>
                <span className="text-[#E34836] font-heading font-semibold italic text-base leading-none mt-0.5">diaries</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors hover:text-[#E34836] ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-6">
              <Link
                href="tel:+96895950141"
                className="bg-[#E34836] text-white px-6 py-2.5 rounded-full text-[15px] font-medium hover:bg-red-700 transition-colors"
              >
                Talk to us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-800 font-medium hover:text-[#E34836] text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
            <Link
              href="tel:+96895950141"
              className="bg-[#E34836] text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors text-center block text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
