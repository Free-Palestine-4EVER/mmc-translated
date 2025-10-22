"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/translation-context"

export default function AboutUsPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SAbDYzwpUqXc44ZyVTPSpD5ssvNK1W.png"
          alt="Bedouin guides around campfire"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("aboutUs.hero.title")}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{t("aboutUs.hero.subtitle")}</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          <p className="text-lg">
            {t("aboutUs.history.paragraph1")}
          </p>
          <p className="text-lg">
            {t("aboutUs.history.paragraph2")}
          </p>
          <p className="text-lg">
            {t("aboutUs.history.paragraph3")}
          </p>
          <p className="text-lg">
            {t("aboutUs.history.paragraph4")}
          </p>
          <p className="text-lg">
            {t("aboutUs.history.paragraph5")}
          </p>
          <p className="text-lg">
            {t("aboutUs.history.paragraph6")}
          </p>
          <p className="text-lg font-medium">
            {t("aboutUs.history.paragraph7")}
          </p>
        </div>
      </section>

      {/* Meet Our Guides Section */}
      <section className="py-16 px-4 md:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("aboutUs.guides.title")}</h2>
            <p className="text-lg max-w-3xl mx-auto">
              {t("aboutUs.guides.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Guide 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=300&width=300" alt="Salem" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("aboutUs.guides.salem.name")}</h3>
                <p className="mb-4">
                  {t("aboutUs.guides.salem.description")}
                </p>
                <div className="text-sm text-amber-700 font-medium">
                  <p>{t("aboutUs.guides.salem.specialties")}</p>
                </div>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=300&width=300" alt="Omar" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("aboutUs.guides.omar.name")}</h3>
                <p className="mb-4">
                  {t("aboutUs.guides.omar.description")}
                </p>
                <div className="text-sm text-amber-700 font-medium">
                  <p>{t("aboutUs.guides.omar.specialties")}</p>
                </div>
              </div>
            </div>

            {/* Guide 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=300&width=300" alt="Ali-Alibaba" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("aboutUs.guides.ali.name")}</h3>
                <p className="mb-4">
                  {t("aboutUs.guides.ali.description")}
                </p>
                <div className="text-sm text-amber-700 font-medium">
                  <p>{t("aboutUs.guides.ali.specialties")}</p>
                </div>
              </div>
            </div>

            {/* Guide 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=300&width=300" alt="Abdullah" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("aboutUs.guides.abdullah.name")}</h3>
                <p className="mb-4">
                  {t("aboutUs.guides.abdullah.description")}
                </p>
                <div className="text-sm text-amber-700 font-medium">
                  <p>{t("aboutUs.guides.abdullah.specialties")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("aboutUs.values.title")}</h2>
            <p className="text-lg max-w-3xl mx-auto">{t("aboutUs.values.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("aboutUs.values.authentic.title")}</h3>
              <p>
                {t("aboutUs.values.authentic.description")}
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("aboutUs.values.community.title")}</h3>
              <p>
                {t("aboutUs.values.community.description")}
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("aboutUs.values.environment.title")}</h3>
              <p>
                {t("aboutUs.values.environment.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-amber-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("aboutUs.cta.title")}</h2>
          <p className="text-xl mb-8">
            {t("aboutUs.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact-us">
              <Button className="bg-white text-amber-500 hover:bg-gray-100 px-8 py-3 text-lg w-full sm:w-auto h-auto">
                {t("nav.bookNow")}
              </Button>
            </Link>
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg w-full sm:w-auto h-auto"
            >
              <a
                href="https://wa.me/962777424937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                {t("common.whatsappUs")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
