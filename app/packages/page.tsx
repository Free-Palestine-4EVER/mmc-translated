"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { useTranslation } from "@/lib/translation-context"

export default function PackagesPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-hero.jpg"
          alt="Wadi Rum tour packages and combined experiences"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t("packages.hero.title")}</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {t("packages.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <AnimateOnScroll>
        <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-2xl font-bold">{t("packages.intro.subtitle")}</h2>
            <h3 className="mb-8 text-4xl font-bold">{t("packages.intro.title")}</h3>
            <p className="mx-auto max-w-3xl text-lg">
              {t("packages.intro.description")}
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 2-Day Packages */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("packages.twoDayTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-in" delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/full-day-jeep.jpg"
                    alt="Classic Adventure Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t("packages.classicAdventure.title")}</h3>
                  <p className="text-gray-700 mb-4">
                    {t("packages.classicAdventure.description")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t("common.from")} 120 JOD</p>
                    <Link href="/packages/classic-adventure">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t("common.viewDetails")}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/beduin-way.jpg" alt="Desert Explorer Package" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t("packages.desertExplorer.title")}</h3>
                  <p className="text-gray-700 mb-4">
                    {t("packages.desertExplorer.description")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t("common.from")} 135 JOD</p>
                    <Link href="/packages/desert-explorer">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t("common.viewDetails")}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/blog-stargazing.jpg"
                    alt="Bedouin Experience Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t("packages.bedouinExperience.title")}</h3>
                  <p className="text-gray-700 mb-4">
                    {t("packages.bedouinExperience.description")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t("common.from")} 150 JOD</p>
                    <Link href="/packages/bedouin-experience">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t("common.viewDetails")}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={400}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/sleeping-under-stars.png"
                    alt="Bivouac Camping Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t("packages.bivouacCamping.title")}</h3>
                  <p className="text-gray-700 mb-4">
                    {t("packages.bivouacCamping.description")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t("common.from")} 45 JOD</p>
                    <Link href="/packages/bivouac">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t("common.viewDetails")}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 3-Day Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("packages.threeDayTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-in" delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/wadi-rum-landscape.jpg"
                    alt="Wadi Rum Discovery Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t("packages.wadiRumDiscovery.title")}</h3>
                  <p className="text-gray-700 mb-4">
                    {t("packages.wadiRumDiscovery.description")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t("common.from")} 200 JOD</p>
                    <Link href="/packages/wadi-rum-discovery">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t("common.viewDetails")}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/jebel-um-addami.jpg"
                    alt="Ultimate Adventure Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t("packages.ultimateAdventure.title")}</h3>
                  <p className="text-gray-700 mb-4">
                    {t("packages.ultimateAdventure.description")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t("common.from")} 230 JOD</p>
                    <Link href="/packages/ultimate-adventure">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t("common.viewDetails")}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/burdah-arch.jpg" alt="Jordan Heights Package" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t("packages.jordanHeights.title")}</h3>
                  <p className="text-gray-700 mb-4">
                    {t("packages.jordanHeights.description")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t("common.from")} 250 JOD</p>
                    <Link href="/packages/jordan-heights">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t("common.viewDetails")}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <AnimateOnScroll>
        <section className="py-16 bg-amber-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">{t("packages.cta.title")}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t("packages.cta.description")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact-us">
                <Button className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg">
                  {t("packages.cta.contactUs")}
                </Button>
              </Link>
              <Link href="/desert-experiences">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600 px-6 py-3 rounded-md text-lg"
                >
                  {t("packages.cta.exploreExperiences")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  )
}
