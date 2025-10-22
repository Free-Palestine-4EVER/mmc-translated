"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/translation-context"

export default function UsefulInformationPage() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 text-center text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold md:text-5xl">{t("usefulInfo.title")}</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            {t("usefulInfo.subtitle")}
          </p>
        </div>
      </section>

      {/* About Jordan */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("usefulInfo.aboutJordanTitle")}</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {t("usefulInfo.aboutJordanDesc1")}
                </p>
                <p>
                  {t("usefulInfo.aboutJordanDesc2")}
                </p>
                <p>
                  {t("usefulInfo.aboutJordanDesc3")}
                </p>
                <p>
                  {t("usefulInfo.aboutJordanDesc4")}
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/jordan-map.jpg"
                alt="Map of Jordan"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Wadi Rum */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/wadi-rum-landscape.jpg"
                alt="Wadi Rum Landscape"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">{t("usefulInfo.aboutWadiRumTitle")}</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {t("usefulInfo.aboutWadiRumDesc1")}
                </p>
                <p>
                  {t("usefulInfo.aboutWadiRumDesc2")}
                </p>
                <p>
                  {t("usefulInfo.aboutWadiRumDesc3")}
                </p>
                <p>
                  {t("usefulInfo.aboutWadiRumDesc4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JETT Bus Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("usefulInfo.jettTitle")}</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {t("usefulInfo.jettDesc1")}
                </p>
                <p>
                  {t("usefulInfo.jettDesc2")}
                </p>
                <p>
                  {t("usefulInfo.jettDesc3")}
                </p>
                <p>
                  {t("usefulInfo.jettDesc4")}
                </p>
                <div className="mt-6">
                  <a href="https://www.jett.com.jo/en/schedule" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-amber-500 hover:bg-amber-600">{t("usefulInfo.jettButton")}</Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{t("usefulInfo.jettTipsTitle")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span>
                    <strong>{t("usefulInfo.jettTip1Title")}</strong> {t("usefulInfo.jettTip1Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span>
                    <strong>{t("usefulInfo.jettTip2Title")}</strong> {t("usefulInfo.jettTip2Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span>
                    <strong>{t("usefulInfo.jettTip3Title")}</strong> {t("usefulInfo.jettTip3Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span>
                    <strong>{t("usefulInfo.jettTip4Title")}</strong> {t("usefulInfo.jettTip4Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span>
                    <strong>{t("usefulInfo.jettTip5Title")}</strong> {t("usefulInfo.jettTip5Desc")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Climate & Weather */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("usefulInfo.climateTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{t("usefulInfo.springTitle")}</h3>
              <p className="text-gray-700 mb-4">
                {t("usefulInfo.springDesc")}
              </p>
              <div className="text-sm text-gray-600">
                <p>{t("usefulInfo.springClothing")}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{t("usefulInfo.summerTitle")}</h3>
              <p className="text-gray-700 mb-4">
                {t("usefulInfo.summerDesc")}
              </p>
              <div className="text-sm text-gray-600">
                <p>{t("usefulInfo.summerClothing")}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{t("usefulInfo.autumnTitle")}</h3>
              <p className="text-gray-700 mb-4">
                {t("usefulInfo.autumnDesc")}
              </p>
              <div className="text-sm text-gray-600">
                <p>{t("usefulInfo.autumnClothing")}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{t("usefulInfo.winterTitle")}</h3>
              <p className="text-gray-700 mb-4">
                {t("usefulInfo.winterDesc")}
              </p>
              <div className="text-sm text-gray-600">
                <p>{t("usefulInfo.winterClothing")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Etiquette */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("usefulInfo.etiquetteTitle")}</h2>
          <div className="max-w3xl mx-auto space-y-6 text-gray-700">
            <p>
              {t("usefulInfo.etiquetteIntro")}
            </p>

            <div>
              <h3 className="text-xl font-bold mb-2">{t("usefulInfo.dressCodeTitle")}</h3>
              <p>
                {t("usefulInfo.dressCodeDesc")}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">{t("usefulInfo.greetingsTitle")}</h3>
              <p>
                {t("usefulInfo.greetingsDesc")}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">{t("usefulInfo.photographyTitle")}</h3>
              <p>
                {t("usefulInfo.photographyDesc")}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">{t("usefulInfo.diningTitle")}</h3>
              <p>
                {t("usefulInfo.diningDesc")}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">{t("usefulInfo.ramadanTitle")}</h3>
              <p>
                {t("usefulInfo.ramadanDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("usefulInfo.travelTipsTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{t("usefulInfo.beforeYouGoTitle")}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>{t("usefulInfo.beforeTip1Title")}</strong> {t("usefulInfo.beforeTip1Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>{t("usefulInfo.beforeTip2Title")}</strong> {t("usefulInfo.beforeTip2Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>{t("usefulInfo.beforeTip3Title")}</strong> {t("usefulInfo.beforeTip3Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>{t("usefulInfo.beforeTip4Title")}</strong> {t("usefulInfo.beforeTip4Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>{t("usefulInfo.beforeTip5Title")}</strong> {t("usefulInfo.beforeTip5Desc")}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{t("usefulInfo.duringStayTitle")}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>{t("usefulInfo.duringTip1Title")}</strong> {t("usefulInfo.duringTip1Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>{t("usefulInfo.duringTip2Title")}</strong> {t("usefulInfo.duringTip2Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>{t("usefulInfo.duringTip3Title")}</strong> {t("usefulInfo.duringTip3Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>{t("usefulInfo.duringTip4Title")}</strong> {t("usefulInfo.duringTip4Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>{t("usefulInfo.duringTip5Title")}</strong> {t("usefulInfo.duringTip5Desc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>{t("usefulInfo.duringTip6Title")}</strong> {t("usefulInfo.duringTip6Desc")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting to Wadi Rum */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("usefulInfo.gettingToWadiRumTitle")}</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
            <p>
              {t("usefulInfo.gettingIntro")}
            </p>

            <div>
              <h3 className="text-xl font-bold mb-2">{t("usefulInfo.fromAqabaTitle")}</h3>
              <p>
                {t("usefulInfo.fromAqabaDesc")}
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t("usefulInfo.fromAqabaTip1")}</li>
                <li>{t("usefulInfo.fromAqabaTip2")}</li>
                <li>{t("usefulInfo.fromAqabaTip3")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">{t("usefulInfo.fromPetraTitle")}</h3>
              <p>{t("usefulInfo.fromPetraDesc")}</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t("usefulInfo.fromPetraTip1")}</li>
                <li>{t("usefulInfo.fromPetraTip2")}</li>
                <li>{t("usefulInfo.fromPetraTip3")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">{t("usefulInfo.fromAmmanTitle")}</h3>
              <p>{t("usefulInfo.fromAmmanDesc")}</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t("usefulInfo.fromAmmanTip1")}</li>
                <li>{t("usefulInfo.fromAmmanTip2")}</li>
                <li>{t("usefulInfo.fromAmmanTip3")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">{t("usefulInfo.rentalCarTitle")}</h3>
              <p>
                {t("usefulInfo.rentalCarDesc")}
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="font-semibold mb-4">{t("usefulInfo.needHelpTitle")}</p>
              <Link href="/contact-us">
                <Button className="bg-amber-500 hover:bg-amber-600">{t("usefulInfo.contactUsButton")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">{t("usefulInfo.ctaTitle")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t("usefulInfo.ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/desert-experiences">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3">{t("usefulInfo.exploreToursButton")}</Button>
            </Link>
            <Link href="/contact-us">
              <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3">{t("common.bookNow")}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
