"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BookingForm } from "@/components/booking-form"
import { useTranslation } from "@/lib/translation-context"

export default function UltimateAdventurePage() {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/jebel-um-addami.jpg"
          alt={t('pkgUltimate.hero.imageAlt')}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('pkgUltimate.hero.title')}</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {t('pkgUltimate.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimateOnScroll>
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">{t('pkgUltimate.overview.title')}</h2>
                <p className="text-lg mb-6">
                  {t('pkgUltimate.overview.p1')}
                </p>
                <p className="text-lg mb-6">
                  {t('pkgUltimate.overview.p2')}
                </p>
                <div className="bg-amber-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">{t('pkgUltimate.highlights.title')}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgUltimate.highlights.item1')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgUltimate.highlights.item2')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgUltimate.highlights.item3')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgUltimate.highlights.item4')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgUltimate.highlights.item5')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgUltimate.highlights.item6')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-4">{t('pkgUltimate.details.title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.details.duration')}</p>
                      <p>{t('pkgUltimate.details.durationValue')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.details.price')}</p>
                      <p className="text-2xl font-bold text-amber-600">{t('pkgUltimate.details.priceValue')}</p>
                      <p className="text-sm text-gray-600">{t('pkgUltimate.details.priceNote')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.details.difficulty')}</p>
                      <p>{t('pkgUltimate.details.difficultyValue')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.details.suitableFor')}</p>
                      <p>{t('pkgUltimate.details.suitableForValue')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.details.departure')}</p>
                      <p>{t('pkgUltimate.details.departureValue')}</p>
                    </div>
                    <Link href="#booking">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 mt-4">{t('pkgUltimate.details.bookButton')}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Detailed Itinerary */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('pkgUltimate.itinerary.title')}</h2>

          {/* Day 1 */}
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold">{t('pkgUltimate.day1.title')}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day1.time1')}</p>
                      <p>{t('pkgUltimate.day1.desc1')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day1.time2')}</p>
                      <p>{t('pkgUltimate.day1.desc2')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day1.time3')}</p>
                      <p>{t('pkgUltimate.day1.desc3')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day1.time4')}</p>
                      <p>{t('pkgUltimate.day1.desc4')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day1.time5')}</p>
                      <p>{t('pkgUltimate.day1.desc5')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day1.time6')}</p>
                      <p>{t('pkgUltimate.day1.desc6')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day1.time7')}</p>
                      <p>{t('pkgUltimate.day1.desc7')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day1.time8')}</p>
                      <p>{t('pkgUltimate.day1.desc8')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day1.time9')}</p>
                      <p>{t('pkgUltimate.day1.desc9')}</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/wadi-rum-adventure.jpg"
                      alt={t('pkgUltimate.day1.imageAlt')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Day 2 */}
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold">{t('pkgUltimate.day2.title')}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day2.time1')}</p>
                      <p>{t('pkgUltimate.day2.desc1')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day2.time2')}</p>
                      <p>{t('pkgUltimate.day2.desc2')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day2.time3')}</p>
                      <p>{t('pkgUltimate.day2.desc3')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day2.time4')}</p>
                      <p>{t('pkgUltimate.day2.desc4')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day2.time5')}</p>
                      <p>{t('pkgUltimate.day2.desc5')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day2.time6')}</p>
                      <p>{t('pkgUltimate.day2.desc6')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day2.time7')}</p>
                      <p>{t('pkgUltimate.day2.desc7')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day2.time8')}</p>
                      <p>{t('pkgUltimate.day2.desc8')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day2.time9')}</p>
                      <p>{t('pkgUltimate.day2.desc9')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day2.time10')}</p>
                      <p>{t('pkgUltimate.day2.desc10')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day2.time11')}</p>
                      <p>{t('pkgUltimate.day2.desc11')}</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/jebel-um-addami.jpg"
                      alt={t('pkgUltimate.day2.imageAlt')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Day 3 */}
          <AnimateOnScroll>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="text-2xl font-bold">{t('pkgUltimate.day3.title')}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day3.time1')}</p>
                      <p>{t('pkgUltimate.day3.desc1')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day3.time2')}</p>
                      <p>{t('pkgUltimate.day3.desc2')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day3.time3')}</p>
                      <p>{t('pkgUltimate.day3.desc3')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day3.time4')}</p>
                      <p>{t('pkgUltimate.day3.desc4')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day3.time5')}</p>
                      <p>{t('pkgUltimate.day3.desc5')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day3.time6')}</p>
                      <p>{t('pkgUltimate.day3.desc6')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day3.time7')}</p>
                      <p>{t('pkgUltimate.day3.desc7')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgUltimate.day3.time8')}</p>
                      <p>{t('pkgUltimate.day3.desc8')}</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image src="/images/wadi-rum-night.jpg" alt={t('pkgUltimate.day3.imageAlt')} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What's Included */}
      <AnimateOnScroll>
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('pkgUltimate.included.title')}</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgUltimate.included.item1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgUltimate.included.item2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgUltimate.included.item3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgUltimate.included.item4')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgUltimate.included.item5')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgUltimate.included.item6')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgUltimate.included.item7')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgUltimate.included.item8')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgUltimate.included.item9')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgUltimate.included.item10')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('pkgUltimate.notIncluded.title')}</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>{t('pkgUltimate.notIncluded.item1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>{t('pkgUltimate.notIncluded.item2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>{t('pkgUltimate.notIncluded.item3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>{t('pkgUltimate.notIncluded.item4')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>{t('pkgUltimate.notIncluded.item5')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('pkgUltimate.booking.title')}</h2>
          <div className="max-w-3xl mx-auto">
            <BookingForm tourName="Ultimate Adventure Package" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <AnimateOnScroll>
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 text-center">{t('pkgUltimate.faq.title')}</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">{t('pkgUltimate.faq.q1')}</h3>
                <p>{t('pkgUltimate.faq.a1')}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">{t('pkgUltimate.faq.q2')}</h3>
                <p>{t('pkgUltimate.faq.a2')}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">{t('pkgUltimate.faq.q3')}</h3>
                <p>{t('pkgUltimate.faq.a3')}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">{t('pkgUltimate.faq.q4')}</h3>
                <p>{t('pkgUltimate.faq.a4')}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">{t('pkgUltimate.faq.q5')}</h3>
                <p>{t('pkgUltimate.faq.a5')}</p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Related Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('pkgUltimate.related.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-in" delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/burdah-arch.jpg" alt={t('pkgUltimate.related.pkg1.imageAlt')} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('pkgUltimate.related.pkg1.title')}</h3>
                  <p className="text-gray-700 mb-4">
                    {t('pkgUltimate.related.pkg1.desc')}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t('pkgUltimate.related.pkg1.price')}</p>
                    <Link href="/packages/jordan-heights">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t('common.viewDetails')}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/wadi-rum-landscape.jpg"
                    alt={t('pkgUltimate.related.pkg2.imageAlt')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('pkgUltimate.related.pkg2.title')}</h3>
                  <p className="text-gray-700 mb-4">
                    {t('pkgUltimate.related.pkg2.desc')}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t('pkgUltimate.related.pkg2.price')}</p>
                    <Link href="/packages/wadi-rum-discovery">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t('common.viewDetails')}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/beduin-way.jpg" alt={t('pkgUltimate.related.pkg3.imageAlt')} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('pkgUltimate.related.pkg3.title')}</h3>
                  <p className="text-gray-700 mb-4">
                    {t('pkgUltimate.related.pkg3.desc')}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t('pkgUltimate.related.pkg3.price')}</p>
                    <Link href="/packages/desert-explorer">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t('common.viewDetails')}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  )
}
