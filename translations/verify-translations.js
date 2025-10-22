const fs = require('fs');
const path = require('path');

// Read all translation files
const translationDir = __dirname;
const languages = ['en', 'es', 'fr', 'de', 'it', 'ar'];

console.log('='.repeat(80));
console.log('TRANSLATION FILES VERIFICATION REPORT');
console.log('Mohammed Mutlak Camp Website');
console.log('='.repeat(80));
console.log();

// Load English as the reference
const enPath = path.join(translationDir, 'en.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const enKeys = Object.keys(enData).sort();

console.log(`📋 ENGLISH REFERENCE FILE: ${enKeys.length} keys`);
console.log();

// Check each language file
const results = {};

languages.forEach(lang => {
  if (lang === 'en') return; // Skip English (it's the reference)

  const filePath = path.join(translationDir, `${lang}.json`);

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const keys = Object.keys(data).sort();

    // Find missing keys
    const missingKeys = enKeys.filter(key => !keys.includes(key));

    // Find extra keys (not in English)
    const extraKeys = keys.filter(key => !enKeys.includes(key));

    results[lang] = {
      totalKeys: keys.length,
      missingKeys,
      extraKeys,
      complete: missingKeys.length === 0
    };

  } catch (error) {
    results[lang] = {
      error: error.message
    };
  }
});

// Print results for each language
languages.forEach(lang => {
  if (lang === 'en') return;

  const langNames = {
    es: 'Spanish (Español)',
    fr: 'French (Français)',
    de: 'German (Deutsch)',
    it: 'Italian (Italiano)',
    ar: 'Arabic (العربية)'
  };

  console.log('-'.repeat(80));
  console.log(`🌐 ${lang.toUpperCase()}: ${langNames[lang]}`);
  console.log('-'.repeat(80));

  const result = results[lang];

  if (result.error) {
    console.log(`❌ ERROR: ${result.error}`);
  } else {
    console.log(`📊 Total Keys: ${result.totalKeys}`);
    console.log(`✅ Missing Keys: ${result.missingKeys.length}`);
    console.log(`⚠️  Extra Keys: ${result.extraKeys.length}`);

    if (result.complete) {
      console.log(`🎉 STATUS: ✅ 100% COMPLETE - All keys present!`);
    } else {
      console.log(`⚠️  STATUS: ❌ INCOMPLETE - Missing ${result.missingKeys.length} keys`);
      console.log();
      console.log('Missing Keys:');
      result.missingKeys.forEach(key => {
        console.log(`  - ${key}`);
      });
    }

    if (result.extraKeys.length > 0) {
      console.log();
      console.log('Extra Keys (not in English):');
      result.extraKeys.forEach(key => {
        console.log(`  + ${key}`);
      });
    }
  }

  console.log();
});

// Summary
console.log('='.repeat(80));
console.log('📊 SUMMARY');
console.log('='.repeat(80));
console.log();
console.log(`Total keys in English reference: ${enKeys.length}`);
console.log();

const allComplete = Object.values(results).every(r => !r.error && r.complete);

languages.forEach(lang => {
  if (lang === 'en') return;
  const result = results[lang];
  if (!result.error) {
    const status = result.complete ? '✅' : '❌';
    const coverage = ((result.totalKeys / enKeys.length) * 100).toFixed(1);
    console.log(`${status} ${lang.toUpperCase()}: ${result.totalKeys}/${enKeys.length} keys (${coverage}% coverage)`);
  }
});

console.log();
if (allComplete) {
  console.log('🎉 RESULT: All language files have 100% translation coverage!');
} else {
  console.log('⚠️  RESULT: Some language files are missing translations.');
  console.log('   Please review the missing keys above and add translations.');
}
console.log();
console.log('='.repeat(80));
