import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#12362e] relative">
      <div className="max-w-[1440px] border-[#ffffff21] relative mx-auto xl:border-x">
        <div className="relative bg-none">
          <div className="relative max-w-[1440px] mx-auto px-5 md:px-6 lg:px-12 pb-6 md:pb-8 lg:pb-10 pt-6 md:pt-8 lg:pt-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-x-6 md:grid-cols-4 lg:grid-cols-12 lg:gap-x-12 items-center gap-y-12">
                <div className="col-span-2 md:col-span-4 lg:col-span-6">
                  <div className="grid grid-flow-row gap-y-8 justify-items-center text-center lg:justify-items-start lg:text-left">
                    <div className="grid grid-flow-row gap-y-5">
                      <div className="grid grid-flow-row gap-y-2">
                        <div className="uppercase text-[#ffffff85] text-[12px]">
                          Why Us
                        </div>
                        <h1 className="not-[:is(.text-balance,.text-wrap)]:text-pretty font-semibold text-white text-2xl lg:text-4xl text-balance">
                          Nick&apos;s Tutoring Hub
                        </h1>
                      </div>
                      <div className="grid gap-y-3 text-[#fffc] text-[18px]">
                        Expert academic writing services including
                        dissertations, resumes, editing, and proofreading.
                      </div>
                      {/* Quality academic support for students worldwide. */}
                    </div>
                    <div className="flex flex-wrap gap-6">
                      <Link
                        href="/register"
                        className=" flex-row items-center group transition-colors duration-150 ease-in-out gap-1 flex font-semibold outline-none focus:outline-none whitespace-nowrap !text-nowrap rounded-sm bg-[#69b894] text-[#222220] py-2 px-4 text-base"
                      >
                        Talk to Us
                        <span className="transition-all duration-150 ease-in-out group-hover:translate-x-0.5">
                          <ChevronRight size={16} />
                        </span>
                      </Link>
                      <Link
                        href="/register"
                        className=" flex-row items-center group transition-colors duration-150 ease-in-out gap-1 flex font-semibold outline-none focus:outline-none whitespace-nowrap !text-nowrap rounded-sm border border-[#ffffff4d] text-[#69b894] py-2 px-4 text-base"
                      >
                        See Samples
                        <span className="transition-all duration-150 ease-in-out group-hover:translate-x-0.5">
                          <ChevronRight size={16} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 relative md:col-span-4 lg:col-span-6">
                  <figure className="grid grid-flow-row gap-4 relative z-10">
                    <div className="relative">
                      <img
                        width={100}
                        height={100}
                        src={"/hero-1.png"}
                        alt="Hero"
                        className="w-full h-full object-cover rounded-md grayscale-80"
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
