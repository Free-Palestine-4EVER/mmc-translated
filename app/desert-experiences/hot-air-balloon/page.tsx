"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Clock, Users, Globe } from "lucide-react"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { useTranslation } from "@/lib/translation-context"

export default function HotAirBalloonPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hot-air-balloon-hero.jpg"
            alt={t("hotAirBalloon.imageAlt")}
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">{t("hotAirBalloon.title")}</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            {t("hotAirBalloon.subtitle")}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2">
              <Image
                src="/images/hot-air-balloon-main.jpg"
                alt={t("hotAirBalloon.imageAlt")}
                width={600}
                height={400}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/hot-air-balloon-1.jpg"
                alt={t("hotAirBalloon.imageAlt")}
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/hot-air-balloon-2.jpg"
                alt={t("hotAirBalloon.imageAlt")}
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/hot-air-balloon-3.jpg"
                alt={t("hotAirBalloon.imageAlt")}
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/hot-air-balloon-4.jpg"
                alt={t("hotAirBalloon.imageAlt")}
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Info */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <Clock className="mr-2 h-6 w-6 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">{t("common.duration")}</div>
                <div className="font-medium">{t("hotAirBalloon.duration")}</div>
              </div>
            </div>

            <div className="flex items-center">
              <Globe className="mr-2 h-6 w-6 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">{t("common.language")}</div>
                <div className="font-medium">{t("common.arabicEnglish")}</div>
              </div>
            </div>

            <div className="flex items-center">
              <Users className="mr-2 h-6 w-6 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">{t("common.guests")}</div>
                <div className="font-medium">{t("hotAirBalloon.guests")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="mb-8">
                <h2 className="mb-2 text-2xl font-bold text-amber-600">{t("common.desertExperience")}</h2>
                <h3 className="mb-6 text-3xl font-bold">{t("hotAirBalloon.title")}</h3>

                <p className="mb-4 text-gray-700">
                  {t("hotAirBalloon.description1")}
                </p>
                <p className="mb-4 text-gray-700">
                  {t("hotAirBalloon.description2")}
                </p>
                <p className="text-gray-700">
                  {t("hotAirBalloon.description3")}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">{t("common.rates")}</h3>
                <div className="overflow-hidden rounded-lg border">
                  <div className="grid grid-cols-2 border-b bg-amber-50">
                    <div className="border-r p-4 font-medium">{t("hotAirBalloon.rates.perPerson")}</div>
                    <div className="p-4 font-medium">{t("hotAirBalloon.rates.perPerson.price")}</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">{t("hotAirBalloon.rates.2to6")}</div>
                    <div className="p-4">{t("hotAirBalloon.rates.2to6.price")}</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">{t("hotAirBalloon.rates.children5to12")}</div>
                    <div className="p-4">{t("hotAirBalloon.rates.children5to12.price")}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="border-r p-4">{t("hotAirBalloon.rates.kidsUnder5")}</div>
                    <div className="p-4">{t("hotAirBalloon.rates.kidsUnder5.price")}</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">{t("hotAirBalloon.programTitle")}</h3>
                <h4 className="mb-2 text-xl font-semibold">{t("hotAirBalloon.programSubtitle")}</h4>

                <p className="mb-4 text-gray-700">
                  {t("hotAirBalloon.programIntro")}
                </p>

                <div className="mb-6 space-y-4">
                  <div>
                    <h5 className="font-semibold">{t("hotAirBalloon.preFlightBriefing.title")}</h5>
                    <p className="text-gray-700">
                      {t("hotAirBalloon.preFlightBriefing.desc")}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">{t("hotAirBalloon.balloonInflation.title")}</h5>
                    <p className="text-gray-700">
                      {t("hotAirBalloon.balloonInflation.desc")}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">{t("hotAirBalloon.boardingTakeoff.title")}</h5>
                    <p className="text-gray-700">
                      {t("hotAirBalloon.boardingTakeoff.desc")}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">{t("hotAirBalloon.theFlight.title")}</h5>
                    <p className="text-gray-700">
                      {t("hotAirBalloon.theFlight.desc")}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">{t("hotAirBalloon.sunriseExperience.title")}</h5>
                    <p className="text-gray-700">
                      {t("hotAirBalloon.sunriseExperience.desc")}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">{t("hotAirBalloon.landing.title")}</h5>
                    <p className="text-gray-700">
                      {t("hotAirBalloon.landing.desc")}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">{t("hotAirBalloon.postFlightCelebration.title")}</h5>
                    <p className="text-gray-700">
                      {t("hotAirBalloon.postFlightCelebration.desc")}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">{t("hotAirBalloon.returnTransfer.title")}</h5>
                    <p className="text-gray-700">
                      {t("hotAirBalloon.returnTransfer.desc")}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700">
                  {t("hotAirBalloon.weatherNote")}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">{t("common.includedExcluded")}</h3>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold">{t("common.included")}</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>{t("hotAirBalloon.included.transportation")}</li>
                    <li>{t("hotAirBalloon.included.pilot")}</li>
                    <li>{t("hotAirBalloon.included.briefing")}</li>
                    <li>{t("hotAirBalloon.included.flight")}</li>
                    <li>{t("hotAirBalloon.included.refreshments")}</li>
                    <li>{t("hotAirBalloon.included.certificate")}</li>
                    <li>{t("hotAirBalloon.included.insurance")}</li>
                    <li>{t("hotAirBalloon.included.meals")}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">{t("common.notIncluded")}</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>{t("hotAirBalloon.notIncluded.personalExpenses")}</li>
                    <li>{t("hotAirBalloon.notIncluded.gratuities")}</li>
                    <li>{t("hotAirBalloon.notIncluded.photography")}</li>
                    <li>{t("hotAirBalloon.notIncluded.transportation")}</li>
                    <li>{t("hotAirBalloon.notIncluded.travelInsurance")}</li>
                    <li>{t("hotAirBalloon.notIncluded.anythingNotMentioned")}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <BookingForm defaultTour="hot-air-balloon" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title={t("common.frequentlyAskedQuestions")}
        description={t("hotAirBalloon.faqDescription")}
        faqs={desertExperienceFaqs}
        className="bg-amber-50"
      />

      {/* You Might Also Like */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">{t("common.youMightAlsoLike")}</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <div className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                  {t("hotAirBalloon.relatedTours.fullDayJeep.duration")}
                </div>
                <Image src="/images/full-day-jeep.jpg" alt={t("hotAirBalloon.relatedTours.fullDayJeep.title")} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{t("hotAirBalloon.relatedTours.fullDayJeep.title")}</h3>
                <p className="mb-4 text-sm text-gray-600">{t("hotAirBalloon.relatedTours.fullDayJeep.subtitle")}</p>
                <p className="mb-6 text-sm text-gray-700">
                  {t("hotAirBalloon.relatedTours.fullDayJeep.desc")}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    {t("common.from")} <span>{t("hotAirBalloon.relatedTours.fullDayJeep.price")}</span>
                  </div>
                  <Link href="/desert-experiences/full-day-jeep-tour">
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                      {t("hotAirBalloon.relatedTours.bookNow")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <div className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                  {t("hotAirBalloon.relatedTours.allInOne.duration")}
                </div>
                <Image src="/images/all-in-one.jpg" alt={t("hotAirBalloon.relatedTours.allInOne.title")} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{t("hotAirBalloon.relatedTours.allInOne.title")}</h3>
                <p className="mb-4 text-sm text-gray-600">{t("hotAirBalloon.relatedTours.allInOne.subtitle")}</p>
                <p className="mb-6 text-sm text-gray-700">
                  {t("hotAirBalloon.relatedTours.allInOne.desc")}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    {t("common.from")} <span>{t("hotAirBalloon.relatedTours.allInOne.price")}</span>
                  </div>
                  <Link href="/desert-experiences/all-in-one-day">
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                      {t("hotAirBalloon.relatedTours.bookNow")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <div className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                  {t("hotAirBalloon.relatedTours.tentedCamp.duration")}
                </div>
                <Image src="/images/tented-camp.jpg" alt={t("hotAirBalloon.relatedTours.tentedCamp.title")} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{t("hotAirBalloon.relatedTours.tentedCamp.title")}</h3>
                <p className="mb-4 text-sm text-gray-600">{t("hotAirBalloon.relatedTours.tentedCamp.subtitle")}</p>
                <p className="mb-6 text-sm text-gray-700">
                  {t("hotAirBalloon.relatedTours.tentedCamp.desc")}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    {t("common.from")} <span>{t("hotAirBalloon.relatedTours.tentedCamp.price")}</span>
                  </div>
                  <Link href="/accommodation/our-tented-camp">
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                      {t("hotAirBalloon.relatedTours.bookNow")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">{t("common.ourExpertTeam")}</h2>
          <h3 className="mb-8 text-4xl font-bold">{t("common.weAreHereToHelp")}</h3>
          <p className="mb-12 text-lg">{t("common.connectWithExperts")}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-1.jpg"
                alt="Team Member"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-2.jpg"
                alt="Team Member"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-3.jpg"
                alt="Team Member"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-4.jpg"
                alt="Team Member"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-5.jpg"
                alt="Team Member"
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
              {t("common.chatOnWhatsapp")}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
