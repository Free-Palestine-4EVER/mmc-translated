type Language = "en" | "ar" | "es" | "fr" | "de" | "it"

// Map country codes to languages
const countryToLanguageMap: Record<string, Language> = {
  // Arabic-speaking countries
  JO: "ar", // Jordan
  SA: "ar", // Saudi Arabia
  AE: "ar", // United Arab Emirates
  KW: "ar", // Kuwait
  QA: "ar", // Qatar
  BH: "ar", // Bahrain
  OM: "ar", // Oman
  EG: "ar", // Egypt
  LB: "ar", // Lebanon
  SY: "ar", // Syria
  IQ: "ar", // Iraq
  YE: "ar", // Yemen
  LY: "ar", // Libya
  TN: "ar", // Tunisia
  DZ: "ar", // Algeria
  MA: "ar", // Morocco
  SD: "ar", // Sudan
  PS: "ar", // Palestine

  // Spanish-speaking countries
  ES: "es", // Spain
  MX: "es", // Mexico
  AR: "es", // Argentina
  CO: "es", // Colombia
  PE: "es", // Peru
  VE: "es", // Venezuela
  CL: "es", // Chile
  EC: "es", // Ecuador
  GT: "es", // Guatemala
  CU: "es", // Cuba
  BO: "es", // Bolivia
  DO: "es", // Dominican Republic
  HN: "es", // Honduras
  PY: "es", // Paraguay
  SV: "es", // El Salvador
  NI: "es", // Nicaragua
  CR: "es", // Costa Rica
  PA: "es", // Panama
  UY: "es", // Uruguay

  // French-speaking countries
  FR: "fr", // France
  BE: "fr", // Belgium
  CH: "fr", // Switzerland (multilingual, but French is major)
  MC: "fr", // Monaco
  LU: "fr", // Luxembourg
  CD: "fr", // Democratic Republic of Congo
  CM: "fr", // Cameroon
  CI: "fr", // Ivory Coast
  SN: "fr", // Senegal
  ML: "fr", // Mali
  MG: "fr", // Madagascar
  HT: "fr", // Haiti

  // German-speaking countries
  DE: "de", // Germany
  AT: "de", // Austria

  // Italian-speaking countries
  IT: "it", // Italy
  SM: "it", // San Marino
  VA: "it", // Vatican City

  // Default to English for all other countries
}

interface GeoLocationResponse {
  country_code?: string
  country?: string
}

/**
 * Detects the user's language based on their IP address location
 * Uses ipapi.co free API for geolocation
 * @returns Promise<Language> - The detected language code, defaults to 'en'
 */
export async function detectLanguageFromIP(): Promise<Language> {
  try {
    // Use ipapi.co free API (no API key required for basic usage)
    const response = await fetch("https://ipapi.co/json/", {
      // Add timeout and cache settings
      signal: AbortSignal.timeout(3000), // 3 second timeout
    })

    if (!response.ok) {
      console.warn("Geolocation API returned non-OK status:", response.status)
      return "en"
    }

    const data: GeoLocationResponse = await response.json()
    const countryCode = data.country_code

    if (!countryCode) {
      console.warn("No country code in geolocation response")
      return "en"
    }

    // Map country code to language, default to English
    const language = countryToLanguageMap[countryCode] || "en"

    console.log(`Detected location: ${countryCode} → Language: ${language}`)
    return language
  } catch (error) {
    // If geolocation fails (network error, timeout, etc.), default to English
    console.warn("Failed to detect language from IP:", error)
    return "en"
  }
}

/**
 * Gets the appropriate language for the user
 * Priority: 1. Saved preference, 2. IP-based detection, 3. English default
 * @returns Promise<Language>
 */
export async function getInitialLanguage(): Promise<Language> {
  // Check if user has a saved language preference
  if (typeof window !== "undefined") {
    const savedLang = localStorage.getItem("language") as Language | null
    if (savedLang) {
      console.log(`Using saved language preference: ${savedLang}`)
      return savedLang
    }
  }

  // No saved preference - detect from IP
  console.log("No saved language preference, detecting from IP...")
  const detectedLang = await detectLanguageFromIP()

  // Save the detected language to localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem("language", detectedLang)
    localStorage.setItem("languageAutoDetected", "true") // Mark as auto-detected
  }

  return detectedLang
}
