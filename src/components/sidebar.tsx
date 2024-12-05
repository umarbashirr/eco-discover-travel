"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { Logo } from "./logo";
import { Button } from "./ui/button";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  pathname: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  pathname,
}) => {
  useEffect(() => {
    if (isOpen) {
      toggleSidebar();
    }
  }, [pathname]);

  return (
    <div
      className={cn(
        "w-full h-full fixed top-0 left-0 bg-white duration-200 ease-linear transition-all overflow-hidden z-[99999]",
        isOpen ? "max-w-full" : "max-w-0"
      )}
    >
      <div className="p-4 flex items-center justify-between gap-4">
        <Logo />
        <Button
          onClick={toggleSidebar}
          aria-label="Navigation Toggle Button"
          variant="outline"
          size="icon"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>
      <nav className="flex flex-col gap-4 mt-4 px-2">
        <Link
          href="/"
          className={cn(
            "p-2 rounded whitespace-nowrap transition duration-300 ease-in-out font-medium",
            pathname === '/'
              ? "bg-primary text-white"
              : "bg-white hover:bg-gray-100 text-primary"
          )}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className={cn(
            "p-2 rounded whitespace-nowrap transition duration-300 ease-in-out font-medium",
            pathname === '/about-us'
              ? "bg-primary text-white"
              : "bg-white hover:bg-gray-100 text-primary"
          )}
        >
          About Us
        </Link>
        <button className={cn(
          "p-2 rounded whitespace-nowrap transition duration-300 ease-in-out font-medium text-left flex items-center justify-between peer",
        )} type="button"
        >Check Our Hotels <ChevronDown className="w-4 h-4" /></button>
        <div className="h-full max-h-0 overflow-hidden peer-hover:max-h-full hover:max-h-full -mt-4 duration-300 transition-all ease-in-out">
          <div className="flex flex-col gap-4 px-4">
            <Link href='#' className="p-2 rounded whitespace-nowrap transition duration-300 ease-in-out font-medium bg-white hover:bg-gray-100 text-primary">The Ladakh Avenue <span className="text-sm">coming soon...</span></Link>
            <Link href='https://hotelmalikresidencyleh.com' target="_blank" className="p-2 rounded whitespace-nowrap transition duration-300 ease-in-out font-medium bg-white hover:bg-gray-100 text-primary">Hotel Malik Residency</Link>
            <Link href='https://hotelpahalgamview.com' target="_blank" className="p-2 rounded whitespace-nowrap transition duration-300 ease-in-out font-medium bg-white hover:bg-gray-100 text-primary">Hotel Pahalgam View</Link>
          </div>
        </div>
        <Link
              href= '/our-packages/kashmir-packages'
              className={cn(
                "p-2 rounded whitespace-nowrap transition duration-300 ease-in-out font-medium",
                pathname === '/our-packages/kashmir-packages'
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-gray-100 text-primary"
              )}
            >
              Kashmir Packages
            </Link>
            <Link
              href='/our-packages/ladakh-packages'
              className={cn(
                "p-2 rounded whitespace-nowrap transition duration-300 ease-in-out font-medium",
                pathname === '/our-packages/ladakh-packages'
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-gray-100 text-primary"
              )}
            >
              Ladakh Packages
            </Link>
            <Link
              href="/contact-us"
              className={cn(
                "p-2 rounded whitespace-nowrap transition duration-300 ease-in-out font-medium",
                pathname === '/contact-us'
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-gray-100 text-primary"
              )}
            >
              Contact Us
            </Link>
      </nav>

    </div>
  );
};
