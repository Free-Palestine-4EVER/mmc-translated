"use client"

import { useTranslation } from "@/lib/translation-context"

export function AnnouncementBar() {
  const { t } = useTranslation()

  const announcements = [
    t("announcement.wifi"),
    t("announcement.groupDiscount"),
    t("announcement.taxi"),
    t("announcement.hotAirBalloon"),
  ]

  // Join announcements with a black bullet point and more spacing
  const marqueeText = announcements.join(" 　•　 ")

  return (
    <div className="py-2 overflow-hidden" style={{ backgroundColor: 'rgb(251, 191, 36)' }}>
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="text-white font-medium">{marqueeText}</span>
          <span className="text-white font-medium">{marqueeText}</span>
        </div>
      </div>
    </div>
  )
}
