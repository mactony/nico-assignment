import CTA from "@/components/general/CTA";
import { FAQ } from "@/components/general/faq";
import HeroSection from "@/components/general/hero-section";
import SellPoint from "@/components/general/SellPoint";
import { Services } from "@/components/general/services";
import UniversityMarquee from "@/components/general/UniversityMarquee";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <UniversityMarquee />
      <Services />
      <CTA />
      <SellPoint />
      <FAQ />
      {/*
      <Testimonials />
      */}
    </div>
  );
}
