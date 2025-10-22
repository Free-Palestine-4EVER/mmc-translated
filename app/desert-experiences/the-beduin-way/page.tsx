"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Clock, Users, Globe } from "lucide-react"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { useTranslation } from "@/lib/translation-context"

export default function BeduinWayPage() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/beduin-way-hero.jpg"
            alt={t("beduinWay.heroAlt")}
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">{t("beduinWay.title")}</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            {t("beduinWay.subtitle")}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2">
              <Image
                src="/images/beduin-way-main.jpg"
                alt={t("beduinWay.galleryAlt")}
                width={600}
                height={400}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/beduin-way-1.jpg"
                alt={t("beduinWay.galleryAlt")}
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/beduin-way-2.jpg"
                alt={t("beduinWay.galleryAlt")}
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/beduin-way-3.jpg"
                alt={t("beduinWay.galleryAlt")}
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/beduin-way-4.jpg"
                alt={t("beduinWay.galleryAlt")}
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
                <div className="text-sm text-gray-600">{t("beduinWay.durationLabel")}</div>
                <div className="font-medium">{t("beduinWay.duration")}</div>
              </div>
            </div>

            <div className="flex items-center">
              <Globe className="mr-2 h-6 w-6 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">{t("beduinWay.languageLabel")}</div>
                <div className="font-medium">{t("beduinWay.language")}</div>
              </div>
            </div>

            <div className="flex items-center">
              <Users className="mr-2 h-6 w-6 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">{t("beduinWay.guestsLabel")}</div>
                <div className="font-medium">{t("beduinWay.guests")}</div>
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
                <h2 className="mb-2 text-2xl font-bold text-amber-600">{t("beduinWay.experienceTitle")}</h2>
                <h3 className="mb-6 text-3xl font-bold">{t("beduinWay.mainTitle")}</h3>

                <p className="mb-4 text-gray-700">
                  {t("beduinWay.description1")}
                </p>
                <p className="mb-4 text-gray-700">
                  {t("beduinWay.description2")}
                </p>
                <p className="text-gray-700">
                  {t("beduinWay.description3")}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">{t("beduinWay.ratesTitle")}</h3>
                <div className="overflow-hidden rounded-lg border">
                  <div className="grid grid-cols-2 border-b bg-amber-50">
                    <div className="border-r p-4 font-medium">{t("beduinWay.rate1person")}</div>
                    <div className="p-4 font-medium">{t("beduinWay.rate1personPrice")}</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">{t("beduinWay.rate2to3")}</div>
                    <div className="p-4">{t("beduinWay.rate2to3Price")}</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">{t("beduinWay.rate4to6")}</div>
                    <div className="p-4">{t("beduinWay.rate4to6Price")}</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">{t("beduinWay.rateChildren")}</div>
                    <div className="p-4">{t("beduinWay.rateChildrenPrice")}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="border-r p-4">{t("beduinWay.rateKids")}</div>
                    <div className="p-4">{t("beduinWay.rateKidsPrice")}</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">{t("beduinWay.detailedProgramTitle")}</h3>
                <h4 className="mb-2 text-xl font-semibold">{t("beduinWay.everythingYouNeed")}</h4>

                <div className="mb-6">
                  <h5 className="mb-2 font-semibold">{t("beduinWay.day1Title")}</h5>
                  <p className="mb-4 text-gray-700">
                    {t("beduinWay.day1Para1")}
                  </p>
                  <p className="mb-4 text-gray-700">
                    {t("beduinWay.day1Para2")}
                  </p>
                  <p className="mb-4 text-gray-700">
                    {t("beduinWay.day1Para3")}
                  </p>
                  <p className="text-gray-700">
                    {t("beduinWay.day1Para4")}
                  </p>
                </div>

                <div>
                  <h5 className="mb-2 font-semibold">{t("beduinWay.day2Title")}</h5>
                  <p className="mb-4 text-gray-700">
                    {t("beduinWay.day2Para1")}
                  </p>
                  <p className="mb-4 text-gray-700">
                    {t("beduinWay.day2Para2")}
                  </p>
                  <p className="mb-4 text-gray-700">
                    {t("beduinWay.day2Para3")}
                  </p>
                  <p className="text-gray-700">
                    {t("beduinWay.day2Para4")}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">{t("beduinWay.includedExcludedTitle")}</h3>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold">{t("beduinWay.includedTitle")}</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>{t("beduinWay.included1")}</li>
                    <li>{t("beduinWay.included2")}</li>
                    <li>{t("beduinWay.included3")}</li>
                    <li>{t("beduinWay.included4")}</li>
                    <li>{t("beduinWay.included5")}</li>
                    <li>{t("beduinWay.included6")}</li>
                    <li>{t("beduinWay.included7")}</li>
                    <li>{t("beduinWay.included8")}</li>
                    <li>{t("beduinWay.included9")}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">{t("beduinWay.notIncludedTitle")}</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>{t("beduinWay.notIncluded1")}</li>
                    <li>{t("beduinWay.notIncluded2")}</li>
                    <li>{t("beduinWay.notIncluded3")}</li>
                    <li>{t("beduinWay.notIncluded4")}</li>
                    <li>{t("beduinWay.notIncluded5")}</li>
                    <li>{t("beduinWay.notIncluded6")}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <BookingForm defaultTour="beduin-way" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title={t("beduinWay.faqTitle")}
        description={t("beduinWay.faqDescription")}
        faqs={desertExperienceFaqs}
        className="bg-amber-50"
      />

      {/* You Might Also Like */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">{t("beduinWay.youMightAlsoLike")}</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <div className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                  {t("beduinWay.relatedTour1.duration")}
                </div>
                <Image src="/images/full-day-jeep.jpg" alt={t("beduinWay.relatedTour1.title")} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{t("beduinWay.relatedTour1.title")}</h3>
                <p className="mb-4 text-sm text-gray-600">{t("beduinWay.relatedTour1.subtitle")}</p>
                <p className="mb-6 text-sm text-gray-700">
                  {t("beduinWay.relatedTour1.desc")}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>{t("beduinWay.relatedTour1.price")} JOD</span>
                  </div>
                  <Link href="/desert-experiences/full-day-jeep-tour">
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <div className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                  {t("beduinWay.relatedTour2.duration")}
                </div>
                <Image src="/images/camel-ride.jpg" alt={t("beduinWay.relatedTour2.title")} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{t("beduinWay.relatedTour2.title")}</h3>
                <p className="mb-4 text-sm text-gray-600">{t("beduinWay.relatedTour2.subtitle")}</p>
                <p className="mb-6 text-sm text-gray-700">
                  {t("beduinWay.relatedTour2.desc")}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>{t("beduinWay.relatedTour2.price")} JOD</span>
                  </div>
                  <Link href="/desert-experiences/camel-rides">
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <div className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                  {t("beduinWay.relatedTour3.duration")}
                </div>
                <Image src="/images/bivouac-camping.jpg" alt={t("beduinWay.relatedTour3.title")} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{t("beduinWay.relatedTour3.title")}</h3>
                <p className="mb-4 text-sm text-gray-600">{t("beduinWay.relatedTour3.subtitle")}</p>
                <p className="mb-6 text-sm text-gray-700">
                  {t("beduinWay.relatedTour3.desc")}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>{t("beduinWay.relatedTour3.price")} JOD</span>
                  </div>
                  <Link href="/accommodation/bivouac">
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                      Book Now
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
          <h2 className="mb-4 text-2xl font-bold">{t("beduinWay.expertTeamTitle")}</h2>
          <h3 className="mb-8 text-4xl font-bold">{t("beduinWay.expertTeamSubtitle")}</h3>
          <p className="mb-12 text-lg">{t("beduinWay.expertTeamDescription")}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-1.jpg"
                alt={t("common.teamMember")}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-2.jpg"
                alt={t("common.teamMember")}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-3.jpg"
                alt={t("common.teamMember")}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-4.jpg"
                alt={t("common.teamMember")}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/team-5.jpg"
                alt={t("common.teamMember")}
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
              {t("beduinWay.chatOnWhatsapp")}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
