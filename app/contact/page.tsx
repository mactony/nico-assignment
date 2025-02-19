import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section className="relative bg-[#12362e]">
        <div className="max-w-[1440px] mx-auto relative border-[#ffffff21] xl:border-x">
          <div className="relative bg-none">
            <div className="relative max-w-[1440px] mx-auto px-5 md:px-6 lg:px-12 pb-12 md:pb-16 lg:pb-20 pt-12 md:pt-16 lg:pt-20">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 gap-x-6 md:grid-cols-4 lg:grid-cols-12 lg:gap-x-12 items-center gap-y-12">
                  <div className="col-span-2 md:col-span-4 lg:col-span-6">
                    <div className="grid grid-flow-row gap-y-8 justify-items-center text-center lg:justify-items-start lg:text-left">
                      <div className="grid grid-flow-row gap-y-5">
                        <div className="grid grid-flow-row gap-y-2">
                          <p className="text-[#ffffff85] uppercase text-sm">
                            Contact Us
                          </p>
                          <h1 className="text-4xl text-white font-semibold">
                            Get in touch with professor
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative col-span-2 md:col-span-4 lg:col-span-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="relative max-w-[1440px] mx-auto px-5 md:px-6 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 border-[#00000021] xl:border-x">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-flow-row gap-y-10">
              <div className="grid grid-cols-2 gap-x-6 md:grid-cols-4 lg:grid-cols-12 lg:gap-x-12 gap-y-6 lg:gap-y-12">
                <div className="col-span-2 lg:col-span-3">
                  <div className="relative grid max-w-2xl content-start gap-4 grid-flow-row">
                    <svg
                      className="flex-shrink-0 text-[#000c]"
                      height="64px"
                      role="img"
                      fill="currentColor"
                      viewBox="0 0 48 48"
                      width="64px"
                    >
                      <g fill-rule="nonzero">
                        <path
                          d="m35.502 43.968-.538-.935c6.782-3.915 10.996-11.209 10.996-19.032 0-12.109-9.85-21.96-21.96-21.96C11.89 2.04 2.04 11.891 2.04 24c0 7.824 4.215 15.117 10.998 19.032l-.54.935C5.38 39.859.96 32.209.96 24 .96 11.295 11.295.96 24 .96 36.705.96 47.04 11.295 47.04 24c0 8.21-4.42 15.86-11.538 19.968Zm-10.97-7.976h-1.08c0-5.765 2.735-7.801 5.378-9.772 2.399-1.785 4.662-3.473 4.662-8.115 0-4.962-3.985-8.564-9.478-8.564-5.228 0-9.48 4.274-9.48 9.526h-1.079c0-5.848 4.737-10.606 10.56-10.606 6.119 0 10.56 4.056 10.56 9.644 0 5.184-2.594 7.114-5.097 8.98-2.544 1.895-4.946 3.684-4.946 8.907ZM24 42.75a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 24 42.75"
                          role="presentation"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                    <div className="grid grid-flow-row gap-y-2">
                      <div className="grid grid-flow-row">
                        <div className="grid grid-flow-row gap-y-2">
                          <h2 className="text-[#151515] font-semibold">
                            Help & Support
                          </h2>
                        </div>
                        <div className="grid gap-y-3 text-[#000c]">
                          <p className="text-pretty max-w-2xl">
                            Get instant help from professor
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-6">
                        <Link
                          href="/services"
                          className="flex-row items-center group transition-colors duration-150 ease-in-out gap-1 flex font-semibold outline-none focus:outline-none whitespace-nowrap !text-nowrap rounded-sm text-[#0071e3] text-base"
                        >
                          Go to Services
                          <span className="transition-all duration-150 ease-in-out group-hover:translate-x-0.5">
                            <ChevronRight size={20} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 lg:col-span-3">
                  <div className="relative grid max-w-2xl content-start gap-4 grid-flow-row">
                    <svg
                      className="flex-shrink-0 text-[#000c]"
                      height="64px"
                      role="img"
                      fill="currentColor"
                      viewBox="0 0 48 48"
                      width="64px"
                    >
                      <g fill-rule="nonzero">
                        <path
                          d="M0.960022 5.46002H41.04V17.46H47.04V37.5C47.04 39.4551 45.4551 41.04 43.5 41.04H4.50002C2.54493 41.04 0.960022 39.4551 0.960022 37.5V5.46002ZM41.04 37.5V18.54H45.96V37.5C45.96 38.8586 44.8586 39.96 43.5 39.96C42.1414 39.96 41.04 38.8586 41.04 37.5ZM39.96 6.54002V17.46V37.5C39.96 38.4558 40.3388 39.3231 40.9544 39.96H4.50002C3.1414 39.96 2.04002 38.8586 2.04002 37.5V6.54002H39.96ZM36.54 9.96002H5.46002V17.04H36.54V9.96002ZM6.54002 15.96V11.04H35.46V15.96H6.54002ZM19.5 23.04H5.45998L5.46 21.96H19.5V23.04ZM22.5 23.04H36.54V21.96H22.5V23.04ZM19.5 29.04H5.46V27.96H19.5V29.04ZM22.5 29.04H36.54V27.96H22.5V29.04ZM19.5 35.04H5.46V33.96H19.5V35.04ZM22.5 35.04H36.54V33.96H22.5V35.04Z"
                          role="presentation"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                    <div className="grid grid-flow-row gap-y-2">
                      <div className="grid grid-flow-row">
                        <div className="grid grid-flow-row gap-y-2">
                          <h2 className="text-[#151515] font-semibold">
                            Sample works
                          </h2>
                        </div>
                        <div className="grid gap-y-3 text-[#000c]">
                          <p className="text-pretty max-w-2xl">
                            View Sample works and our professionalism
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-6">
                        <Link
                          href="/services"
                          className="flex-row items-center group transition-colors duration-150 ease-in-out gap-1 flex font-semibold outline-none focus:outline-none whitespace-nowrap !text-nowrap rounded-sm text-[#0071e3] text-base"
                        >
                          Sample works
                          <span className="transition-all duration-150 ease-in-out group-hover:translate-x-0.5">
                            <ChevronRight size={20} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="relative max-w-[1440px] mx-auto px-5 md:px-6 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 border-[#00000021] xl:border-x">
          <div className="max-w-7xl mx-auto">
            <div className="text-[#000c] bg-[#c4e5d1] flex w-full flex-col items-start gap-6 md:flex-row md:items-center p-6">
              <div className="flex w-full flex-col md:flex-row">
                <div className="grid grid-flow-row w-full md:items-center gap-3">
                  <h3 className="text-[#151515] font-medium text-3xl">
                    Contact us
                  </h3>
                  <div className="text-base text-[#000c] grid gap-y-3">
                    <p className="text-pretty max-w-2xl">
                      Schedule time to talk with us.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="flex-row items-center group transition-colors duration-150 ease-in-out gap-2 flex font-semibold outline-none focus:outline-none whitespace-nowrap !text-nowrap rounded-sm bg-[#222220] text-white py-2 px-4 text-base md:ml-auto"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
