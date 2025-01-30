import { FAQ } from "@/components/general/faq";
import { HeroSection } from "@/components/general/hero-section";
import { Services } from "@/components/general/services";
import { Testimonials } from "@/components/general/testominials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Services />
      <Testimonials />
      <FAQ />
    </div>
  );
}
