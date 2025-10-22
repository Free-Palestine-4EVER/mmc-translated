// Helper script to copy new English translations to other languages
// Run: node scripts/copy-translations.js

const fs = require('fs');
const path = require('path');

const translationsDir = path.join(__dirname, '..', 'translations');
const languages = ['es', 'fr', 'de', 'it', 'ar'];

// Read English translations
const enPath = path.join(translationsDir, 'en.json');
const enTranslations = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Keys to copy (new keys added after line 810)
const newKeys = [
  'announcement.wifi',
  'announcement.groupDiscount',
  'announcement.taxi',
  'announcement.hotAirBalloon',
  // Add all um-addami keys
  ...Object.keys(enTranslations).filter(key => key.startsWith('umAddami.'))
];

console.log(`Found ${newKeys.length} new translation keys to copy`);

// For each language, add the English text as placeholder
languages.forEach(lang => {
  const langPath = path.join(translationsDir, `${lang}.json`);
  const langTranslations = JSON.parse(fs.readFileSync(langPath, 'utf8'));

  let added = 0;
  newKeys.forEach(key => {
    if (!langTranslations[key]) {
      langTranslations[key] = `[${lang.toUpperCase()}] ` + enTranslations[key];
      added++;
    }
  });

  // Write back
  fs.writeFileSync(langPath, JSON.stringify(langTranslations, null, 2) + '\n');
  console.log(`${lang}.json: Added ${added} keys`);
});

console.log('\nDone! Now replace [LANG] placeholders with actual translations.');
