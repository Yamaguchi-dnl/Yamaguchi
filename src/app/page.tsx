import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ContactSection from "@/components/sections/contact-section";
import ParticlesBackground from "@/components/particles-background";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-transparent">
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <PortfolioSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
