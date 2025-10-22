"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Check } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"
import { useTranslation } from "@/lib/translation-context"

export default function TentedCampPage() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tented-camp-hero.jpg"
            alt="Mohammed Mutlak Camp"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">{t("tentedCamp.title")}</h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <ImageLightbox
              src="/images/camp-gallery-1.jpg"
              alt="Camp Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <ImageLightbox
              src="/images/camp-gallery-2.jpg"
              alt="Camp Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <ImageLightbox
              src="/images/camp-gallery-3.jpg"
              alt="Camp Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <ImageLightbox
              src="/images/camp-gallery-4.jpg"
              alt="Camp Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">{t("tentedCamp.campTitle")}</h2>
            <p className="mb-8 text-lg text-gray-700">
              {t("tentedCamp.campDescription")}
            </p>
          </div>

          <div className="mt-12">
            <h3 className="mb-6 text-center text-2xl font-bold">{t("tentedCamp.locationTitle")}</h3>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <p className="text-gray-700">
                  {t("tentedCamp.locationDesc1")}
                </p>
                <p className="mt-4 text-gray-700">
                  {t("tentedCamp.locationDesc2")}
                </p>
              </div>
              <div>
                <ImageLightbox
                  src="/images/camp-location.jpg"
                  alt="Camp Location"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold">{t("tentedCamp.commonAreasTitle")}</h3>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <ImageLightbox
                  src="/images/common-areas.jpg"
                  alt="Common Areas"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-700">
                  {t("tentedCamp.commonAreasDesc1")}
                </p>
                <p className="mt-4 text-gray-700">
                  {t("tentedCamp.commonAreasDesc2")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold">{t("tentedCamp.tentsTitle")}</h3>
            <p className="mb-8 text-center text-lg text-gray-700">{t("tentedCamp.tentsSubtitle")}</p>
            <div className="text-center mb-8">
              <p className="text-xl font-semibold">
                {t("tentedCamp.tentsDescription")}
              </p>
              <p className="text-lg">{t("tentedCamp.tentsTypes")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ImageLightbox
                src="/images/tent-1.jpg"
                alt="Our Tents"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <ImageLightbox
                src="/images/tent-2.jpg"
                alt="Our Tents"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <ImageLightbox
                src="/images/tent-3.jpg"
                alt="Our Tents"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">{t("tentedCamp.amenity1")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">{t("tentedCamp.amenity2")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">{t("tentedCamp.amenity3")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">{t("tentedCamp.amenity4")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">{t("tentedCamp.amenity5")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">{t("tentedCamp.amenity6")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">{t("tentedCamp.amenity7")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">{t("tentedCamp.amenity8")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">{t("tentedCamp.amenity9")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">{t("tentedCamp.amenity5")}</span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="mb-4 text-2xl font-bold">{t("tentedCamp.stargazingTitle")}</h3>
              <p className="text-gray-700">
                {t("tentedCamp.stargazingDesc1")}
              </p>
              <p className="mt-4 text-gray-700">
                {t("tentedCamp.stargazingDesc2")}
              </p>
              <Link href="/book-now">
                <Button className="mt-6 bg-amber-500 hover:bg-amber-600">{t("common.bookNow")}</Button>
              </Link>
            </div>
            <div>
              <ImageLightbox
                src="/images/stargazing.jpg"
                alt="Stargazing"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold">{t("tentedCamp.bathroomsTitle")}</h3>
            <p className="mb-8 text-center text-lg text-gray-700">{t("tentedCamp.bathroomsSubtitle")}</p>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <p className="text-gray-700">
                  {t("tentedCamp.bathroomsDesc1")}
                </p>
                <p className="mt-4 text-gray-700">
                  {t("tentedCamp.bathroomsDesc2")}
                </p>
              </div>
              <div>
                <ImageLightbox
                  src="/images/bathroom.jpg"
                  alt="Bathroom Facilities"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold">{t("tentedCamp.foodTitle")}</h3>
            <p className="mb-8 text-center text-lg text-gray-700">{t("tentedCamp.foodSubtitle")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <ImageLightbox
                src="/images/food-1.jpg"
                alt="Traditional Food"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <ImageLightbox
                src="/images/food-2.jpg"
                alt="Traditional Food"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <ImageLightbox
                src="/images/food-3.jpg"
                alt="Traditional Food"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-700">
              {t("tentedCamp.foodDesc1")}
            </p>
            <p className="mt-4 text-gray-700">
              {t("tentedCamp.foodDesc2")}
            </p>
            <p className="mt-4 text-gray-700">
              {t("tentedCamp.foodDesc3")}
            </p>
            <div className="mt-8 text-center">
              <Link href="/book-now">
                <Button className="bg-amber-500 hover:bg-amber-600">{t("common.bookNow")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mx-auto max-w-lg">
            <BookingForm defaultTour="tented-camp" />
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">{t("tentedCamp.expertTeamTitle")}</h2>
          <h3 className="mb-8 text-4xl font-bold">{t("tentedCamp.expertTeamSubtitle")}</h3>
          <p className="mb-12 text-lg">{t("tentedCamp.expertTeamDescription")}</p>

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
              {t("common.chatOnWhatsApp")}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
