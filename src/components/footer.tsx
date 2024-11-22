import { otherRoutes, routes } from "@/data/routes";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-24 pb-12 bg-primary">
        <Container className="  grid grid-cols-[2fr_1fr_1fr] gap-10">
          <div className="max-w-[60%]">
            <Link href="/">
              <Image
                src="/logo-white.svg"
                alt="Eco Discover Travel Logo"
                width={173}
                height={36}
              />
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
      </div>
    </footer>
  );
};
