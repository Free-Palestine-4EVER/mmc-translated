"use client"

import Image from "next/image"
import { BookingForm } from "@/components/booking-form"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { TourCard } from "@/components/tour-card"
import { ImageLightbox } from "@/components/image-lightbox"
import { useTranslation } from "@/lib/translation-context"

export default function TwoHourJeepTourPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/jeep-tour-card.jpg"
          alt={t("twoHourJeep.heroAlt")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t("twoHourJeep.title")}</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {t("twoHourJeep.subtitle")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-600">{t("twoHourJeep.overviewTitle")}</h2>
            <p className="mb-6 text-gray-700">
              {t("twoHourJeep.description1")}
            </p>

            <div className="mb-8">
              <ImageLightbox
                src="/images/jeep-tour-card.jpg"
                alt={t("twoHourJeep.imageAlt")}
                width={800}
                height={500}
                className="rounded-lg w-full h-auto object-cover mb-6"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("twoHourJeep.whatToExpectTitle")}</h3>
            <p className="mb-6 text-gray-700">
              {t("twoHourJeep.description2")}
            </p>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("twoHourJeep.highlightsTitle")}</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>{t("twoHourJeep.highlight1")}</li>
              <li>{t("twoHourJeep.highlight2")}</li>
              <li>{t("twoHourJeep.highlight3")}</li>
              <li>{t("twoHourJeep.highlight4")}</li>
              <li>{t("twoHourJeep.highlight5")}</li>
              <li>{t("twoHourJeep.highlight6")}</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("twoHourJeep.itineraryTitle")}</h3>
            <p className="mb-4 text-gray-700">
              {t("twoHourJeep.itineraryIntro")}
            </p>
            <div className="mb-8">
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("twoHourJeep.lawrenceSpring.title")}</h4>
                <p className="text-gray-700">
                  {t("twoHourJeep.lawrenceSpring.desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("twoHourJeep.smallSandDune.title")}</h4>
                <p className="text-gray-700">
                  {t("twoHourJeep.smallSandDune.desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("twoHourJeep.khazaliCanyon.title")}</h4>
                <p className="text-gray-700">
                  {t("twoHourJeep.khazaliCanyon.desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold mb-2">{t("twoHourJeep.returnToCamp.title")}</h4>
                <p className="text-gray-700">
                  {t("twoHourJeep.returnToCamp.desc")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ImageLightbox
                src="/images/half-day-jeep-1.jpg"
                alt={t("twoHourJeep.image1Alt")}
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
              <ImageLightbox
                src="/images/half-day-jeep-2.jpg"
                alt={t("twoHourJeep.image2Alt")}
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("twoHourJeep.whatToBringTitle")}</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>{t("twoHourJeep.bring1")}</li>
              <li>{t("twoHourJeep.bring2")}</li>
              <li>{t("twoHourJeep.bring3")}</li>
              <li>{t("twoHourJeep.bring4")}</li>
              <li>{t("twoHourJeep.bring5")}</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-amber-600">{t("twoHourJeep.tourDetailsTitle")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">{t("twoHourJeep.durationLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("twoHourJeep.duration")}</p>

                  <p className="font-semibold mb-1">{t("twoHourJeep.difficultyLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("twoHourJeep.difficulty")}</p>

                  <p className="font-semibold mb-1">{t("twoHourJeep.groupSizeLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("twoHourJeep.groupSize")}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">{t("twoHourJeep.priceLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("twoHourJeep.price")}</p>

                  <p className="font-semibold mb-1">{t("twoHourJeep.includesLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("twoHourJeep.includes")}</p>

                  <p className="font-semibold mb-1">{t("twoHourJeep.languagesLabel")}</p>
                  <p className="text-gray-700">{t("twoHourJeep.languages")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-center">{t("twoHourJeep.bookThisTour")}</h3>
              <BookingForm tourName="2 Hours Jeep Tour" />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("twoHourJeep.faqTitle")}</h2>
          <FAQSection faqs={desertExperienceFaqs.slice(0, 6)} />
        </div>

        {/* Related Tours */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("twoHourJeep.relatedToursTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TourCard
              title={t("twoHourJeep.relatedTour1.title")}
              slug="half-day-jeep-tour"
              description={t("twoHourJeep.relatedTour1.desc")}
              price={35}
              duration={t("twoHourJeep.relatedTour1.duration")}
              image="/images/half-day-jeep.jpg"
            />
            <TourCard
              title={t("twoHourJeep.relatedTour2.title")}
              slug="camel-rides"
              description={t("twoHourJeep.relatedTour2.desc")}
              price={20}
              duration={t("twoHourJeep.relatedTour2.duration")}
              image="/images/camel-ride.jpg"
            />
            <TourCard
              title={t("twoHourJeep.relatedTour3.title")}
              slug="night-walk-tour"
              description={t("twoHourJeep.relatedTour3.desc")}
              price={5}
              duration={t("twoHourJeep.relatedTour3.duration")}
              image="/images/wadi-rum-night.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
 
