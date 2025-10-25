"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Check } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"
import { useTranslation } from "@/lib/translation-context"

export default function BubbleCampPartnerPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bubble-camp-hero.jpg"
            alt={t('bubbleCamp.hero.imageAlt')}
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">{t('bubbleCamp.hero.title')}</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            {t('bubbleCamp.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">{t('bubbleCamp.intro.subtitle')}</h2>
          <h3 className="mb-8 text-4xl font-bold">{t('bubbleCamp.intro.title')}</h3>
          <p className="mx-auto max-w-3xl text-lg">
            {t('bubbleCamp.intro.description')}
          </p>
        </div>
      </section>

      {/* Bubble Options */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Luxury Bubble */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-6 overflow-hidden rounded-lg">
                <ImageLightbox
                  src="/images/luxury-bubble.jpg"
                  alt={t('bubbleCamp.luxury.imageAlt')}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <ImageLightbox
                    src="/images/luxury-bubble-1.jpg"
                    alt={t('bubbleCamp.luxury.imageAlt')}
                    width={200}
                    height={150}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                  <ImageLightbox
                    src="/images/luxury-bubble-2.jpg"
                    alt={t('bubbleCamp.luxury.imageAlt')}
                    width={200}
                    height={150}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                  <ImageLightbox
                    src="/images/luxury-bubble-3.jpg"
                    alt={t('bubbleCamp.luxury.imageAlt')}
                    width={200}
                    height={150}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold">{t('bubbleCamp.luxury.title')}</h3>
              <p className="mb-6 text-gray-700">
                {t('bubbleCamp.luxury.description')}
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.luxury.amenity1')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.luxury.amenity2')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.luxury.amenity3')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.luxury.amenity4')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.luxury.amenity5')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.luxury.amenity6')}</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-lg font-bold text-amber-600">{t('bubbleCamp.luxury.price')}</div>
                <div className="text-sm text-gray-600">{t('bubbleCamp.luxury.priceNote')}</div>
              </div>
              <Link href="/contact-us">
                <Button className="w-full bg-amber-500 hover:bg-amber-600">{t('bubbleCamp.luxury.bookButton')}</Button>
              </Link>
            </div>

            {/* Standard Bubble */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-6 overflow-hidden rounded-lg">
                <ImageLightbox
                  src="/images/standard-bubble.jpg"
                  alt={t('bubbleCamp.standard.imageAlt')}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <ImageLightbox
                    src="/images/standard-bubble-1.jpg"
                    alt={t('bubbleCamp.standard.imageAlt')}
                    width={200}
                    height={150}
                    className="rounded-lg"
                  />
                  <ImageLightbox
                    src="/images/standard-bubble-2.jpg"
                    alt={t('bubbleCamp.standard.imageAlt')}
                    width={200}
                    height={150}
                    className="rounded-lg"
                  />
                  <ImageLightbox
                    src="/images/standard-bubble-3.jpg"
                    alt={t('bubbleCamp.standard.imageAlt')}
                    width={200}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold">{t('bubbleCamp.standard.title')}</h3>
              <p className="mb-6 text-gray-700">
                {t('bubbleCamp.standard.description')}
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.standard.amenity1')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.standard.amenity2')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.standard.amenity3')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.standard.amenity4')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.standard.amenity5')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>{t('bubbleCamp.standard.amenity6')}</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-lg font-bold text-amber-600">{t('bubbleCamp.standard.price')}</div>
                <div className="text-sm text-gray-600">{t('bubbleCamp.standard.priceNote')}</div>
              </div>
              <Link href="/contact-us">
                <Button className="w-full bg-amber-500 hover:bg-amber-600">{t('bubbleCamp.standard.bookButton')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Details */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">{t('bubbleCamp.experience.title')}</h2>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="mb-4 text-2xl font-bold">{t('bubbleCamp.stargazing.title')}</h3>
              <p className="mb-4 text-gray-700">
                {t('bubbleCamp.stargazing.description1')}
              </p>
              <p className="text-gray-700">
                {t('bubbleCamp.stargazing.description2')}
              </p>
            </div>
            <div>
              <ImageLightbox
                src="/images/stargazing-bubble.jpg"
                alt={t('bubbleCamp.stargazing.imageAlt')}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <ImageLightbox
                src="/images/bubble-dining.jpg"
                alt={t('bubbleCamp.dining.imageAlt')}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="mb-4 text-2xl font-bold">{t('bubbleCamp.dining.title')}</h3>
              <p className="mb-4 text-gray-700">
                {t('bubbleCamp.dining.description1')}
              </p>
              <p className="text-gray-700">
                {t('bubbleCamp.dining.description2')}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="mb-4 text-2xl font-bold">{t('bubbleCamp.activities.title')}</h3>
              <p className="mb-4 text-gray-700">
                {t('bubbleCamp.activities.description1')}
              </p>
              <p className="text-gray-700">
                {t('bubbleCamp.activities.description2')}
              </p>
            </div>
            <div>
              <ImageLightbox
                src="/images/bubble-activities.jpg"
                alt={t('bubbleCamp.activities.imageAlt')}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">{t('bubbleCamp.booking.title')}</h2>
          <div className="mx-auto max-w-lg">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">{t('bubbleCamp.faq.title')}</h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{t('bubbleCamp.faq.q1')}</h3>
              <p className="text-gray-700">
                {t('bubbleCamp.faq.a1')}
              </p>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{t('bubbleCamp.faq.q2')}</h3>
              <p className="text-gray-700">
                {t('bubbleCamp.faq.a2')}
              </p>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{t('bubbleCamp.faq.q3')}</h3>
              <p className="text-gray-700">
                {t('bubbleCamp.faq.a3')}
              </p>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{t('bubbleCamp.faq.q4')}</h3>
              <p className="text-gray-700">
                {t('bubbleCamp.faq.a4')}
              </p>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{t('bubbleCamp.faq.q5')}</h3>
              <p className="text-gray-700">
                {t('bubbleCamp.faq.a5')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">{t('bubbleCamp.expertTeam.title')}</h2>
          <h3 className="mb-8 text-4xl font-bold">{t('bubbleCamp.expertTeam.subtitle')}</h3>
          <p className="mb-12 text-lg">{t('bubbleCamp.expertTeam.description')}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-1.jpg"
                alt={t('bubbleCamp.expertTeam.teamMemberAlt')}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-2.jpg"
                alt={t('bubbleCamp.expertTeam.teamMemberAlt')}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-3.jpg"
                alt={t('bubbleCamp.expertTeam.teamMemberAlt')}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-4.jpg"
                alt={t('bubbleCamp.expertTeam.teamMemberAlt')}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-5.jpg"
                alt={t('bubbleCamp.expertTeam.teamMemberAlt')}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/962777424937"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('bubbleCamp.expertTeam.chatButton')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
