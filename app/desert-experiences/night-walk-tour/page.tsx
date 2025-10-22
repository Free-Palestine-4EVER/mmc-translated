"use client"

import Image from "next/image"
import { BookingForm } from "@/components/booking-form"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { TourCard } from "@/components/tour-card"
import { ImageLightbox } from "@/components/image-lightbox"
import { useTranslation } from "@/lib/translation-context"

export default function NightWalkTourPage() {
  const { t } = useTranslation()
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-night.jpg"
          alt={t("nightWalk.heroAlt")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t("nightWalk.title")}</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {t("nightWalk.subtitle")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-600">{t("nightWalk.overviewTitle")}</h2>
            <p className="mb-6 text-gray-700">
              {t("nightWalk.description1")}
            </p>

            <div className="mb-8">
              <ImageLightbox
                src="/images/wadi-rum-night.jpg"
                alt={t("nightWalk.imageAlt")}
                width={800}
                height={500}
                className="rounded-lg w-full h-auto object-cover mb-6"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("nightWalk.whatToExpectTitle")}</h3>
            <p className="mb-6 text-gray-700">
              {t("nightWalk.description2")}
            </p>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("nightWalk.highlightsTitle")}</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>{t("nightWalk.highlight1")}</li>
              <li>{t("nightWalk.highlight2")}</li>
              <li>{t("nightWalk.highlight3")}</li>
              <li>{t("nightWalk.highlight4")}</li>
              <li>{t("nightWalk.highlight5")}</li>
              <li>{t("nightWalk.highlight6")}</li>
              <li>{t("nightWalk.highlight7")}</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("nightWalk.itineraryTitle")}</h3>
            <div className="mb-8">
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("nightWalk.itinerary1Title")}</h4>
                <p className="text-gray-700">
                  {t("nightWalk.itinerary1Desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("nightWalk.itinerary2Title")}</h4>
                <p className="text-gray-700">
                  {t("nightWalk.itinerary2Desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("nightWalk.itinerary3Title")}</h4>
                <p className="text-gray-700">
                  {t("nightWalk.itinerary3Desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold mb-2">{t("nightWalk.itinerary4Title")}</h4>
                <p className="text-gray-700">
                  {t("nightWalk.itinerary4Desc")}
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("nightWalk.whatToBringTitle")}</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>{t("nightWalk.bring1")}</li>
              <li>{t("nightWalk.bring2")}</li>
              <li>{t("nightWalk.bring3")}</li>
              <li>{t("nightWalk.bring4")}</li>
              <li>{t("nightWalk.bring5")}</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-amber-600">{t("nightWalk.tourDetailsTitle")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">{t("nightWalk.durationLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("nightWalk.duration")}</p>

                  <p className="font-semibold mb-1">{t("nightWalk.difficultyLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("nightWalk.difficulty")}</p>

                  <p className="font-semibold mb-1">{t("nightWalk.groupSizeLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("nightWalk.groupSize")}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">{t("nightWalk.priceLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("nightWalk.price")}</p>

                  <p className="font-semibold mb-1">{t("nightWalk.includesLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("nightWalk.includes")}</p>

                  <p className="font-semibold mb-1">{t("nightWalk.languagesLabel")}</p>
                  <p className="text-gray-700">{t("nightWalk.languages")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-center">{t("nightWalk.bookThisTour")}</h3>
              <BookingForm tourName={t("nightWalk.title")} />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("nightWalk.faqTitle")}</h2>
          <FAQSection faqs={desertExperienceFaqs.slice(0, 6)} />
        </div>

        {/* Related Tours */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("nightWalk.relatedToursTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TourCard
              title={t("nightWalk.relatedTour1.title")}
              slug="stargazing-education"
              description={t("nightWalk.relatedTour1.desc")}
              price={parseInt(t("nightWalk.relatedTour1.price"))}
              duration={t("nightWalk.relatedTour1.duration")}
              image="/images/blog-stargazing.jpg"
            />
            <TourCard
              title={t("nightWalk.relatedTour2.title")}
              slug="half-day-jeep-tour"
              description={t("nightWalk.relatedTour2.desc")}
              price={parseInt(t("nightWalk.relatedTour2.price"))}
              duration={t("nightWalk.relatedTour2.duration")}
              image="/images/half-day-jeep.jpg"
            />
            <TourCard
              title={t("nightWalk.relatedTour3.title")}
              slug="two-hour-jeep-tour"
              description={t("nightWalk.relatedTour3.desc")}
              price={parseInt(t("nightWalk.relatedTour3.price"))}
              duration={t("nightWalk.relatedTour3.duration")}
              image="/images/jeep-tour-card.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
