import fs from 'fs';

function updateAdminDashboard() {
  const file = 'app/admin/dashboard/page.js';
  let content = fs.readFileSync(file, 'utf8');

  // Replace PREFIX
  content = content.replace(/homestay: 'HS', houseboat: 'HB'/, "cruise: 'CR'");

  // Replace states
  content = content.replace(/const \[homestays, setHomestays\] = useState\(\[\]\)\n\s*const \[houseboats, setHouseboats\] = useState\(\[\]\)/,
    "const [cruises, setCruises] = useState([])");
  content = content.replace(/const \[listingModalType, setListingModalType\] = useState\(null\) \/\/ 'homestay' \| 'houseboat'/,
    "const [listingModalType, setListingModalType] = useState(null) // 'cruise'");

  // Replace fetches
  content = content.replace(
    /Promise\.all\(\[\s*fetch\('\/api\/listings\?type=homestay'\)\.then\(r => r\.ok \? r\.json\(\) : \[\]\),\s*fetch\('\/api\/listings\?type=houseboat'\)\.then\(r => r\.ok \? r\.json\(\) : \[\]\),\s*\]\)\.then\(\(\[hs, hb\]\) => \{\s*setHomestays\(hs\); setHouseboats\(hb\)\s*\}\)/,
    `fetch('/api/listings?type=cruise').then(r => r.ok ? r.json() : []).then(cr => {
        setCruises(cr)
      })`
  );

  // Replace label map
  content = content.replace(/const LISTING_LABEL = \{ homestay: 'Homestay', houseboat: 'Houseboat' \}/,
    "const LISTING_LABEL = { cruise: 'Cruise' }");

  // Replace emoji logic in add
  content = content.replace(/emoji: type === 'houseboat' \? '🛶' : '🏡'/, "emoji: '🚢'");

  // Replace Sidebar links
  content = content.replace(/homestay: \{ label: 'Homestay', plural: 'Homestays', icon: Home, emoji: '🏡', noun: 'homestays' \},\n\s*houseboat: \{ label: 'Houseboat', plural: 'Houseboats', icon: Ship, emoji: '🛶', noun: 'houseboats' \},/,
    "cruise: { label: 'Cruise', plural: 'Cruises', icon: Ship, emoji: '🚢', noun: 'cruises' },");

  // Replace rendering sections
  content = content.replace(/\{section === 'homestays' && renderListingSection\('homestay', homestays\)\}\n\s*\{\/\* ── Houseboats ── \*\/\}\n\s*\{section === 'houseboats' && renderListingSection\('houseboat', houseboats\)\}/,
    "{section === 'cruises' && renderListingSection('cruise', cruises)}");

  // Replace package form logic
  content = content.replace(/\.\.\.\(\['homestay','houseboat'\]\.includes\(form\.category\) \? \[\['stay','Stay Details'\]\] : \[\]\)/g,
    "...(['cruise'].includes(form.category) ? [['stay','Stay Details']] : [])");

  content = content.replace(/<label style=\{\{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 \}\}\><input type="radio" name="category" value="homestay" checked=\{form\.category === 'homestay'\} onChange=\{e => setForm\(f => \(\{ \.\.\.f, category: e\.target\.value \}\)\)\} \/> Homestay<\/label>\n\s*<label style=\{\{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 \}\}\><input type="radio" name="category" value="houseboat" checked=\{form\.category === 'houseboat'\} onChange=\{e => setForm\(f => \(\{ \.\.\.f, category: e\.target\.value \}\)\)\} \/> Houseboat<\/label>/,
    `<label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}><input type="radio" name="category" value="cruise" checked={form.category === 'cruise'} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} /> Cruise</label>`);

  // Replace option list logic
  content = content.replace(/const isHS = form\.category === 'homestay'\n\s*const isHB = form\.category === 'houseboat'\n\s*const optionList = isHS \? homestays : isHB \? houseboats : destinations\n\s*const fieldLabel = isHS \? 'Homestay' : isHB \? 'Houseboat' : 'Category'/,
    `const isCR = form.category === 'cruise'
                    const optionList = isCR ? cruises : destinations
                    const fieldLabel = isCR ? 'Cruise' : 'Category'`);

  // Modal logic
  content = content.replace(/const items = listingModalType === 'houseboat' \? houseboats : homestays/,
    "const items = cruises");
  content = content.replace(/placeholder=\{listingModalType === 'houseboat' \? 'e\.g\. Royal Kettuvallam' : 'e\.g\. Backwater Villa'\}/,
    "placeholder='e.g. Ocean Explorer'");

  fs.writeFileSync(file, content);
}

function updateAgencyDashboard() {
  const file = 'app/agency/dashboard/page.js';
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(/\{ value: 'homestay', label: 'Home Stay' \},\n\s*\{ value: 'houseboat', label: 'Houseboat' \},/,
    "{ value: 'cruise', label: 'Cruise' },");

  content = content.replace(/homestay: 'HS', houseboat: 'HB'/, "cruise: 'CR'");

  content = content.replace(/\.\.\.\(\['homestay','houseboat'\]\.includes\(form\.category\) \? \[\['stay','Stay Details'\]\] : \[\]\)/g,
    "...(['cruise'].includes(form.category) ? [['stay','Stay Details']] : [])");

  fs.writeFileSync(file, content);
}

function updatePackagePreview() {
  const file = 'components/PackagePreview.js';
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(/\(pkg\.category === 'homestay' \|\| pkg\.category === 'houseboat'\)/g,
    "(pkg.category === 'cruise')");

  content = content.replace(/<div style=\{\{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 12 \}\}\>Rooms & Availability<\/div>/g,
    "<div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 12 }}>Cabins & Availability</div>");

  fs.writeFileSync(file, content);
}

updateAdminDashboard();
updateAgencyDashboard();
updatePackagePreview();
console.log('Done refactoring');
