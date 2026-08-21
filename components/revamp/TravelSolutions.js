import {
  Package, Plane, Building2, Ship, Binoculars, GraduationCap,
  ShieldCheck, TrainFront, Globe, Users, PlaneTakeoff, Car,
} from 'lucide-react';

const SOLUTIONS = [
  { label: 'Travel Packages', icon: Package },
  { label: 'Flights', icon: Plane },
  { label: 'Hotels', icon: Building2 },
  { label: 'Cruises', icon: Ship },
  { label: 'Tours & Sightseeing', icon: Binoculars },
  { label: 'Educational Tours', icon: GraduationCap },
  { label: 'Travel Insurance', icon: ShieldCheck },
  { label: 'Rail Passes', icon: TrainFront },
  { label: 'Global Visa Assistance', icon: Globe },
  { label: 'MICE', icon: Users },
  { label: 'Charter Flights', icon: PlaneTakeoff },
  { label: 'Car Rentals', icon: Car },
];

const BADGE_STYLES = [
  'bg-[#1B61FF] text-white',
  'bg-white text-[#1B61FF]',
  'bg-white/10 text-white border-2 border-white/70',
];

const TravelSolutions = () => {
  return (
    <section id="solutions" className="relative py-24 md:py-28 font-body overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0B1E30]/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Travel Solutions
          </h2>
          <p className="text-gray-200 text-base leading-relaxed max-w-md">
            One team, every travel need handled, from the first flight search to the last visa stamp.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {SOLUTIONS.map(({ label, icon: Icon }, i) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl pl-3 pr-4 py-3 hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className={`shrink-0 w-11 h-11 rounded-xl rotate-45 flex items-center justify-center ${BADGE_STYLES[i % BADGE_STYLES.length]}`}>
                <Icon size={20} strokeWidth={1.75} className="-rotate-45" />
              </div>
              <span className="text-white font-medium text-[15px] leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelSolutions;
