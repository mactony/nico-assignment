"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Nick&apos;s Tutoring Hub
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="#about"
            className="text-muted-foreground hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-muted-foreground hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="#reading-lists"
            className="text-muted-foreground hover:text-primary"
          >
            Reading Lists
          </Link>
          <Link
            href="#faq"
            className="text-muted-foreground hover:text-primary"
          >
            FAQ
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button variant="outline">Sign In</Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link
                href="#about"
                className="text-muted-foreground hover:text-primary"
                onClick={closeSheet}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-muted-foreground hover:text-primary"
                onClick={closeSheet}
              >
                Services
              </Link>
              <Link
                href="#reading-lists"
                className="text-muted-foreground hover:text-primary"
                onClick={closeSheet}
              >
                Reading Lists
              </Link>
              <Link
                href="#faq"
                className="text-muted-foreground hover:text-primary"
                onClick={closeSheet}
              >
                FAQ
              </Link>
              <Button variant="outline" className="w-full" onClick={closeSheet}>
                Sign In
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
