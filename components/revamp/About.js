import { ArrowRight, Map, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="services" className="py-24 bg-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Section */}
          <div className="relative w-full h-[500px]">
            {/* Top Large Image */}
            <div className="absolute top-0 left-0 w-[95%] h-[55%] rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Tropical Resort" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Bottom Left Image */}
            <div className="absolute bottom-0 left-0 w-[45%] h-[40%] rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=2156&q=80" 
                alt="City Night" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-[5%] w-[45%] h-[40%] rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80" 
                alt="Landscape" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-4 right-0 bg-navy text-white p-4 rounded-xl shadow-xl flex flex-col items-center justify-center w-28 h-28 transform translate-x-4">
              <span className="font-bold text-2xl">10+</span>
              <span className="text-xs text-center mt-1 text-gray-300">Years of Experience</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 pl-4 lg:pl-8">
            <div>
              <p className="text-[#E34836] font-semibold text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
                Our Services
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-[1.2] mb-6">
                Better Holidays<br />Abroad
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-lg text-[#E34836] mt-1">
                  <Map size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 text-lg mb-1">Unmatched Experiences</h4>
                  <p className="text-gray-600 text-sm">Every trip is crafted to ensure you get the most authentic and memorable experiences.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-lg text-[#E34836] mt-1">
                  <Briefcase size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 text-lg mb-1">End-to-end Solutions for Packages</h4>
                  <p className="text-gray-600 text-sm">From flights and hotels to local transfers, we handle everything for your peace of mind.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#E34836] text-white px-8 py-3.5 rounded-full font-medium hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Get a Quote
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
