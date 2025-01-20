import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-primary to-primary-foreground text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Nick&apos;s Tutoring Hub
            </h1>
            <p className="text-xl mb-8">
              Your one-stop solution for academic excellence
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get Started
            </Button>
          </div>
          <div className="md:w-1/2 flex flex-col items-center">
            <Image
              src="/assets/prof.jpg"
              alt="Nick's profile"
              width={200}
              height={250}
              className="rounded-full mb-4"
            />
            <p className="text-center max-w-md">
              With over 10 years of experience in academic tutoring, Nick
              specializes in dissertation writing, online classes, and
              comprehensive academic support. Let&apos;s unlock your full
              potential together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
