import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { Routes } from "@/components/routes";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { ShipmentVisibility } from "@/components/shipment-visibility";
import { WhyCornerstone } from "@/components/why-cornerstone";
import { Business } from "@/components/business";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      <Navbar />
      <div className="flex-1">
        <div className="flex flex-col min-h-screen">
          <Hero />
          <TrustStrip />
        </div>
        <Routes />
        <ShipmentVisibility />
        <Services />
        <HowItWorks />
        <WhyCornerstone />
        <Business />
        <Faq />
        <Cta />
      </div>
      <Footer />
    </main>
  );
}
