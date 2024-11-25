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
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

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
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map(
                (
                  { href, label }: { href: string; label: string },
                  index: number
                ) => (
                  <NavigationMenuItem key={index}>
                    <Link legacyBehavior passHref href={href}>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              aria-label="Navigation Toggle Button"
              className="bg-accent p-2 rounded shadow text-white lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Button variant="accent" asChild>
              <Link href="/contact-us">Book Now</Link>
            </Button>
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
