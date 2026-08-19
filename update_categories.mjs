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
    await pool.query('DELETE FROM destinations');
    await pool.query(`
      INSERT INTO destinations (name, color, image_url, description, emoji) VALUES
      ('Packages', '#E34836', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80', 'Explore our curated packages', '📦'),
      ('Cruise', '#0E7A8E', 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80', 'Experience the magic of the ocean', '🚢')
    `);
    
    // Update existing packages to "Packages" category so they don't disappear
    const { rows: packages } = await pool.query('SELECT id, data FROM packages');
    let count = 0;
    for (const pkg of packages) {
      if (pkg.data) {
        pkg.data.destination = 'Packages';
        await pool.query('UPDATE packages SET data = $1 WHERE id = $2', [JSON.stringify(pkg.data), pkg.id]);
        count++;
      }
    }
    
    console.log(`Categories updated to Packages and Cruise successfully! Migrated ${count} packages.`);
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}

run();
