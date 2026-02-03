import SEO from "@/components/SEO";
import HeroSection from "@/components/landing/HeroSection";
import ClientsCarousel from "@/components/landing/ClientsCarousel";
import ProblemsSection from "@/components/landing/ProblemsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ResultsSection from "@/components/landing/ResultsSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <HeroSection />
      <ClientsCarousel />
      <ProblemsSection />
      <ServicesSection />
      <ResultsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}