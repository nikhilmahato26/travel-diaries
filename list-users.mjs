import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import fs from 'fs';
neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true;
const envFile = fs.readFileSync('.env', 'utf8');
const dbUrl = envFile.match(/DATABASE_URL="?([^"\n]+)"?/)[1];
const pool = new Pool({ connectionString: dbUrl });
async function run() {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    console.log("Users:", rows.map(r => ({id: r.id, email: r.email, username: r.username, role: r.role})));
    const { rows: agencies } = await pool.query('SELECT * FROM agencies');
    console.log("Agencies:", agencies.map(r => ({id: r.id, email: r.email, name: r.name, phone: r.phone})));
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}
run();
