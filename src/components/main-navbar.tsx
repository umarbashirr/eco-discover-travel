"use client";

import { routes } from "@/data/routes";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import { Sidebar } from "./sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex items-center w-full  h-20 sticky top-0 z-50 bg-white">
        <Container className="flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-4">
            {routes.map(
              (
                { href, label }: { href: string; label: string },
                index: number
              ) => (
                <Link
                  key={index}
                  href={href}
                  className={cn(
                    "text-base font-medium transition duration-300 ease-in-out",
                    href === pathname
                      ? "text-accent"
                      : "text-primary hover:text-accent"
                  )}
                >
                  {label}
                </Link>
              )
            )}
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              aria-label="Navigation Toggle Button"
              className="bg-accent p-2 rounded shadow text-white lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button className="bg-accent text-white rounded-md py-2 px-4 shadow-sm hover:bg-accent/90 transition-all duration-300 ease-in-out text-sm font-medium">
              Book Now
            </button>
          </div>
        </Container>
      </div>
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        pathname={pathname}
      />
    </>
  );
};
