"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BookingForm } from "@/components/booking-form"
import { useTranslation } from "@/lib/translation-context"

export default function ClassicAdventurePage() {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/full-day-jeep.jpg"
          alt={t('pkgClassic.hero.imageAlt')}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('pkgClassic.hero.title')}</h1>
          <p className="text-lg md:text-xl max-w-3xl">{t('pkgClassic.hero.subtitle')}</p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimateOnScroll>
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">{t('pkgClassic.overview.title')}</h2>
                <p className="text-lg mb-6">{t('pkgClassic.overview.p1')}</p>
                <p className="text-lg mb-6">{t('pkgClassic.overview.p2')}</p>
                <div className="bg-amber-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">{t('pkgClassic.highlights.title')}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgClassic.highlights.item1')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgClassic.highlights.item2')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgClassic.highlights.item3')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgClassic.highlights.item4')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgClassic.highlights.item5')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{t('pkgClassic.highlights.item6')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-4">{t('pkgClassic.details.title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">{t('pkgClassic.details.duration')}</p>
                      <p>{t('pkgClassic.details.durationValue')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.details.price')}</p>
                      <p className="text-2xl font-bold text-amber-600">{t('pkgClassic.details.priceValue')}</p>
                      <p className="text-sm text-gray-600">{t('pkgClassic.details.priceNote')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.details.difficulty')}</p>
                      <p>{t('pkgClassic.details.difficultyValue')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.details.suitableFor')}</p>
                      <p>{t('pkgClassic.details.suitableForValue')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.details.departure')}</p>
                      <p>{t('pkgClassic.details.departureValue')}</p>
                    </div>
                    <Link href="#booking">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 mt-4">{t('pkgClassic.details.bookButton')}</Button>
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
          <h2 className="text-3xl font-bold mb-10 text-center">{t('pkgClassic.itinerary.title')}</h2>

          {/* Day 1 */}
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold">{t('pkgClassic.day1.title')}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day1.time1')}</p>
                      <p>{t('pkgClassic.day1.desc1')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day1.time2')}</p>
                      <p>{t('pkgClassic.day1.desc2')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day1.time3')}</p>
                      <p>{t('pkgClassic.day1.desc3')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day1.time4')}</p>
                      <p>{t('pkgClassic.day1.desc4')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day1.time5')}</p>
                      <p>{t('pkgClassic.day1.desc5')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day1.time6')}</p>
                      <p>{t('pkgClassic.day1.desc6')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day1.time7')}</p>
                      <p>{t('pkgClassic.day1.desc7')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day1.time8')}</p>
                      <p>{t('pkgClassic.day1.desc8')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day1.time9')}</p>
                      <p>{t('pkgClassic.day1.desc9')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day1.time10')}</p>
                      <p>{t('pkgClassic.day1.desc10')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day1.time11')}</p>
                      <p>{t('pkgClassic.day1.desc11')}</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/full-day-jeep-main.jpg"
                      alt={t('pkgClassic.day1.imageAlt')}
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
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold">{t('pkgClassic.day2.title')}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day2.time1')}</p>
                      <p>{t('pkgClassic.day2.desc1')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day2.time2')}</p>
                      <p>{t('pkgClassic.day2.desc2')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day2.time3')}</p>
                      <p>{t('pkgClassic.day2.desc3')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day2.time4')}</p>
                      <p>{t('pkgClassic.day2.desc4')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day2.time5')}</p>
                      <p>{t('pkgClassic.day2.desc5')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day2.time6')}</p>
                      <p>{t('pkgClassic.day2.desc6')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day2.time7')}</p>
                      <p>{t('pkgClassic.day2.desc7')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t('pkgClassic.day2.time8')}</p>
                      <p>{t('pkgClassic.day2.desc8')}</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image src="/images/hiking-trekking.jpg" alt={t('pkgClassic.day2.imageAlt')} fill className="object-cover" />
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
                <h2 className="text-2xl font-bold mb-6">{t('pkgClassic.included.title')}</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgClassic.included.item1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgClassic.included.item2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgClassic.included.item3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgClassic.included.item4')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgClassic.included.item5')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgClassic.included.item6')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('pkgClassic.included.item7')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('pkgClassic.notIncluded.title')}</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>{t('pkgClassic.notIncluded.item1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>{t('pkgClassic.notIncluded.item2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>{t('pkgClassic.notIncluded.item3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>{t('pkgClassic.notIncluded.item4')}</span>
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
          <h2 className="text-3xl font-bold mb-10 text-center">{t('pkgClassic.booking.title')}</h2>
          <div className="max-w-3xl mx-auto">
            <BookingForm tourName="Classic Adventure Package" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <AnimateOnScroll>
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 text-center">{t('pkgClassic.faq.title')}</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">{t('pkgClassic.faq.q1')}</h3>
                <p>{t('pkgClassic.faq.a1')}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">{t('pkgClassic.faq.q2')}</h3>
                <p>{t('pkgClassic.faq.a2')}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">{t('pkgClassic.faq.q3')}</h3>
                <p>{t('pkgClassic.faq.a3')}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">{t('pkgClassic.faq.q4')}</h3>
                <p>{t('pkgClassic.faq.a4')}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">{t('pkgClassic.faq.q5')}</h3>
                <p>{t('pkgClassic.faq.a5')}</p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Related Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('pkgClassic.related.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-in" delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/beduin-way.jpg" alt={t('pkgClassic.related.explorer.imageAlt')} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('pkgClassic.related.explorer.title')}</h3>
                  <p className="text-gray-700 mb-4">{t('pkgClassic.related.explorer.desc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t('pkgClassic.related.explorer.price')}</p>
                    <Link href="/packages/desert-explorer">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t('pkgClassic.related.viewDetails')}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/blog-stargazing.jpg"
                    alt={t('pkgClassic.related.bedouin.imageAlt')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('pkgClassic.related.bedouin.title')}</h3>
                  <p className="text-gray-700 mb-4">{t('pkgClassic.related.bedouin.desc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t('pkgClassic.related.bedouin.price')}</p>
                    <Link href="/packages/bedouin-experience">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t('pkgClassic.related.viewDetails')}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/wadi-rum-landscape.jpg"
                    alt={t('pkgClassic.related.discovery.imageAlt')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('pkgClassic.related.discovery.title')}</h3>
                  <p className="text-gray-700 mb-4">{t('pkgClassic.related.discovery.desc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">{t('pkgClassic.related.discovery.price')}</p>
                    <Link href="/packages/wadi-rum-discovery">
                      <Button className="bg-amber-500 hover:bg-amber-600">{t('pkgClassic.related.viewDetails')}</Button>
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
