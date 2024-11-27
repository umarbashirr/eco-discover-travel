import { otherRoutes, routes } from "@/data/routes";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { Container } from "./container";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-24 pb-12 bg-primary">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10">
          <div className="w-full md:max-w-[60%]">
            <Link href="/" className="text-xl font-bold text-white">
              Eco Discover Travel
            </Link>
            <p className="text-gray-300 text-sm mt-4 leading-loose">
              We offer travel packages to Kashmir and Ladakh, focusing on
              providing a memorable experience for every traveler. Our goal is
              to make your trip enjoyable with well-planned itineraries and
              reliable service.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Link href="/">
                <Facebook className="w-6 h-6 text-gray-300" />
              </Link>
              <Link href="/">
                <Instagram className="w-6 h-6 text-gray-300" />
              </Link>
              <Link href="/">
                <Youtube className="w-6 h-6 text-gray-300" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-4">
              {routes.map(
                (
                  { label, href }: { label: string; href: string },
                  index: number
                ) => (
                  <Link
                    key={index}
                    href={href}
                    className="font-medium text-sm text-white"
                  >
                    {label}
                  </Link>
                )
              )}
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Other Links
            </h3>
            <nav className="flex flex-col gap-4">
              {otherRoutes.map(
                (
                  { label, href }: { label: string; href: string },
                  index: number
                ) => (
                  <Link
                    key={index}
                    href={href}
                    className="font-medium text-sm text-white"
                  >
                    {label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </Container>
        <Separator orientation="horizontal" className="my-6" />
        <Container className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-4">
          <p className="text-sm text-white">
            Copyrighted &copy; {new Date().getFullYear()} by Eco Discover
            Travel. All Rights Reserved
          </p>
          <p className="text-sm text-white">
            Design & Developed by{" "}
            <Link
              className="text-indigo-500 font-medium"
              href="https://www.cooltechdesign.com"
              target="_blank"
            >
              Cool Tech Design
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
};
