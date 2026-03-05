import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { ReviewsSection } from "@/components/reviews-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <AboutSection />
      <ReviewsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
