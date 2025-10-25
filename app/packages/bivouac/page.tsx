"use client"

import Image from "next/image"
import { BivouacBookingForm } from "@/components/bivouac-booking-form"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { useTranslation } from "@/lib/translation-context"

export default function BivouacPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-night.jpg"
          alt={t('pkgBivouac.hero.imageAlt')}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('pkgBivouac.hero.title')}</h1>
          <p className="text-lg md:text-xl max-w-3xl">{t('pkgBivouac.hero.subtitle')}</p>
        </div>
      </div>

      {/* Intro Section */}
      <AnimateOnScroll>
        <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-2xl font-bold">{t('pkgBivouac.intro.subtitle')}</h2>
            <h3 className="mb-8 text-4xl font-bold">{t('pkgBivouac.intro.title')}</h3>
            <p className="mx-auto max-w-3xl text-lg">
              {t('pkgBivouac.intro.description')}
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* What is Bivouac Camping Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-amber-600">{t('pkgBivouac.whatIs.title')}</h2>
                <p className="text-gray-700 mb-4">{t('pkgBivouac.whatIs.p1')}</p>
                <p className="text-gray-700 mb-4">{t('pkgBivouac.whatIs.p2')}</p>
                <p className="text-gray-700">{t('pkgBivouac.whatIs.p3')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/sleeping-under-stars.png"
                  alt={t('pkgBivouac.whatIs.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('pkgBivouac.included.sectionTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">{t('pkgBivouac.included.sleeping.title')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.included.sleeping.desc')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">{t('pkgBivouac.included.meals.title')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.included.meals.desc')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">{t('pkgBivouac.included.guides.title')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.included.guides.desc')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">{t('pkgBivouac.included.locations.title')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.included.locations.desc')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">{t('pkgBivouac.included.campfire.title')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.included.campfire.desc')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">{t('pkgBivouac.included.facilities.title')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.included.facilities.desc')}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Bivouac Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-right">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/desert-night.png"
                  alt={t('pkgBivouac.whyChoose.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-amber-600">{t('pkgBivouac.whyChoose.title')}</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>{t('pkgBivouac.whyChoose.authentic')}</strong> {t('pkgBivouac.whyChoose.authenticDesc')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>{t('pkgBivouac.whyChoose.stargazing')}</strong> {t('pkgBivouac.whyChoose.stargazingDesc')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>{t('pkgBivouac.whyChoose.nature')}</strong> {t('pkgBivouac.whyChoose.natureDesc')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>{t('pkgBivouac.whyChoose.flexibility')}</strong> {t('pkgBivouac.whyChoose.flexibilityDesc')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>{t('pkgBivouac.whyChoose.value')}</strong> {t('pkgBivouac.whyChoose.valueDesc')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>{t('pkgBivouac.whyChoose.cultural')}</strong> {t('pkgBivouac.whyChoose.culturalDesc')}
                    </span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('pkgBivouac.booking.title')}</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            {t('pkgBivouac.booking.description')}
          </p>
          <div className="max-w-4xl mx-auto">
            <BivouacBookingForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('pkgBivouac.faq.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">{t('pkgBivouac.faq.q1')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.faq.a1')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">{t('pkgBivouac.faq.q2')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.faq.a2')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">{t('pkgBivouac.faq.q3')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.faq.a3')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">{t('pkgBivouac.faq.q4')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.faq.a4')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">{t('pkgBivouac.faq.q5')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.faq.a5')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">{t('pkgBivouac.faq.q6')}</h3>
                <p className="text-gray-700">{t('pkgBivouac.faq.a6')}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <AnimateOnScroll>
        <section className="py-16 bg-amber-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">{t('pkgBivouac.cta.title')}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t('pkgBivouac.cta.description')}
            </p>
            <p className="text-lg mb-8">{t('pkgBivouac.cta.contact')}</p>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  )
}
