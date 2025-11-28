import { GeoNavbar } from "@/components/landing/geo-navbar"
import { GeoHero } from "@/components/landing/geo-hero"
import { GeoFeatures } from "@/components/landing/geo-features"
import { GeoTestimonials } from "@/components/landing/geo-testimonials"
import { GeoPricing } from "@/components/landing/geo-pricing"
import { GeoFooter } from "@/components/landing/geo-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <GeoNavbar />
      <GeoHero />
      <GeoFeatures />
      <GeoTestimonials />
      <GeoPricing />
      <GeoFooter />
    </main>
  )
}
