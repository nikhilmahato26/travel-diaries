import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import fs from 'fs';
import { SEED_PACKAGES } from './lib/packages.js';

neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true;

const envFile = fs.readFileSync('.env', 'utf8');
const dbUrlMatch = envFile.match(/DATABASE_URL="?([^"\n]+)"?/);
const dbUrl = dbUrlMatch ? dbUrlMatch[1] : null;

const pool = new Pool({ connectionString: dbUrl });

async function run() {
  try {
    console.log('Deleting old destinations...');
    await pool.query("DELETE FROM destinations");
    
    console.log('Deleting non-cruise packages...');
    await pool.query("DELETE FROM packages WHERE category != 'cruise' OR category IS NULL");
    
    console.log('Initializing Destinations Table with the 14 new destinations...');
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS destinations (
        id          SERIAL PRIMARY KEY,
        name        TEXT UNIQUE NOT NULL,
        color       TEXT NOT NULL DEFAULT '#e8520a',
        created_at  TIMESTAMPTZ DEFAULT NOW(),
        image_url   TEXT,
        description TEXT,
        emoji       TEXT DEFAULT '📍',
        featured    BOOLEAN NOT NULL DEFAULT true,
        image_pos   TEXT
      )
    `);

    await pool.query(`
      INSERT INTO destinations (name, color, image_url, description, emoji) VALUES
        ('Gorgeous Georgia',    '#7e5233', 'https://images.unsplash.com/photo-1565018042456-075e7a9b0c51?w=800&q=80', 'Discover the charm of the Caucasus', '🇬🇪'),
        ('Awesome Azerbaijan',  '#2e9e7a', 'https://images.unsplash.com/photo-1582236378413-ebbd161ef9cf?w=800&q=80', 'Experience the Land of Fire', '🇦🇿'),
        ('Crazy Thailand',      '#0ea5e9', 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80', 'Vibrant beaches and bustling cities', '🇹🇭'),
        ('Aspiring Almaty',     '#e8520a', 'https://images.unsplash.com/photo-1588636184511-9252c80c2f32?w=800&q=80', 'Mountainscapes and modern culture', '🇰🇿'),
        ('Unique Uzbek',        '#153e2d', 'https://images.unsplash.com/photo-1627056086811-09be353e8964?w=800&q=80', 'Journey through the Silk Road', '🇺🇿'),
        ('Shining Srilanka',    '#7e5233', 'https://images.unsplash.com/photo-1585394365777-e81a5f5bf68a?w=800&q=80', 'Tropical paradise and rich heritage', '🇱🇰'),
        ('Marvellous Malaysia', '#2e3da8', 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80', 'Truly Asia in every sense', '🇲🇾'),
        ('Rising Russia',       '#c92a2a', 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&q=80', 'Grand architecture and vast landscapes', '🇷🇺'),
        ('Vibrant Vietnam',     '#153e2d', 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80', 'Stunning bays and historical cities', '🇻🇳'),
        ('Trending Turkey',     '#e8520a', 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80', 'Where East perfectly meets West', '🇹🇷'),
        ('Tulips to Eiffel',    '#2e9e7a', 'https://images.unsplash.com/photo-1502602898657-3e907600bb43?w=800&q=80', 'Classic Europe tour across capitals', '🇪🇺'),
        ('Jazzy Japan',         '#0ea5e9', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80', 'Neon lights, sushi, and cherry blossoms', '🇯🇵'),
        ('European Delights',   '#7e5233', 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80', 'A taste of European charm', '🌍'),
        ('Kudos Kenya',         '#e8520a', 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80', 'The ultimate wild safari experience', '🇰🇪')
      ON CONFLICT DO NOTHING
    `);
    
    console.log('Seeding new detailed packages...');
    for (const pkg of SEED_PACKAGES) {
      await pool.query(
        `INSERT INTO packages (id, data, category, status, featured) VALUES ($1, $2, $3, 'approved', true) ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data`,
        [pkg.id, JSON.stringify(pkg), pkg.category || 'group']
      );
      console.log(`Inserted package: ${pkg.title}`);
    }

    console.log('Done!');
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}

run();
