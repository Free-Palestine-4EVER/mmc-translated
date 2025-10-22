"use client"

import Image from "next/image"
import { BookingForm } from "@/components/booking-form"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { TourCard } from "@/components/tour-card"
import { ImageLightbox } from "@/components/image-lightbox"
import { useTranslation } from "@/lib/translation-context"

export default function JebelKhash2Page() {
  const { t } = useTranslation()
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-landscape.jpg"
          alt={t("jebelKhash2.heroAlt")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t("jebelKhash2.title")}</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {t("jebelKhash2.subtitle")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-600">{t("jebelKhash2.overviewTitle")}</h2>
            <p className="mb-6 text-gray-700">
              {t("jebelKhash2.description1")}
            </p>

            <div className="mb-8">
              <ImageLightbox
                src="/images/wadi-rum-landscape.jpg"
                alt={t("jebelKhash2.imageAlt")}
                width={800}
                height={500}
                className="rounded-lg w-full h-auto object-cover mb-6"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("jebelKhash2.whatToExpectTitle")}</h3>
            <p className="mb-6 text-gray-700">
              {t("jebelKhash2.description2")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ImageLightbox
                src="/images/full-day-jeep.jpg"
                alt={t("jebelKhash2.image1Alt")}
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
              <ImageLightbox
                src="/images/hiking-trekking.jpg"
                alt={t("jebelKhash2.image2Alt")}
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("jebelKhash2.day1Title")}</h3>
            <p className="mb-4 text-gray-700">
              {t("jebelKhash2.day1Description")}
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>{t("jebelKhash2.day1Item1")}</li>
              <li>{t("jebelKhash2.day1Item2")}</li>
              <li>{t("jebelKhash2.day1Item3")}</li>
              <li>{t("jebelKhash2.day1Item4")}</li>
              <li>{t("jebelKhash2.day1Item5")}</li>
              <li>{t("jebelKhash2.day1Item6")}</li>
              <li>{t("jebelKhash2.day1Item7")}</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("jebelKhash2.day2Title")}</h3>
            <p className="mb-4 text-gray-700">
              {t("jebelKhash2.day2Description")}
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>{t("jebelKhash2.day2Item1")}</li>
              <li>{t("jebelKhash2.day2Item2")}</li>
              <li>{t("jebelKhash2.day2Item3")}</li>
              <li>{t("jebelKhash2.day2Item4")}</li>
              <li>{t("jebelKhash2.day2Item5")}</li>
              <li>{t("jebelKhash2.day2Item6")}</li>
              <li>{t("jebelKhash2.day2Item7")}</li>
              <li>{t("jebelKhash2.day2Item8")}</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("jebelKhash2.whatToBringTitle")}</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>{t("jebelKhash2.bring1")}</li>
              <li>{t("jebelKhash2.bring2")}</li>
              <li>{t("jebelKhash2.bring3")}</li>
              <li>{t("jebelKhash2.bring4")}</li>
              <li>{t("jebelKhash2.bring5")}</li>
              <li>{t("jebelKhash2.bring6")}</li>
              <li>{t("jebelKhash2.bring7")}</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-amber-600">{t("jebelKhash2.tourDetailsTitle")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">{t("jebelKhash2.durationLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("jebelKhash2.duration")}</p>

                  <p className="font-semibold mb-1">{t("jebelKhash2.difficultyLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("jebelKhash2.difficulty")}</p>

                  <p className="font-semibold mb-1">{t("jebelKhash2.groupSizeLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("jebelKhash2.groupSize")}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">{t("jebelKhash2.priceLabel")}</p>
                  <p className="text-gray-700 mb-4">
                    {t("jebelKhash2.price1Person")}
                    <br />
                    {t("jebelKhash2.price2to3Persons")}
                    <br />
                    {t("jebelKhash2.price4plusPersons")}
                  </p>

                  <p className="font-semibold mb-1">{t("jebelKhash2.includesLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("jebelKhash2.includes")}</p>

                  <p className="font-semibold mb-1">{t("jebelKhash2.languagesLabel")}</p>
                  <p className="text-gray-700">{t("jebelKhash2.languages")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-center">{t("jebelKhash2.bookThisTour")}</h3>
              <BookingForm tourName={t("jebelKhash2.title")} />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("jebelKhash2.faqTitle")}</h2>
          <FAQSection faqs={desertExperienceFaqs.slice(0, 6)} />
        </div>

        {/* Related Tours */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("jebelKhash2.relatedToursTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TourCard
              title={t("jebelKhash2.relatedTour1.title")}
              slug="jebel-khash-route"
              description={t("jebelKhash2.relatedTour1.desc")}
              price={parseInt(t("jebelKhash2.relatedTour1.price"))}
              duration={t("jebelKhash2.relatedTour1.duration")}
              image="/images/jebel-khash.jpg"
            />
            <TourCard
              title={t("jebelKhash2.relatedTour2.title")}
              slug="the-beduin-way"
              description={t("jebelKhash2.relatedTour2.desc")}
              price={parseInt(t("jebelKhash2.relatedTour2.price"))}
              duration={t("jebelKhash2.relatedTour2.duration")}
              image="/images/beduin-way.jpg"
            />
            <TourCard
              title={t("jebelKhash2.relatedTour3.title")}
              slug="full-day-jeep-tour"
              description={t("jebelKhash2.relatedTour3.desc")}
              price={parseInt(t("jebelKhash2.relatedTour3.price"))}
              duration={t("jebelKhash2.relatedTour3.duration")}
              image="/images/full-day-jeep.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
