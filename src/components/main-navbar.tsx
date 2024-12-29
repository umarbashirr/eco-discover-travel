"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import { Sidebar } from "./sidebar";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
      <div className="flex items-center w-full  h-24 sticky top-0 z-50 bg-white">
        <Container className="flex items-center justify-between">
          <Logo />
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link legacyBehavior passHref href={"/"}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link legacyBehavior passHref href={"/about-us"}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Packages</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem
                      title="Kashmir Packages"
                      href="/our-packages/kashmir-packages"
                    />
                    <ListItem
                      title="Ladakh Packages"
                      href="/our-packages/ladakh-packages"
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Hotels</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem
                      title="The Ladakh Avenue"
                      href="https://www.theladakhavenue.com"
                      target="_blank"
                    >
                      3 Star Premium Hotel
                    </ListItem>
                    <ListItem
                      title="Hotel Malik Residency"
                      href="https://hotelmalikresidencyleh.com"
                      target="_blank"
                    >
                      3 Star Deluxe Hotel
                    </ListItem>
                    <ListItem
                      title="Hotel Pahalgam View"
                      href="https://hotelpahalgamview.com"
                      target="_blank"
                    >
                      {" "}
                      3 Star Deluxe Central Heated Hotel
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link legacyBehavior passHref href={"/contact-us"}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <Button
              onClick={toggleSidebar}
              aria-label="Navigation Toggle Button"
              size={"icon"}
              variant="outline"
              className="lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="space-y-2">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
