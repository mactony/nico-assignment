import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import ReadingLists from "@/components/ReadingLists";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ReadingLists />
      {/* <Contact /> */}
      <FAQ />
    </div>
  );
}
