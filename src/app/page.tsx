import CtaSection from "@/components/cta-section";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import SecuritySection from "@/components/security-section";
import StepsSection from "@/components/steps-section";
import TestimonialsSection from "@/components/testimonials-section";



export default function LandingPage() {
  return (
    <main className="">
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <TestimonialsSection />
      <SecuritySection />
      <CtaSection />
    </main>
  )
}
