import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface TourCardProps {
  title: string
  slug: string
  description: string
  price: number
  duration: string
  image: string
}

export function TourCard({ title, slug, description, price, duration, image }: TourCardProps) {
  const DISCOUNT_PERCENTAGE = 0.15 // 15% discount
  const isHotAirBalloon = slug === 'hot-air-balloon'
  const discountedPrice = isHotAirBalloon ? price : price * (1 - DISCOUNT_PERCENTAGE)

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl card-hover">
      <div className="relative h-48 img-hover-zoom">
        <div className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
          {duration}
        </div>
        {!isHotAirBalloon && (
          <div className="absolute right-2 top-2 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
            15% OFF
          </div>
        )}
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} - Wadi Rum desert experience tour showing the beautiful landscape`}
          fill
          className="object-cover transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <div className="flex items-center justify-between">
          {isHotAirBalloon ? (
            <div className="text-lg font-bold text-amber-600">
              From <span>{price} JOD</span>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="text-sm text-gray-500 line-through">
                {price} JOD
              </div>
              <div className="text-lg font-bold text-orange-600">
                From <span>{discountedPrice.toFixed(2)} JOD</span>
              </div>
            </div>
          )}
          <Link href={`/desert-experiences/${slug}`}>
            <Button size="sm" className="bg-amber-500 hover:bg-amber-600 btn-hover-effect">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
