"use client"

import { FAQSection } from "@/components/faq-section"
import { useTranslation } from "@/lib/translation-context"

export default function FAQPage() {
  const { t } = useTranslation()

  const generalFaqs = [
    {
      question: t("faqPage.general.q1"),
      answer: t("faqPage.general.a1"),
    },
    {
      question: t("faqPage.general.q2"),
      answer: t("faqPage.general.a2"),
    },
    {
      question: t("faqPage.general.q3"),
      answer: t("faqPage.general.a3"),
    },
    {
      question: t("faqPage.general.q4"),
      answer: t("faqPage.general.a4"),
    },
    {
      question: t("faqPage.general.q5"),
      answer: t("faqPage.general.a5"),
    },
  ]

  const accommodationFaqs = [
    {
      question: t("faqPage.accommodation.q1"),
      answer: t("faqPage.accommodation.a1"),
    },
    {
      question: t("faqPage.accommodation.q2"),
      answer: t("faqPage.accommodation.a2"),
    },
    {
      question: t("faqPage.accommodation.q3"),
      answer: t("faqPage.accommodation.a3"),
    },
    {
      question: t("faqPage.accommodation.q4"),
      answer: t("faqPage.accommodation.a4"),
    },
    {
      question: t("faqPage.accommodation.q5"),
      answer: t("faqPage.accommodation.a5"),
    },
  ]

  const tourFaqs = [
    {
      question: t("faqPage.tours.q1"),
      answer: t("faqPage.tours.a1"),
    },
    {
      question: t("faqPage.tours.q2"),
      answer: t("faqPage.tours.a2"),
    },
    {
      question: t("faqPage.tours.q3"),
      answer: t("faqPage.tours.a3"),
    },
    {
      question: t("faqPage.tours.q4"),
      answer: t("faqPage.tours.a4"),
    },
    {
      question: t("faqPage.tours.q5"),
      answer: t("faqPage.tours.a5"),
    },
  ]

  const bookingFaqs = [
    {
      question: t("faqPage.booking.q1"),
      answer: t("faqPage.booking.a1"),
    },
    {
      question: t("faqPage.booking.q2"),
      answer: t("faqPage.booking.a2"),
    },
    {
      question: t("faqPage.booking.q3"),
      answer: t("faqPage.booking.a3"),
    },
    {
      question: t("faqPage.booking.q4"),
      answer: t("faqPage.booking.a4"),
    },
    {
      question: t("faqPage.booking.q5"),
      answer: t("faqPage.booking.a5"),
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 text-center text-white">
        <div className="container">
          <h1 className="text-4xl font-bold md:text-5xl">{t("faqPage.title")}</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            {t("faqPage.subtitle")}
          </p>
        </div>
      </section>

      {/* General FAQs */}
      <FAQSection
        title={t("faqPage.general.title")}
        description={t("faqPage.general.description")}
        faqs={generalFaqs}
      />

      {/* Accommodation FAQs */}
      <FAQSection
        title={t("faqPage.accommodation.title")}
        description={t("faqPage.accommodation.description")}
        faqs={accommodationFaqs}
        className="bg-amber-50"
      />

      {/* Tour FAQs */}
      <FAQSection title={t("faqPage.tours.title")} description={t("faqPage.tours.description")} faqs={tourFaqs} />

      {/* Booking FAQs */}
      <FAQSection
        title={t("faqPage.booking.title")}
        description={t("faqPage.booking.description")}
        faqs={bookingFaqs}
        className="bg-amber-50"
      />

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">{t("faqPage.stillHaveQuestions")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t("faqPage.contactPrompt")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:mohammed.mutlak.camp@gmail.com"
              className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              {t("faqPage.emailUs")}
            </a>
            <a
              href="https://wa.me/962777424937"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              {t("faqPage.whatsappChat")}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
