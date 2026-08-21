import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace plural variables and state
  content = content.replace(/homestays/g, 'cruises');
  content = content.replace(/houseboats/g, 'cruises2'); // Temporary to avoid conflict
  content = content.replace(/setHomestays/g, 'setCruises');
  content = content.replace(/setHouseboats/g, 'setCruises2');
  
  // Replace singular
  content = content.replace(/homestay/g, 'cruise');
  content = content.replace(/houseboat/g, 'cruise2');

  // Replace capitalized
  content = content.replace(/Homestay/g, 'Cruise');
  content = content.replace(/Houseboat/g, 'Cruise2');
  
  // Fix temporary double cruises
  // e.g. "const [cruises, setCruises] = useState([])" and "const [cruises2, setCruises2] = useState([])"
  // We can just keep cruises and remove cruises2 later.

  fs.writeFileSync(filePath, content);
}

replaceInFile('app/admin/dashboard/page.js');
replaceInFile('app/agency/dashboard/page.js');
console.log('Done');
