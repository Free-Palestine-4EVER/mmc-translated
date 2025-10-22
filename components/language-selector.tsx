"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/lib/translation-context"

export function LanguageSelector() {
  const { language, setLanguage } = useTranslation()

  const languages = [
    { code: "en", name: "English", display: "EN", flag: "🇬🇧" },
    { code: "ar", name: "العربية", display: "AR", flag: "🇯🇴" },
    { code: "es", name: "Español", display: "ES", flag: "🇪🇸" },
    { code: "fr", name: "Français", display: "FR", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", display: "DE", flag: "🇩🇪" },
    { code: "it", name: "Italiano", display: "IT", flag: "🇮🇹" },
  ]

  const currentLang = languages.find((lang) => lang.code === language)

  const handleLanguageChange = (code: "en" | "ar" | "es" | "fr" | "de" | "it") => {
    setLanguage(code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <span className="text-lg">{currentLang?.flag || "🇬🇧"}</span>
          <span className="hidden sm:inline">{currentLang?.display || "EN"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code as any)}
            className={`gap-2 cursor-pointer ${language === lang.code ? "bg-amber-50" : ""}`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
