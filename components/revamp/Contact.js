import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Info */}
          <div className="space-y-8">
            <div>
              <p className="text-[#E34836] font-cursive text-3xl mb-3">
                Get In Touch
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-[1.1] mb-6">
                Plan Your Dream<br />Journey Today
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-lg">
                Ready to explore the world? Our travel experts are here to craft the perfect itinerary for you. Reach out and let's make memories together.
              </p>
            </div>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-xl text-gray-700 mt-1 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">Location</span>
                  <p className="text-gray-800 text-sm font-medium leading-relaxed">
                    Al Souroh Building, 6511 Way<br />Al Wadi Al Kabir, Muscat, Oman
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-xl text-gray-700 mt-1 flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">Phone</span>
                  <a href="tel:+96895950141" className="text-gray-800 text-sm font-bold hover:text-[#E34836] transition-colors">
                    +968 9595 0141
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-xl text-gray-700 mt-1 flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">Email</span>
                  <a href="mailto:sales@mytraveldiaries.in" className="text-gray-800 text-sm font-bold hover:text-[#E34836] transition-colors block">
                    sales@mytraveldiaries.in
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="https://wa.me/96895950141?text=Hi%20Travel%20Diaries%2C%20I%20want%20to%20inquire%20about%20a%20travel%20package." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                <MessageCircle size={20} className="fill-current" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-500 text-xs font-semibold uppercase tracking-wider block mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E34836] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs font-semibold uppercase tracking-wider block mb-2">Phone</label>
                  <input 
                    type="text" 
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E34836] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-500 text-xs font-semibold uppercase tracking-wider block mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E34836] transition-colors"
                />
              </div>

              <div>
                <label className="text-gray-500 text-xs font-semibold uppercase tracking-wider block mb-2">Dream Destination</label>
                <input 
                  type="text" 
                  placeholder="Where do you want to go?" 
                  className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E34836] transition-colors"
                />
              </div>

              <div>
                <label className="text-gray-500 text-xs font-semibold uppercase tracking-wider block mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your trip..." 
                  className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E34836] transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20"
              >
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
