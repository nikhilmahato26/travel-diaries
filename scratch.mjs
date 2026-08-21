import dotenv from 'dotenv';
dotenv.config();
import { invalidatePackagesCache } from './lib/redis.js';

async function clear() {
  await invalidatePackagesCache();
  console.log('Cache cleared!');
  process.exit(0);
}
clear();
