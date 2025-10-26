const fs = require('fs');
const path = require('path');

// List of tour page files to check
const tourPages = [
  'app/desert-experiences/camel-rides/page.tsx',
  'app/desert-experiences/jebel-khash-route/page.tsx',
  'app/desert-experiences/all-in-one-day/page.tsx'
];

// Load existing en.json
const enJson = JSON.parse(fs.readFileSync('translations/en.json', 'utf8'));
const existingKeys = new Set(Object.keys(enJson));

// Find all translation keys used in tour pages
const missingKeys = new Map();

tourPages.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.matchAll(/t\(["']([^"']+)["']\)/g);

  for (const match of matches) {
    const key = match[1];
    if (!existingKeys.has(key)) {
      if (!missingKeys.has(filePath)) {
        missingKeys.set(filePath, []);
      }
      missingKeys.get(filePath).push(key);
    }
  }
});

// Print results
console.log('\n===== MISSING TRANSLATION KEYS =====\n');
let totalMissing = 0;

missingKeys.forEach((keys, file) => {
  const uniqueKeys = [...new Set(keys)];
  console.log(`\n📄 ${file}`);
  console.log(`   Missing ${uniqueKeys.length} keys:`);
  uniqueKeys.forEach(key => console.log(`   - ${key}`));
  totalMissing += uniqueKeys.length;
});

console.log(`\n\n✅ Total missing keys: ${totalMissing}\n`);
