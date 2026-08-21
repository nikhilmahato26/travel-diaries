import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import fs from 'fs';

neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true;

const envFile = fs.readFileSync('.env', 'utf8');
const dbUrlMatch = envFile.match(/DATABASE_URL="?([^"\n]+)"?/);
const dbUrl = dbUrlMatch ? dbUrlMatch[1] : null;

const pool = new Pool({ connectionString: dbUrl });

async function run() {
  try {
    console.log('Seeding cruise packages...');
    
    const pkg1 = {
      id: 'cruise-ocean-explorer',
      title: 'Ocean Explorer - 5 Nights',
      category: 'cruise',
      destination: 'Miami, FL',
      duration: '5 Nights / 6 Days',
      originalPrice: 1500,
      salePrice: 1200,
      heroImage: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80',
      image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80',
    };
    
    const pkg2 = {
      id: 'cruise-caribbean-dream',
      title: 'Caribbean Dream - 7 Nights',
      category: 'cruise',
      destination: 'Nassau, Bahamas',
      duration: '7 Nights / 8 Days',
      originalPrice: 2000,
      salePrice: 1800,
      heroImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
    };

    await pool.query(
      `INSERT INTO packages (id, data, category, status, featured) VALUES ($1, $2, $3, 'approved', true) ON CONFLICT DO NOTHING`,
      [pkg1.id, JSON.stringify(pkg1), 'cruise']
    );

    await pool.query(
      `INSERT INTO packages (id, data, category, status, featured) VALUES ($1, $2, $3, 'approved', true) ON CONFLICT DO NOTHING`,
      [pkg2.id, JSON.stringify(pkg2), 'cruise']
    );

    console.log('Done!');
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}

run();
