import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { TravelPackages } from "@/data/packages";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PackagesPage = () => {
  return (
    <>
      <PageHero
        title="Our Travel Packages"
        tagline="Explore our specially curated travel packages designed for unforgettable adventures in Kashmir, Ladakh, and beyond."
      />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12 md:my-24">
        {TravelPackages.map((travelPackage: ITravelPackage, index: number) => (
          <div key={index} className="border shadow rounded-xl overflow-hidden">
            <div className="w-full h-[250px] relative">
              <Image
                src={travelPackage?.featured_image}
                alt={travelPackage?.destination + " image"}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 w-full flex flex-col">
              <Link href={`/our-packages/${travelPackage?.slug}`}>
                <h3 className="text-lg font-medium">{travelPackage.title}</h3>
              </Link>
              <p className="text-sm text-text mt-4 line-clamp-2">
                {travelPackage?.short_desc}
              </p>
              <div className="py-2 border-t border-b my-4 flex items-center gap-4 text-text">
                <p className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" /> {travelPackage?.destination}
                </p>
                <p className="text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />{" "}
                  {travelPackage?.duration?.nights} N /{" "}
                  {travelPackage?.duration?.days} D
                </p>
              </div>
              <Link
                href={`/our-packages/${travelPackage?.slug}`}
                className="flex items-center gap-2 text-center justify-center py-2 px-4 text-sm font-medium border rounded-md shadow-sm transition-all duration-300 ease-in-out hover:bg-accent hover:text-white"
              >
                View Details <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default PackagesPage;
