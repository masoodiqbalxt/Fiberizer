import { Hero } from "@/components/home/hero";
import { TrustSection } from "@/components/home/trust-section";
import { Services } from "@/components/home/services";
import { ProductShowcase } from "@/components/home/product-showcase";
import { ContactSection } from "@/components/home/contact-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustSection />
      <Services />
      <ProductShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
}
