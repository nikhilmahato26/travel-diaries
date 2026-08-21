import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
async function run() {
  try {
    await client.connect();
    const db = client.db(process.env.MONGODB_DB);
    await db.collection('packages').updateMany(
      {}, 
      { $set: { itineraryPdf: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' } }
    );
    console.log("Updated all packages in DB with a dummy PDF link!");
  } catch (err) {
    console.log("Error:", err);
  } finally {
    await client.close();
  }
}
run();
