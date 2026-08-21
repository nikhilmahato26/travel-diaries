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
    console.log('Deleting homestays and houseboats...');
    await pool.query("DELETE FROM listings WHERE type IN ('homestay', 'houseboat')");
    await pool.query("DELETE FROM listings WHERE type = 'cruise'");
    console.log('Initializing Listings Table with Cruises...');
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS listings (
        id          SERIAL PRIMARY KEY,
        type        TEXT NOT NULL,
        name        TEXT NOT NULL,
        color       TEXT NOT NULL DEFAULT '#e8520a',
        image_url   TEXT,
        description TEXT,
        location    TEXT,
        price       TEXT,
        emoji       TEXT DEFAULT '🚢',
        image_pos   TEXT,
        featured    BOOLEAN NOT NULL DEFAULT true,
        created_at  TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    await pool.query(`
      INSERT INTO listings (type, name, color, image_url, description, location, emoji) VALUES
        ('cruise', 'Ocean Explorer',  '#0ea5e9', 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80', 'Luxury 5-night cruise with premium dining and ocean views', 'Miami, FL', '🚢'),
        ('cruise', 'Caribbean Dream', '#2e9e7a', 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80', 'Relaxing island-hopping cruise through the Caribbean', 'Nassau, Bahamas', '🚢')
      ON CONFLICT DO NOTHING
    `);

    console.log('Done!');
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}

run();
