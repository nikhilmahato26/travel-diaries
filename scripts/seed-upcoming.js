
const { Pool, neonConfig } = require('@neondatabase/serverless');
const ws = require('ws');

neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const demoTrips = [
  {
    id: 'UPC-201',
    category: 'upcoming',
    destination: 'International',
    badge: 'Group Departure',
    badgeColor: '#E34836',
    duration: '7 Days & 6 Nights',
    title: 'Bali Group Departure',
    subtitle: 'April 2027 Special',
    hotels: '4N Kuta · 2N Ubud',
    originalPrice: 65000,
    salePrice: 55000,
    priceNote: 'Per Person',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&q=80',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400&q=85',
    overview: 'Join our exclusive group departure to Bali. Experience the rich culture, stunning beaches, and lush rice terraces with like-minded travelers.',
    highlights: ['Ubud Monkey Forest', 'Tanah Lot Sunset', 'Kintamani Volcano View', 'Nusa Penida Day Trip'],
    inclusions: ['6 nights accommodation', 'Daily breakfast', 'Airport transfers', 'Group guide'],
    exclusions: ['Flights', 'Visa', 'Personal expenses'],
    itinerary: [{ day: 1, title: 'Arrival', description: 'Arrive in Bali', activities: [] }]
  },
  {
    id: 'UPC-202',
    category: 'upcoming',
    destination: 'Domestic',
    badge: 'Adventure',
    badgeColor: '#153e2d',
    duration: '6 Days & 5 Nights',
    title: 'Leh Ladakh Expedition',
    subtitle: 'June 2027 Batch',
    hotels: '3N Leh · 1N Nubra · 1N Pangong',
    originalPrice: 35000,
    salePrice: 28999,
    priceNote: 'Per Person',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&q=80',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1400&q=85',
    overview: 'Embark on a thrilling road trip across the rugged landscapes of Ladakh. Marvel at the Pangong Lake and cross the mighty Khardung La pass.',
    highlights: ['Pangong Tso', 'Nubra Valley', 'Khardung La Pass', 'Magnetic Hill'],
    inclusions: ['5 nights stay', 'Breakfast & Dinner', 'Inner line permits', 'Transport'],
    exclusions: ['Flights', 'Lunch', 'Oxygen cylinders'],
    itinerary: [{ day: 1, title: 'Arrival in Leh', description: 'Acclimatization', activities: [] }]
  },
  {
    id: 'UPC-203',
    category: 'upcoming',
    destination: 'International',
    badge: 'European Summer',
    badgeColor: '#0ea5e9',
    duration: '10 Days & 9 Nights',
    title: 'Europe Highlights',
    subtitle: 'August 2027 Group',
    hotels: '3N Paris · 3N Interlaken · 3N Rome',
    originalPrice: 150000,
    salePrice: 135000,
    priceNote: 'Per Person',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=700&q=80',
    heroImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1400&q=85',
    overview: 'Experience the magic of Europe. From the Eiffel Tower to the Swiss Alps and the Colosseum, this tour covers the best of the continent.',
    highlights: ['Eiffel Tower', 'Mt. Titlis', 'Colosseum', 'Vatican City'],
    inclusions: ['9 nights stay', 'Daily breakfast', 'Schengen Visa assist', 'Euro rail pass'],
    exclusions: ['Flights', 'Lunches/Dinners', 'City taxes'],
    itinerary: [{ day: 1, title: 'Arrival in Paris', description: 'Welcome to Europe', activities: [] }]
  }
];

async function seed() {
  try {
    for (const pkg of demoTrips) {
      await pool.query(
        `INSERT INTO packages (id, data, category, status) VALUES ($1, $2, $3, 'approved') ON CONFLICT DO NOTHING`,
        [pkg.id, JSON.stringify(pkg), 'upcoming']
      );
      console.log('Inserted', pkg.id);
    }
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}

seed();
