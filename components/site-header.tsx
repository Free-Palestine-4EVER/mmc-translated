"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { X, Menu, ChevronDown, ChevronUp, Search } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { MobileSearch } from "./mobile-search"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/lib/translation-context"

export function SiteHeader() {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [mobileDesertExpanded, setMobileDesertExpanded] = useState(false)
  const [mobileAccommodationExpanded, setMobileAccommodationExpanded] = useState(false)
  const [mobilePackagesExpanded, setMobilePackagesExpanded] = useState(false)

  // Create a custom event to communicate menu state to other components
  useEffect(() => {
    // Dispatch custom event when menu state changes
    const event = new CustomEvent("menuStateChange", { detail: { isOpen: mobileMenuOpen } })
    window.dispatchEvent(event)
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (mobileSearchOpen) setMobileSearchOpen(false)
  }

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen)
    if (mobileMenuOpen) setMobileMenuOpen(false)
  }

  const toggleMobileDesertExpanded = () => {
    setMobileDesertExpanded(!mobileDesertExpanded)
  }

  const toggleMobileAccommodationExpanded = () => {
    setMobileAccommodationExpanded(!mobileAccommodationExpanded)
  }

  const toggleMobilePackagesExpanded = () => {
    setMobilePackagesExpanded(!mobilePackagesExpanded)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <AnnouncementBar />
      {/* Desktop Header */}
      <div className="hidden md:flex container h-24 items-center justify-between px-4 max-w-full">
        <div className="flex">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/new-logo.png"
              alt="Mohammed Mutlak Camp"
              width={240}
              height={80}
              className="h-auto w-[200px] object-contain"
              priority
            />
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex items-center justify-between w-full space-x-6">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  {t("nav.home")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">{t("nav.desertExperiences")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                    <Link href="/desert-experiences/half-day-jeep-tour" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.halfDay")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.halfDay.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/full-day-jeep-tour" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.fullDay")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.fullDay.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/two-hour-jeep-tour" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.twoHour")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.twoHour.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/the-beduin-way" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.beduinWay")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.beduinWay.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/jebel-khash-route" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.jebelKhash")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.jebelKhash.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/jebel-khash-2" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.jebelKhash2")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.jebelKhash2.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/hot-air-balloon" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("experiences.hotAirBalloon")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("experiences.hotAirBalloon.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/jebel-burdah-climbing" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.burdah")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.burdah.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/all-in-one-day" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.allInOne")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.allInOne.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/um-addami-climbing" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.umAddami")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.umAddami.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/camel-rides" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("experiences.camelRides")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("experiences.camelRides.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/trekking" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.trekking")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.trekking.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/night-walk-tour" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.nightWalk")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.nightWalk.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/stargazing-education" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("tours.stargazing")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("tours.stargazing.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">{t("nav.packages")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="col-span-2">
                    <Link href="/packages/bivouac" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("packages.bivouac")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("packages.bivouac.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li className="col-span-2">
                    <div className="mb-2 mt-3 font-medium px-3">{t("packages.2day")}</div>
                  </li>
                  <li>
                    <Link href="/packages/classic-adventure" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("packages.classic")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("packages.classic.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages/desert-explorer" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("packages.explorer")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("packages.explorer.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages/bedouin-experience" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("packages.bedouin")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("packages.bedouin.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li className="col-span-2">
                    <div className="mb-2 mt-3 font-medium px-3">{t("packages.3day")}</div>
                  </li>
                  <li>
                    <Link href="/packages/wadi-rum-discovery" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("packages.discovery")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("packages.discovery.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages/ultimate-adventure" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("packages.ultimate")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("packages.ultimate.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages/jordan-heights" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("packages.heights")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("packages.heights.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">{t("nav.accommodation")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <Link href="/accommodation/our-tented-camp" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("accommodation.tentedCamp")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("accommodation.tentedCamp.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/accommodation/bivouac" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{t("accommodation.bivouac")}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("accommodation.bivouac.desc")}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/bubble-camp-partner" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  {t("nav.bubbleCamp")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="https://www.thevillas-wadirum.com/"
                target="_blank"
                rel="noopener noreferrer"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  {t("nav.luxuryVillas")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  {t("nav.aboutUs")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  {t("nav.contactUs")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/useful-information" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  {t("nav.usefulInfo")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  {t("nav.faq")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-3">
          <LanguageSelector />
          <Link href="/contact-us">
            <Button className="bg-amber-500 hover:bg-amber-600">{t("nav.bookNow")}</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Header - Completely restructured with grid */}
      <div className="md:hidden grid grid-cols-4 h-24 items-center px-4 gap-2">
        <div className="col-span-1 flex justify-start">
          <button onClick={toggleMobileSearch} aria-label="Search" className="p-2">
            <Search className="h-7 w-7 text-amber-500" />
          </button>
        </div>
        <div className="col-span-2 flex justify-center">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/images/new-logo.png"
              alt="Mohammed Mutlak Camp"
              width={563}
              height={188}
              className="h-auto object-contain"
              priority
            />
          </Link>
        </div>
        <div className="col-span-1 flex justify-end items-center gap-1">
          <div className="scale-90">
            <LanguageSelector />
          </div>
          <button onClick={toggleMobileMenu} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} className="p-2">
            <Menu className="h-7 w-7 text-amber-500" />
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {mobileSearchOpen && <MobileSearch onClose={() => setMobileSearchOpen(false)} />}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden">
          <div className="flex items-center justify-between p-4">
            <div className="w-6"></div> {/* Empty div for spacing */}
            <div className="flex justify-center flex-1">
              <Image
                src="/images/new-logo.png"
                alt="Mohammed Mutlak Camp"
                width={187}
                height={62}
                className="h-auto object-contain mx-auto"
                priority
              />
            </div>
            <button onClick={toggleMobileMenu} aria-label="Close menu" className="p-2 text-amber-500">
              <X className="h-8 w-8" />
            </button>
          </div>

          <div className="container overflow-y-auto pb-12 pt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>

              <div className="py-2 border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium"
                  onClick={toggleMobileDesertExpanded}
                >
                  <div className="flex items-center gap-2">
                    <span>{t("nav.desertExperiences")}</span>
                    <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                      {t("desertExperiences.discount")}
                    </span>
                  </div>
                  {mobileDesertExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {mobileDesertExpanded && (
                  <div className="mt-2 pl-4 flex flex-col space-y-2">
                    <Link
                      href="/desert-experiences/half-day-jeep-tour"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.halfDay")}
                    </Link>
                    <Link
                      href="/desert-experiences/full-day-jeep-tour"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.fullDay")}
                    </Link>
                    <Link
                      href="/desert-experiences/two-hour-jeep-tour"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.twoHour")}
                    </Link>
                    <Link
                      href="/desert-experiences/the-beduin-way"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.beduinWay")}
                    </Link>
                    <Link
                      href="/desert-experiences/jebel-khash-route"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.jebelKhash")}
                    </Link>
                    <Link
                      href="/desert-experiences/jebel-khash-2"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.jebelKhash2")}
                    </Link>
                    <Link
                      href="/desert-experiences/hot-air-balloon"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("experiences.hotAirBalloon")}
                    </Link>
                    <Link
                      href="/desert-experiences/jebel-burdah-climbing"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.burdah")}
                    </Link>
                    <Link
                      href="/desert-experiences/all-in-one-day"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.allInOne")}
                    </Link>
                    <Link
                      href="/desert-experiences/um-addami-climbing"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.umAddami")}
                    </Link>
                    <Link
                      href="/desert-experiences/camel-rides"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("experiences.camelRides")}
                    </Link>
                    <Link
                      href="/desert-experiences/trekking"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.trekking")}
                    </Link>
                    <Link
                      href="/desert-experiences/night-walk-tour"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.nightWalk")}
                    </Link>
                    <Link
                      href="/desert-experiences/stargazing-education"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("tours.stargazing")}
                    </Link>
                  </div>
                )}
              </div>

              <div className="py-2 border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium"
                  onClick={toggleMobilePackagesExpanded}
                >
                  <span>{t("nav.packages")}</span>
                  {mobilePackagesExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {mobilePackagesExpanded && (
                  <div className="mt-2 pl-4 flex flex-col space-y-2">
                    <Link
                      href="/packages/bivouac"
                      className="text-gray-600 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("packages.bivouac")}
                    </Link>
                    <div className="font-medium text-gray-800 mt-3 mb-1">{t("packages.2day")}</div>
                    <Link
                      href="/packages/classic-adventure"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("packages.classic")}
                    </Link>
                    <Link
                      href="/packages/desert-explorer"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("packages.explorer")}
                    </Link>
                    <Link
                      href="/packages/bedouin-experience"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("packages.bedouin")}
                    </Link>
                    <div className="font-medium text-gray-800 mt-2 mb-1">{t("packages.3day")}</div>
                    <Link
                      href="/packages/wadi-rum-discovery"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("packages.discovery")}
                    </Link>
                    <Link
                      href="/packages/ultimate-adventure"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("packages.ultimate")}
                    </Link>
                    <Link
                      href="/packages/jordan-heights"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("packages.heights")}
                    </Link>
                  </div>
                )}
              </div>

              <div className="py-2 border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium"
                  onClick={toggleMobileAccommodationExpanded}
                >
                  <span>{t("nav.accommodation")}</span>
                  {mobileAccommodationExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {mobileAccommodationExpanded && (
                  <div className="mt-2 pl-4 flex flex-col space-y-2">
                    <Link
                      href="/accommodation/our-tented-camp"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("accommodation.tentedCamp")}
                    </Link>
                    <Link
                      href="/accommodation/bivouac"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("accommodation.bivouac")}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/bubble-camp-partner"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.bubbleCampPartner")}
              </Link>

              <Link
                href="https://www.thevillas-wadirum.com/"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("nav.luxuryVillasPartner")}
              </Link>

              <Link
                href="/about-us"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.aboutUs")}
              </Link>

              <Link
                href="/contact-us"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.contactUs")}
              </Link>

              <Link
                href="/useful-information"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.usefulInfo")}
              </Link>

              <Link
                href="/faq"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.faq")}
              </Link>

              <div className="mt-4">
                <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600">{t("nav.bookNow")}</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
