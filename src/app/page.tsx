import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/tech-marquee";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Showcase } from "@/components/showcase";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <Services />
        <Process />
        <Showcase />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
