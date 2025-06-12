"use client"

import { Hero } from "@/components/Hero"
import { WhySection } from "@/components/WhySection"
import { PillarsSection } from "@/components/PilarsSection"
import { UseCasesTable } from "@/components/UseCasesTable"
import { PricingSection } from "@/components/PricingSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { FAQSection } from "@/components/FAQSection"
import { ContactSection } from "@/components/ContactSection"
import { AdditionalOptionsSection } from "@/components/AdditionalOptionsSection"
import { Footer } from "@/components/Footer"
import { StickyButton } from "@/components/StickyButton"

export default function Home() {
  console.log("Home page rendered")

  return (
    <main className="min-h-screen">
      <Hero />
      <WhySection />
      <PillarsSection />
      <UseCasesTable />
      <PricingSection />
      <BenefitsSection />
      <FAQSection />
      <ContactSection />
      <AdditionalOptionsSection />
      <Footer />
      <StickyButton />
    </main>
  )
}
