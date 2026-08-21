import fs from 'fs';

function fixImports(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/HomestayFields/g, 'CruiseFields');
  content = content.replace(/HomestayDetail/g, 'CruiseDetail');
  fs.writeFileSync(file, content);
}

fixImports('app/admin/dashboard/page.js');
fixImports('app/agency/dashboard/page.js');
fixImports('app/packages/[id]/page.js');
fixImports('components/CruiseFields.js');
fixImports('components/CruiseDetail.js');

function replaceCabins(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/Rooms/g, 'Cabins');
  content = content.replace(/Room/g, 'Cabin');
  content = content.replace(/room/g, 'cabin');
  content = content.replace(/rooms/g, 'cabins');
  fs.writeFileSync(file, content);
}

replaceCabins('components/CruiseFields.js');
replaceCabins('components/CruiseDetail.js');

console.log('Imports and Cabins fixed.');
