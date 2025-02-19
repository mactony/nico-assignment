import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative bg-white">
      <section className="relative max-w-[1440px] mx-auto px-5 md:px-6 lg:px-12 pb-6 md:pb-8 lg:pb-10 pt-6 md:pt-8 lg:pt-10 border-[#00000021] xl:border-x ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-x-6 md:grid-cols-4 lg:grid-cols-12 lg:gap-x-12 items-center gap-y-10 relative overflow-hidden bg-[#12362e] rounded-sm">
            <div className="z-10 col-span-2 p-10 md:col-span-4 lg:col-span-12 lg:p-12">
              <div className="grid grid-flow-row gap-y-8 justify-items-center text-center">
                <div className="grid grid-flow-row gap-y-5">
                  <div className="grid grid-flow-row gap-y-2">
                    <h2 className="text-white text-4xl font-semibold">
                      Have Urgent Course Work or Assignments?
                    </h2>
                  </div>
                  <div className="grid gap-y-3 text-[#fffc] text-[18px]">
                    <p className="text-pretty max-w-2xl mx-auto">
                      Reach us for expertise help and fast delivery meeting
                      deadline.
                    </p>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
