import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export function SocialMediaLinks() {
  return (
    <div className="flex items-center space-x-4">
      <Link
        href="https://www.facebook.com/mohammedmutlakcamp"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        aria-label="Follow us on Facebook"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500 transition-transform transform group-hover:scale-110">
          <Image src="/images/traditional-camp.jpg" alt="Facebook" width={40} height={40} className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <Facebook className="w-5 h-5 text-white" />
          </div>
        </div>
      </Link>

      <Link
        href="https://www.instagram.com/mohammedmutlakcamp"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        aria-label="Follow us on Instagram"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500 transition-transform transform group-hover:scale-110">
          <Image src="/images/traditional-camp.jpg" alt="Instagram" width={40} height={40} className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <Instagram className="w-5 h-5 text-white" />
          </div>
        </div>
      </Link>
    </div>
  )
}
