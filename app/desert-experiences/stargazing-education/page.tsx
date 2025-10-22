"use client"

import Image from "next/image"
import { BookingForm } from "@/components/booking-form"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { TourCard } from "@/components/tour-card"
import { ImageLightbox } from "@/components/image-lightbox"
import { useTranslation } from "@/lib/translation-context"

export default function StargazingEducationPage() {
  const { t } = useTranslation()
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/blog-stargazing.jpg"
          alt={t("stargazing.heroAlt")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t("stargazing.title")}</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {t("stargazing.subtitle")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-600">{t("stargazing.overviewTitle")}</h2>
            <p className="mb-6 text-gray-700">
              {t("stargazing.description1")}
            </p>

            <div className="mb-8">
              <ImageLightbox
                src="/images/blog-stargazing.jpg"
                alt={t("stargazing.imageAlt")}
                width={800}
                height={500}
                className="rounded-lg w-full h-auto object-cover mb-6"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("stargazing.whatToExpectTitle")}</h3>
            <p className="mb-6 text-gray-700">
              {t("stargazing.description2")}
            </p>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("stargazing.highlightsTitle")}</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>{t("stargazing.highlight1")}</li>
              <li>{t("stargazing.highlight2")}</li>
              <li>{t("stargazing.highlight3")}</li>
              <li>{t("stargazing.highlight4")}</li>
              <li>{t("stargazing.highlight5")}</li>
              <li>{t("stargazing.highlight6")}</li>
              <li>{t("stargazing.highlight7")}</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("stargazing.programTitle")}</h3>
            <div className="mb-8">
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("stargazing.program1Title")}</h4>
                <p className="text-gray-700">
                  {t("stargazing.program1Desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("stargazing.program2Title")}</h4>
                <p className="text-gray-700">
                  {t("stargazing.program2Desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">{t("stargazing.program3Title")}</h4>
                <p className="text-gray-700">
                  {t("stargazing.program3Desc")}
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold mb-2">{t("stargazing.program4Title")}</h4>
                <p className="text-gray-700">
                  {t("stargazing.program4Desc")}
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">{t("stargazing.whatToBringTitle")}</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>{t("stargazing.bring1")}</li>
              <li>{t("stargazing.bring2")}</li>
              <li>{t("stargazing.bring3")}</li>
              <li>{t("stargazing.bring4")}</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-amber-600">{t("stargazing.experienceDetailsTitle")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">{t("stargazing.durationLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("stargazing.duration")}</p>

                  <p className="font-semibold mb-1">{t("stargazing.difficultyLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("stargazing.difficulty")}</p>

                  <p className="font-semibold mb-1">{t("stargazing.groupSizeLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("stargazing.groupSize")}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">{t("stargazing.priceLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("stargazing.price")}</p>

                  <p className="font-semibold mb-1">{t("stargazing.includesLabel")}</p>
                  <p className="text-gray-700 mb-4">{t("stargazing.includes")}</p>

                  <p className="font-semibold mb-1">{t("stargazing.languagesLabel")}</p>
                  <p className="text-gray-700">{t("stargazing.languages")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-center">{t("stargazing.bookThisExperience")}</h3>
              <BookingForm tourName={t("stargazing.title")} />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("stargazing.faqTitle")}</h2>
          <FAQSection faqs={desertExperienceFaqs.slice(0, 6)} />
        </div>

        {/* Related Tours */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("stargazing.relatedToursTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TourCard
              title={t("stargazing.relatedTour1.title")}
              slug="night-walk-tour"
              description={t("stargazing.relatedTour1.desc")}
              price={parseInt(t("stargazing.relatedTour1.price"))}
              duration={t("stargazing.relatedTour1.duration")}
              image="/images/wadi-rum-night.jpg"
            />
            <TourCard
              title={t("stargazing.relatedTour2.title")}
              slug="jeep-tours-stargazing"
              description={t("stargazing.relatedTour2.desc")}
              price={parseInt(t("stargazing.relatedTour2.price"))}
              duration={t("stargazing.relatedTour2.duration")}
              image="/images/blog-desert-night.jpg"
            />
            <TourCard
              title={t("stargazing.relatedTour3.title")}
              slug="overnight-desert-camp"
              description={t("stargazing.relatedTour3.desc")}
              price={parseInt(t("stargazing.relatedTour3.price"))}
              duration={t("stargazing.relatedTour3.duration")}
              image="/images/camping.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
