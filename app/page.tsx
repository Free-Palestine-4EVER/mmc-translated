"use client"

import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { FAQSection } from "@/components/faq-section"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { generateTouristAttractionSchema } from "@/lib/schema"
import { useTranslation } from "@/lib/translation-context"

export default function Home() {
  const { t } = useTranslation()
  const homepageFaqs = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      question: t("faq.question5"),
      answer: t("faq.answer5"),
    },
  ]

  // Generate the TouristAttraction schema
  const touristAttractionSchema = generateTouristAttractionSchema()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org structured data */}
      <Script
        id="tourist-attraction-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Wadi Rum desert landscape with red sand dunes and sandstone mountains at sunset"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mb-8 max-w-3xl text-xl">
            {t("hero.description")}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="/desert-experiences">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold transition-colors duration-300"
              >
                {t("common.exploreTours")}
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-gray-100 font-bold transition-colors duration-300"
              >
                {t("nav.bookNow")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Plan Trip Section - "Dream Vacation Destination" */}
      <AnimateOnScroll>
        <section className="relative bg-white py-16 md:py-24">
          <div className="container">
            <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
              {/* Mobile layout - stacked in specific order */}
              <div className="flex flex-col md:hidden">
                {/* 1. Title */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-500">{t("dreamVacation.subtitle")}</h2>
                  <h1 className="text-4xl font-bold tracking-tight mt-2">{t("dreamVacation.title")}</h1>
                </div>

                {/* 2. Image */}
                <div className="mb-6">
                  <Image
                    src="/images/camel-watercolor.png"
                    alt="Camel in Wadi Rum"
                    width={500}
                    height={500}
                    className="object-contain w-full h-[300px]"
                    priority
                  />
                </div>

                {/* 3. Text */}
                <div className="mb-6">
                  <p className="text-lg text-gray-700">
                    {t("dreamVacation.description")}
                  </p>
                </div>

                {/* 4. Button */}
                <div>
                  <Link href="/contact-us">
                    <Button
                      size="lg"
                      className="bg-amber-400 hover:bg-amber-500 text-black font-bold transition-colors duration-300"
                    >
                      {t("nav.bookNow")}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Desktop layout - side by side */}
              <div className="hidden md:block space-y-6">
                <h2 className="text-2xl font-bold text-blue-500">{t("dreamVacation.subtitle")}</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {t("dreamVacation.title")}
                </h1>
                <p className="text-lg text-gray-700">
                  {t("dreamVacation.description")}
                </p>
                <div>
                  <Link href="/contact-us">
                    <Button
                      size="lg"
                      className="bg-amber-400 hover:bg-amber-500 text-black font-bold transition-colors duration-300"
                    >
                      {t("nav.bookNow")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-[400px] md:h-[500px]">
                <Image
                  src="/images/camel-watercolor.png"
                  alt="Camel in Wadi Rum"
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Experiences Section - "Plan the Trip of a Lifetime with Ease" */}
      <AnimateOnScroll>
        <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">{t("experiences.title")}</h2>

              {/* Mobile only - add an image right after the title */}
              <div className="mt-6 mb-6 md:hidden">
                <Image
                  src="/images/wadi-rum-landscape.jpg"
                  alt="Wadi Rum Adventures"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                {t("experiences.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image src="/images/jeep-tours-new.webp" alt="Jeep Tours" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{t("experiences.jeepTours")}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">
                    {t("experiences.jeepTours.desc")}
                  </p>
                  <Link href="/desert-experiences/half-day-jeep-tour">
                    <Button
                      variant="outline"
                      className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 transition-colors duration-300"
                    >
                      {t("common.learnMore")}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image src="/images/hot-air-balloon.jpg" alt="Hot Air Balloon" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{t("experiences.hotAirBalloon")}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">
                    {t("experiences.hotAirBalloon.desc")}
                  </p>
                  <Link href="/desert-experiences/hot-air-balloon">
                    <Button
                      variant="outline"
                      className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 transition-colors duration-300"
                    >
                      {t("common.learnMore")}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image src="/images/hiking-trekking-new.jpeg" alt="Hiking & Trekking" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{t("experiences.hiking")}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">
                    {t("experiences.hiking.desc")}
                  </p>
                  <Link href="/desert-experiences/trekking">
                    <Button
                      variant="outline"
                      className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 transition-colors duration-300"
                    >
                      {t("common.learnMore")}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image src="/images/camel-ride.jpg" alt="Camel Rides" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{t("experiences.camelRides")}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">
                    {t("experiences.camelRides.desc")}
                  </p>
                  <Link href="/desert-experiences/camel-rides">
                    <Button
                      variant="outline"
                      className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 transition-colors duration-300"
                    >
                      {t("common.learnMore")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image src="/images/burdah-arch.jpg" alt="Rock Climbing" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{t("experiences.rockClimbing")}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">
                    {t("experiences.rockClimbing.desc")}
                  </p>
                  <Link href="/desert-experiences/jebel-burdah-climbing">
                    <Button
                      variant="outline"
                      className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 transition-colors duration-300"
                    >
                      {t("common.learnMore")}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image src="/images/jebel-um-addami.jpg" alt="Mountain Climbing" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{t("experiences.mountainClimbing")}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">
                    {t("experiences.mountainClimbing.desc")}
                  </p>
                  <Link href="/desert-experiences/um-addami-climbing">
                    <Button
                      variant="outline"
                      className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 transition-colors duration-300"
                    >
                      {t("common.learnMore")}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image src="/images/beduin-way.jpg" alt="Bedouin Experience" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{t("experiences.bedouinExperience")}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">
                    {t("experiences.bedouinExperience.desc")}
                  </p>
                  <Link href="/desert-experiences/the-beduin-way">
                    <Button
                      variant="outline"
                      className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 transition-colors duration-300"
                    >
                      {t("common.learnMore")}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image src="/images/tented-camp.jpg" alt="Desert Camping" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{t("experiences.desertCamping")}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">
                    {t("experiences.desertCamping.desc")}
                  </p>
                  <Link href="/accommodation">
                    <Button
                      variant="outline"
                      className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 transition-colors duration-300"
                    >
                      {t("common.learnMore")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/desert-experiences">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 transition-colors duration-300">
                  {t("common.viewAllExperiences")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Experience Section - "Embrace the Thrill of the Unknown" */}
      <AnimateOnScroll>
        <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
          <div className="container">
            {/* Mobile layout - stacked in specific order */}
            <div className="md:hidden flex flex-col">
              {/* 1. Title */}
              <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold">{t("thrill.title")}</h2>
              </div>

              {/* 2. Image */}
              <div className="mb-6">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/wadi-rum-night.jpg"
                    alt="Wadi Rum at night"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* 3. Text */}
              <div className="mb-6">
                <p className="text-lg">
                  {t("thrill.description")}
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t("thrill.feature1")}
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t("thrill.feature2")}
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t("thrill.feature3")}
                  </li>
                </ul>
              </div>

              {/* 4. Button */}
              <div className="text-center">
                <Link href="/desert-experiences">
                  <Button className="bg-white text-amber-600 hover:bg-gray-100 transition-colors duration-300">
                    {t("common.exploreTours")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Desktop layout - side by side */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{t("thrill.title")}</h2>
                <p className="text-lg">
                  {t("thrill.description")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t("thrill.feature1")}
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t("thrill.feature2")}
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t("thrill.feature3")}
                  </li>
                </ul>
                <Link href="/desert-experiences">
                  <Button className="bg-white text-amber-600 hover:bg-gray-100 transition-colors duration-300">
                    {t("common.exploreTours")}
                  </Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/wadi-rum-night.jpg"
                  alt="Wadi Rum at night"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Adventure Section - "Discover Your Next Adventure" */}
      <AnimateOnScroll>
        <section className="py-16">
          <div className="container">
            {/* Mobile layout - stacked in specific order */}
            <div className="md:hidden flex flex-col">
              {/* 1. Title */}
              <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold">{t("adventure.title")}</h2>
              </div>

              {/* 2. Image */}
              <div className="mb-6">
                <Image
                  src="/images/wadi-rum-landscape.jpg"
                  alt="Wadi Rum Adventure"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              {/* 3. Text */}
              <div className="mb-6">
                <p className="text-lg text-gray-700">
                  {t("adventure.description")}
                </p>
              </div>

              {/* 4. Button */}
              <div className="text-center">
                <Link href="/desert-experiences">
                  <Button className="bg-amber-500 hover:bg-amber-600 transition-colors duration-300">
                    {t("common.viewAllTours")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Desktop layout - side by side */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/images/wadi-rum-landscape.jpg"
                  alt="Wadi Rum Adventure"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h2 className="text-3xl font-bold">{t("adventure.title")}</h2>
                <p className="text-lg text-gray-700">
                  {t("adventure.description")}
                </p>
                <Link href="/desert-experiences">
                  <Button className="bg-amber-500 hover:bg-amber-600 transition-colors duration-300">
                    {t("common.viewAllTours")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* FAQ Section */}
      <AnimateOnScroll>
        <FAQSection
          title={t("faq.title")}
          description={t("faq.description")}
          faqs={homepageFaqs}
          className="bg-amber-50"
        />
      </AnimateOnScroll>

      {/* TripAdvisor Reviews Section */}
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/images/tripadvisor-logo.png"
                  alt="TripAdvisor"
                  width={200}
                  height={50}
                  className="h-auto"
                />
              </div>
              <h2 className="text-3xl font-bold">{t("reviews.title")}</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                {t("reviews.description")}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Review 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/reviewer-trina.jpg"
                      alt="Reviewer"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Trina S</h4>
                    <div className="flex text-amber-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {t("reviews.review1.text")}
                </p>
                <div className="mt-4">
                  <Image
                    src="/images/review-photo-1.jpg"
                    alt="Review Photo"
                    width={240}
                    height={160}
                    className="rounded-md w-full h-40 object-cover"
                  />
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/reviewer-onenil.jpg"
                      alt="Reviewer"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Neil P</h4>
                    <div className="flex text-amber-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {t("reviews.review2.text")}
                </p>
                <div className="mt-4">
                  <Image
                    src="/images/review-photo-2.jpg"
                    alt="Review Photo"
                    width={240}
                    height={160}
                    className="rounded-md w-full h-40 object-cover"
                  />
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/reviewer-mohammad.jpg"
                      alt="Reviewer"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah K</h4>
                    <div className="flex text-amber-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {t("reviews.review3.text")}
                </p>
                <div className="mt-4">
                  <Image
                    src="/images/review-photo-3.jpg"
                    alt="Review Photo"
                    width={240}
                    height={160}
                    className="rounded-md w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Green Read All Reviews Button */}
            <div className="mt-10 text-center">
              <a
                href="https://www.tripadvisor.com/Hotel_Review-g303973-d3606999-Reviews-Mohammed_Mutlak_Camp-Wadi_Rum_Al_Aqabah_Governorate.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition duration-300 shadow-md"
              >
                {t("common.readAllReviews")}
              </a>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  )
}
