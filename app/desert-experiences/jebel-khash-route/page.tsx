"use client"

import Image from "next/image"
import { BookingForm } from "@/components/booking-form"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { TourCard } from "@/components/tour-card"
import { ImageLightbox } from "@/components/image-lightbox"
import { useTranslation } from "@/lib/translation-context"

export default function JebelKhashRoutePage() {
  const { t } = useTranslation()
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-landscape.jpg"
          alt={t("jebelKhashRoute.heroAlt")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t("jebelKhashRoute.title")}</h1>
          <p className="text-lg md:text-xl max-w-3xl">{t("jebelKhashRoute.subtitle")}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-600">{t("jebelKhashRoute.overviewTitle")}</h2>
            <p className="mb-6 text-gray-700">
              {t("jebelKhashRoute.description1")}
            </p>

            <div className="mb-8">
              <ImageLightbox
                src="/images/wadi-rum-landscape.jpg"
                alt={t("jebelKhashRoute.imageAlt")}
                width={800}
                height={500}
                className="rounded-lg w-full h-auto object-cover mb-6"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("jebelKhashRoute.whatToExpectTitle")}</h3>
            <p className="mb-6 text-gray-700">
              {t("jebelKhashRoute.description2")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ImageLightbox
                src="/images/hiking-trekking.jpg"
                alt={t("jebelKhashRoute.image1Alt")}
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
              <ImageLightbox
                src="/images/rock-climbing.jpg"
                alt={t("jebelKhashRoute.image2Alt")}
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("jebelKhashRoute.highlightsTitle")}</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>{t("jebelKhashRoute.highlight1")}</li>
              <li>{t("jebelKhashRoute.highlight2")}</li>
              <li>{t("jebelKhashRoute.highlight3")}</li>
              <li>{t("jebelKhashRoute.highlight4")}</li>
              <li>{t("jebelKhashRoute.highlight5")}</li>
              <li>{t("jebelKhashRoute.highlight6")}</li>
              <li>{t("jebelKhashRoute.highlight7")}</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("jebelKhashRoute.itineraryTitle")}</h3>
            <div className="mb-8">
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("jebelKhashRoute.morningDeparture.title")}</h4>
                <p className="text-gray-700">
                  {t("jebelKhashRoute.morningDeparture.desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("jebelKhashRoute.jeepTourExploration.title")}</h4>
                <p className="text-gray-700">
                  {t("jebelKhashRoute.jeepTourExploration.desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("jebelKhashRoute.lunchBreak.title")}</h4>
                <p className="text-gray-700">
                  {t("jebelKhashRoute.lunchBreak.desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold mb-2">{t("jebelKhashRoute.jebelKhashClimb.title")}</h4>
                <p className="text-gray-700">
                  {t("jebelKhashRoute.jebelKhashClimb.desc")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <ImageLightbox
                src="/images/wadi-rum-adventure.jpg"
                alt={t("jebelKhashRoute.image3Alt")}
                width={300}
                height={200}
                className="rounded-lg w-full h-48 object-cover"
              />
              <ImageLightbox
                src="/images/beduin-way.jpg"
                alt={t("jebelKhashRoute.image4Alt")}
                width={300}
                height={200}
                className="rounded-lg w-full h-48 object-cover"
              />
              <ImageLightbox
                src="/images/jebel-um-addami.jpg"
                alt={t("jebelKhashRoute.image5Alt")}
                width={300}
                height={200}
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("jebelKhashRoute.whatToBringTitle")}</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>{t("jebelKhashRoute.bring1")}</li>
              <li>{t("jebelKhashRoute.bring2")}</li>
              <li>{t("jebelKhashRoute.bring3")}</li>
              <li>{t("jebelKhashRoute.bring4")}</li>
              <li>{t("jebelKhashRoute.bring5")}</li>
              <li>{t("jebelKhashRoute.bring6")}</li>
              <li>{t("jebelKhashRoute.bring7")}</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-amber-600">{t("jebelKhashRoute.tourDetailsTitle")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">{t("jebelKhashRoute.durationLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("jebelKhashRoute.duration")}</p>

                  <p className="font-semibold mb-1">{t("jebelKhashRoute.difficultyLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("jebelKhashRoute.difficulty")}</p>

                  <p className="font-semibold mb-1">{t("jebelKhashRoute.groupSizeLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("jebelKhashRoute.groupSize")}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">{t("jebelKhashRoute.priceLabel")}</p>
                  <p className="text-gray-700 mb-4">
                    {t("jebelKhashRoute.price1Person")}
                    <br />
                    {t("jebelKhashRoute.price2to3Persons")}
                    <br />
                    {t("jebelKhashRoute.price4to6Persons")}
                  </p>

                  <p className="font-semibold mb-1">{t("jebelKhashRoute.includesLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("jebelKhashRoute.includes")}</p>

                  <p className="font-semibold mb-1">{t("jebelKhashRoute.languagesLabel")}</p>
                  <p className="text-gray-700">{t("jebelKhashRoute.languages")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-center">{t("jebelKhashRoute.bookThisTour")}</h3>
              <BookingForm tourName={t("jebelKhashRoute.title")} />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("jebelKhashRoute.faqTitle")}</h2>
          <FAQSection faqs={desertExperienceFaqs.slice(0, 6)} />
        </div>

        {/* Related Tours */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("jebelKhashRoute.relatedToursTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TourCard
              title={t("jebelKhashRoute.relatedTour1.title")}
              slug="half-day-jeep-tour"
              description={t("jebelKhashRoute.relatedTour1.desc")}
              price={parseInt(t("jebelKhashRoute.relatedTour1.price"))}
              duration={t("jebelKhashRoute.relatedTour1.duration")}
              image="/images/half-day-jeep.jpg"
            />
            <TourCard
              title={t("jebelKhashRoute.relatedTour2.title")}
              slug="jebel-burdah-climbing"
              description={t("jebelKhashRoute.relatedTour2.desc")}
              price={parseInt(t("jebelKhashRoute.relatedTour2.price"))}
              duration={t("jebelKhashRoute.relatedTour2.duration")}
              image="/images/rock-climbing.jpg"
            />
            <TourCard
              title={t("jebelKhashRoute.relatedTour3.title")}
              slug="jebel-khash-2"
              description={t("jebelKhashRoute.relatedTour3.desc")}
              price={parseInt(t("jebelKhashRoute.relatedTour3.price"))}
              duration={t("jebelKhashRoute.relatedTour3.duration")}
              image="/images/hiking-trekking.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
