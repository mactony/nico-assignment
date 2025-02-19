"use client";

import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const services = [
  {
    href: "/services",
    text: "Services",
  },
  {
    href: "/resources",
    text: "Resources",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/blog",
    text: "Blog",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-[#00000021] bg-white relative top-0 z-50 border-b lg:sticky">
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-8">
        <div className="grid py-5 md:py-4">
          <div className="flex items-center justify-between gap-6">
            <Link
              href="/"
              aria-label="Navigate to home page"
              className="flex-row items-center group transition-colors duration-150 ease-in-out gap-2 -m-0.5 flex-shrink-0 p-0.5 text-2xl font-semibold text-balance text-green-900"
            >
              Nicks Pro
            </Link>
            <div className="hidden w-full items-center gap-6 sm:flex">
              <nav className="hidden gap-1 lg:grid lg:grid-flow-col lg:gap-5 xl:gap-6">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex-row group transition-colors duration-150 ease-in-out gap-2 text-base text-[#151515] group hover:after:bg-[#69b894] relative inline-flex items-center rounded-sm py-1.5 font-medium after:absolute after:right-0 after:-bottom-[19px] after:left-0 after:z-50 after:h-1 after:w-full after:transition-all after:duration-75 after:ease-in-out after:content-[''] focus:outline-none"
                  >
                    {service.text}
                  </Link>
                ))}
              </nav>
              <nav className="ml-auto grid-flow-col items-center gap-5 xl:gap-6 hidden justify-end md:grid">
                <Link
                  href="/login"
                  className="flex-row items-center group transition-colors duration-150 ease-in-out gap-2 flex font-medium outline-none focus:outline-none whitespace-nowrap !text-nowrap rounded-sm text-color-action text-semibold header-secondary-cta-link !text-[#151515]"
                >
                  Log in
                </Link>
                <Link
                  href="/talk-to-us"
                  className="flex-row items-center group transition-colors duration-150 ease-in-out gap-1 flex font-semibold outline-none focus:outline-none whitespace-nowrap !text-nowrap rounded-sm bg-[#69b894] text-[#fff] py-2 px-4 text-base"
                >
                  Talk to Us
                  <span className="transition-all duration-150 ease-in-out group-hover:translate-x-0.5">
                    <ChevronRight size={16} />
                  </span>
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-3 justify-self-end sm:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden bg-transparent group"
                  >
                    <Menu className="group-hover:bg-neutral-50" size={18} />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-lg font-medium text-[#151515] hover:text-[#69b894]"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.text}
                      </Link>
                    ))}
                    <Link
                      href="/login"
                      className="text-lg font-medium text-[#151515] hover:text-[#69b894]"
                      onClick={() => setIsOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link
                      href="/talk-to-us"
                      className="flex items-center justify-center gap-1 bg-[#69b894] text-white py-2 px-4 rounded-sm text-lg font-semibold hover:bg-[#5ca883]"
                      onClick={() => setIsOpen(false)}
                    >
                      Talk to Us
                      <ChevronRight size={20} />
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
