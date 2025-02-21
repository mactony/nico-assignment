"use client";

import { ChevronRight, LogOut, Menu, Settings, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

const navigationLinks = [
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
  const { data: session, update } = useSession();

  const pathname = usePathname();

  useEffect(() => {
    update(); // Force session refresh when Navbar mounts
  }, [update]);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

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
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex-row group transition-colors duration-150 ease-in-out gap-2 text-base text-[#151515] group hover:after:bg-[#69b894] relative inline-flex items-center rounded-sm py-1.5 font-medium after:absolute after:right-0 after:-bottom-[19px] after:left-0 after:z-50 after:h-1 after:w-full after:transition-all after:duration-75 after:ease-in-out after:content-[''] focus:outline-none"
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
              <nav className="ml-auto grid-flow-col items-center gap-5 xl:gap-6 hidden justify-end md:grid">
                {session ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="relative h-8 w-8 rounded-full"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={session.user?.image ?? ""}
                            alt={session.user?.name ?? ""}
                          />
                          <AvatarFallback>
                            {session.user?.name?.[0]?.toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      align="end"
                      forceMount
                    >
                      <div className="flex items-center justify-start gap-2 p-2">
                        <div className="flex flex-col space-y-1 leading-none">
                          {session.user?.name && (
                            <p className="font-medium">{session.user.name}</p>
                          )}
                          {session.user?.email && (
                            <p className="w-[200px] truncate text-sm text-muted-foreground">
                              {session.user.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        asChild
                        className="cursor-pointer hover:bg-accent"
                      >
                        <Link
                          href="/dashboard"
                          className="flex w-full items-center"
                        >
                          <User className="mr-2 h-4 w-4" />
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        asChild
                        className="cursor-pointer hover:bg-gray-100 transition-all"
                      >
                        <Link
                          href="/profile"
                          className="flex w-full items-center"
                        >
                          <Settings className="mr-2 h-4 w-4" />
                          Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="cursor-pointer hover:bg-accent"
                        onSelect={handleSignOut}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={`/login?redirectTo=${encodeURIComponent(pathname)}`}
                    className="flex-row items-center group transition-colors duration-150 ease-in-out gap-2 flex font-medium outline-none focus:outline-none whitespace-nowrap !text-nowrap rounded-sm text-color-action text-semibold header-secondary-cta-link !text-[#151515]"
                  >
                    Log in
                  </Link>
                )}
                <Link
                  href="/contact"
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
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-[#151515] hover:text-[#69b894]"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.text}
                      </Link>
                    ))}
                    {session ? (
                      <>
                        <Link
                          href="/dashboard"
                          className="text-lg font-medium text-[#151515] hover:text-[#69b894]"
                          onClick={() => setIsOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <Link
                          href="/profile"
                          className="text-lg font-medium text-[#151515] hover:text-[#69b894]"
                          onClick={() => setIsOpen(false)}
                        >
                          Profile
                        </Link>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-lg font-medium text-[#151515] hover:text-[#69b894]"
                          onClick={() => {
                            setIsOpen(false);
                            handleSignOut();
                          }}
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Log out
                        </Button>
                      </>
                    ) : (
                      <Link
                        href={`/login?redirectTo=${encodeURIComponent(
                          pathname
                        )}`}
                        className="text-lg font-medium text-[#151515] hover:text-[#69b894]"
                        onClick={() => setIsOpen(false)}
                      >
                        Log in
                      </Link>
                    )}
                    <Link
                      href="/contact"
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
