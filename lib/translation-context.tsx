"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { getInitialLanguage } from "@/lib/geolocation"

type Language = "en" | "ar" | "es" | "fr" | "de" | "it"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [translations, setTranslations] = useState<Record<string, string>>({})
  const [isLoadingLanguage, setIsLoadingLanguage] = useState(true)

  useEffect(() => {
    // Load language with IP-based detection fallback
    async function loadLanguage() {
      try {
        const initialLang = await getInitialLanguage()
        setLanguageState(initialLang)

        // Update HTML dir attribute for RTL languages
        document.documentElement.dir = initialLang === "ar" ? "rtl" : "ltr"
        document.documentElement.lang = initialLang
      } catch (error) {
        console.error("Failed to load initial language:", error)
        // Default to English on error
        setLanguageState("en")
      } finally {
        setIsLoadingLanguage(false)
      }
    }

    loadLanguage()
  }, [])

  useEffect(() => {
    // Load translations for current language
    import(`@/translations/${language}.json`)
      .then((module) => setTranslations(module.default))
      .catch(() => setTranslations({}))
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    // Update HTML dir attribute for RTL languages
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[key] || key
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider")
  }
  return context
}
